+++
title = "IA"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



# IA

---

L'**intelligence arificielle** (IA) est une discipline  scientifique qui a vu officiellement le jour en 1956. 

Elle repose sur la conjecture selon laquelle toutes les fonctions cognitives, en particulier l'apprentissage, le raisonnement, le calcul,<br>la perception, la mémorisation, voire la découverte scientifique ou la créativité artistique, peuvent<br>être reproduites sur des ordinateurs.

---

L'**apprentissage automatique** (Machine Learning) est à l'intersection de l'IA et d'un autre champ scientifique : la science des données (data science).

---


{{< slide  background-image="/vennia.png" background-size="70%" background-transition="concave">}}

---

En pratique, il s'agit de produire des réponses adaptées aux données fournies en entrée (identifier des motifs, des tendances, construire des modèles, faire des prédictions). 

L'apprentissage automatique n'est donc ni plus ni moins que du traitement de données visant à prédire des résultats en fonction<br>des données entrantes.


---

{{< slide  background-image="https://i.vas3k.ru/7w1.jpg" background-size="60%" background-transition="concave">}}

---

{{%section%}}

#### Exemple d'apprentissage supervisé :

## Algorithme des K<br>plus proches voisins


---

KNN est un algorithme d’**apprentissage supervisé** cela signifie que l’algorithme nécessite<br>des données classifiées en amont qui vont lui servir à trouver la bonne étiquette pour<br>d’autres données non encore classifiées.


---


Suivant la nature de l’étiquette, KNN peut servir à :

- une classification des nouvelles données<br>si les étiquettes sont des catagories ;
- une régression si les étiquettes<br>sont des nombres.

---

KNN enregistre, dans un premier temps, tous les points de données étiquetées qui vont lui servir à l'apprentissage (c'est le training set). 

Puis, quand arrive un point de donnée non étiqueté, l'algorithme calcule sa distance aux autres points et sélectionne les **k** plus proches.

On a alors deux cas possibles :

---

- si les étiquettes sont des catégories, l'algorithme calcule **le mode** des catégories des voisins sélectionnés (catégorie la plus représentée).


- si les étiquettes sont des nombres, l'algorithme calcule **la moyenne** des étiquettes des voisins sélectionnés.

---

Dans l'animation suivante, on utilise KNN pour répondre à la question suivante :

Quelle est la couleur du nouveau point ?

---
{{< slide  background-video="/knnvid.mp4" background-size="100%" background-transition="concave">}}

---

L'algorithme des *k* plus proches voisins<br>est **non paramétrique**. 

Aucun modèle mathématique de classification ou régression n'est construit à partir des données<br>(pas de paramètre à ajuster). 

Les données d'apprentissage<br>sont enregistrées telles quelles.


---

Cela signifie qu'on ne présuppose rien de particulier sur les données (à part que des points proches appartiennent à la même catégorie). 

L'algorithme est donc particulièrement<br>robuste (les données parlent d'elles-même)<br>et simple à mettre à jour (suffit d'ajouter<br>les nouvelles données d'apprentissage).

---

Le **choix de k** modifie le résultat obtenu.

- Si *k* est trop petit, le moyennage est faible et donc la variabilité va être très grande. On parle alors de surapprentissage (**overfitting**).

---

- En augmentant *k*, les résultats obtenus se stabilisent (vote de la majorité) et les erreurs diminuent, jusqu'au moment où la boule à l'intérieur de laquelle se fait le moyennage devient trop grosse, amenant in fine l'algorithme a choisir systématiquement la catégorie majoritaire, quel que soit le point... On augmente alors le **biais** (ici, le biais est le préjudice en faveur du plus grand nombre). L'ajustement ne suit plus les variations, on parle de sous-apprentissage (**underfitting**).

---

{{< slide  background-image="/tabloverfit.png" background-size="90%" background-transition="concave">}}


---


Le choix de *k* est donc affaire de compromis. Pour le rendre plus scientifique, on peut chercher à mesurer la performance de l'algorithme pour différentes valeurs de *k*.

Mais comment mesure-t-on la **performance d'un algorithme d'apprentissage automatique**&nbsp;?

---


La **matrice de confusion** permet d'évaluer<br>la qualité des prédictions d'un algorithme.

Utilisons KNN sur une banque d'images de chiffres écrits à la main et concentrons-nous sur<br>sa capacité à reconnaître des "3".


---

{{< slide  background-image="/MnistExamples.png" background-size="70%" background-transition="concave">}}


---

