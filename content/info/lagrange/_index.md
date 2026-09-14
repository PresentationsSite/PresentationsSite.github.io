+++
title = "Interpolation"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



## Interpolation polynomiale<br>de Lagrange

---

{{% section %}}

L'idée est d'approximer une fonction<br>par un polynôme passant par un ensemble de points $\\{(x_i,f(x_i))\\}$ sur la courbe de la fonction.

---

{{< slide  background-image="/interpvierge.png" background-size="content" background-transition="concave">}}

---

Pur ça, on utilise cette formule :

$$
P(x) = \sum\_{j=1}^n f(x_j)\left(\color{purple}\prod\_{i=1,i≠j}^n \frac{x-x\_i}{x\_j-x\_i}\color{black}\right)
$$

---

Pour notre exemple à 3 points, on obtient :
$$
\begin{aligned}
P(x) = &&y\_1\color{purple}\frac{(x-x\_2)(x-x\_3)}{(x\_1-x\_2)(x\_1-x\_3)}\color{black}\\\\&+&y\_2\color{purple}\frac{(x-x\_1)(x-x\_3)}{(x\_2-x\_1)(x\_2-x\_3)}\color{black}\\\\&+&y\_3\color{purple}\frac{(x-x\_1)(x-x\_2)}{(x\_3-x\_1)(x\_3-x\_2)}
\end{aligned}
$$

{{%fragment%}}<span style="font-weight:normal">Que vaut $P(x_1)$, $P(x_2)$, $P(x_3)$ ?</span>{{%/fragment%}}

---

{{< slide  background-image="/interp3.png" background-size="content" background-transition="concave">}}


---

Problème : augmenter le nombre de points<br>afin d'améliorer la fidélité de l'interpolation<br>peut générer des instabilités !

---

{{< slide  background-image="/interp5.png" background-size="content" background-transition="fade">}}

---

{{< slide  background-image="/interp10.png" background-size="content" background-transition="fade">}}

---

{{< slide  background-image="/interp20.png" background-size="content" background-transition="fade">}}

{{% /section %}}

---

{{% section %}}

L'idée est alors utiliser<br>une **interpolation par morceaux**.

On découpe l'intervalle $I$ de départ<br>en $N$ morceaux et on interpole la fonction<br>pour chaque intervalle de taille $I/N$<br>sur les nœuds qu'il contient.


---

Choisissons 15 nœuds sur la courbe<br>et découpons l'intervalle en 14.

On peut considérer :

- soit que chaque intervalle contient un seul nœud : on interpole alors par un polynôme<br>de **degré 0**.

---

{{< slide  background-image="/interpmorc0.png" background-size="70%" background-transition="concave">}}

---

- soit que chaque intervalle contient deux nœuds : on interpole alors par un polynôme de **degré 1**.

---

{{< slide  background-image="/interpmorc1.png" background-size="70%" background-transition="concave">}}

---

Si on veut interpoler à l'ordre supérieur,<br>il faut garder 3 nœuds par intervalle, ce qui oblige, pour le même nombre de nœuds,<br>à grandir les intervalles.

---

{{< slide  background-image="/interpmorc2.png" background-size="70%" background-transition="concave">}}

{{% /section %}}

---

Suite à une mise-à-jour de Colab,<br>il faut exécuter la commande suivante<br>(à écrire dans une cellule seule)
```
!apt-get update
```
avant d'éxécuter
```
!sudo apt install cm-super dvipng texlive-latex-extra texlive-latex-recommended
```


---

[Retour site](https://info-tsi-vieljeux.github.io/semestre_3/tp11/#interpolation-polynomiale-de-lagrange)