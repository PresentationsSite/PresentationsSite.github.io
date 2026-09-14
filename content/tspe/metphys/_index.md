+++
title = "Méthodes physiques d'analyse"
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


# Analyser un système chimique par des méthodes physiques


---


## Spectroscopie


---

{{%section%}}


### Spectroscopie UV-Visible

---

{{< slide  background-image="/cuvespectro.png" background-size="contain" background-transition="concave">}}

<br><br><br>

L'<span class="imp">absorbance $A_\lambda$</span> d'une solution quantifie la proportion d'un rayonnement incident $I_0$ monochromatique absorbée en mesurant l'intensité<br>du rayonnement transmis $I$.


---

Le spectre ultraviolet-visible d'une solution est la courbe représentant l'<span class="imp">absorbance $A_\lambda$</span> (sans unité)<br>en fonction de la <span class="imp">longueur d'onde $\lambda$</span>,<br>
pour $\lambda$ pouvant aller d'environ 100 à 800 nm.

---

{{< slide  background-image="/exuvvis.png" background-size="contain" background-transition="concave">}}

---

Lorsque la solution absorbe dans le visible, comment peut-on relier un spectre d'absorption<br>à la couleur perçue ?

<br>

<p class="fragment fade-up">La solution agit comme un <span class="imp">filtre</span>.<br>La couleur absorbée est donc<br><span class="imp">complémentaire</span> de la couleur perçue.</p>


---

{{< slide  background-image="/disque_chromatique.png" background-size="contain" background-transition="concave" background="#000414">}}

---

{{< slide  background-image="/spectreabsorption.png" background-size="contain" background-transition="concave" background="#fff">}}

