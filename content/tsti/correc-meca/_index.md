+++
title = "Correction"
outputs = ["Reveal"]
+++

<style>
ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:
}

ul li {
text-indent: -1em;
padding-left: 1em;
}
</style>

{{%section%}}

# Exercice 1

![](/exoavion0.png)

---

{{< slide  background-image="/exoavion1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/exoavion2.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/exoavion3.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/exoavion4.png" background-size="contain" background-transition="concave">}}

---

![](/exoavion5.png)

- direction : <span style="color:green;font-weight:bold">horizontale</span>
- sens : <span style="color:green;font-weight:bold">vers l'avant</span>


---

![](/exoavion7.png)

![](/exoavion6.png)

---

![](/exoavion8.png)

Principe fondamentale de la dynamique :

$m\vec{a} = \vec{f} + \vec{F_T}  + \vec{P} + \vec{R}$

Comme le mouvement est horizontal, les forces verticales se compensent : $\vec{P}+\vec{R}=\vec{0}$

Et on néglige les frottement : $f\approx 0$

Conclusion : $m\vec{a} = \vec{F_T} \Rightarrow F_T=m\times a$

---

![](/exoavion9.png)

Prenons le cas où l'avion est le plus lourd<br>(au décollage) :

$
\begin{aligned}
F_T &= m\times a\\\\
&= \pu{73500}\times 0,585 \\\\
&= \pu{42,8 kN}
\end{aligned}
$

{{%/section%}}

---

{{%section%}}

# Exercice 2

![](/exovtt0.png)

---

{{< slide  background-image="/exovtt1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/exovtt2.png" background-size="contain" background-transition="concave">}}

---

![](/exovtt3.png)

$
\begin{aligned}
v &= \frac{d}{\Delta t}\\\\
& = \frac{\pu{7,54E3 m}}{\pu{30 min} \times \pu{60 s/min}}\\\\
&= \pu{4,2 m*s-1}
\end{aligned}
$


---

![](/exovtt4.png)

Le travail d'une force est égal au produit de la force par le déplacement dans la direction de cette force.

$W(\vec{P} )= \vec{P}\cdot\vec{AB}$

Donc dans le cas du poids :

$W(\vec{P} )= -mg\Delta z$

---

![](/exovtt5.png)

$
\begin{aligned}
W(\vec{P} )&= -85\times9,8\times 5,8\cdot 10^2\\\\
 &=\pu{-4,8E5 J}
 \end{aligned}
$

Le travail du poids est négatif donc <b>résistant</b>.<br>Il agit en effet ici contre le mouvement<br>étant donné que le vététiste grimpe.

---

{{< slide  background-image="/exovtt7.png" background-size="contain" background-transition="concave">}}

---

![](/exovtt6.png)

$P_{\text{apportée}} = 111 + 111\times160\\% = \pu{289 W}$

$E_{\text{apportée}}  = P_{\text{apportée}}\times \Delta t$

---

![](/exovtt8.png)

$
\begin{aligned}
E_\text{air} &= P_\text{air}\times \Delta t\\\\
&= k \times v^3\times \Delta t
 \end{aligned}
$


---

![](/exovtt9.png)

Le bilan d'énergie consiste à <b>comparer</b><br><span style="color:red;font-weight:normal;">l'énergie apporté $E_\text{apportée}$ d'un côté</span><br><span style="color:blue;font-weight:normal;">à l'énergie perdue $E_\text{perdue}$ de l'autre</span>.


---

<div style="color:red">
Du côté positif : 

$E_\text{apportée} = 289\times 1800 = \pu{5,2E5 J}$
</div>

---

<p style="color:blue">
Du côté négatif, l'énergie est perdue<br>de deux façons : 
<ul style="color:blue">
<li> par les frottements,</li>
<li> et surtout par le travail du poids.</li>
</ul>
</p>

---

<p style="color:blue">
$
\begin{aligned}
E_\text{air} &=  \pu{0,25 W*s^3*m-3}\times (\pu{4,2 m*s-1})^3\times \pu{1800 s}\\\\
&= \pu{3,3E4 J}
 \end{aligned}
$
</p>

---

<p style="color:blue">
$
\begin{aligned}
E_\text{perdue} &= E_\text{air} + |W(\vec{P})|\\\\
&= \pu{3,3E4 J}+ \pu{4,8E5 J}\\\\
&= \pu{5,1E5 J}
 \end{aligned}
$

---

Finalement <span style="color:red;font-weight:normal;">$E_\text{apportée}$</span> $>$ <span style="color:blue;font-weight:normal;"> $E_\text{perdue}$ </span>, le vététiste peut donc parvenir à son but (il a assez d'énergie pour).

---

![](/exovtt10.png)

![](/exovtt11.png)

---

On a négligé la résistance au roulement dans ce traitement, on peut supposer qu'en les prenant en compte, le temps nécessaire augmente de 5 min.


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tsti2d/mecanique/)