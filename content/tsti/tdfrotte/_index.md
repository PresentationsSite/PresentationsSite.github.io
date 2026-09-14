+++
title = "Frottements"
outputs = ["Reveal"]
+++




## TD forces de frottement

---

{{%section%}}

### Forces de frottement<br>entre un fluide et un solide


---

On appelle aussi la force d'un fluide sur un solide qui se déplace à travers lui une **force de résistance aérodynamique**.

---

### Partie A :

Chute d'une goutte d'eau colorée dans de l'huile

---

{{< slide  background-video="/huile.mp4" background-size="contain" background-transition="concave" background-video-muted="true">}}

---



Données :

- Les traits rouges sont espacés de 3 cm.

- rayon de la goutte :  $r = \pu{2,0 mm}$
- masse volumique de l’eau colorée :  $\rho_{goutte} = \pu{1,0E3 kg*m-3}$
- masse volumique de l’huile :  $\rho_{huile} = \pu{9,0E2 kg*m-3}$
- pesanteur :  $g = \pu{9,8 m*s-2}$

---

1. Que peut-on dire de l’évolution de la vitesse de la goutte au fur et à mesure de sa chute ?

---

<span style="color:green;font-weight:normal">
1. La vitesse reste approximativement constante.
</span>

---

La **poussée d’Archimède** est une force qui s’oppose au poids et dont la valeur est<br>donnée par la formule suivante :	

$$\pi_A = \rho_{fluide}\times V_{objet}\times g$$

2. Faire le bilan des forces qui s’appliquent<br>sur la goutte pendant sa chute.

3. Calculer la valeur du poids et de la poussée d'Archimède.


---

<span style="color:green;font-weight:normal;">
2.
</span>

<br>

- <span style="color:green;font-weight:normal;">poids $\vec{P}$<br>(vertical vers le bas)</span>
- <span style="color:green;font-weight:normal;">poussée d'archimède $\overrightarrow{\pi_A}$ <br>(verticale vers le haut)</span>
- <span style="color:green;font-weight:normal;">frottements $\vec{f}$<br>(opposés au mouvement<br>donc vertical vers le haut)</span>


---

<span style="color:green;font-weight:normal;">
3.
</span>

<br>

<span style="color:green;font-weight:normal;">
$$
\begin{align}
P&=mg=V\rho_{goutte} \,g = \frac{4}{3}\pi r^3 \rho_{goutte} \,g \\\\
&= \frac{4}{3}\pi \times (\pu{2,0E-3})^3\times(\pu{1,0E3})\times 9,8\\\\
&=\pu{3,3E-4 N}
\end{align}
$$
</span>

---

<span style="color:green;font-weight:normal;">
$$
\begin{align}
\pi_A&=V\rho_{huile} \,g = \frac{4}{3}\pi r^3 \rho_{huile} \,g \\\\
&= \frac{4}{3}\pi \times (\pu{2,0E-3})^3\times(\pu{9,0E2})\times 9,8\\\\
&=\pu{3,0E-4 N}
\end{align}
$$
</span>



---


4. Qu’est-ce que l’application du principe fondamental de la dynamique nous permet de conclure ?

5. Déterminer la valeur de la force de frottement.


---

<span style="color:green;font-weight:normal;">
4.
</span>

<br>

<span style="color:green;font-weight:normal;">
Le mouvement est rectiligne uniforme,<br>donc l'accélération est nulle, ce qui implique, d'après le principe fondamental de la dynamique, que la résultante des forces soit, elle aussi, nulle :
$$\vec{P}+\overrightarrow{\pi_A}+\vec{f}=\vec{0}$$
</span>

---

<span style="color:green;font-weight:normal;">
5.<br>

On en déduit : 


$$P=\pi_A+f$$

Et donc
$$
\begin{align}
&f=P-\pi_A=V(\rho_{goutte}-\rho_{huile})g\\\\
&f=\pu{3,3E-5 N}
\end{align}
$$
</span>


---

### Partie B :

Quel danger représente une pièce de 5 centimes lâchée du haut de la Tour Eiffel ?


---

Pour répondre, on va déterminer comment la force de l'air sur la pièce varie en fonction de sa masse<br>et de sa surface en extrapolant<br>l'expérience du parachutiste.


---

Regardons d'abord comment<br>la force de frottement de l'air<br>dépend de la masse.

<br>

6. Sur le graphe suivant, que peut-on dire<br>des forces qui s'appliquent sur le parachutiste<br>avant qu'il ouvre son parachute ?

---

<div style="text-align:center">                           
<iframe src="plot1.html" width="100%" height="500"></iframe>                                             </div>

---

<p style="color:green;font-weight:normal;">
Le mouvement est rectiligne uniforme,<br>donc, d'après le PFD, les forces se compensent.<br>
$$\Rightarrow ||\vec{F}||=||\vec{P}||$$
</p>

---