{{< slide  background-image="/matconfus.png" background-size="60%" background-transition="concave">}}

---

Un algorithme peut très bien être **très précis**<br>(les prédictions positives sont bien des 3),<br>mais **peu sensible**, avec un faible taux de rappel (parmi tous les 3, peu ont été identifiés).

---

À l'inverse, on peut avoir une **bonne sensibilité**<br>(la plupart des vrais 3 ont été identifiés comme tel), mais **peu précis** (beaucoup de chiffres identifiés comme des 3 sont en fait d'autres chiffres).



{{%/section%}}

---

{{%section%}}

#### Exemple d'apprentissage non-supervisé :

## Algorithme des<br>K-moyennes

---

L'algorithme des k-moyennes regroupe<br>en catégories des données<br>*dont on ne connaît rien a priori*.

<br>

C'est un algorithme<br>de **partitionnement**<br>des données (clustering).

---

L'algorithme depend d'un seul paramètre<br>(en plus des données) :<br>le nombre de partitions *k*.

---

- On commence par choisir *k* points au hasard dans l'espace des données (il peut s'agir de *k* points de données ou de *k* autres points). Ce sont les *k* centres (ou centroïdes).

- On attribue ensuite à chaque centre tous les points de données qui lui sont le plus proches, formant ainsi *k* groupes.

- Enfin, on déplace chaque centre au barycentre de son groupe.

---

On répète les deux dernières opérations (attribution des points les plus près<br>et déplacement des centres)<br>tant que les centres bougent<br>d'une itération à l'autre.

---
{{< slide  background-video="/vidkmean.mp4" background-size="100%" background-transition="concave">}}

---

L'algorithme vise à résoudre au final un problème d'optimisation ; son but est en effet de trouver le minimum de la distance entre les points à l'intérieur de chaque partition.

---

Mathématiquement, étant donné un ensemble<br>de points $(x_1,x_2,\ldots,x_n)$, on cherche à partitionner les $n$ points en $k$ ensembles $S=\\{S_1,S_2,\ldots,S_k\\}$ en minimisant la grandeur
$$I = \sum_{i=1}^{k}\sum_{x_j \in S_i}||x_i-\mu_i||^2$$
où $\mu_i$ est le barycentre des points dans $S_i$.

$I$ est la variance intra-classe ou **inertie** intra-classe (terme surtout utilisé en anglais).


---

### Choix de k

---

{{< slide  background-image="/choixdek.png" background-size="100%" background-transition="concave">}}

---

{{< slide  background-image="/inertiefctk3.png" background-size="80%" background-transition="concave">}}

---

{{< slide  background-image="/inertiefctk5.png" background-size="100%" background-transition="concave">}}

---

### Limites

---

{{< slide  background-image="/localglobal.png" background-size="60%" background-transition="concave">}}

---

