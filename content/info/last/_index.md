+++
title = "Last"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



## Éléments de correction du TP 13


---


{{%section%}}

### k-voisins

---

```python
def KNN_interp(x: float, k: int, Pts: list) -> float:
    """
    préconditions : Pts est une liste de tuples contenant les coordonnées (x,y) des points d'entraînement
    postcondition : la fonction retourne la moyenne des ordonnées des k points dont l'abscisse est la plus proche de x
    """
    Nv_Pts = []
    for pt in Pts :
        Nv_Pts.append((abs(pt[0]-x),pt[1]))
    y = 0
    Nv_Pts.sort()
    for pt in Nv_Pts[:k] :
        y += pt[1]
    y /= k
    return y
```


---

```python
def dist(x: list, Pts: list) -> list:
    """
    préconditions : x contient les coordonnées d'un point
                    Pts est une liste de tuples ou chaque tuple contient les coordonnées d'un point
                    tous les points doivent avoir le même nombre de coordonnées
    postcondition : la fonction doit retourner la liste des distances entre le points x et chacun des points de la liste Pts.
    """
    n = len(x)
    for pt in Pts :
        assert n == len(pt), "Les points n'ont pas tous le même nombre de coordonnées !"
    L = []
    for pt in Pts :
        d = 0
        for i in range(n) :
            d += (pt[i]-x[i])**2
        d = d**0.5
        L.append(d)
    return L
```

---

```python
def lignetomatrice(liste64: list) -> list:
    """
    posctconditions : la liste retournée doit être de dimension 2 et de format 8*8
    """
    mat = []
    for j in range(64) :
        if j%8 == 0 :
            mat.append([])
        mat[-1].append(liste64[j])
    return mat
```

---

```python
def lignetomatrice(liste64: list) -> list:
    """
    posctconditions : la liste retournée doit être de dimension 2 et de format 8*8
    """
    mat = []
    for j in range(64) :
        if j%8 == 0 :
            mat.append([])
        mat[-1].append(liste64[j])
    return mat
```

---

```python
from scipy import stats

def KNN_class(X: list, k: int, Appr: list, Etiq: list) -> int:
    """
    préconditions :  X est l'image dont on veut déterminer l'étiquette
                     Appr est l'ensemble des données d'apprentissage, c'est une liste de listes,
                     chacune de ces liste correspond à une image
                     Etiq est une liste d'entiers correspondant aux étiquettes de chaque image.
    postconditions : la fonction doit retourner l'étiquette la plus fréquente (mode) parmi les k images les plus proches
    """
    ### BEGIN SOLUTION
    L = dist(X,Appr)
    LplusEtiq = []
    for i in range(len(L)) :
        LplusEtiq.append((L[i],Etiq[i]))
    LplusEtiq.sort()
    EtiqFin = []
    for e in LplusEtiq[:k] :
        EtiqFin.append(e[1])
    return stats.mode(EtiqFin).mode[0]
    # le module statistics a un mode plus simple, mais avant python 3.8, il lève une erreur si deux modes sont possibles
    # Or Colab fonctionne encore avec python 3.7
```

---


```python
# VP : chiffres prédits comme 3 et qui sont des 3
VP = M[3][3]
# FP : chiffre qui sont prédits comme des 3 mais qui n'en sont pas
FP = sum([M[i][3] for i in range(len(M)) if i != 3])
# VN : chiffres prédits comme autre chose que des 3 et qui sont bien autre chose
VN = sum([sum([M[i][j] for j in range(len(M)) if j != 3]) for i in range(len(M)) if i!= 3]) 
# FN : chiffres qui sont prédits comme autre chose que des 3 mais qui en sont
FN = sum([sum([M[i][j] for j in range(len(M)) if j != 3]) for i in range(len(M)) if i== 3])

Mc3 = [[VP,FN],[FP,VN]]
```

{{%/section%}}

---

{{%section%}}

### k-moyenne

---


```python
def attribution(k: int, data: list, Dist: list) -> list:
    """
    préconditions :  Dist est une liste à deux dimensions contenant k sous-listes
                     chaque sous-liste contient les distances de chaque point de data à un des centres
                     Une sous-liste correspond à un centre
    postconditions : la fonction doit retourner (sous forme de liste) le numéro de cluster (de 0 à k-1) associé à chaque point de data
                     Si le premier point appartient au cluster 1, le deuxième au cluster 3, le troisème au cluster 0,
                     la liste Clusters commencera ainsi [1,3,0,...]
    """
    Cluster = []
    n = len(data)
    for m in range(n) :
        imin = 0
        mini = Dist[0][m]
        for i in range(1,k) :
            if Dist[i][m] < mini :
                mini = Dist[i][m]
                imin = i
        Cluster.append(imin)
    return Cluster
```

---