7. Tracer la valeur de $P$ en fonction de la vitesse limite $v_{lim}^2$ atteinte avant d'ouvrir le parachute.<br>
Vous pourrez utiliser [plotly](https://chart-studio.plotly.com/create/#/).

8. En déduire la dépendance de la force<br>de frottement avec la vitesse.

---

<p style="color:green;font-weight:normal;">
On obtient des points alignés avec l'origine.<br>
D'où $||\vec{P}||\propto v^2$
Et donc $||\vec{F}||\propto v^2$
</p>


---

Dans le graphe suivant, on a fait varier<br>l'aire du parachutiste sans changer<br>sa masse (fixée à 80 kg).

---

<div style="text-align:center">                           
<iframe src="plot2.html" width="100%" height="500"></iframe>                                             </div>

---

9. Tracer l'aire en fonction de l'inverse de la vitesse limite au carré $1/v_{lim}^2$.


10. Comme pour une même masse, la valeur de la force de frottement doit rester constante, déduire de la question précédente la dépendance de la force avec l'aire.

---

<p style="color:green;font-weight:normal;">
On obtient à nouveau des points<br>alignés avec l'origine.
</p>
<p style="color:green;font-weight:normal;">
D'où $A\propto 1/v^2$ et donc $A\times v^2 = cste$.<br>
Or on sait déjà que $||\vec{F}||\propto v^2$.<br>
Il faut donc aussi que $||\vec{F}||\propto A$ pour avoir<br>une force constante à masse fixée.
</p>

---



11. En supposant pour simplifier que seule la masse et l'aire interviennent dans les frottements (en réalité, la forme joue aussi mais moins), estimer la vitesse limite de la pièce de 5 cts.<br>Peut-elle tuer quelqu'un ?

---

<p style="color:green;font-weight:normal;">
On a $||\vec{F}|| = ||\vec{P}||  \propto m \propto Av^2$

<table style="color:green;font-size:20pt;margin: 0px auto;">
<tr>
<th style="border-right: solid 1px green;"> </th><th style="border-right: solid 1px green;">$m$</th><th>$Av^2$</th>
</tr>
<tr>
<td style="border-right: solid 1px green;"><b>parachutiste</b></td><td style="border-right: solid 1px green;">$\pu{80 kg}$</td><td>$\pu{1 m2}\times \left(\pu{35,1 m/s}\right)^2$</td>
</tr>
<tr>
<td style="border-right: solid 1px green;"><b>pièce de 5 cts</b></td><td style="border-right: solid 1px green;">$\pu{3,92E-3 kg}$</td><td>$\pi \times \left(\frac{\pu{21,25E-3 m}}{2}\right)^2 \times v^2$</td>
</tr>
</table>
</p>

<p style="color:green;font-weight:normal;">
Ça donne $ v \approx \pu{13 m /s} \approx \pu{47 km/h} $
</p>

{{% /section %}}

---

{{%section%}}

### Forces de frottement<br>entre deux solides

---

{{< slide  background-image="/tgvdalle.png" background-size="100%" background-transition="concave">}}


---

Un TGV de 400 tonnes lancé à 324 km/h<br>actionne son freinage d'urgence.

On suppose que la force de frottement<br>est constante pendant le freinage<br>et que l'altitude est constante.

Il faut 3,2 km pour que le TGV s'immobilise !!


---

1. Que dit le théorème de l'énergie cinétique.

2. Faire un bilan des forces.

3. Quelles sont les forces qui travaillent ?

4. Déterminer la valeur de la force $f$ de frottement solide des rails sur le train.

---

<span style="font-weight:normal;color:green">

1.

La variation de l'énergie cinétique d'un corps<br>est égale à la somme des travaux<br>des forces qui s'appliquent sur lui.
$$\Delta E_c = \sum W(\vec{F})$$

</span>

---

<p style="font-weight:normal;color:green">
2. bilan des forces :
<br>
<ul style="font-weight:normal;color:green">
<li>poids (verticale vers le bas)</li>
<li>réaction normale du support<br>(verticale vers le haut)</li>
<li>force de frottement<br>(horizontale, opposée au mouvement)</li>
</ul>

</p>


---

<span style="font-weight:normal;color:green">

3.

Le travail d'une force vaut le produit scalaire entre le vecteur force et le vecteur déplacement.

Ici, le déplacement étant horizontal, ni le poids, ni la réaction normale du support ne travaillent<br>(le produit scalaire vaut zéro).

Donc seule la force de frottement travaille<br>et son travail est résistant.

Rq : la réaction normale du support<br>ne travaille jamais.

</span>

---

<span style="font-weight:normal;color:green">

4. On applique le TEC : 

En appelant $d$ la distance<br>sur laquelle le TGV s'arrête :


$$
\begin{align}
\frac{1}{2}mv_{f}^2-\frac{1}{2}mv_{i}^2&=\vec{f}\cdot\vec{AB}\\\\
&=-fd
\end{align}
$$

</span>

---

<span style="font-weight:normal;color:green">

D'où

$$
0-\frac{1}{2}400\cdot10^3\times(324/3,6)^2=-f\times 3,2\cdot10^3
$$

$$
\begin{align}
\Rightarrow &f = \frac{400\cdot10^3 \times 90^2}{2\times3,2\cdot10^3}\\\\
& f=\pu{5,1E5 N}
\end{align}
$$

</span>

{{% /section %}}

---


[Retour site](https://coursphychi.github.io/tsti2d/mecanique/)