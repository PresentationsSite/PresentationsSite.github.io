+++
title = "Défis"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
theme = "black"
+++



## Petits défis algorithmiques

---

{{%youtube -73jokmqmd0%}}

---

{{%section%}}

<a href="https://app.coderpad.io/sandbox?question_id=226378"><image src="/defiimage.png" style="width:90%;"></a>

---

{{< slide  background-image="/dessdefmat.png" background-size="40%" background-transition="concave">}}


---

Comment faire pour réussir<br>cette rotation de 90° en place ?

Remarque : **en place** ne veut pas dire<br>qu'on ne peut pas créer de variables !<br>Tant que leur nombre est fixe,<br>cela ne change pas la **complexité en espace**.

---

Une solution possible :

```python
def rotate_in_place(matrix):
    n = len(matrix)
    for r in range(n//2):
        for c in range(r,n-1-r):
            hg = matrix[r][c]
            hd = matrix[c][n-r-1]
            bd = matrix[n-r-1][n-c-1]
            bg = matrix[n-c-1][r]
            matrix[c][n-r-1] = hg
            matrix[n-r-1][n-c-1] = hd
            matrix[n-c-1][r] = bd
            matrix[r][c] = bg
```

{{%/section%}}

---

{{%section%}}

<a href="https://app.coderpad.io/sandbox?question_id=230552&utm_campaign=Tiny+Interviews&utm_source=twitter&utm_medium=mathishammel"><image src="/defizeros.png"></a>


---

Pour atteindre le niveau "advanced" :

```python
def solution(nums):
    Sanszeros = [pazero for pazero in nums if pazero] 
    return Sanszeros + (len(nums)-len(Sanszeros))*[0]
```

---

Pour "legend", il faut réussir à travailler **en place** :

```python
def solution(nums):
    n = len(nums)
    iav, iap = 0, 0
    while iap<n:
        if nums[iap]:
            nums[iap],nums[iav] = nums[iav],nums[iap]
            iap += 1
            iav += 1
        else:
            while iap<n and nums[iap]==0:
                iap += 1
    return nums
```

{{%/section%}}

---

{{%section%}}

<a href="https://app.coderpad.io/sandbox?question_id=225822&utm_campaign=Tiny+Interviews&utm_source=twitter&utm_medium=mathishammel"><image src="/defisql.png" style="width:40%;"></a>

Précision pour 2<sup>e</sup> question :<br>le challenge a été lancé le 20 septembre 2022.

---

Solutions possibles :

1. nombre de submissions par langage

```sql
SELECT language, COUNT(problem_id) AS lang_count
FROM submissions
GROUP BY language;
```

---

2. Joueurs de 25 ans

```sql
SELECT nickname 
FROM players
WHERE birth < "1997-09-20" AND birth >= "1996-09-20";
```

---

3. Les 10 joueurs ayant présenté<br>le plus de problèmes.

```sql
SELECT nickname, COUNT(problem_id) AS problem_attempted
FROM (SELECT DISTINCT user_id, problem_id FROM submissions) AS pbunique
JOIN players ON pbunique.user_id = players.user_id
GROUP BY nickname
ORDER BY problem_attempted DESC
LIMIT 10;
```

---

4. Les joueurs ayant tenté le même problème<br>avec au moins deux langages.

Avec autojointure :

```sql
SELECT nickname
FROM
(SELECT DISTINCT sub1.user_id
FROM (SELECT *
FROM submissions) AS sub1
JOIN
(SELECT *
FROM submissions) AS sub2
ON sub1.problem_id = sub2.problem_id and sub1.user_id = sub2.user_id and sub1.language <> sub2.language) AS tablex, players
WHERE tablex.user_id = players.user_id
```

---

Une solution assez différente utilisant<br>un `GROUP BY` sur plusieurs attributs :

```sql
SELECT DISTINCT nickname
FROM
(SELECT user_id, COUNT(language) AS nb_language
FROM
(SELECT DISTINCT user_id, problem_id, language
FROM submissions) AS tab1
GROUP BY user_id, problem_id
HAVING nb_language > 1) AS tab2
JOIN players ON players.user_id = tab2.user_id
```