{{< slide  background-image="/subopti.png" background-size="26%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}


## Jeux d'accessibilité<br>sur un graphe

On quitte l'apprentissage automatique<br>mais on reste dans le champ de l'IA.


---

<u>Vocabulaire</u>

On entendra ici par jeu :
- des jeux à deux joueurs<br>($J_1$ et $J_2$ ou Eve et Adam)
- à **information complète**&nbsp;: les deux joueurs savent tout (pas comme aux cartes)
- **alternés** (pas comme à chifoumi)
- **non randomisés** (pas de hasard)

---

L'**arène** dans laquelle le jeu prend place<br>est un **graphe orienté biparti**.

<div style="color:gray;text-align:left">
Un graphe biparti (ou bipartite) $G$ est un graphe dont l'ensemble des sommets peut être divisé en deux sous-ensembles de sommets disjoints $S_1$ et $S_2$ ($S_1$ et $S_2$ sont une partition de $S$&nbsp;: $S_1\cup S_2=S$, $S_1\cap S_2=\varnothing$) tels que chaque arête de $G$ a une extrémité dans $S_1$ et l'autre dans $S_2$.
</div>

---

{{< slide  background-image="/animbipar.gif" background-size="100%" background-transition="concave">}}

---

Deux joueurs, $J_1$ et $J_2$, s'affrontent sur un graphe orienté biparti $G=(S,A)$ où $S$ est constitué des sommets contrôlés par le joueur 1, $S_1$, et de ceux contrôlés par le joueur 2, $S_2$. Chaque sommet est une position valide du jeu et chaque arête est un mouvement autorisé entre ces positions.

---

Dans le cas d'un **jeu d'accessibilité**, on attribue à chaque joueur un sous-ensemble de sommets correspondant à des états gagnants qu'il doit atteindre pour... gagner.

Il peut aussi exister un sous-ensemble de sommets correspondant à des états de partie nulle.

---

Un jeu d'accessibilité est alors défini<br>par un quadruplet $(G,S_1,S_2,F)$ 

où $(G,S_1,S_2)$ est une arène et $F$ est l'ensemble des sommets gagnants pour $J_1$.

---

### Exemples

---

{{< slide  background-video="/chompintro.mp4" background-size="100%" background-transition="concave">}}

---

{{< slide  background-image="/arenechomp.png" background-size="60%" background-transition="concave">}}

---

**Autre variante du jeu de Nim :**

Eve joue en premier et peut retirer autant d’allumettes qu’elle le souhaite dans un tas<br>du moment qu’elle en prend au moins une<br>et qu’elle en laisse au moins une. 

---

C’est ensuite au tour d’Adam de retirer des allumettes avec pour tous les tours qui suivent<br>une contrainte supplémentaire : 

on ne peut pas retirer plus de deux fois le nombre d’allumettes prises par son adversaire<br>au tour précédent. 

---

Le joueur qui retire la dernière allumette gagne.<br>Il n’y a pas de match nul.

---

En commençant avec un tas de 5 allumettes,<br>on obtient l'arène suivante

où chaque sommet est étiqueté par le couple<br>(nombre d'allumettes présentes,<br>nombre d'allumettes prenables).

---

{{< slide  background-image="/variantenim.png" background-size="60%" background-transition="concave">}}

---

L'arène s'écrit donc :

$$
\begin{aligned}
&(G,\color{blue}\\\{(5,4,0),(3,2,0),(2,2,0),(1,1,0),(0,0,0)\\\}\color{black},\\\\
&\color{magenta}\\\{(4,2,1),(3,3,1),(2,2,1),(1,1,1),(0,0,1)\\\}\color{black},\color{orange}(0,0,1)\color{black})
\end{aligned}
$$


---

<u>Remarque</u>

Tout jeu impartial à deux joueurs est une variante du jeu de Nim (théorème de Sprague-Grundy). 

---

{{%youtube 2jahbr5wMHk%}}

---

Un **jeu impartial** est un jeu tour par tour dans lequel les coups autorisés, ainsi que les gains obtenus, dépendent uniquement de la position,<br>et pas du joueur dont c'est le tour. 

Un jeu qui n'est pas impartial est appelé **jeu partisan** (le morpion ou les échecs par exemple).


---

**Le morpion :**

On part ici d'une partie avancée.

Eve a les ronds et c'est son tour.

---

{{< slide  background-image="/graphetictac1.png" background-size="60%" background-transition="concave">}}

---

### Mise au point d'une stratégie gagnante pour Eve

---

Il faut pouvoir s'assurer qu'Eve arrive sur $F$.

Comment faire ?


---

**Positions gagnantes et attracteurs**

Pour déterminer l'ensemble des positions gagnantes pour Eve sur l'arène, on travaille récursivement depuis les sommets de $F$<br>en suivant les deux préceptes suivants&nbsp;:

---

{{< slide  background-image="/sommetgagnant1.png" background-size="20%" background-transition="concave">}}

- un sommet d'Eve est gagnant si **un** de ses arcs sortants le lie à un sommet gagnant.<br>
Eve n'a alors plus qu'à emprunter ce chemin.<br>

<br><br><br><br><br><br>

---

{{< slide  background-image="/sommetgagnant2.png" background-size="20%" background-transition="concave">}}

- un sommet d'Adam est gagnant (pour Eve)<br>si **tous** ses arcs sortants le lie à un sommet gagnant.<br>
En effet, Adam ne peut alors pas éviter de mettre Eve dans une position gagnante.

<br><br><br><br><br><br>

---

Formalisons en définissant la suite $Attr_i(F)$<br>qui contient l'ensemble des sommets<br>gagnants après $i$ étapes&nbsp;:

$$ \begin{array}{lll} Attr_0(F) &= &F \\\\  Attr\_{i+1}(F) &= &Attr\_{i}(F) \\\\ &&\cup \\{s \in S_1|Succ(s)\cap Attr_i(F) ≠ \varnothing \\} \\\\ &&\cup \\{s\in S_2| Succ(s)\subseteq Attr_i(F)\\} \end{array} $$

---

Étant donné que $Attr_i(F) \subseteq Attr\_{i+1}(F) \subseteq S$, pour tout $i≥0$, si on suppose le graphe fini,<br>la suite est croissante et bornée<br>et donc stationnaire<br>(à partir d'un certain $i=i_0$,<br>$Attr_i(F)$ est constante). 

Et si $|G|=n$, $i_0$ vaut au plus $n-1$.

---

On appelle **attracteur** de $F$ pour le joueur $J_1$<br> la limite de $Attr_i(F)$. 

On le note $Attr(F)$.

Tout sommet dans l'attracteur<br>est une **position gagnante** pour $J_1$.

---

Le complémentaire d'un attracteur<br>est appelé **piège**.

---


Si le joueur 1 est sur une position n'appartenant pas à son attracteur (et appartenant<br>donc à son piège), cela signifie que :
- si c'est son tour, tous les mouvements possibles restent dans le piège,
- si c'est le tour de l'adversaire, celui-ci a toujours au moins une possibilité de laisser le joueur 1 dans le piège.

Cette position est donc perdante...

---

{{< slide  background-video="/chompattract.mp4" background-size="100%" background-transition="concave">}}

---

Dans le cas de la variante de Nim, l'attracteur se réduit à $Attr(G) = \\{(0,0,1) , (1,1,0) , (2,2,0) \\}$

Le sommet de départ $(5,4,0)$ n'est pas dedans<br>$\Rightarrow$ c'est perdu pour Eve 😭.

---

{{< slide  background-image="/nimvarattr.png" background-size="70%" background-transition="concave">}}

---

Sur l'exemple du morpion, l'attracteur contient<br>13 sommets dont celui de départ 🥳.

---
{{< slide  background-video="/morpionattr.mp4" background-size="100%" background-transition="concave">}}

---

**Programme permettant de calculer l'attracteur**

---

On peut écrire un programme récursif calculant l'attracteur en temps linéaire en $|S | + |A|$ <br>(le parcours complet d'un graphe est au mieux en $O(|S | + |A|)$ car cela correspond à parcourir<br>les $|S|$ sommets et les $|A|$ arêtes). 

Pour éviter de calculer plusieurs fois le même élément, l'algorithme tient à jour, pour chaque sommet $s$, un compteur `n` des successeurs non encore inspectés (sous la forme d'un dictionnaire) .

---


```python
def attracteur(G: dict, F: list) -> list:
    """
    préconditions : G est est un graphe sous forme de liste d'adjacence implémentée par un dictionnaire
                    F est la liste des sommets gagnants pour le joueur 1
    postcondition : la fonction retourne l'attracteur de F pour le joueur 1 sous forme d'un dictionnaire
                    dont les clés sont les sommets de G et les valeurs True ou False suivant que le sommet appartienne ou non à l'attracteur
    """
    Pred = inverseGraphe(G)
    n = {s:len(G[s]) for s in G}
    Attr = {s:False for s in G}
    for sommet in F :
        Joueur1 = True
        propage(sommet,Joueur1,Attr,Pred,n)
    return Attr

def propage(sommet,Joueur1,Attr,Pred,n) :
    if Attr[sommet] :
        return
    Attr[sommet] = True
    for s in Pred[sommet] :
        n[s] -= 1
        if Joueur1 or (n[s] == 0) :
            propage(s,not Joueur1,Attr,Pred,n)
```

---

### Stratégie sans mémoire gagnante

---

Une **stratégie sans mémoire** est une fonction $\sigma$ qui assigne un mouvement autorisé à un joueur pour chaque position non terminale&nbsp;: $\forall s\in S, (s,\sigma(s))\in A.$

Un joueur sur une position $s$ suit une stratégie s'il emprunte le chemin $<s,\sigma(s),\sigma^2(s),\ldots>$. 

Elle est dite **sans mémoire** car pour une position donnée, la stratégie est indépendante du chemin qui y a mené ($\sigma$ ne dépend que du sommet).

---

Une **stratégie sans mémoire gagnante** depuis une position donnée garantit la victoire au joueur en un nombre de coups limité. 

Pour le joueur 1, une stratégie gagnante garantit d'arriver sur un sommet de $F$. 

Mais suivant la position de départ, une telle stratégie n'existe pas forcément...

---

En construisant l'attracteur,<br>on répond à notre première question&nbsp;: 

La **position** d'Eve est-elle **gagnante**&nbsp;?<br>$\rightarrow$ Il suffit de vérifier qu'elle<br>**appartient à l'attracteur**.

Si c'est le cas, une stratégie gagnante est facile à mettre en place&nbsp;; il faut faire en sorte que chaque déplacement sur le graphe (chaque coup joué) se fasse vers un sommet de l'attracteur. Chaque coup d'Eve vers un sommet de l'attracteur piège aussi le coup suivant d'Adam dans l'attracteur.

---

Comme son nom l'indique, l'attracteur attire irrémédiablement vers $F$,<br>assurant la victoire<br> au joueur 1.

---

Le joueur 2 aussi, bien sûr, a son attracteur,<br>et il appartient au complémentaire de l'attracteur du joueur 1, piège du joueur 1. 

Donc un seul écart du joueur 1 en dehors de son attracteur, et s'en est fini pour lui, le joueur 2 peut le condanner à rester dans le piège.

---

- Pour Chomp, le joueur 1 appartient à l'attracteur, ce qui signifie que sa position de départ est gagnante. Par conséquent, il a une stratégie gagnante. Mais attention à ne pas se tromper au début&nbsp;! Sur 5 mouvements possibles, le seul assurant la victoire est de manger le carré en haut à droite.

---

- Pour la variante de Nim, c'est foutu ! Quelle que soit notre stratégie, elle sera perdante...

- Enfin, pour le morpion, la victoire tend les bras au joueur 1. Et, sans surprise, son premier mouvement doit être de prendre<br>le milieu.


{{%/section%}}

---

{{%section%}}

## Algorithme du minimax

---

Algorithme star pour les jeux. C'est ce type d'algorithme que Deep Blue a utilisé<br>pour battre  Kasaparov en 1997.

---

{{< slide  background-image="/Kasparov.png" background-size="contain" background-transition="concave">}}


---

Le principe de l'algo est proche de celui de l'attracteur, mais il est plus souple et permet surtout de n'explorer qu'une petite partie de l'arène (au détriment de sa performance).

---

Le plus grand changement par rapport au raisonnement sur l'attracteur : on transforme<br>le graphe de l'arêne en **arbre**.

---

{{< slide  background-image="/morpionarbre.png" background-size="contain" background-transition="concave">}}

---


- Avantage ?

- Inconvénient ?

---

Le but va être de trouver un chemin entre la racine de l'arbre et une feuille gagnante (victoire finale).

---

L'idée est, comme pour l'attracteur,<br>de partir de la situation finale et de remonter récursivement tour par tour.

On score chaque feuille terminale<br>avec une valeur de $+\infty$ si le joueur 1 gagne<br>et de $-\infty$ si c'est le joueur 2.

---

On remonte ensuite niveau par niveau :

- si c'est le tour du joueur 1, on choisi le sommet au plus grand score (**max**)
- si c'est au joueur 2, on choisi le sommet au plus petit score (**min**)

Chaque joueur simulé joue bien ainsi<br>de manière optimale.

---

L'intérêt majeur de minimax est la possibilité<br>de partir de n'importe quel niveau<br>et pas seulement des positions finales !


On peut donce se contenter de  regarder<br>seulement quelques coups à l'avance. 

<br>

{{%fragment%}}<span style="font-weight:normal">Quel est l'intérêt ?</span>{{%/fragment%}}

---


Mais pour se limiter à une certaine profondeur dans l'arbre, il faut pouvoir scorer<br>les sommets du niveau de départ !

<br>

On utilise alors une **heuristique**.

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;padding: 20px 0px 30px 0px; font-size:40px">
Une heuristique est une méthode de calcul qui fournit rapidement une solution réalisable,<br><span>pas nécessairement optimale ou exacte</span>,<br>pour un problème d’optimisation difficile.<br>
Une heuristique est donc un compromis entre d’un côté l’optimalité (trouver la meilleure solution) et/ou la complétude (trouver toutes les solutions) de l’algorithme et de l’autre côté sa vitesse.
</div></div>

---

Exemples :

Au morpion, si c'est au tour du joueur 1, on peut compter le nombre de diagonales encore possibles pour le joueur 1 et soustraire le nombre de celles encore possibles pour le joueur 2.

---

{{< slide  background-video="/gifmorp.mp4" background-size="100%" background-transition="concave">}}


---


{{< runpython lang="python" height="600" mode="toggle" file="morpionminimax.py">}}
{{< /runpython >}}

---

L'arbre total du morpion n'est pas si gros&nbsp;:<br>le **facteur de ramification** $b$ est de 5 en moyenne et il y a au plus 9 niveaux (9 coups),<br>ce qui donne $\approx 5^9 = 1\\,953\\,125$ 

Aux échecs, $b\approx35$ et un partie dure en moyenne 100 coups, ce qui donne $b^m\approx10^{54}$<br>sommets à inspecter... 

---

Minimax inspecte en réalité environ 4 fois moins de sommets que les deux millions prédits (beaucoup de parties se terminent<br>avant le neuvième coup). 

---


Il en inspecte néanmoins beaucoup trop puisqu'il n'y a que $9!=362\\,880$ coups possibles<br>si l'ordi commence. 

Cela illustre le fait qu'un arbre contient beaucoup de sommets redondants par rapport au graphe<br>du jeu dont il est tiré (c'est le prix à payer<br>pour casser les cycles).


