+++
title = "Correction exo robot"
outputs = ["Reveal"]
+++


## Correc exo robot

Extrait d'un sujet de 2022


---
{{%section%}}

1. Nombre d'accus à placer en série et en parallèle.

On sait que pour 1 accu :

$\pu{U = 3,2 V}$ et $\pu{Q = 1100 mA*h}$

Et on veut $\pu{U = 48 V}$ et $\pu{Q = 3300 mA*h}$

---


{{< slide  background-image="/batterieserie.png" background-size="100%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

2. Masse du pack : $\pu{45 \times 38,8 g}$

Combien de chiffres significatifs ?

---

$\pu{1,75 kg}$

{{%/section%}}


---
{{%section%}}

3. Énergie du pack :

<br>
<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:30%;padding: 20px 0px 20px 0px;">
$E = Q\times U$
</div></div>

On connaît les valeurs des deux grandeurs : 

$\pu{Q = 3300 mA*h}$ et $\pu{U = 48 V}$

$\pu{E = Q\times U = 3,300 \times 48 = \ldots}$

chiffres significatifs ? Unité ?

---

$\begin{aligned}
U &= \pu{1,6E2 W*h}\\\\
&= \pu{5,7E5 J}
\end{aligned}$

{{%/section%}}

---

4. N'importe quelle phrase qui dit que c'est mieux d'avoir une meilleure énergie massique et un plus grand nombre de charges/décharges pour un robot.


---

{{%section%}}

5. 

Autonomie :

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:30%;padding: 20px 0px 20px 0px;">
$\displaystyle t = \frac{Q}{I}$
</div></div>

$\displaystyle t=\frac{3,300}{2,8}=\ldots$

Chiffres significatifs ? Unité ?

---

$t=\pu{1,2 h}=\pu{1,2\times 60 min}=\pu{72 min}$

Commentaire : pas terrible...<br>Doit se recharger souvent dans la journée.<br>Ne peut pas aider une personne en continu<br>sur plusieurs heures.

{{%/section%}}

---

6. Équation de la décharge :
<br><br>
- $\ce{FePO4(s) + Li+ + e- -> LiFePO4(s)}$
- $\ce{LiC6(s) -> 6 C(s) + Li+ + e-}$

$\ce{FePO4(s) +LiC6(s) -> LiFePO4(s) + 6 C(s)}$


---

7. 

À la borne -, les électrons sont libérées<br>par l'**oxydation** du réducteur. 

---

{{%section%}}

8. Quantité de matière d'électrons<br>(= nombre de moles) :

$Q = n(\ce{e-}) F$

$\displaystyle \Rightarrow n(\ce{e-})=\frac{Q}{F}$

---

$Q$ doit être en Coulombs !

$Q = \pu{1100 mA*h} = \pu{1,100 A} \times \pu{3600 s} = \pu{3960 C}$

$\displaystyle 
\begin{aligned}
n(\ce{e-})&=\frac{Q}{F}\\\\
&=\frac{3960}{\pu{9,65E4}}\\\\
&=\pu{4,10E-2 mol}
\end{aligned}
$


{{%/section%}}

---

{{%section%}}

9. Masse des électrodes

D'après les demi-équations électroniques, pour chaque mole de $\ce{FePO4}$ et pour chaque mole de $\ce{LiC6}$, il y a une mole d'électrons échangée.

Donc pour pouvoir échanger $n(\ce{e-})$ moles d'électrons, il faut au minimum :

$n(\ce{FePO4})=n(\ce{LiC6})=n(\ce{e-})$

---

On sait que :

<div style="display: flex;justify-content: center;">
<div style = "border:solid black 5px;width:30%;padding: 20px 0px 20px 0px;">
$\displaystyle n = \frac{m}{M}$
</div></div>


On a déterminé les quantités de matière minimales nécessaires, il nous reste à obtenir les masses molaires pour en déduire<br>les masses des électrodes.

---

$\begin{aligned} 
M(\ce{FePO4}) &= M(\ce{Fe}) + M(\ce{P}) + 4\times M(\ce{O}) \\\\
& = 55,8 + 31,0 + 4\times 16,0\\\\
& = \pu{150,8 g*mol-1}
\end{aligned}$

Pourquoi autant de chiffres significatifs ?

---

$\begin{aligned} 
M(\ce{LiC6}) &= M(\ce{Li}) + 6\times M(\ce{C}) \\\\
& = 6,9 + 6\times 12,0\\\\
& = \ldots
\end{aligned}$

---

$\begin{aligned} 
M(\ce{LiC6}) &= M(\ce{Li}) + 6\times M(\ce{C}) \\\\
& = 6,9 + 6\times 12,0\\\\
& = \pu{78,9 g*mol-1}
\end{aligned}$

---

Masses minimales des électrodes :

<br>

$\begin{aligned}
m(\ce{FePO4}) &= n(\ce{e-})\times M(\ce{FePO4}) \\\\
&= 4,10\cdot 10^{-2}\times 150,8\\\\
&= \pu{6,18 g}
\end{aligned}$

<br>

$\begin{aligned}
m(\ce{LiC6}) &= n(\ce{e-})\times M(\ce{LiC6}) \\\\
&= 4,10\cdot 10^{-2}\times 78,9\\\\
&= \pu{3,23 g}
\end{aligned}$

{{%/section%}}


---

[Retour site](https://coursphychi.github.io/tsti2d/piles/)