---

5. Joueurs ayant passé au moins 60%<br>des problèmes MEDIUM et HARD<br>avec un score de 100%.

```sql
SELECT nickname
FROM
(SELECT user_id,COUNT(*) AS nombre
FROM ((SELECT DISTINCT problem_id, user_id FROM submissions WHERE score = 100) AS sub1
JOIN (SELECT * FROM problems WHERE (problems.difficulty = "MEDIUM" OR problems.difficulty = "HARD")) AS prob1
ON sub1.problem_id = prob1.problem_id)
GROUP BY user_id) AS tablex
JOIN players
ON players.user_id = tablex.user_id
WHERE tablex.nombre >= 60
```

---

Autre possibilité (assez proche) :

```sql
SELECT nickname
FROM (SELECT nickname, COUNT(*) AS nbproblem
FROM 
(SELECT DISTINCT nickname, submissions.problem_id
FROM submissions
JOIN problems ON submissions.problem_id = problems.problem_id
JOIN players ON submissions.user_id = players.user_id
WHERE submissions.score = 100 AND (problems.difficulty = "HARD" OR problems.difficulty = "MEDIUM")) AS tab1
GROUP BY nickname
HAVING nbproblem >= 60) AS tab2
```


{{%/section%}}

---

{{%section%}}

<a href="https://app.coderpad.io/sandbox?question_id=225409&utm_campaign=Tiny+Interviews&utm_source=twitter&utm_medium=mathishammel"><image src="/defiquadruplets.png" style="width:80%;"></a>

---

Complexité de `find_quadruplet_sum` ?


---

```python
def find_quadruplet_sum_fast(numbers, target):
    sommesdeuxadeux = {}
    for a in numbers:
        for b in numbers:
            sommesdeuxadeux[a+b] = (a,b)
    for a in numbers:
        for b in numbers:
            if target - (a+b) in sommesdeuxadeux:
                return (a,b) + sommesdeuxadeux[target - (a+b)]
```

Complexité de `find_quadruplet_sum_fast` ?<br>(recherche dans un dictionnaire via `in` en O(1))

---

Une version plus simple du problème :
![](/deficarbonsomme.png)

---

Algo naïf quadratique :

```python
def test_naif(L,k):
    for i in range(len(L)-1):
        for j in range(i+1,len(L)):
            if L[i]+L[j] == k:
                return True
    return False
```

Comment passer à une complexité linéaire ?

{{%fragment%}}Avec un dictionnaire pardi !{{%/fragment%}}

---

```python
def test_lin(L,k):
    dico = {}
    for e in L:
        if k-e in dico:
            return True
        dico[e] = True
    return False
```

---

En réalité, on se sert ici du dictionnaire comme d'un **ensemble** (l'association clé-valeur ne nous intéresse pas, on veut seulement savoir si la clé est présente).

Or l'ensemble est une structure de données native<br>en Python (mais pas au programme). 

---

L'ensemble est une collection non ordonné d'éléments uniques (tout comme il ne peut y avoir deux clés identiques dans un dictionnaire).