{{%/section%}}

---

{{%section%}}

## Problème du sac-à-dos

---

Le problème du sac-à-dos est<br>un probème clé d'optimisation.

Il s'agit de choisir des objets ayant une certaine valeur et un certain poids pour les mettre dans<br>un sac ayant une capacité maximum<br>(un poids à ne pas dépasser).

On souhaite obtenir le sac de plus grande valeur.

---

On ne s'occupe ici que de la version la plus simple du problème dite **knapsack 0-1** où un objet est soit présent une seule fois dans le sac, soit absent.

---

Le problème du sac-à-dos est un problème d'optimisation sous contrainte et une foule de défis scientifiques et industriels peuvent se mettre sous cette forme. Son importance est colossale.

---

Supposons que l'on ait $n$ objets.


Un algorithme force brute consiste<br>à étudier les ... possibilités.

Et dès qu'il s'agit d'explorer un ensemble de combinaisons, la récursivité est l'outil de choix.

---

Supposons que l'on cherche à placer les objets suivants dans un sac de capacité 900.

| objets      |  🥏  |  🎺 |   🥊  |  🧸  |  🪠  |  ⏰  |
|-------------|:---:|:--:|:----:|:---:|:---:|:---:|
| valeurs $v$ |  5  | 50 |  65  |  20 |  10 |  12 |
| poids $p$   | 320 |  700 | 845 | 180 | 70 | 420 |

