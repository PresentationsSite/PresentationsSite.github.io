+++
title = "Dicos"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++

{{% section %}}

# Les Dictionnaires

---

Des tableaux dont les éléments sont accessibles par des clés plutôt que par des indices entiers.

---

{{< slide  background-image="/dicotab.png" background-size="contain" background-transition="concave">}}

{{% /section %}}

---

{{% section %}}

### Définir un dictionnaire :

---

```python{|1|3-4}
rot13 = {} # initialisation
abc = "abcdefghijklmnopqrstuvwxyz"
for i in range(26) :
	rot13[abc[i]] = abc[(i+13)%26]
```

---

Par compréhension :

<br>

```python{2}
abc = "abcdefghijklmnopqrstuvwxyz"
rot13 = {abc[i] : abc[(i+13)%26] for i in range(26)}
```

---

Utilisation :

<br>

```python{|4|5}
def encode(texte) :
    secret = ""
    for char in texte :
        if char in rot13 : # vérifie si char est une clé
            secret += rot13[char]
        else :
            secret += char
    return secret
```

---

<style>
.bouton {
background-color: #FF968D;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 0px 0px 20px 0px;
border-radius: 8px;
cursor: pointer;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
transition-duration: 0.4s;
}

.bouton:hover {
background-color: #EE220C;
color: white;
}