`{'a',2.18,7}` est un ensemble<br>
(c'est donc bien une sorte de dictionnaire<br>ne contenant que des clés).

---

Comme dans un dictionnaire, la recherche<br>dans un ensemble se fait en temps constant.


Remplacer le dictionnaire par un ensemble<br>dans `test_lin` donne :

```python
def test_lin(L,k):
    Vu = set() # Vu est un ensemble vide
    for e in L:
        if k-e in Vu:
            return True
        Vu.add(e) # pour ajouter un élément
    return False
```

---

Les ensembles sont très pratiques<br>lorsqu'on a besoin d'éliminer des doublons.

Ainsi, `set([1,2,3,1,2,5])` renvoie `{1,2,3,5}`.


{{%/section%}}

---

{{%section%}}

{{%youtube ywWBy6J5gz8%}}

---

Implémenter cette version<br>"dance hongroise" du tri rapide<br>en s'assurant que le tri créé<br>est bien **en place**.

---

Une possibilité :

```python
def partition(L):
    p = 0         # pivot (chapeau noir)
    i = len(L)-1  # chapeau rouge
    while i != p:
      if (L[p]-L[i])*(p-i) < 0:
        L[p],L[i] = L[i],L[p]
        p,i = i,p
      i -= (i-p)//abs(i-p)
    return p
    
def trirapide(L):
    if len(L) <= 1:
      return L
    else:
      p = partition(L)
      L[:p] = trirapide(L[:p])
      L[p+1:] = trirapide(L[p+1:])
      return L
```



{{%/section%}}

---
{{%section%}}

<a href="https://app.coderpad.io/sandbox?question_id=228984&utm_campaign=Tiny+Interviews&utm_source=twitter&utm_medium=MathisHammel"><image src="/defigraphe.png" style="width:65%;"></a>

---

1. Que retourne `path_search(6,3,GRAPH)` ?
2. Pourquoi le programme n'est-il pas correct ? 
3. Qu'est-ce qui, dans le graphe, pose problème ?
3. Pourquoi le chemin entre 6 et 5<br>est-il quand même bon ?
4. Réparer le programme pour le rendre correct.
5. Le chemin donné est-il le plus court ?<br>Si non, comment faire pour qu'il le soit ?

---

Il manque dans ce code un registre des sommets déjà visités pour éviter d'y retourner<br>dans le cas de cycles 😵‍💫.

<br>

$6\rightarrow 5$ passe par le cycle $1\leftrightarrow 2$ mais comme<br>on avance **en profondeur** et que l'ordre des successeurs de 2 dans le graphe est `[5,4,1]`,<br>on évite de boucler 😅.

---

Pour ne pas changer de classe de complexité,<br>l'idée est d'utiliser un dictionnaire dans lequel<br>on ajoutera chaque sommet visité.

On profite alors du fait que la recherche d'une clé dans un dictionnaire (`if key in dico :`)<br>se fait en temps constant ($(O(1)$) 🥳.

---

Code modifié :

```python
def path_search(start, end, graph, vus=None):
    if vus is None : # explication slides suivantes
        vus = {}
    vus[start]=True
    if start == end:
        return [start]
    if graph[start] == []:
        return None
    for neighbor_node in graph[start]:
        if not neighbor_node in vus:
            path = path_search(neighbor_node, end, graph, vus)
            if path is not None:
                return [start] + path
```

---

### `vus = None` ?

L'idée première est d'utiliser l'argument nommé :<br>`vus = {}`.

Un argument nommé permet d'avoir une valeur<br>par défaut pour l'argument qui n'est alors<br>plus nécessaire lors de l'appel.

---

Exemple :

```python
def presentation(prenom,nom,job="sans") :
	print(f"identité : {prenom} {nom}, activité : {job}")
```

<br>

```python
>>> presentation("Alan","Turing","génie")
identité : Alan Turing, activité : génie
```
```python
>>> presentation("John","Doe")
identité : John Doe, activité : sans
```

---

Comme il n' y a pas de 4<sup>e</sup> argument dans le test, <br>et que modifier le test pourrait passer pour de la triche, les arguments nommés semblent<br>être une bonne solution.

Mais on se confronte alors à l'[un des plus vicieux problèmes](https://florimond.dev/en/posts/2018/08/python-mutable-defaults-are-the-source-of-all-evil/) que peuvent poser les objets mutables<br>en python, à chaque fois que l'argument par défaut est appelé, le même objet est utilisé !

---

Exemple :

```python
def vicieux(L=[]):
	L.append(1)
	return L
```

```python
>>> vicieux([0])
[0,1]
```
{{%fragment%}}<span style="font-weight:normal">Normal.</span>{{%/fragment%}}

```python
>>> vicieux()
[1]
```
{{%fragment%}}<span style="font-weight:normal">C'est bien ce qu'on voulait...</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">Mais que renvoit un nouveau <code>vicieux()</code> ? </span>{{%/fragment%}}

---

```python
>>> vicieux()
[1,1]
```
🤯

{{%fragment%}}<span style="font-weight:normal">Et du coup, ça fiche en l'air notre stratégie !<br>car à chaque test, le même dictionnaire<br>des sommets visités va être utilisé<br>et il sera donc tout à fait inutile.</span>{{%/fragment%}}

---

La bidouille pour se sauver est d'utiliser `None`<br>comme valeur par défaut afin de s'en servir comme test de premier appel pour initialiser l'objet mutable.

Rq : plutôt que `None`, on aurait pu utiliser un entier<br>ou une chaîne de caractères, c'est juste plus propre<br>et logique avec `None` (l'objet n'existe pas encore).

---

Exemple avec une chaîne de caractères :

```python
def path_search(start, end, graph, vus="init"):
    if vus == "init" :
        vus = {}
    vus[start]=True
    if start == end:
        return [start]
    if graph[start] == []:
        return None
    for neighbor_node in graph[start]:
        if not neighbor_node in vus :
            path = path_search(neighbor_node, end, graph, vus)
            if path is not None:
                return [start] + path
```

Ça passe tout aussi bien les tests.

---

À propos des tests :

```python
for a, b in zip(result, result[1:]):
	# Iterate over all consecutive pairs
	# Super helpful Python trick using zip :)
	assert b in graph[a]
```

Cela permet de tester ici qu'un sommet est bien un successeur du sommet qu'il suit dans la liste retournée par la fonction.

Comment aurait-on fait sans cette astuce ?

{{%/section%}}

---

{{%section%}}

![](/deficarbonpdt.png)

---

Un algo naïf serait :

```python
def produitsaufi(L):
    n = len(L)
    L_sortie = []
    for i in range(n):
        p = 1
        for j in range(n):
            if j != i:
                p *= L[j]
        L_sortie.append(p)
    return L_sortie
```

Peut-on faire mieux que cette<br>complexité quadratique ?

---

Oui :

```python
def produitsaufi(L):
    n = len(L)
    p = 1
    for i in range(n):
        p *= L[i]
    return [p//L[i] for i in range(n)]
```

---

Mais si on vous demande de garder<br>une complexité linéaire tout en vous<br>interdisant les divisions ?

---

On peut utiliser deux listes `L_gauche` et `L_droite` qui vont contenir les produits à gauche et à droite de `i`
- `L_gauche[i]` = $\prod_{j=0}^{i-1}$`L[j]`
- `L_droite[i]` = $\prod_{j=i+1}^{n-1}$`L[j]`

<br>

On aura bien ainsi :<br>
`L_gauche[i]*L_droite[i]` =  $\displaystyle \prod_{\substack{j=0\\\\j≠i}}^{n-1}$L[j]

---

```python
def produitsaufi(L):
    n = len(L)
    L_gauche = [1]*n
    L_droite = [1]*n
    for i in range(1,n):
        L_gauche[i] = L[i-1]*L_gauche[i-1]
    for i in range(n-2,-1,-1):
        L_droite[i] = L[i+1]*L_droite[i+1]
    return [L_gauche[i]*L_droite[i] for i in range(n)]
```


{{%/section%}}


---

{{%section%}}

![](/defistripe.png)


---

Un 1<sup>er</sup> algo :

```python
def pluspetitpasla(L):
    n = len(L)
    i = 1
    while i < n+1:
        if i not in L:
            return i
        else:
            i += 1
    return n+1
```


---


Complexités ?

{{%fragment%}}spatiale : $O(1)$<br>temporelle : $O(n^2)${{%/fragment%}}


```python{|4|5}
def pluspetitpasla(L):
    n = len(L)
    i = 1
    while i < n+1: # O(n)
        if i not in L: # O(n)
            return i
        else:
            i += 1
    return n+1
```

---

Un algo linéaire en place:

```python
def pluspetitpasla(L):
    n = len(L)
    i = 0
    while i < n:
        if 1 <= L[i] < n and L[L[i]-1] != L[i]: # la 2e condition évite de boucler à l'infini
            L[L[i]-1], L[i] = L[i], L[L[i]-1]
        else:
            i += 1
    for i in range(n):
        if L[i] != i+1:
            return i+1
    return n+1
```

{{%fragment%}}Prouver la correction totale de l'algorithme{{%/fragment%}}

---

- Pour la terminaison, il faut prouver que la condition du `while` est toujours rencontrée&nbsp;:<br>
  **$n-i$ est un variant de boucle**&nbsp;:<br>
    - $n-i>0$ par la condition du `while`
    - pour prouver que $n-i$ est strictement décroissante, on va prouver qu'on ne peut pas être bloqué plus de $n$ itérations<br>sur le `if` :

---

<div style="text-align:left;color:gray">
en effet, à chaque permutation de deux éléments<br>de la liste, on retourne dans le <code>if</code> aux conditions que le nouvel élément en position <code>i</code> est entre 1 et $n$ et que l'élément vers lequel il renvoie n'est pas identique à celui qu'il contient.<br> Or, dans le pire des cas ($n$ éléments différents ≤ $n$), le <a href="https://fr.wikipedia.org/wiki/Principe_des_tiroirs">principe des tiroirs</a> nous assure qu'au bout de $n$ itérations au maximum, on se retrouvera à placer un élément dans sa propre case.
</div>

---

- Pour la correction partielle, l'invariant qu'on cherche à maintenir dans la boucle  `while` est&nbsp;:
>`L[L[j]-1]`$=$`L[j]` si `L[j]`$≤$`n`<br>pour tout $j≤i$<br>$\equiv$<br>
>**Chaque élément `L[j]`$≤$ `n` <br> a été placé à la position correspondant à sa valeur**


---

<div style="text-align:left;color:gray">
Et si l'invariant est supposé vrai au rang <code>i</code>, le code de la boucle <code>while</code> nous le maintient vrai au rang <code>i+1</code> (car si ce n'est pas le cas en début d'itération, la permutation dans le <code>if</code> nous assure que ça le sera<br>en fin d'itération).<br>
L'invariant sera donc vrai sur toute la liste : <br><b style="color:white">on trouve à chaque position de la liste l'élément ayant pour valeur cette position s'il était bien présent dans la liste au départ</b>.
</div>