---

{{< slide  background-image="/arbresac.png" background-size="contain" background-transition="concave">}}


---

```python
def KS(v,p,c,i,valeur,poids):
    n = len(v)
    if i == n: # cas de base (i = n-ième objet)
        if poids > c:
            return 0
        else:
            return valeur
    else:
        valeurAvec = valeur + v[i]
        poidsAvec = poids + p[i]
        return max(KS(v,p,c,i+1,valeur,poids),KS(v,p,c,i+1,valeurAvec,poidsAvec))
```

---

{{< slide  background-image="/arbresacsol.png" background-size="contain" background-transition="concave">}}

---

C'est bien sûr trop long si le nombre<br>d'objets devient conséquent.

Pour accélérer les choses, on peut se tourner vers une **stratégie gloutonne** (stratégie étape par étape où un critère de classement permet de sélectionner le prochain objet à ajouter).


La complexité devient alors ...

---

Le ratio valeur/poids de chaque objet<br>semble un bon critère.

| objets      | 🥏 |  🎺 | 🥊 | 🧸 |  🪠 | ⏰  |
|-------------|:-:|:--:|:-:|:-:|:--:|:--:|
| ratio $v/p$ | 1/64 |  1/14 | 1/13 | 1/9 | 1/7 | 1/35 |

---

Problème : ça ne marche pas forcément...

Ici, on se retrouve avec 🪠 et 🧸 dans le sac<br>pour une valeur de 30€ ce qui n'est<br>évidemment pas optimal.

---

Une autre démarche consiste à construire l'abre binaire comme pour l'approche force brute mais en l'élaguant au fur et à mesure quand des branches ne peuvent plus donner la solution.

C'est la méthode  “séparation et évaluation”<br>(branch and bond ou BB en anglais).

---

Ici, deux élagages possibles :
- lorsque tout objet ajouté dépasse la capacité, pas la peine d'aller plus loin.
- et si la valeur maximale du sous-arbre est inférieure à la valeur trouvée par l'approche gloutonne, pas la peine non plus d'aller plus loin.

On se sert donc ici de l'approche gloutonne<br>comme d'une ...

---

{{< slide  background-image="/arbresacbb.png" background-size="contain" background-transition="concave">}}

---

[Exemples tirés du TP](https://colab.research.google.com/drive/1tEKgcwUvv6mA_LXZS0S9iNB2a4bWVU_R?usp=sharing)


{{%/section%}}

---

[Retour site](https://info-tsi-vieljeux.github.io/semestre_3/tp13/)