```python
def deplacement(k: int, Clusters: list, Centres: list, data: list) -> None:
    """
    préconditions:   Clusters est une liste du numéro de cluster associé au point à la même position dans data
                     Centres doit être mutable
    postconditions : en sortie, les positions des centres sont mis à jour 
                     et correspondent aux barycentres des points qui leur sont attribués
    """
    dim = len(data[0])
    DataCluster = []
    n = len(data)
    for i in range(k) :
        DataCluster.append([])
    for i in range(n) :
        DataCluster[Clusters[i]].append(data[i])
    for i in range(k) :
        lcluster = len(DataCluster[i])
        if lcluster != 0 :
            for l in range(dim) :
                moy = 0
                for j in range(lcluster) :
                    moy += DataCluster[i][j][l]
                moy /= lcluster
                Centres[i][l] = moy
```

---

```python
k = 8
clusters,centres = kmoyennes(k,image_1D)
for i in range(k) :
    for j in range(3) :
        centres[i][j] = int(centres[i][j])
for i in range(len(image_1D)) :
    image_1D[i] = centres[clusters[i]]
image_2D_seg4 = []
i1D = 0
for i in range(64) :
    image_2D_seg4.append([])
    for j in range(64) :
        image_2D_seg4[i].append(image_1D[i1D])
        i1D += 1
```


{{%/section%}}

---

{{%section%}}

### Graphes

---

Test graphe biparti :

revient à tester la présence de cycle impair :
- s'il y en a au moins 1 $\rightarrow$ pas biparti
- sinon $\rightarrow$ biparti

---

Pourquoi ?

(voir cours pour démo)

Comment ?
- s'il y a un cycle impair, il y a forcément un sommet ayant la même distance que son prédécesseur.
- sinon, cela n'arrive pas.


---

```python
from collections import deque

def testBipartite(G,depart) :
    """
    precondition :   le graphe G doit être non orienté
    postconditions : le dictionnaire Vus dit si un sommet a été exploré ou non
                     le dictionnaire Distance donne la distance de chaque sommet ajouté par rapport au sommet de départ
                     la fonction retourne Vrai si on tombe sur un sommet déjà exploré 
                     dont la distance au sommet de départ est la même que celle de son prédécesseur
                     et Faux si aucun tel cas n'est rencontré.
    """
    Vus = {s : False for s in G}
    Distance = {s : 0 for s in G}
    file = deque()
    file.append(depart)
    while file :
        sommet = file.popleft()
        if not Vus[sommet] :
            Vus[sommet] = True
            for s in G[sommet] :
                if Vus[s] :
                    if Distance[s] == Distance[sommet] :
                        return False
                Distance[s] = Distance[sommet] + 1
                file.append(s)
    return True
```

---


```python
def inverseGraphe(G: dict) -> dict:
    """
    précondition : G est la liste d'adjacence (sous forme de dictionnaire) d'un graphe orienté
    """
    inv = {s:[] for s in G}
    for pred in G :
        for succ in G[pred] :
            inv[succ].append(pred)
    return inv
```

{{%/section%}}



---

### Les jeux

[Notebook](https://colab.research.google.com/drive/1d6AR2SMrN2tmnmd_1bdQCBkrcUK22bL2?usp=sharing)



---

### Sac-à-dos


[Notebook](https://colab.research.google.com/drive/1tEKgcwUvv6mA_LXZS0S9iNB2a4bWVU_R?usp=sharing)




---

{{%section%}}

### Remarques


---

Que donnent ces deux codes ?

```python
L = [0 for i in range(5)]

for i in range(len(L)):
	print(i)
	L.pop()

i = 0
while i < len(L):
	print(i)
	L.pop()
	i += 1
```

---

Le bug Sébastien

```python
from random import shuffle
def chambouletout():
	undostres = "123"
	L = [(i+1,undostres[i]) for i in range(len(undostres))]
	shuffle(L)
	indices = [e[0] for e in L]
	chiffres = [e[1] for e in L]
	return indices,chiffres
```

```python
Ind = chambouletout()[0]
Chi = chambouletout()[1]
```

`[3, 2, 1]`<br>
`['1', '3', '2']`

---


Qu'aurait-il dû écrire ?

---

```python
Ind,Chi = chambouletout()
```
`[1, 3, 2]`<br>
`['1', '3', '2']`

---

{{< slide  background-image="/bugseb.png" background-size="contain" background-transition="concave">}}

---

Le pouvoir de la récursivité.

Comme elle délègue les tâches aux appels récursifs, il n'y a pas plus pratique pour explorer un ensemble de combinaisons (un arbre) ou pour construire le graphe d'un jeu comme dans le TP.

---

{{< slide  background-image="/spiderman.png" background-size="contain" background-transition="concave">}}

<br><br><br>
Mais un grand pouvoir implique<br>de grandes responsabilités.

<br>

💀R.I.P. le repo de Pap💀


{{%/section%}}


---

### Dernier petit exercice

Construire une fonction `plusGrandeMoyenne`.

[Lien vers notebook](https://colab.research.google.com/drive/1qpvNPaLas0ECSvPVbfNAwzYzFbF4bLMD?usp=sharing)

---

[Retour site](https://info-tsi-vieljeux.github.io/semestre_3/tp13/)