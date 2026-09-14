+++
title = "Changement d'état"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#00A2FF;}

span {font-weight:normal;color:white;}

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



{{% section %}}

# Transformation physique

## Les changements d'état

---

{{< slide  background-image="/chgtetat0.png" background-size="50%" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/chgtetats.png" background-size="50%" background-transition="fade-in concave-out">}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/YH2Lfc1KLQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/jX9pskbKSw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{< slide  background-image="/condiode.png" background-size="contain" background-transition="concave">}}


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/oaDkph9yQBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

Équation d'un changement d'état :

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#FF644E;padding:15px 10px 20px 10px; width:content; color:white">
espèce chimique (état 1) $\rightarrow$ espèce chimique (état 2)
</div>
</div>

<p class="fragment fade-up">
Avec comme états possibles :
</p>

<ul>
<li class="fragment fade-up">solide : (s)</li>
<li class="fragment fade-up">liquide : ($\ell$)</li>
<li class="fragment fade-up">gazeux : (g)</li>
</ul>

<p class="fragment fade-up">Rq : l'espèce chimique reste la même !</p>

---

Exemples :  

Équation de la sublimation du $\ce{CO2}$

<p class="fragment" style="color:#1DB100">$$\ce{CO2 (s) -> CO2 (g)}$$</p>


---

Équation de la liquéfaction du méthane $\ce{CH4}$

<p class="fragment" style="color:#1DB100">$$\ce{CH4 (g) -> CH4 (\ell)}$$</p>


{{% /section %}}

---

{{% section %}}

### Modélisation microscopique

---

{{< slide  background-image="/chgtetatmicro.png" background-size="contain" background-transition="concave">}}

---

<ul style="color:white;">

<li>L'état solide est <span class="fragment imp">condensé</span> et <span class="fragment imp">organisé</span>.<br>
<span class="fragment">Les entités ont des positions figées les unes par rapport aux autres (mais peuvent remuer autour de ces positions).</span><br>
<span class="fragment">L'énergie de liaison entre entités est <span class="fragment imp">grande</span>.</span></li>

</ul>

---

<ul style="color:white;">

<li>
L'état liquide est <span class="fragment imp">condensé</span> et <span class="fragment imp">désorganisé</span>. <br><span class="fragment">Les entités n'ont plus de positions figées.</span><br>
<span class="fragment">L'énergie de liaison entre entités est <span class="fragment imp">toujours grande mais moins que pour l'état solide</span>.</span>
</li>

</ul>

---

<ul style="color:white;">

<li>
L'état gazeux est <span class="fragment imp">dispersé</span> et <span class="fragment imp">désordonné</span>.<br>
<span class="fragment">L'énergie de liaison entre entités est <span class="fragment imp">faible</span>.</span>
</li>

</ul>


---

Est-ce que le [sucre](https://pubchem.ncbi.nlm.nih.gov/compound/5988) fond dans le café ?

<img src="/sucrecaffe.png" style="border-radius:20px">

{{%note%}}
Cliquer sur le lien (qui sert de source à wikipedia) et descendre.
Le melting point est à 185,5 °C. Conclusion ?
{{%/note%}}

---


<span class="imp" style="color:#FF644E; font-size:80px">⚠︎</span>

Ne pas confondre fusion et dissolution.

---

{{< slide  background-image="/fusionmicro.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/dissolutionmicro.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/chgtetat.mp4" background-size="contain" background-transition="concave">}}


{{% /section %}}

---

{{% section %}}

### Transferts thermiques lors d'un changement d'état


---

#### Expérience :

<div style="text-align:left;color:gray;border: solid gray 5px; margin: auto; padding:10px">On chauffe 1,0 kg d'eau glacée sortie<br>du congélateur dans un micro-onde<br> délivrant une puissance $P=\pu{800 W}$ à l'eau.<br>
On mesure le temps $t$ et la température<br>de l'eau $T$ pendant le chauffage.</div>

<br>

{{% fragment %}}<span style="font-weight:normal">À quoi va ressembler la courbe $T=f(t)$&nbsp;?</span>{{% /fragment %}}

---
{{< slide  background-image="/evolutionBW.png" background-size="90%" background-transition="concave">}}

---

Pendant les changements d'état,<br>l'énergie apportée n'augmente pas la température<br>$\Rightarrow$ **il faut de l'énergie pour changer d'état**<br>
(vers un état moins condensé).

---

Pourquoi a-t-on généralement froid<br>en sortant de la mer ou de la douche ? 

<p class="fragment" style="font-weight:normal;color:#1DB100;">Le passage de l'eau de l'état liquide à l'état gazeux nécessite de l'énergie que l'eau prend à son environnement (ce qui le refroidit).</p>

<p class="fragment" style="font-weight:normal;color:#1DB100;">On dit que ce changement d'état est <span class="imp">endothermique</span>.</p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/YtsBFn2tv1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


{{%note%}}
De la même façon, on peut refroidir une boisson en la mettant dans un linge mouillé, le tout laissé au soleil (pour que ça s'évapore).
{{%/note%}}

---

Changements d'état <span class="imp">endothermiques</span><br>
(= qui nécessitent de l'énergie pour se faire, refroidissant ainsi l'environnement<br>en récupérant son énergie thermique) :
<ul class="imp">
<li class="fragment">vaporisation</li>
<li class="fragment">fusion</li>
<li class="fragment">sublimation</li>
</ul>

---

Qu'ont en commun<br>les 3 changements d'état endothermiques ?

<p class="fragment fade-up">Voyez-vous une explication microscopique ?</p>

<span class="fragment" style="color:#1DB100">Ils correspondent au passage vers un état moins lié<br>(où les énergies de liaison entre entités sont<br>moins grandes) or il faut de l'énergie pour<br>libérer les entités de leurs chaînes.

---

À l'inverse, que se passe-t-il<br>(en terme d'énergie)<br>lors d'une liquéfaction<br>ou d'une solidification ?

<p class="fragment" style="font-weight:normal;color:#1DB100">De l'énergie thermique est libérée&nbsp;!</p>

<p class="fragment" style="font-weight:normal;color:#1DB100">Cette fois-ci, la transformation est <span class="imp" style="color:#FF644E;">exothermique</span>.</p>

---

C'est le principe d'une chaudière à condensation&nbsp;:

récupérer l'énergie libérée lors de la condensation de la vapeur d'eau permet d'améliorer le rendement.

---

{{< slide  background-image="/chaudclasschaudcond.png" background-size="contain" background-transition="concave">}}

---

Et cela explique aussi comment les bouillottes "magiques" chauffent.

<div style="position:relative;margin:auto;width:40%;">
<img src="/bouillotte.png" style="background:none;">
</div>

---

{{< slide  background-video="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cf/Heating_pad_in_action.ogv/Heating_pad_in_action.ogv.720p.vp9.webm" background-size="contain" background-transition="concave">}}

---

Changements d'état <span class="imp" style="color:#FF644E">exothermiques</span><br>
(= qui fournissent de l'énergie,<br>réchauffant ainsi l'environnement<br>en lui cédant de l'énergie thermique) :
<ul class="imp" style="color:#FF644E">
<li class="fragment">liquéfaction</li>
<li class="fragment">solidification</li>
<li class="fragment">condensation</li>
</ul>

{{%/section%}}

---

{{%section%}}

### Énergie massique<br>de changement d'état

---


<div style="display: flex; justify-content: center; align-items: center; height: 100%; border: solid 5px #FF644E;">
<div style="padding:15px 10px 20px 10px; width:content; color:white">
L'<span class="imp" style="color:#FF644E">énergie massique de changement d'état $L$</span><br>d'une espèce chimique est l'énergie absorbée<br>(si elle est positive) ou cédée (si négative) lorsque 1&nbsp;kg de cette espèce chimique change d'état.
</div>
</div>

<br>

<p class="fragment">unité : <span class="fragment imp" style="color:#FF644E">$\pu{J*kg-1}$</span></p>

---

<span class="imp" style="color:#FF644E">$L_{\text{état 1}\rightarrow\text{état 2}} = -L_{\text{état 2}\rightarrow\text{état 1}}$</span>

<br>

<p class="fragment">
Exemple :<br>pour une espèce chimique donnée $L_{\text{vaporisation}} = -L_{\text{liquéfaction}}$
</p>


---

Pour l'eau :

<ul style="color:white">
<li>$L_{fus} = \pu{334 kJ*kg-1}$</li>
<li>$L_{vap} = \pu{2265 kJ*kg-1}$</li>
</ul>

<br>

<span class="fragment">Que vaut $L_{sol}$ ?</span>
<span class="fragment" style="color:#1DB100">$\pu{-334 kJ*kg-1}$</span>

---

Un échantillon de masse $m$<br>d'une espèce chimique change d'état.<br>
L'énergie massique du changement d'état vaut $L$.

<p class="fragment">Que vaut l'énergie thermique $Q$ échangée ?</p>

<br>

<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#FF644E;padding:15px 30px 20px 30px; width:content; color:white;border-radius:15px;">
$$Q = m\times L $$
</div>
</div>

---


Exemple :



Que vaut l'énergie thermique échangée $Q$<br>lorsque 500 g de fer fondu se solidifie à 1538°C ?


Donnée : $L_{fus} = \pu{247 kJ*kg-1}$

---

<p style="color:#1DB100">
$Q = m\times L_{sol} = m\times(-L_{fus})$
</p>

<p style="color:#1DB100">
$Q = - 0,500\times 247 \approx -\pu{124 kJ}$
</p>



{{% /section %}}

---

[Retour site](https://coursphychi.github.io/2nde/chgt_etat/)