+++
title = "Titrages"
outputs = ["Reveal"]
[reveal_hugo]
theme = "league"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {
border: none !important;
}

.imp {
font-weight:bold;color:#FF968D;
}

li {
color: #fff;
}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: outside;
color:#fff;
}

span {
font-weight:normal;
}

</style>


{{%section%}}

# Titrages

---

Les <span class="imp">titrages</span> sont des méthodes de <span class="imp">dosage</span> (détermination d'une quantité de matière inconnue) <span class="imp">destructive</span> utilisant une <span class="imp">transformation chimique</span>.

---

La <span class="imp">réaction support d'un titrage</span> doit être :

<ul>
<li class="fragment imp">totale</li>
<li class="fragment imp">rapide</li>
<li class="fragment imp">unique</li>
</ul>

---

<u>Rq</u> : 

en première, la réaction support du titrage<br>était une <pan class="fragment"><span class="imp">oxydoréduction</span>.</span>

---

## Montage :

---

{{< slide  background-image="/montagetitrageacompleter.png" background-size="contain" background-transition="concave-in none-out">}}

---

{{< slide  background-image="/montagetitrage.png" background-size="contain" background-transition="none-in concave-out">}}

---

La détermination de la quantité de matière du réactif titré repose sur le répérage de l'<span class="imp">équivalence</span>. 

---

<u>Rq</u> :

En première, le repérage de l'équivalence<br>se fait par <span class="fragment"><span class="imp">suivi colorimétrique</span>.</span>


---

<ul>
<li><span style="color:#aaa;">Avant l'équivalence :</span> <span class="fragment">le titrant est limitant</span></li>
<br>
<li><span style="color:#aaa;">À l'équivalence :</span> <span class="fragment">il y a <span class="imp">changement de réactif limitant</span></span></li>
<br>
<li><span style="color:#aaa;">Après l'équivalence :</span> <span class="fragment">le titré est limitant</span>
</li>
</ul>

---

Supposons que la réaction support du titrage est :

$$\ce{a A + b B -> \ldots}$$

où A est le réactif titré et B est le réactif titrant.

---

Comment évoluent les quantités de matière<br>dans le mélange réactionnel en fonction<br>du volume de titrant ajouté ?

---

{{< slide  background-image="/evtitrage.png" background-size="contain" background-transition="concave">}}

---

À l'équivalence, le mélange est en<br><span class="fragment"><span class="imp">proportions stœchiométriques</span> :</span>

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;padding:10px 50px 0px 50px;border: solid 5px #FF968D; border-radius: 15px;font-size:1.5em;width:fit-content;">
<div>
$$
\frac{n_\ce{A}}{a}=\frac{n_{\ce{B},E}}{b}
$$
</div>
</div>

---

<div  style="position:relative;margin:auto;padding:10px 50px 0px 50px;border: solid 5px #FF968D; border-radius: 15px;font-size:1.5em;width:fit-content;">
<div>
$$
\frac{C_\mathrm{A} V_\mathrm{A}}{a}=\frac{C_\mathrm{B} \color{#FFF056}V_E}{b}
$$
</div>
</div>

---

En terminale, on ajoute les réactions acide-base<br>comme support de titrage et deux types de suivi :

<ul>
<li class="fragment imp">pH-métrique</li>
<li class="fragment imp">conductimétrique</li>
</ul>

{{% /section %}}

---

{{% section %}}

## Titrage pH-métrique

---

La réaction support du titrage est une réaction acide-base et le suivi est pH-métrique (on relève le pH<br>en fonction du volume de titrant ajouté).

---

{{< slide  background-image="/montagephmetrique.png" background-size="contain" background-transition="concave">}}

---

Le repérage de l'équivalence se fait après coup<br>(on ne s'arrête pas à l'équivalence).


<p class="fragment fade-up">
Le passage par l'équivalence correspond à<br>un <span class="imp">saut de pH</span> sur la courbe $\mathrm{pH}=f(V_B)$ obtenue.
</p>


{{%note%}}
L'utilisation d'un indicateur coloré d'acidité peut permettre de repérer le saut sur un premier<br>titrage rapide. On recommence ensuite le titrage<br>en augmentant la précision autour du saut.
{{%/note%}}

---

{{< slide  background-image="/differentstitrages.png" background-size="contain" background-transition="concave">}}

---

Deux méthodes permettent de<br>repérer précisément $V_E$ :

<ul>
<li class="fragment imp">la méthode de la dérivée</li>
<li class="fragment imp">la méthode des tangentes</li>
</ul>

---

### Méthode de la dérivée

<br>

La dérivée de $\mathrm{pH}(V_B)$ passe par un maximum<br>au niveau du saut (point d'inflexion). 

---

{{< slide  background-image="/methderivee.png" background-size="contain" background-transition="concave">}}

---

### Méthode des tangentes

---

{{< slide  background-video="/tangentes.mp4" background-size="contain" background-transition="concave">}}


{{% /section %}}

---

{{% section %}}

## Titrage conductimétrique

---

Comme son nom l'indique, un tel titrage<br>est suivi par conductimétrie.

---

{{< slide  background-image="/montageconductimetrique.png" background-size="contain" background-transition="concave">}}

---

<u>Principe</u> :

Si les conductivités du titrant et du titré sont différentes, l'équivalence sera repérable par une <span class="imp">rupture de pente</span> dans la courbe $\sigma=f(V_B)$.

---

{{< slide  background-image="/titragecond.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/titragecond2.png" background-size="contain" background-transition="concave">}}

---

<u>Méthode pour déterminer l'équivalence</u> :

On trace les deux droites obtenues en excluant<br>les points trop près de la rupture. Les coordonnées<br>du point d'intersection donne le volume équivalent<br>et la conductivité à l'équivalence.

---

{{< slide  background-image="/detveqcond.png" background-size="contain" background-transition="concave">}}

---

Exemple d'une courbe donnée à l'exercice<br>"Eau de Quinton" tombé en 2025

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/extitcond.png" style="box-shadow:none;background:none;">
</div>

{{%note%}}
V_E = 18,0 mL
{{%/note%}}

---

⚠️

On ajoute de l'eau à la solution titrée pour atténuer l'effet de la dilution due à l'ajout du volume de titrant.

---

{{< slide  background-image="/conductdilu.png" background-size="contain" background-transition="concave">}}

---

Exemple du titrage d'une solution<br>de chlorure de sodium $\ce{(Na+ + Cl^-)}$<br>par une solution de nitrate d'argent $\ce{(Ag+ + NO3^-)}$.

<br>

<p style="color:#aaa;">
Données :
</p>

<ul style="color:#aaa;">
<li style="color:#aaa;">$\lambda_\ce{Na+}=\pu{5,0 mS*m^2*mol-1}$</li>
<li style="color:#aaa;">$\lambda_\ce{Cl-}=\pu{7,6 mS*m^2*mol-1}$</li>
<li style="color:#aaa;">$\lambda_\ce{Ag+}=\pu{6,2 mS*m^2*mol-1}$</li>
<li style="color:#aaa;">$\lambda_\ce{NO3^-}=\pu{7,1 mS*m^2*mol-1}$</li>
</ul>

{{%note%}}
1 mS m2 mol−1 = 10 mS cm−1 L mol−1
{{%/note%}}

---

Prévoir la courbe de titrage obtenue.

<br>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
 <img src="/reflpentes.png" style="box-shadow:none;background:none;">
</div> 

---

Exemple du titrage d'une solution<br>d'acide éthanoïque $\ce{CH3COOH (aq)}$<br>par une solution d'hydroxyde de sodium $\ce{(Na+ + HO^-)}$.

<br>

<p style="color:#aaa;">
Données :
</p>

<ul style="color:#aaa;">
<li style="color:#aaa;">$\lambda_\ce{Na+}=\pu{5,0 mS*m^2*mol-1}$</li>
<li style="color:#aaa;">$\lambda_\ce{HO-}=\pu{7,6 mS*m^2*mol-1}$</li>
<li style="color:#aaa;">$\lambda_\ce{CH3COO-}=\pu{4,1 mS*m^2*mol-1}$</li>
</ul>


---

Prévoir la courbe de titrage obtenue.

<br>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
 <img src="/reflpentes2.png" style="box-shadow:none;background:none;">
</div> 

{{% /section %}}

---

{{% section %}}

# Densité<br>d'une solution<br>et titre massique

---

<b style="color:#56C1FF;">Densité $d$ d'une solution</b> :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;padding:10px 50px 0px 50px;border: solid 5px #56C1FF; border-radius: 15px;font-size:1.5em;width:fit-content;">
<div>
$$
d=\frac{\rho_\text{solution}}{\rho_\text{eau}}
$$
</div>
</div>

<br>

<p class="fragment fade-up">Unité ?</p>

---

Le <span class="imp">titre massique $w$</span> d'un soluté est le quotient de la masse de soluté apporté par la masse de solution :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;padding:10px 50px 0px 50px;border: solid 5px #FF968D; border-radius: 15px;font-size:1.5em;width:fit-content;">
<div>
$$
w=\frac{m_\text{soluté}}{m_\text{solution}}
$$
</div>
</div>

<br>

<p class="fragment fade-up">Unité ?</p>

---

On exprime souvent le titre en pourcentage.

On l'appelle d'ailleurs parfois<br>pourcentage massique<br>mais il peut aussi être<br>appelé teneur massique.

{{%note%}}
Souvent exprimé en pourcentage ou défini comme la masse de X pour 100 g de solution (mais attention, pas une masse !!)
{{%/note%}}

{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/titrages/)