{{%note%}}
A peut être supérieur à 1 (ce n'est pas un pourcentage)
{{%/note%}}

---

<iframe width="900" height="600" frameborder="0" scrolling="no" src="/spectres_colorants.html" ></iframe>


{{%note%}}
Je n'ai pas montré de colorant vert sur le graphe car ils ont l'air d'avoir surtout un pic très haut dans le rouge (plus haut que les autres) et un petit pic dans le bleu à peine apparent. Cela prête à confusion. Par contre , la chlorophylle, c'est nickel.
{{%/note%}}

---

Quel devrait être le spectre d'un colorant vert ? 

<br>

<p class="fragment fade-up">Il doit absorber le magenta<br>donc à la fois le rouge et le bleu.</p>

---

{{< slide  background-image="/spectrechlorophylle.png" background-size="contain" background-transition="concave" background="#002400">}}

{{%/section%}}

---

{{%section%}}

### Spectroscopie infrarouge

---

La spectroscopie IR consiste à établir<br>le spectre de <span class="imp">transmittance</span> d'un échantillon.

---

On trace la <span class="imp">transmittance</span> (en %) <br>en fonction du <span class="imp">nombre d'onde</span> (en $\pu{cm^-1})$,<br>une grandeur proportionnelle à la fréquence.

---

<ul>
<li>Plus la transmittance est faible<br>et plus l'absorbance est grande.</li>
<br>
<li class="fragment fade-up">Le nombre d'onde est l'inverse<br>de la longueur d'onde.</li>
</ul>

---

La spectroscopie infrarouge exploite le fait que les molécules possèdent des fréquences spécifiques pour lesquelles elles vibrent en correspondance avec des niveaux d'énergie discrets<br>(modes vibratoires). 

---

Ces fréquences de résonance dépendent de<br>la nature de la liaison entre les atomes.

<p class="fragment fade-up">
Et pour chaque résonance, on obtient un creux dans le spectre de transmittance (correspondant à une forte absorbance du rayonnement IR).
</p>

---

{{< slide  background-video="/co2vib4.mp4" background-video-loop="true" background-size="contain" background-transition="concave" background="#fff">}}


<p style="color:#000;">Les 4 modes de vibration de la molécule de $\ce{CO2}$<br>
+ <a href="https://ir.cheminfo.org">Application</a> pour simuler le spectre<br>et visualiser les vibrations<p>


---

[Exemples de spectres interactifs](http://chimie.ostralo.net/spectreIR/)

---

<iframe width="640" height="480" src="https://www.youtube.com/embed/qFsmnTmS2sg?si=9tXm4fZgbhK2kECD&amp;start=67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>



{{%note%}}
Juste pour les curieux.
Lien vers la vidéo : https://archive.org/details/vibration_of_molecules
{{%/note%}}

---

<iframe width="640" height="480" src="https://www.youtube.com/embed/DDTIJgIh86E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<iframe width="640" height="480" src="https://www.youtube.com/embed/U0Hu3-J0igE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

⚠️ Petite bizarrerie ⚠️

L'axe des abscisses<br>
(le nombre d'onde en $\pu{cm^-1}$)<br>est orienté vers la gauche !


{{% /section %}}

---

{{%section%}}

## Dosage par étalonnage

---

Type de dosage <span class="imp">non destructif</span> consistant à : 

<br>

<ul>
<li class="fragment fade-up">mesurer une <span class="imp">propriété physique</span> sur une <span class="imp">gamme étalon</span> de solutions de concentrations connues (obtenues par dilution d'une solution mère),</li>
</ul>


---

<ul>

<li>tracer la <span class="imp">courbe d'étalonnage</span>,</li>
<br>
<li class="fragment fade-up">mesurer la propriété physique sur la solution mystère et utiliser la courbe d'étalonnage (ou la proportionnalité si possible) pour déterminer sa concentration.</li>

</ul>

{{% /section %}}

---

{{%section%}}

### Spectrophotométrique

---

Dans le cas d'un dosage par étalonnage spectrophotométrique, la propriété physique<br>mesurée est <span class="fragment">l'<span class="imp">absorbance</span></span> de la solution<br>à une longueur d'onde donnée.

---

⚠️ Conditions d'application ⚠️ :

<br>

<ul>
<li class="fragment fade-up">la solution doit absorber la lumière uv-visible<br>(la solution est généralement colorée),</li>
<br>
<li class="fragment fade-up">à la longueur d'onde choisie, la solution<br>doit être <span class="imp">la seule</span> à absorber le rayonnement.</li>
</ul>

---

⚠️<br>
Pour une sensibilité maximale et se prémunir au mieux de l'absorbance d'autres espèces, on choisit pour longueur d'onde de travail la longueur d'onde <span class="imp">$\lambda_{max}$</span> correspondant au <span class="imp">maximum d'absorbance</span><br>du spectre de l'espèce étudiée.


---

Les mesures se font au spectrophotomètre :

<iframe width="800" height="450" src="https://www.youtube.com/embed/aTcJy2S1eCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<span class="imp">Loi de Beer-Lambert</span> :

<br>

<div style="display: flex; justify-content: center; align-items: center; height: 100%;border: solid 5px #FF968D; border-radius: 20px;">
<div style="padding:10px 30px 20px 30px;width:fit-content;">
Pour une longueur d'onde $\lambda$ donnée et une largeur de cuve fixée, <span class="imp">l'absorbance $A_\lambda$</span> d'une espèce chimique en solution diluée <span class="imp">est proportionnelle à la concentration $C$ en quantité de matière</span><br>de cette espèce chimique.
</div>
</div>


---

Version simple :

<br>

<div style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:10px 30px 20px 30px;width:fit-content;">
$$A_\lambda=k\times C$$
</div>
</div>

<br>

<ul>
<li class="fragment fade-up">$A_\lambda$ sans unité</li>
<li class="fragment fade-up">$C$ en $\color{#FFF056}\pu{mol*L-1}$</li>
<li class="fragment fade-up">$k$ en <span class="fragment">$\color{#FFF056}\pu{L*mol-1}$</span></li>
</ul>


---

Version complète :

<br>

<div style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:10px 30px 20px 30px;width:fit-content;">
$$A_\lambda=\varepsilon_\lambda \times \ell \times C$$
</div>
</div>

<br>

<ul>

<li class="fragment fade-up">$\ell$ (en $\color{#FFF056}\pu{cm}$)<br>épaisseur de la cuve</li>
<li class="fragment fade-up">$\varepsilon_\lambda$ (en <span class="fragment">$\color{#FFF056}\pu{L*mol-1*cm-1}$</span>)<br>coefficient d'absorption molaire</li>
</ul>

---

Le domaine de validité de la loi de Beer-Lambert</a> suppose que l'absorbance et donc<br>la <span class="imp">concentration reste modérée</span>.

---

{{< slide  background-image="/validitebeer.png" background-size="contain" background-transition="concave">}}

---

<b style="color:#56C1FF;">Protocole du dosage</b> :

---

{{< slide  background-image="/protspectro.png" background-size="contain" background-transition="concave">}}



{{% /section %}}

---

{{% section %}}

### Conductimétrique

---

Une autre propriété physique utilisable<br>est la <span class="imp">conductivité $\sigma$</span> de la solution.

<p class="fragment fade-up">
La présence d’ions dans une solution lui confère<br>des propriétés de conduction électrique que mesure<br>la conductivité (mieux la solution conduit<br>et plus sa conductivité est grande).
</p>

---

La conductivité $\sigma_i$ de chaque ions i en solution contribue à la conductivité totale $\sigma$ :

$$\sigma=\sum_i \sigma_i$$

---

<span class="imp">Loi de Kohlrausch</span> :

<br>

<div style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:10px 30px 20px 30px;width:fit-content;">
Pour une concentration suffisamment faible,<br>
la conductivité d'un ion est proportionnelle<br>à sa concentration.
</div>
</div>

---

<div style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:10px 30px 20px 30px;width:fit-content;">
$$\sigma_i = \lambda_i\times C_i$$
</div>
</div>

<br>

<ul>
<li class="fragment fade-up">$\sigma_i$ : conductivité de l'ion i<br>en $\color{#FFF056}\pu{S*m-1}$ (siemens par mètre)</li>
<li class="fragment fade-up">$C_i$ : concentration de l'ion i<br>en ⚠️ $\color{#FFF056}\pu{mol*m-3}$ ⚠️</li>
<li class="fragment fade-up">$\lambda_i$ : conductivité molaire ionique de l'ion i<br>en $\color{#FFF056}\pu{S*m^2*mol-1}$</li>
</ul>

---

La formule de la conductivité<br>de la solution devient alors :

<br>

<div style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:20px 30px 20px 30px;width:fit-content;">
$$\sigma = \sum_i\lambda_i\times C_i$$
</div>
</div>

---

Pour obtenir la conductivité d'une solution, on utilise un <span class="imp">conductimètre</span> qui mesure sa <span class="imp">conductance G</span>.

<div style="position:relative;margin-left:auto;margin-right:auto;width:70%;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/conductimetre.png" style="box-shadow:none;background:none;">
</div>

---

{{< slide  background-image="/principeconductimetre.png" background-size="contain" background-transition="concave">}}


---


La conductance est l'inverse<br>de la résistance électrique&nbsp;:

$$G=\frac{1}{R}$$

<p class="fragment fade-up">Elle se mesure en <span class="fragment">siemens $\color{#FFF056}\pu{S}\color{#eee}=\color{#FFF056}\pu{\Omega}^{-1}$.</span>


---

On passe de la conductance à la conductivité<br>à partir de la géométrie des électrodes :

<br>

<div style="display: flex; border: solid 5px #FFF; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:0px 30px 0px 30px;width:fit-content;">
$$\sigma=G\times k =G\times\frac{\ell}{S}$$
</div>
</div>

<br>

<ul>
<li class="fragment fade-up">$\sigma$ : conductivité (en $\color{#FFF056}\pu{S*m-1}$)</li>
<li class="fragment fade-up">$G$ : conductance (en $\color{#FFF056}\pu{S}$)</li>
<li class="fragment fade-up">$k$ : "constante de cellule" (en $\color{#FFF056}\pu{m-1}$)</li>
<li class="fragment fade-up">$S$ : surface d'une plaque (en $\color{#FFF056}\pu{m2}$)</li>
<li class="fragment fade-up">$\ell$ : distance entre les plaques (en $\color{#FFF056}\pu{m}$)</li>
</ul>

---

<span style="font-size:1.5em;">⚠️</span>

Un conductimètre peut mesurer directement<br>la conductivité mais il faut pour cela l'étalonner<br>(la constante de cellule dépend de la température et évolue en fonction de la détérioration des plaques).

---

Condition pour réaliser un dosage par étalonnage :

<p class="fragment fade-up">
Il faut qu'<span class="imp">un seul soluté ionique</span><br>soit dissous dans la solution à doser<br>(apportant un seul cation et un seul anion).
</p>

---

Exemple d'une solution de chlorure de fer III $\ce{(Fe^3+ + 3Cℓ^-)}$

La concentration apportée<br>en $\ce{FeCℓ_3 (s)}$ vaut $C$. 

---

Les concentrations des ions en solution sont alors :

$\ce{[Fe^3+]}=$<span class="fragment">$\\;{\color{#FFF056}C}$</span>
<br>
$\ce{[C\ell^-]}=$<span class="fragment">$\\;3\times{\color{#FFF056} C}$</span>

<div class="fragment">
Et d'après la loi de Kohlrausch :<br>
<div class="fragment">

$
\begin{aligned}
\sigma&=\lambda_\ce{Fe^3+}\ce{[Fe^3+]}+\lambda_\ce{C\ell^-}\ce{[C\ell^-]}\\\\
&=\left(\lambda_\ce{Fe^3+}+3\lambda_\ce{C\ell^-}\right)\times \color{#FFF056}C
\end{aligned}
$

</div>
</div>

<p class="fragment">
Si la loi s'applique, on doit obtenir une <span style="color:#FFF056 ;">conductivité proportionnelle à la concentration</span> apportée.
</p>

---

Le protocole du dosage est toujours le même :

<ul>
<li class="fragment">on réalise une <b style="color:#FFF056">gamme étalon</b> en diluant une solution contenant le composé ionique présent dans la solution à doser.</li>
<li class="fragment">on mesure les conductivités des solutions étalons<br>et on trace la <b style="color:#FFF056">courbe d'étalonnage</b>.</li>
<li class="fragment">on mesure la conductivité de la solution à doser<br>et on détermine sa concentration grâce à la courbe.</li>
</ul>


{{% /section %}}

---

{{%section%}}

## Loi des gaz parfaits

---

Loi de Mariotte :

<p class="fragment">Le produit de la pression d'un gaz par son volume<br><span class="imp">à température fixée</span> est une constante.</p>

<div class="fragment">
$$PV = C(T)$$
</div>

<p class="fragment">On va maintenant généraliser cette loi en explicitant cette constante dépendant de la température.</p>

---

**[Animation](https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro_all.html?locale=fr)**

---

Un gaz est dit <span class="imp">parfait</span> si la taille des entités est négligeable devant la distance qui les sépare et<br>si les interactions entre elles sont négligeables.

---

<span class="imp">Loi des gaz parfaits</span> :

<br>

<div style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:0px 30px 0px 30px; width:fit-content;">
$$PV = nRT$$
</div>
</div>

<br>

<ul>
<li class="fragment">$P$ : pression (en <span class="fragment">$\color{#FFF056}\pu{Pa}$</span>)</li>
<li class="fragment">$V$ : volume  (en <span class="fragment">$\color{#FFF056}\pu{m3}$</span>)</li>
<li class="fragment">$n$ : quantité de matière  (en <span class="fragment">$\color{#FFF056}\pu{mol}$</span>)</li>
<li class="fragment">$T$ : température  (en <span class="fragment">$\color{#FFF056}\pu{K}$</span>)</li>
<li class="fragment">$R$ : constante des gaz parfaits<br>
$R= 8,314$ <span class="fragment">$\color{#FFF056}\pu{Pa*m3*K-1*mol-1}$</span></li>
</ul>

---

<u>Rq</u> :

La pression est aussi une énergie par unité de volume.

<p class="fragment fade-up">$\Rightarrow \pu{Pa} = $ <b class="fragment" style="color:#FFF056">$\pu{J*m-3}$</b></p>

<p class="fragment fade-up">Et donc $R$ s'exprime en <b class="fragment" style="color:#FFF056">$\pu{J*K-1*mol-1}$</b></p>

---

La loi des gaz parfaits permet donc de déterminer<br>la quantité de matière d'un gaz si on connaît<br>sa presssion, son volume et sa température :

<br>

<p class="fragment" style="color:#56C1FF;font-size:1.2em;">
$\displaystyle n=\;$<span class="fragment">$\displaystyle\frac{PV}{RT}$</span>
</p>

---

À température et pression fixée, une même quantité<br>de gaz parfait occupe <span class="imp">le même volume</span><br><span class="imp">quel que soit le gaz</span>.

<p class="fragment">Le <b style="color:#16E7CF">volume molaire $V_m$</b> d’un gaz parfait est<br>le volume occupé par une mole de ce gaz :</p>

<p class="fragment" style="color:#73FDEA;font-size:1.2em">
$\displaystyle V_m=\frac{V}{n}=\;$<span class="fragment">$\displaystyle\frac{RT}{P}$</span>
</p>

---

<ul>
<li>À 0 °C (<span class="fragment">$\color{#FFF056}\pu{273,15 K}$</span>) et pression atmosphérique<br>(<span class="fragment">$\color{#FFF056}\pu{1 atm}=\pu{1,013 bar}=\pu{1,013E5 Pa}$</span>),<br>$V_m=\,$<span class="fragment">$\pu{22,4e-3m^3*mol-1}=\color{#FFF056}\pu{22,4 L*mol-1}$</span></li>
<li class="fragment">Et à 20 °C et sous $\pu{1 atm}$,<br>
$V_m=\;$<span class="fragment">$\color{#FFF056}\pu{24 L*mol-1}$</span>
</li>
</ul>




{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/methphys/)