---

<div style="text-align:left;color:gray">
Finalement, le parcours de la boucle <code>for</code> nous permet bien de sortir le premier entier non nul absent de la liste&nbsp;; il correspond au premier élément dont la position et la valeur ne coïncident pas.
</div>

{{%/section%}}

---

{{%section%}}

![](/defifacebook.png)


---

Faisons aussi s'afficher les différents mots décryptés<br>pour que cela soit plus parlant.

---

La **récursivité** semble une voix prometteuse puisqu'il s'agit de compter toutes les branches possibles aboutissant à un mot différent en partant de la racine commune que représente le message initial.


---

Construisons d'abord pour nos tests le dictionnaire permettant de décoder et le dictionnaire inverse permettant l'encodage.

```python
alphabet = "abcdefghijklmnopqrstuvwxyz"
decode = {i:alphabet[i-1] for i in range(1,27)}
encode = {val:str(key) for key,val in decode.items()}
```

```python
message = "athlete"
crypt = ""
for c in message:
  crypt += encode[c]
crypt
```

<code>'1208125205'</code>

---

La fonction récursive construisant<br>et comptant les mots différents :

```python
def nbdemotsdiff(mess,i=0,mot=""):
  global compt
  n = len(mess)
  if i > n-1:
    compt += 1
    print(mot)
    return mot
  if mess[i] == "0":
    return
  if i != n-1 and (mess[i] == "1" or (mess[i] == "2" and int(mess[i+1]) <= 6)):
    nbdemotsdiff(mess,i+1,mot+decode[int(mess[i])])
    nbdemotsdiff(mess,i+2,mot+decode[int(mess[i:i+2])])
  else:
    nbdemotsdiff(mess,i+1,mot+decode[int(mess[i])])
```

