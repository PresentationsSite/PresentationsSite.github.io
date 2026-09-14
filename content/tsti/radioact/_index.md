+++
title = "Radioactivité"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
span {font-weight:bold;color:#00A2FF;}
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



{{% section %}}
## Radioactivité



---


{{< slide  background-image="/noyau.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/symbchim.png" background-size="contain" background-transition="concave">}}

---

Exprimer le nombre de neutrons N<br>en fonction de A et Z :

{{%fragment%}}N = A-Z{{%/fragment%}}

---

Deux mêmes éléments chimiques (même Z) ayant des nombres de nucléons différents (A différents, donc nombre de neutrons N différents) sont dits

{{%fragment%}}isotopes{{%/fragment%}}


---

Chaque élément chimique<br>peut posséder plusieurs isotopes naturels.

---

Exemple :

Dans un échantillon de carbone pur,<br>on trouve trois isotopes : 

- 98,93% des atomes de carbone présents ont des noyaux à 12 nucléons, du carbone-12 <sup>12</sup>C,
- 1,109% sont des carbone-13 <sup>13</sup>C, 
- et environ 10<sup>-10</sup> % sont des carbone-14 <sup>14</sup>C. 

---

Combien un noyau de carbone-14<br>possède-t-il de neutrons ?

{{%fragment%}}8{{%/fragment%}}


---

Les éléments légers peuvent avoir des isotopes stables (carbone-12 et carbone-13 pour le carbone)<br>et d’autres instables (carbone-14) mais au-delà de Z=83 (le bismuth), plus aucun noyau n’est stable. 

---

Un noyau instable va se désintégrer en noyaux fils<br>plus stables. Parfois, les noyaux fils sont eux-mêmes radioactifs, on a alors une <span>chaîne de désintégration</span> jusqu’à des noyaux stables.

---

{{< slide  background-image="/stabilitenoyau.png" background-size="contain" background-transition="concave">}}

---

{{%youtube clRcF7emyiM%}}

---

#### Radioactivité : 

transformation spontanée de <span>noyaux atomiques instables</span> (dits radionucléides ou radioisotopes)<br>en d'autres noyaux (<span>désintégration</span>) en émettant simultanément des <span>rayonnements</span><br>de particules  ou d'énergie.


---


On peut créer artificiellement des noyaux radioactifs (en bombardant par exemple une cible de neutrons).

À quoi cela peut-il servir ?

{{%fragment%}}De traceurs pour la médecine nucléaire par exemple{{%/fragment%}}

---

{{< slide  background-image="/pet.gif" background-size="contain" background-transition="concave">}}


{{% /section %}}

---

{{% section %}}


## Décroissance radioactive


---

Une population de noyaux radioactifs suit la loi<br>de décroissance exponentielle suivante :
<div style="background-color:#0076BA;padding:10px 10px 15px 10px;width:70%;margin:15%;color:white">
$$N(t)=N_0\exp(-\lambda t)$$
</div>

$\lambda$ (en s<sup>-1</sup>) est la constante radioactive de l'élément.

---


<iframe scrolling="no" title="décroissance radioactive" src="https://www.geogebra.org/material/iframe/id/rnfpcJBx/width/652/height/938/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/true/ld/false/sdz/false/ctl/false" width="417px" height="600px" style="border:0px;"> </iframe>


---

On peut aussi écrire :
<div style="background-color:#0076BA;padding:10px 10px 15px 10px;width:70%;margin:15%;color:white">
$$N(t)=N_0\exp(-\frac{t}{\tau})$$
</div>

où $\tau=1/\lambda$ est le temps de vie moyen d'un noyau.

---

Demi-vie $t_{1/2}$ :

<div style="background-color:#0076BA;padding:10px 10px 15px 10px;width:70%;margin:15%;color:white">
La demi-vie mesure la durée au bout de laquelle la population radioactive est divisée par deux.
</div>

---

On peut obtenir $t_{1/2}$ graphiquement<br>ou à partir de $\tau$ ou $\lambda$ :

<div style="background-color:#505050;padding:10px 10px 15px 10px;width:70%;margin:15%;color:white">
$$t_{1/2}=\tau\times \ln(2) = \ln(2)/\lambda$$
</div>

---

<iframe scrolling="no" title="décroissance radioactive" src="https://www.geogebra.org/material/iframe/id/tscgbnpn/width/648/height/996/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="390px" height="600px" style="border:0px;"> </iframe>

---

{{< slide  background-image="/expdiv22.png" background-size="contain" background-transition="concave">}}


---

Population restante au bout de <span style="color:#FF968D;font-weight:bold">n</span> demi-vies ?

---

<div style="display: flex;justify-content: center;">
<div style="background-color:#505050;padding:10px 50px 15px 50px;width:contain;color:white">
$$\displaystyle \frac{N_0}{2^{\color{#FF968D}n}}$$
</div>
</div>




---

Plusieurs phénomènes suivent des évolutions similaires aux décroissances radioactives.

L'ingrédient commun est la destruction<br>d'une <span>proportion constante</span> de la population<br>sur des laps de temps égaux (exemple : TP mousse).

---

{{%youtube w6kFzeR3m1Q%}}

---

<div style="background-color:#0076BA;padding:20px 10px 30px 10px;width:80%;margin:10%;color:white">
L'<span style="color:white">activité</span> d'une source radioactive est son nombre de désintégrations par seconde.<br>
Elle se mesure en <span style="color:white">becquerel</span><br>(1 Bq = 1 désintégration par seconde).
</div>

---

L'activité est l'opposée de la dérivée<br>du nombre de noyaux par rapport au temps :

<div style="background-color:#0076BA;padding:20px 10px 30px 10px;width:85%;margin-right:auto;margin-left:auto;color:white">
<p>$\displaystyle A(t)=-\frac{dN(t)}{dt}$</p>
<p class="fragment">$\Rightarrow A(t)=\lambda N(t) = \lambda N_0\exp(-\lambda t)$</p>
</div>

{{% /section %}}

---

{{% section %}}

## Types de rayonnements radioactifs :

---

<span>Radioactivité alpha $\alpha$ </span>

Exemple : 

$$\ce{^{238}\_{92} U -> ^{234}\_{90} Th + \alpha}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons alpha.

---


<span>Le rayonnement alpha est constitué<br>de noyaux d'Hélium $\ce{^4\_2He}$</span>

---

<span>Radioactivité bêta moins $\beta^-$</span>

Exemple :

$$\ce{^{14}\_{6} C -> ^{14}\_{7} N + \beta^-}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons $\beta^-$.

---

<span>Les rayons $\beta^-$ sont des électrons $^{\\;\\; 0}_{-1}e$</span>

---

<span>Radioactivité bêta plus $\beta^+$ </span>

Exemple :

$$\ce{^{18}\_{9} F -> ^{18}\_{8} O + \beta^+}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons $\beta^+$.

---

<span>Les rayons $\beta^+$ sont des positrons (ou positons) $^{0}_{1}e$</span>

---

<span>Radioactivité gamma $\gamma$ </span>

Exemple :

$$\ce{^{60}\_{28} Ni^* -> ^{60}\_{28} Ni + \gamma}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons gamma.

---

<span>Les rayons gamma sont des photons</span>

---

{{< slide  background-image="/gammahf.png" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="/diffrayons.png" background-size="80%" background-transition="concave">}}

---

{{%youtube i15ef618DP0%}}

---

{{%youtube 1_zwLuNJ5Ck%}}

---

{{%youtube VZHpAwSGYZE%}}


{{% /section %}}

---

{{% section %}}

## Fusion et fission nucléaire

---

Déterminer le deuxième noyau fils<br>d'une des réactions nucléaires ayant lieu<br>au sein des réacteurs des centrales électriques<br>sachant que le noyau père est de l’Uranium 235<br>et que le premier noyau fils est du Krypton 92.


---
{{< slide  background-image="/fissionexo.png" background-size="contain" background-transition="concave">}}

<br><br><br><br><br><br><br><br>

<span style="font-size:60px">
$$^\square_\square\text{n} + \; ^\square_\square\text{U} \rightarrow   \; ^\square_\square\text{Kr} + \; ^\square_\square ? + \; 3 ^\square_\square\text{n}$$
</span>

---

Fusion ou fission ?


---
{{< slide  background-image="/reactchainenoir.png" background-size="contain" background-transition="concave">}}

---
{{< slide  background-image="/explosion-boom.gif" background-size="content" background-transition="concave">}}


---
{{< slide  background-image="/centrnucl.png" background-size="content" background-transition="concave">}}

---

Donner l’équation d’une des réactions nucléaires<br>qui pourra prendre place au sein du plasma torique des tokamaks qui seront peut-être au cœur<br>des centrales électriques du futur.

---
{{< slide  background-image="/tokamak.png" background-size="content" background-transition="concave">}}

---
{{< slide  background-image="/fusionexo.png" background-size="contain" background-transition="concave">}}

<br><br><br><br><br><br><br><br><br>

<span style="font-size:60px">
$$^\square_\square\text{?} + \; ^\square_\square\text{?} \rightarrow   \; ^\square_\square\text{?} + \; ^\square_\square ? $$
</span>

---

Fusion ou fission ?

---

{{%youtube n5cAi6-jrMs%}}


---

{{%youtube 1MUcizMqVAc%}}

{{% /section %}}

---

{{% section %}}

## Défaut de masse<br>et énergie libérée



---

Dans toute réaction libératrice d'énergie, $m_\text{réactifs}>m_\text{produits}$ !

---

{{< slide  background-image="/balancemasses.png" background-size="contain" background-transition="concave">}}

---

On appelle <span>défaut de masse</span> la valeur absolue de la différence de masse entre les réactifs et les produits :

$$|\Delta m|=|m_\text{produits}-m_\text{réactifs}|$$


---

En vertu de la formule d'Einstein exprimant<br>l'équivalence entre masse et énergie,<br>le défaut de masse se retrouve<br>dans l'énergie libérée par la réaction.

---

<div style="background-color:#0076BA;padding:30px 20px 30px 20px;width:fit-content;margin-left:auto;margin-right:auto;color:white">
$E_\text{libérée}=|\Delta m|\times c^2$
</div>

<br>

Unités :

- $E_\text{libérée}$ en J
- $\Delta m$ en kg
- $c=\pu{3,00E8 m*s-1}$

---

### Ordres de grandeurs

- Fission de l'Uranium
	- énergie libérée par la fission d'un noyau d'uranium : $\approx 200$ MeV<br>($\pu{1 MeV}=\pu{1,6E-13 J}$).
	- énergie libérée par nucléon :<br>un peu moins d'1 MeV
	- énergie libéré pour 1 g d'Uranium : plus d'1 tep !
	
	---
	
	- Fusion de l'hydrogène
		- énergie libérée par la fusion de deux noyaux d'hydrogène : $\approx 20$ MeV<br>($\pu{1 MeV}=\pu{1,6E-13 J}$).
		- énergie libérée par nucléon :<br>quelques MeV $>$ à celle de la fission


{{% /section %}}


---


[Retour site](https://coursphychi.github.io/tsti2d/radioact/)