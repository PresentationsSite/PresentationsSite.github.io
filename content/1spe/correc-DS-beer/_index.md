+++
title = "Correction Bleu patenté"
outputs = ["Reveal"]
+++


<style>
img {
border: none !important;
}

.imp {
font-weight:bold;color:#FF644E;
}

li {
color: #5E5E5E;
}
</style>


{{%section%}}

# Correction Bleu patenté

---



On cherche le nombre de verres de sirop pouvant être bus sans dépasser la DJA journalière.

---

Deux choses à déterminer :

1. À quelle quantité de matière la DJA journalière d'un adulte correspond-elle ?

2. Quelle quantité de matière en bleu patenté un verre de sirop contient-il ?

{{%/section%}}

---

{{%section%}}

Le premier point est le plus facile :

<p class="fragment">La DJA du bleu patenté est de 2,5 mg<br>par kg de masse corporelle.</p>

<p class="fragment">Prenons un adulte de 60 kg. Sa consommation journalière ne devra pas dépasser :</p>

<div class="fragment">

$$
\begin{aligned}
m_{max} &= (\pu{60 kg})\times (\pu{2,5 mg/kg})\\\\
&= \pu{1,5E2 mg} \\\\
&= \pu{0,15 g} 
\end{aligned}
$$

</div>

---

Cherchons la quantité de matière $n_{max}$ correspondante :

<div class="fragment">

$$
\begin{aligned}
n_{max} &= \frac{m_{max}}{M}\\\\
& = \frac{\pu{0,15 g}}{\pu{560,7 g*mol-1}}\\\\
& = \pu{2,7E-4 mol}
\end{aligned}
$$

</div>

{{%/section%}}

---

{{%section%}}

Maintenant passons au 2<sup>e</sup> point :<br>
la quantité de bleu patenté dans un verre.

<p class="fragment">Plusieurs étapes pour y arriver :</p>

<ol style="list-style-type: upper-alpha;">
<li class="fragment">Concentration :</li>
<ol style="list-style-type: lower-alpha;">
<li class="fragment">Détermination de la concentration de la solution S</li>
<li class="fragment">Détermination de la concentration du sirop</li>
</ol>
<li class="fragment">Estimation du volume de sirop dans un verre</li>
<li class="fragment">Détermination de la quantité de matière en bleu patenté dans un verre de sirop</li>
</ol>


---

A.a. <b>Détermination<br>de la concentration de la solution S</b>

C'est le cœur de l'exercice !

<p class="fragment">Deux solutions pour l'obtenir : </p>

<ul>
<li class="fragment"> Par lecture graphique. La précision n'a pas besoin d'être extrême dans cet exercice puisqu'on est amené à faire des estimations.</li>
<br>
<li class="fragment"> Par le calcul.</li>

{{%/section%}}

----

{{%section%}}

Solution calculatoire :

<p class="fragment">On commence déjà par dire que la courbe d'étalonnage obtenue confirme que <span class="imp">la loi de Beer-Lambert est respectée sur la gamme étalon</span>. 

<p class="fragment">En effet, on voit sur le graphique que les points de mesure obtenus sont <span class="imp">alignés avec l'origine</span>. </p>

---

L'absorbance $A$ des solutions étalons est donc proportionnelle à leur concentration $C$ : $A=k\times C$

<p class="fragment">De plus, <span class="imp">l'absorbance de la solution S est dans la gamme</span> (puisqu'elle est inférieure à 1,6). <span class="imp">On peut donc lui appliquer la loi de Beer-Lambert !</span></p>

---

Déterminons le coefficient de proportionnalité $k$ :

<p class="fragment">plutôt que de calculer la moyenne des coefficients pour chaque mesure, on peut constater que le point correspondant à S<sub>5</sub> touche la droite. </p>

<p class="fragment">Le rapport $A_5/C_5$ sera donc une bonne estimation du coefficient directeur de la droite (et d'autant meilleure que ce point est éloigné de l'origine).</p>


---

On a donc :

<div class="fragment">

$$
\begin{aligned}
k&\approx\frac{A_5}{C_5}\\\\
&=\frac{\pu{0,16}}{\pu{1,0E-6 mol\*L-1}}\\\\
&=\pu{1,6E5 L*mol-1}
\end{aligned}
$$

</div>

---

On peut maintenant déterminer la concentration $C$ de la solution S sachant que son absorbance mesurée vaut $A=0,75$ :

<div class="fragment">

$$
\begin{aligned}
A&=k\times C\\\\
\Rightarrow C&=\frac{A}{k}\\\\
&= \frac{\pu{}0,75}{\pu{1,6E5 L\*mol-1}}\\\\
&= \pu{4,7E-6 mol*L-1}
\end{aligned}
$$

</div>

---

A.b. <b>Détermination<br>de la concentration du sirop</b>

La concentration en bleu patenté de la solution est donc de $\pu{4,7e-6 mol\*L-1}$ et comme le sirop a été dilué 10 fois pour obtenir S, la concentration<br>du sirop est 10 fois plus grande : 

<div style="position:relative;margin:auto;width:fit-content;border:solid 4px #FF644E;padding:0 50px 0 50px;border-radius:10px">
$$C_{sirop}=\pu{4,7e-5 mol*L-1}$$
</div>

{{%/section%}}

----

{{%section%}}

Solution graphique :

![](/dsbeer.png)

---

On obtient $4,7$ μ$\pu{mol\*L-1}$ de bleu patenté dans la solution et donc $\pu{4,7e-5 mol*L-1}$ pour le sirop

La réponse est cohérente<br>par rapport aux calculs.


{{%/section%}}

---

{{%section%}}

B. Passons au volume de sirop dans un verre :

<p class="fragment">Le volume typique d'un verre est de $\pu{20 cL}$<br>mais le sirop est généralement dilué.</p>

<p class="fragment">Supposons que le sirop est dilué 10 fois<br>(il est généralement recommandé d'avoir<br>1 volume de sirop pour 9 volumes d'eau).</p>

<p class="fragment">Cela fait alors un volume $V_{sirop}=\pu{2,0 cL}$.</p>

<p class="fragment"><u>Rq</u> : on aurait aussi pu dire qu'un verre<br>contient au final la solution S...</p>


{{%/section%}}

---

{{%section%}}

C. On peut enfin déterminer la quantité de matière<br>en bleu patenté contenu dans un verre :

$$
\begin{aligned}
n&=C_{sirop}\times V_{sirop}\\\\
&=\pu{4,7e-5 mol*L-1}\times \pu{2,0e-2 L}\\\\
&=\pu{9,4e-7 mol}
\end{aligned}
$$

---

Or on a vu au début que la quantité journalière à ne pas dépasser était $n_{max}=\pu{2,7e-4 mol}$.

<p class="fragment">Cela représente un nombre de verres : </p>

<div class="fragment">

$$
\left\lfloor\frac{n_{max}}{n}\right\rfloor = \left\lfloor\frac{\pu{2,7e-4 mol}}{\pu{9,4e-7 mol}}\right\rfloor = \pu{2,8E2}
$$

</div>

<p class="fragment">Une personne de 60 kg ne doit donc pas boire plus de 280 verres de sirop par jour pour éviter la toxicité du bleu patenté.</p>

---

<span class="imp">Commentaire</span> (à ne pas oublier car demandé explicitement et donc intervenant dans le barême) : il y a de la marge...

{{%/section%}}

---



[Retour site](https://coursphychi.github.io/1spe/spectro/)
