+++
title = "Conduction thermique"
outputs = ["Reveal"]
+++

<style>
ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}
</style>



# Conduction thermique


---

{{% section %}}

![](/infrarimm.png)

Que nous apprend cette image ?

---

L'immeuble au premier plan est beaucoup mieux **isolé** que celui en arrière plan !

<p class="fragment">Cela se traduit par un plus faible flux thermique à travers sa paroi et ainsi un plus fort écart de température entre l'extérieur et l'intérieur.</p>

{{%/section%}}

---

{{% section %}}

## Flux thermique 

---

Le **flux thermique** à travers une paroi est l'<b>énergie qui traverse cette paroi<br>par unité de temps</b>.<br>

<p class="fragment">Le flux est toujours orienté <b>du chaud vers le froid</b>.</p>


---

{{< slide  background-image="/fluxther.png" background-size="50%" background-transition="concave">}}

---

Le flux thermique $\Phi$ à travers une paroi dépend
<ul>
<li class="fragment">de la surface $S$ de la paroi,</li> 
<li class="fragment">de l'écart de température $\Delta \theta$<br>de part et d'autre de la paroi,</li> 
 <li class="fragment">et de la résistance thermique $R_{th}$ de la paroi.</li> 
 </ul>

---

Flus thermique $\Phi$ à travers la paroi (en W) :

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min;padding: 20px 20px 20px 20px;">
$\displaystyle \Phi = \frac{S \Delta \theta}{R_{th}}=\frac{S\left(\theta_{\text{chaud}}-\theta_{\text{froid}}\right)}{R_{th}}$
</div>
</div>

<br>

<ul class="moyen">
<li>$S$ en $\pu{m2}$</li>
<li>$\theta_{\text{chaud}}$ et $\theta_{\text{froid}}$ en °C ou K</li>
<li>$R_{th}$ en $\pu{K.m^2.W-1}$</li>
</ul>

---

{{< slide  background-image="/poelle.png" background-size="10%" background-transition="concave">}}

En hiver, $\Phi$ donne l'énergie thermique perdue chaque seconde par une habitation.
<br><br><br><br><br><br><br>
Elle doit être compensée par un chauffage<br>de même puissance pour maintenir l'écart de température $\Delta \theta$ entre intérieur et extérieur.


---

{{< slide  background-image="/climatiseur.png" background-size="20%" background-transition="concave">}}

À l'inverse, en été, le flux est souvent en journée<br>de l'extérieur vers l'intérieur.
<br><br><br><br><br><br><br>
Il donne la puissance d'un climatiseur devant maintenir une température intérieure<br>plus fraiche que l'extérieur.

---


<span>Comment faire pour diminuer $\Phi$ ?</span>

<br>

{{%fragment%}}➘ $\Delta \theta${{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">ce qui revient à diminuer son confort thermique</span>{{%/fragment%}}



{{%fragment%}}➘ $S${{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">ce qui revient à avoir des petites ouvertures<br>et le moins de décrochements possible</span>{{%/fragment%}}




{{%fragment%}} ➚ $R_{th}${{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">ce qui revient à améliorer l'isolation</span>{{%/fragment%}}

{{% /section %}}

---

{{% section %}}

## Résistance thermique

---

La résistance thermique $R_{th}$<br>d'une paroi d'$\pu{1 m2}$ dépend :
<ul class="long">
<li>de son épaisseur $e$ (en $\pu{m}$),</li>
<li>de la conductivité thermique $\lambda$ (en $\pu{W * m-1 * K-1}$) du matériau qui la constitue. </li>
</ul>

---

La **conductivité thermique** est une caractéristique intrinsèque d'un matériau traduisant sa capacité à diffuser l'énergie thermique  à travers lui. 

<img src="/tableaulambda.png" height="400px">

---

Expliquez le double vitrage<br>à l'aide du tableau précédent.

---

{{< slide  background-image="/valresth.png" background-size="80%" background-transition="concave">}}

---

{{%youtube vqDbMEdLiCs%}}

---

Comment construire la grandeur $R_{th}$<br>à partir de $e$ et $\lambda$.

---


Pour une paroi homogène :

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min;padding: 20px 20px 20px 20px;">
$\displaystyle R_{th} = \frac{e}{\lambda}$
</div>
</div>

<br>

<ul>
<li> $R_{th}$  en $\pu{m2 * K * W-1}$</li>
<li> $e$ en $\pu{m}$.</li>
<li> $\lambda$ en $\pu{W*K-1*m-1}$ 
</ul>

---
{{< slide  background-image="/superprth.png" background-size="40%" background-transition="concave">}}

Les résistances thermiques<br>de parois superposées s'ajoutent.
<br><br><br><br><br><br><br><br><br><br><br>



{{% /section %}}


---

[Retour site](https://coursphychi.github.io/tsti2d/conduction/)