---

Exemple :

```python
compt = 0
nbdemotsdiff("1208125205")
print(compt)
```

On obtient :<br>
`athabete`<br>
`athayte`<br>
`athlete`<br>
`3`


---


{{< slide  background-image="/arbredefimots.png" background-size="contain" background-transition="concave">}}



{{%/section%}}

---

{{%section%}}

![](/defimaisons.png)

---

<img src="/burano.png" style="border-radius:5%">

C'est typiquement un problème<br>pour la programmation dynamique :


---

{{%youtube F48AbiZGds0%}}

---

L'idée va être de construire une matrice N par K<br>où on trouve à la ligne n le coût minimal<br>pour peindre la maison n de la couleur k<br>**<u>et</u>** toutes les maisons qui précèdent.

---

La première ligne de la matrice correspond simplement aux coûts pour peindre la première maison dans les k couleurs différentes.


---

Supposons que la ligne n donne bien pour chaque couleur de la maison n le coût total minimal<br>pour peindre les n premières maisons.

La case k de la ligne n+1 s'obtient alors en prenant<br>le coût pour peindre la maison n+1 de la couleur k auquel on ajoute le plus petit coût de la ligne n<br>pour toutes les couleurs autres que k.

On s'assure bien ainsi du coût total optimal<br>pour chaque couleur de la maison n+1 !