.bouton:active {
box-shadow: none;
</style>

<textarea id="source" name="source" style="font-size:16pt;padding:20px" cols="30" rows="5" placeholder="Texte à encoder ou décoder"></textarea><br>
<button class="bouton" onclick="rot13()" >Encode / Décode</button>
<br>
<textarea id="final" name="final" style="font-size:16pt;padding:20px" cols="30" rows="5" placeholder="Résultat"></textarea>

<script>
function rot13() {
    var src = document.getElementById("source"),
        dst = document.getElementById("final");
    const abc = "abcdefghijklmnopqrstuvwxyz";
    dst.value = ""
    var dico = {};
    for (let i = 0; i < abc.length; i++) {
    		dico[abc[i]] = abc[(i+13)%26]
        }

    for (let i = 0; i < src.value.length; i++) {
    		if (abc.includes(src.value[i])) {
    		dst.value += dico[src.value[i]];
        } else{
        dst.value += src.value[i];
        }
    			}
    }
</script>

---

Comment aurait-on fait seulement avec des listes ?

{{% /section %}}

---


{{% section %}}

### Parcourir un dictionnaire

---

#### Parcourir les clés :

```python
for k in dico.keys() :
	print(k)
```

<br>

équivalent à :
```python
for k in dico :
	print(k)
```

---

Pour obtenir la liste des clés :
```python
L_keys = list(dico.keys()) 
```

---

#### Parcourir les valeurs :

```python
for v in dico.values() :
	print(v)
```
<br>

équivalent à :
```python
for k in dico :
	print(dico[k])
```


---

Pour obtenir la liste des valeurs :
```python
L_valeurs = list(dico.values()) 
```

---

#### Parcourir les couples clés-valeurs :

```python
for k,v in dico.items() :
	print(f"{k}:{v}")
```

<br>

équivalent à :
```python
for k in dico :
	print(f"{k}:{dico[k]}")
```

---

Pour obtenir la liste des tuples (clé,valeur) :
```python
L_couples = list(dico.items()) 
```

{{% /section %}}

---

{{% section %}}

### Ajouter/retirer une clé

---

```python{}
dico = {}
dico[(46.16,-1.15)] = "La Rochelle"   # ajoute la clé
```
<br>

```python{}
del dico[(46.16,-1.15)]               # retire la clé
```

---

Un tuple est une clé possible,<br>car c'est une structure **non mutable**.

<br>

Par contre, l'instruction suivante lève une erreur&nbsp;:

```python
dico[[46.16,-1.15]] = "La Rochelle"
```

---

<p style="font-family:menlo"><span style="color:red">TypeError:</span> unhashable type: 'list'</p>


---

Quelle est la taille du dictionnaire `Notes` ?

<br>

```python
Notes = {"Bob" : 5 , "Joe" : 12 , "Bob" : 10}
```

<br>

{{%fragment%}} 2 {{%/fragment%}}

---

Les commandements :

<br>


<p style="background-color:rgb(255,0,0,0.2);font-weight:bold;border-radius:10px;color:rgb(200,0,0);padding:10px 0px 15px 0px;border: solid red 5px">Une clé est unique</p>


<br>

<p style="background-color:rgb(255,0,0,0.2);font-weight:bold;border-radius:10px;color:rgb(200,0,0);padding:10px 0px 15px 0px;border: solid red 5px">Une clé est non mutable</p>

---

En fait, le 2<sup>e</sup> commandement<br>est là pour s'assurer du premier...


{{%/section %}}

---

{{% section %}}

### Principe du hachage

---

On se fixe au départ une taille de tableau.<br>Pour Python, c'est 64 bits<br>
(taille d'un espace mémoire).

<br>

{{%fragment%}}<span style="font-weight:normal">On utilise ensuite une fonction de hachage<br>qui transforme l'objet non mutable donné en argument en un entier compris entre $0$ et $2^{64}-1$.</span>{{%/fragment%}}

---
{{< slide  background-image="/principhachage.png" background-size="contain" background-transition="concave">}}

---

Python donne accès nativement<br>à la fonction de hachage `hash` :



```python
>>> hash(28)
28
>>> hash(28.0)
28
>>> hash(28.1)
230584300921372700
>>> hash("2")
7599881246238757835
>>> hash("Eh alors ?")
2149932438138104006
>>> hash("🍇")
3426984333240570475
>>> hash((1,2,3))
529344067295497451
```

---

Ses propriétés peuvent être interrogées :

<br>

```python
>>> import sys
>>> sys.hash_info
sys.hash_info(width=64, modulus=2305843009213693951, inf=314159, nan=0, imag=1000003, algorithm='siphash24', hash_bits=64, seed_bits=128, cutoff=0)
```

<br>

{{%fragment%}}<span style="font-weight:normal">modulus = $2^{61}-1$ est le plus grand<br>nombre premier de Mersenne $<2^{64}$<br>(ça permet d'optimiser la distribution des<br>entiers obtenus tout en ayant des calculs rapides)</span>{{%/fragment%}}

---

Une fonction de hachage<br>travaille en temps constant<br>(complexité en $O(1)$).

---

Et que faire si le hachage donne le même entier pour deux clés différentes<br>(ce qu'on appelle une **collision**) ?

<br>

{{%fragment%}}<span style="font-weight:normal">Une idée possible est de commencer<br>une liste chaînée depuis l'emplacement<br>déjà occupée du tableau.</span>{{%/fragment%}}


---
{{< slide  background-image="/gestioncollision.png" background-size="contain" background-transition="concave">}}

---

Si ça n'arrive pas trop souvent,<br>l'accès à une valeur et l'insertion d'une nouvelle reste globalement en $O(1)$.

{{% /section %}}

---

{{% section %}}

### Atout d'un dictionnaire

---

Sa rapidité !

---

Supposons que l'on veuille la note de Bob :

<br>

```python
# Liste de tuples :
L = [("Joe",12),("Bill",8),("Al",4),("Bob",13),("Tom",9)]
# Dictionnaire
D = { "Joe":12 , "Bill":8 , "Al":4 , "Bob":13 , "Tom":9 }
```

---

Pour afficher la note de Bob avec `L` :

```python
for prenom,note in L :
	if prenom == "Bob" :
		print(note)
```
ou
```python
for i in range(len(L)) :
	if L[i][0] == "Bob" :
		print(L[i][1])
```


---

Complexité ?

{{%fragment%}}$\color{red}O(len(L))${{%/fragment%}}

---

Pour afficher la note de Bob avec `D` :

<br>

```python
print(D["Bob"])
```

---

Complexité ?

{{%fragment%}}$\color{red}O(1)${{%/fragment%}}


---

On a mis à profit cette rapidité dans l'implémentation de **BFS** et **DFS** pour tester<br>si un sommet avait déjà été visité.

<br>

Utiliser une liste répertoriant les sommets visités plutôt qu'un dictionnaire fait passer la complexité de linéaire à quadratique !

---

Pas bien 🤮

```python{|6,10,12}
from collections import deque

def parcours_largeur(G,depart):
    file = deque()
    file.append(depart)
    Vus = []
    Sommets = []
    while file : # tant que la file n'est pas vide
        sommet = file.popleft()  
        if not sommet in Vus :
            file += G[sommet]
            Vus.append(sommet)
            Sommets.append(sommet) 
    return Sommets
```

---

Bien 😇

```python{|6,10,12}
from collections import deque

def parcours_largeur(G,depart):
    file = deque()
    file.append(depart)
    Vus = {s : False for s in G}
    Sommets = []
    while file : # tant que la file n'est pas vide
        sommet = file.popleft()  
        if not Vus[sommet] :
            file += G[sommet]
            Vus[sommet] = True
            Sommets.append(sommet) 
    return Sommets
```

{{% /section %}}

---

[Retour site](https://info-tsi-vieljeux.github.io/python/typesstruct/#dictionnaires)