---


Une fois la matrice construite, on obtient le coût total minimal final en prenant la valeur minimale<br>de la dernière ligne.

---

```python
def cout_tot_min(mat_couts):
  N = len(mat_couts)
  K = len(mat_couts[0])
  M_tot = [[0]*K for i in range(N)]
  for k in range(K):
    M_tot[0][k] = mat_couts[0][k]
  for n in range(1,N):
    for k in range(K):
      M_tot[n][k] = mat_couts[n][k] + min([M_tot[n-1][kprime] for kprime in range(K) if kprime != k])
  return min(M_tot[n-1])
```

---

Complexité ?

{{%fragment%}}$O(NK^2)${{%/fragment%}}

---

On peut aussi s'amuser à déterminer les couleurs<br>avec lesquelles il faut peindre chaque maison<br>pour aboutir au coût minimum.

Faisons d'abord retourner par `cout_tot_min` la matrice construite en plus du coût total minimal :
```python
return min(M_tot[n-1]),M_tot
```
<br>

Il n'y a plus ensuie qu'à "remonter" la matrice...

---

```python
def reconstruction(M_tot,mat_couts,Lcouleurs):
  N = len(M_tot)
  K = len(M_tot[0])
  Couleurs_maisons = [""]*N
  Min = min(M_tot[N-1])
  for n in range(N-1,-1,-1):
    k = 0
    while M_tot[n][k] != Min:
      k += 1
    Couleurs_maisons[n] = Lcouleurs[k]
    Min = Min - mat_couts[n][k]
  return Couleurs_maisons
```

---

Exemple :

```python
Mcoutpeinture = [[2000,2500,3000,1500],
                 [4000,4500,1500,2000],
                 [2800,3900,4200,3000],
                 [1500,1800,2000,1200],
                 [1000,2000,1400,1500],
                 [5000,3500,7000,4000]]

Couleurs = ["Rouge","Vert","Bleu","Jaune"]
```

---

{{< slide  background-image="/defimaisonsdess.png" background-size="contain" background-transition="concave">}}

```python
coutmin,M_tot = cout_tot_min(Mcoutpeinture)
print(coutmin)
print(reconstruction(M_tot,Mcoutpeinture,Couleurs))
```
`11500`<br>
<code style="font-size:1.5rem !important">['Jaune', 'Bleu', 'Rouge', 'Jaune', 'Rouge', 'Vert']</code>

{{%/section%}}

---


{{%section%}}

Problèmes classiques :

- Trouver une ou toutes les solutions au problème des 8 dames (ou n dames).
- Trouver la solution d'une grille de sudoku.

---

Dans les deux cas, l'utilisation du backtracking<br>donne des codes plutôt élégants :

{{%youtube tU1ceGzt0lo%}}


{{%/section%}}

---

[Retour site](https://info-tsi-vieljeux.github.io/projets/)