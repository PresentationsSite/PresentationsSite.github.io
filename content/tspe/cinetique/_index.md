+++
title = "Cinétique chimique"
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

# Cinétique d'une transformation chimique

---

Une transformation chimique<br>peut se dérouler plus ou moins vite.

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/-OqPbuo1S_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%/section%}}

---

{{%section%}}


## Transformation lente ou rapide

---

Pour étudier la cinétique d'une transformation,<br>on utilise un capteur de suivi temporel<br>de l’évolution
d’un système.

<p class="fragment fade-up"><u>Rq</u> :  ce capteur peut être simplement l'œil.</p>

---

Si le temps de réponse du capteur est trop grand<br>ou si les manipulations à réaliser avant le début<br>des mesures empêchent la mise en œuvre du suivi cinétique, la transformation est dite <span class="imp">rapide</span>.<br>Sinon, elle est dite <b style="color:#56C1FF;">lente</b>.


{{% /section %}}

---

{{%section%}}

## Vitesse volumique d'apparition

---

Dans un réacteur de volume constant,<br>la <span class="imp">vitesse volumique d'apparition</span> (ou de <span class="imp">formation</span>) d’une espèce <span style="color:#FFF056;">à une date $t$</span> est égale à la valeur<br>de la <span class="imp">dérivée temporelle de sa concentration</span><br>en quantité de matière <span style="color:#FFF056;">à cette date</span>. 

<p class="fragment fade-up">
<u>Exemple</u> :
La vitesse d'apparition du diiode s’écrit :<br><br>
$\displaystyle v_{{\color{#FF968D}a},\ce{I2}}{\color{#FFF056}(t)}=\frac{\mathrm{d}\left[\ce{I_2}{\color{#FFF056}(t)}\right]}{\mathrm{d}t}$ 
</p>

---

Si l’espèce est <span class="imp">produite</span> au cours de la transformation, sa <span class="imp">concentration augmente</span> et donc<br>sa <span class="imp">vitesse d'apparition est <span class="imp">positive</span>. 

<p class="fragment fade-up">
Si l’espèce est <b style="color:#56C1FF">consommée (réactif)</b>,<br>sa <b style="color:#56C1FF">vitesse d'apparition est négative</b>.
</p>

---

Graphiquement, la valeur de la vitesse d'apparition<br><span style="color:#FFF056;">à un instant $t$</span> est donnée par la valeur de la <span class="imp">pente de<br>la tangente</span> à la courbe représentant l'évolution<br>de la concentration <span style="color:#FFF056;">à cette date</span>.

---

{{< slide  background-image="/cinetch1.png" background-size="contain" background-transition="concave">}}

---

Que vaut la vitesse de formation à $t=2$ min ?

---

{{< slide  background-image="/cinetch1.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/cinetch2.png" background-size="contain" background-transition="fade-in fade-out">}}

---

{{< slide  background-image="/cinetch3.png" background-size="contain" background-transition="fade-in concave-out">}}

---

Et à $t=3$ min ?

---

{{< slide  background-image="/cinetch1.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/cinetch4.png" background-size="contain" background-transition="fade-in concave-out">}}

---
	
Et la vitesse d'apparition initiale ($t=0$ s) ?

---

{{< slide  background-image="/cinetch51.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/cinetch5.png" background-size="contain" background-transition="fade-in concave-out">}}

---


## Vitesse volumique de disparition

---

La <span class="imp">vitesse volumique de <b style="color:#56C1FF">disparition</b></span> d’une espèce est l'opposé de sa <span class="imp">vitesse volumique d'apparition</span> :

<p class="fragment fade-up" style="font-size:1.2em;">
$$v_{{\color{#56C1FF}d},\mathrm{X}}{\color{#FFF056}(t)} = -v_{{\color{#FF968D}a},\mathrm{X}}{\color{#FFF056}(t)}$$
</p>

---

Dans un réacteur de volume constant,<br>la <span class="imp">vitesse volumique de <b style="color:#56C1FF">disparition</b></span> d’une espèce<br><span style="color:#FFF056;">à une date $t$ </span>est donc égale à <span class="fragment">l'<b style="color:#56C1FF">opposé</b></span><span class="imp"> de la<br>dérivée temporelle de sa concentration</span><br>en quantité de matière <span style="color:#FFF056;">à cette date</span>. 


<p class="fragment fade-up">
<u>Exemple</u> :
La vitesse de disparition<br>du peroxyde d’hydrogène s’écrit :<br><br>
$\displaystyle v_{{\color{#56C1FF}d},\ce{H2O2}}{\color{#FFF056}(t)}={\color{#56C1FF}-}\frac{\mathrm{d}\left[\ce{H2O2}{\color{#FFF056}(t)}\right]}{\mathrm{d}t}$ 
</p>

----

Et graphiquement ?

Que vaut la vitesse de disparition du réactif à $t=30$ s ?

---

{{< slide  background-image="/cinetch6.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/cinetch7.png" background-size="contain" background-transition="fade-in concave-out">}}

---

<u>Rq</u>:


Les vitesses volumiques présentent l’avantage<br>de ne pas dépendre du volume du système.


{{% /section %}}

---

{{%section%}}

## Loi de vitesse et facteurs cinétiques

---

Une <span class="imp">loi de vitesse</span> est l'expression de la vitesse volumique d'apparition ou de disparition d’une espèce en fonction des différents paramètres qui la modifient.

---


<div style="position:relative;margin:auto;border: solid 5px #FF968D;border-radius:10px;padding:20px 20px 10px 20px;width:fit-content;">
Les <span class="imp">facteurs cinétiques</span> sont les grandeurs<br>qui apparaissent dans la loi de vitesse<br>(<b style="color:#FFF056">température</b>, <b style="color:#56C1FF">concentration</b>).


Ce sont sont donc les paramètres<br>qui influent sur la durée d'une transformation.

</div>

---

<u>Exemple</u> :

La loi de vitesse de disparition de l’ester éthanoate d’éthyle par hydrolyse basique est de la forme :

<p class="fragment fade-up">$$v=k({\color{#FFF056}T})\ce{{\color{#56C1FF}[ester][HO-]}}$$</p>

<p class="fragment fade-up">où $k(T)$, appelée <span class="imp">constante de vitesse</span>, rend compte<br>de l’influence de la température sur cette réaction.</p>

{{%/section%}}

---

{{%section%}}

### Loi de vitesse d'ordre 1

---

Une réaction est dite d’ordre 1 si sa loi de vitesse<br>de disparition d’une espèce se met sous la forme 

<div  class="fragment fade-up"style="position:relative;margin:auto;border: solid 5px #FF968D;border-radius:10px; padding:10px 50px 10px 50px;width:fit-content;">
$$v_d=k(T)\ce{[A]}$$
</div>

<p class="fragment fade-up">où $\ce{A}$ représente un réactif de la réaction.</p>

---

Comme $v_d=-\frac{\mathrm{d}\ce{[A]}}{\mathrm{d} t}$, on a :

<p class="fragment fade-up">
$$-\frac{\mathrm{d}\ce{[A]}}{\mathrm{d} t} = k\ce{[A]}$$
</p>

<p class="fragment fade-up">
$$\color{#FF968D}\frac{\mathrm{d}\ce{[A]}}{\mathrm{d} t} + k\ce{[A]} = 0$$
</p>

<p class="fragment fade-up">
On obtient donc une <span class="imp">équation différentielle<br>du premier ordre</span> (à coefficients constants).
</p>

---


Une équation différentielle est une équation<br>où les inconnues sont des fonctions et qui<br>lie une fonction et ses dérivées.

<p class="fragment fade-up">Une équation différentielle du premier ordre fait intervenir une fonction et sa dérivée première.</p>


---

La solution d'une telle équation différentielle<br>est de la forme :

<p class="fragment fade-up">
$$\color{#FF968D}\ce{[A]}(t)= C\times\mathrm{e}^{-kt}$$
</p>

<p class="fragment fade-up">
où $C$ est une constante.
</p>

---

$\mathrm{e}^x = \exp(x)$ est la fonction exponentielle.

<div class="fragment fade-up">
Sa fonction réciproque est le logarithme népérien (logarithme de base $\mathrm{e}$) $\ln(x)$ :

$\ln\left(\mathrm{e}^x\right)=x$
</div>

---

On détermine $C$ grâce aux <b style="color:#FFF056">conditions initiales</b> :

<p class="fragment fade-up">
$\ce{[A]}(t=0)=C\times\mathrm{e}^{-k\times 0} = \color{#FFF056}C = \ce{[A]}_0$
</p>

<p class="fragment fade-up">
D'où 
</p>

<p class="fragment fade-up">
$$\color{#FF968D}\ce{[A]}(t)= \ce{[A]}_0\times\mathrm{e}^{-kt}$$
</p>

---

L'évolution de la concentration dépend donc de la<br><b style="color:#56C1FF">concentration initiale $[\mathrm{A_0}]$</b> et de la <b style="color:#FFF056">température</b><br>(via la constante de vitesse $k({\color{#FFF056}T})$). 

<!--
<p class="fragment fade-up">
La <b style="color:#FFF056;">température</b> et la <b style="color:#56C1FF">concentration</b> du réactif<br>sont donc les deux <span class="imp">facteurs cinétiques</span><br>d'une loi de vitesse d'ordre 1.
</p>
-->

---

En prenant le logarithme de $ \[\mathrm{A}\](t) $,<br>on peut vérifier que cette loi est d'ordre 1 :

<p class="fragment fade-up">
$\ln\left(\ce{[A]}(t)\right) = \ln(\ce{[A]}_0) -k\times t$
</p>

<p class="fragment fade-up">On obtient une fonction affine décroissante du temps.</p>

<p class="imp fragment fade-up">Donc si $\ln\left(\ce{[A]}(t)\right)$ est modélisable par une<br>fonction affine, la loi de vitesse est d'ordre 1 !</p>

---

{{< slide  background-image="/loidordre1.png" background-size="contain" background-transition="concave">}}


{{% /section %}}

---

{{% section %}}

## Catalyse et catalyseur

---

<div style="position:relative;margin:auto;border: solid 5px #FF968D;border-radius:10px; padding:10px 0px 20px 0px;width:fit-content;">
Un <span class="imp">catalyseur</span> est une espèce qui augmente la vitesse d’une réaction sans en modifier le bilan ou<br>les caractéristiques thermodynamiques. 
</div>

---

Étant à la fois réactif et produit,<br><span class="imp">il n’apparaît pas dans l’équation de la réaction</span><br>qui modélise la transformation.

---

Selon les états physiques du catalyseur et du milieu réactionnel, la catalyse est qualifiée<br>d’homogène ou d’hétérogène.

---

<u>Exemples</u> :

<p class="fragment fade-up">Le platine catalyse la dismutation du peroxyde d’hydrogène (catalyse hétérogène).</p>

<p class="fragment fade-up">Les enzymes sont des catalyseurs biologiques particulièrement efficaces (catalyse homogène).</p>


{{% /section %}}

---

{{% section %}}

## Temps de demi-réaction

---

<div style="position:relative;margin:auto;border: solid 5px #FF968D;border-radius:10px; padding:10px 20px 20px 20px;width:fit-content;">
Durée au bout de laquelle l’avancement<br>a atteint la moitié de sa valeur finale.
</div>

---

{{< slide  background-image="/tdemi1.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/tdemi2.png" background-size="contain" background-transition="fade-in concave-out">}}

---

Si $\ce{R}$ est le réactif limitant d'une transformation :

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:90%;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tdemi3.png" style="box-shadow:none;background:none;">
</div>

---

$t_{1/2}$ est alors la durée au bout de laquelle la concentration initiale est divisée par deux.

<p class="fragment fade-up">En effet, si $\ce{R}$ est entièrement consommée<br>à l'avancement final, alors il sera à moitié consommé<br>à la moitié de l'avancement final (quelle que soit<br>sa stœchiométrie dans la réaction).

<p class="fragment fade-up">Et la concentration sera donc bien divisée par deux.</p>

---

Et pour un produit : 

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:90%;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tdemi4.png" style="box-shadow:none;background:none;">
</div>

---

Si la concentration initiale est nulle, $t_{1/2}$ est la durée au bout de laquelle la concentration atteint la moitié<br>de sa valeur limite finale $\mathrm{[P]}_f$.


---

<u>Rq</u> :

<br>

<ul>
<li class="fragment fade-up">⚠️ Le temps de demi-réaction ne correspond pas<br>à la moitié de la durée de réaction !</li>

<br>

<li class="fragment fade-up">Le temps de demi-réaction permet d'évaluer la durée de la transformation chimique (quelques $t_{1/2}$)<br>et donc de comparer entre elles la rapidité<br>des transformations.</li>
</ul>


{{% /section %}}

---

{{% section %}}

## Modélisation microscopique

---

On modélise une transformation chimique <b style="color:#FFF056">à l’échelle microscopique</b> par un <span class="imp">mécanisme
réactionnel</span> qui propose un ensemble d’<b style="color:#88FA4E">actes élémentaires</b> a priori réalisés lors de la conversion des entités des réactifs en entités des produits, passant éventuellement par une ou plusieurs entités d’<b style="color:#56C1FF">intermédiaires réactionnels</b>. 

---

Le mécanisme doit être cohérent avec la stœchiométrie de la réaction, la loi de vitesse et toute autre donnée
expérimentale obtenue à l’échelle macroscopique.

---

L’<b style="color:#88FA4E">acte élémentaire</b> (ou étape élémentaire) correspond à un modèle, au niveau moléculaire, de conversion d’entités se déroulant en <span class="imp">une seule étape</span>.

---

Un <b style="color:#56C1FF">intermédiaire réactionnel</b> est une entité intervenant dans un mécanisme réactionnel, formée directement ou indirectement à partir des réactifs,<br>et convertie directement ou indirectement<br>en produits de la réaction.

<p class="fragment fade-up">
En d'autres mots, il est formé, puis il est utilisé.
</p>

---

<u>Exemple</u> :

Le <span class="imp">mécanisme réactionnel</span> de la réaction<br>
$\ce{(H_3C)3C-Cℓ + HO- -> (H_3C)3C-OH + Cℓ^-}$<br>
se décompose en deux <b style="color:#88FA4E">actes élémentaires</b>.

<br>

<style>
  #liste-verte li::marker {
    color: #88FA4E; 
  }
</style>

<ul id="liste-verte">
<li class="fragment fade-up">$\ce{(H_3C)3C-Cℓ \leftrightarrows {\color{#56C1FF}(H_3C)_3C^+} + Cℓ^-}$</li>

<br>

<li class="fragment fade-up">$\ce{ {\color{#56C1FF}(H_3C)_3C^+} + HO- \leftrightarrows (H_3C)3C-OH}$<br><br></li>
</ul>

<br>

<p class="fragment fade-up">$\ce{\color{#56C1FF}(H_3C)_3C^+}$ est ici un <b style="color:#56C1FF">intermédiaire réactionnel</b>.

---

On représente les modifications des structures électroniques des entités au cours d'un acte élémentaire à l'aide du <b style="color:#FF95CA">formalisme de la flèche courbe</b>.

<p class="fragment fade-up">
Une flèche courbe symbolise le mouvement<br>d’un doublet d’électrons d’un
<b style="color:#56C1FF">site donneur</b><br>vers un <b style="color:#FF968D">site accepteur</b>.
</p>

---

Un <b style="color:#56C1FF">site donneur</b> peut être :

<ul>
<li class="fragment fade-up">un doublet non liant</li>
<li class="fragment fade-up">un doublet liant<br>(d'une liaison multiple ou simple)</li>
<li class="fragment fade-up">un atome portant une charge négative<br>ou fortement polarisé négativement</li>
</ul>

---

Un <b style="color:#FF968D">site accepteur</b> peut être :

<ul>
<li class="fragment fade-up">un atome possédant une lacune électronique</li>
<li class="fragment fade-up">un atome portant une charge positive<br>ou polarisé positivement</li>
</ul>

---


Pour représenter ces mouvements de doublets,<br>il faut partir des schémas de Lewis des entités.


---

Prenons l'exemple du 2<sup>e</sup> acte élémentaire<br>de l'exemple précédent :

<br>


<div  class="fragment fade-up"style="position:relative;margin-left:auto;margin-right:auto;width:90%;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/actelem2.png" style="box-shadow:none;background:none;">
</div>

---

Un <b style="color:#FFF056">catalyseur</b> modifie le mécanisme réactionnel.

<br>

<div class="fragment fade-up">
<u>Exemple</u> :

La transformation modélisée par la réaction<br>
$\ce{H2C-Cℓ + HO- -> H3C-OH + Cℓ^-}$<br>
se déroule en un seul acte élémentaire.
</div>

---

Mais en présence d'ions iodures ${\color{#FFF056}\ce{I-}}$,<br>le mécanisme est modifié :

<br>

<ul id="liste-verte">
<li class="fragment fade-up">$\ce{ {\color{#73FDEA}\ce{H_3C-Cℓ}} + {\color{#FFF056}\ce{I-}}\leftrightarrows {\color{#56C1FF}\ce{H_3C-I}} + {\color{#FF95CA}\ce{Cℓ^-}}}$</li>

<br>

<li class="fragment fade-up">$\ce{ {\color{#56C1FF}\ce{H_3C-I}} + {\color{#73FDEA}\ce{HO-}} \leftrightarrows {\color{#FF95CA}\ce{H_3C-OH}} + {\color{#FFF056}\ce{I-}}}$<br><br></li>
</ul>

<br>

<p class="fragment fade-up">
Le ${\color{#FFF056}\ce{I-}}$ est momentanément utilisé puis finit par être reformé et donc n'apparaît pas dans l'équation bilan.</p>

{{%note%}}
Retrouver le code couleur (un peu chargé) du mécanisme réactionnel.
(Dire qu'on simplifie comme avec les deux demi-équations électroniques si ça peut aider).
Bien faire la différence entre intermédiaire réactionnel et catalyseur.
{{%/note%}}

---

Différence entre <b style="color:#FFF056">catalyseur</b><br>et <b style="color:#56C1FF">intermédiaire réactionnel</b> ?


<p class="fragment fade-up">L'<b style="color:#56C1FF">intermédiaire réactionnel</b> apparaît d'abord comme produit d'un acte élémentaire puis comme réactif d'un autre acte élémentaire alors que pour le <b style="color:#FFF056">catalyseur</b>, c'est l'inverse, il apparaît d'abord comme réactif d'un acte élémentaire puis comme produit d'un autre.</p>

---

Par conséquent, le <b style="color:#FFF056">catalyseur</b> n'est pas nécessaire<br>à la réaction alors que l'<b style="color:#56C1FF">intermédiaire réactionnel</b><br>est une étape obligée.


{{% /section %}}

---

{{% section %}}

## Interprétation microscopique<br>des facteurs cinétiques

---

Pour qu'un acte élémentaire ait lieu,<br>il faut un <span class="imp">choc entre les entités</span>.

<p class="fragment fade-up">Or plus la <b style="color:#56C1FF">concentration</b> est grande,<br>plus la probabilité de chocs est grande.</p>

<p class="fragment fade-up">Et plus la <b style="color:#FFF056">température</b> est grande,<br>plus les entités vont vite et donc <br>plus la fréquence des chocs<br>et leur énergie sont élevées.</p>

---

Cela explique pourquoi la <b style="color:#56C1FF">concentration</b> et la <b style="color:#FFF056">température</b> sont des <span class="imp">facteurs cinétiques</span>.

---

[Animation du Colorado](https://phet.colorado.edu/en/simulations/reactions-and-rates)

---


<style>
  /* Container principal */
  .simulation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px; /* Ajustez selon vos besoins */
    width: 100%;
    margin-top:0em;
  }

  /* Style des sliders bleu et rouge */
  .slider-input {
    -webkit-appearance: none;
    appearance: none;
    width: 800px; /* Largeur du canvas */
    height: 15px; /* Épaisseur de la piste du slider */
    background: #ddd; /* Couleur par défaut de la piste */
    outline: none;
    margin: 10px 0;
    border-radius: 4px;
    position: relative;
  }

  /* Style des thumbs des sliders pour WebKit (Chrome, Safari) */
  .slider-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    margin-top: -2px; /* Centrage vertical du thumb */
    background: #4CAF50; /* Couleur par défaut, remplacée */
  }

  /* Style des thumbs des sliders pour Firefox */
  .slider-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: #4CAF50; /* Couleur par défaut, remplacée */
  }

  /* Styles spécifiques pour chaque slider */
  /* Concentration Bleue */
  #blueCount {
    background: #56C1FF;
  }

  #blueCount::-webkit-slider-runnable-track {
    background: #56C1FF;
    height: 15px;
    border-radius: 4px;
  }

  #blueCount::-moz-range-track {
    background: #56C1FF;
    height: 15px;
    border-radius: 4px;
  }

  #blueCount::-webkit-slider-thumb {
    background: #00A2FF;
    width: 20px;
    height: 20px;
    margin-top: -2px; /* Ajustement pour thumb plus grand */
  }

  #blueCount::-moz-range-thumb {
    background: #00A2FF;
    width: 20px;
    height: 20px;
  }

  /* Concentration Rouge */
  #redCount {
    background: #FF968D;
  }

  #redCount::-webkit-slider-runnable-track {
    background: #FF968D;
    height: 15px;
    border-radius: 4px;
  }

  #redCount::-moz-range-track {
    background: #FF968D;
    height: 15px;
    border-radius: 4px;
  }

  #redCount::-webkit-slider-thumb {
    background: #FF644E;
    width: 20px;
    height: 20px;
    margin-top: -2px; /* Ajustement pour thumb plus grand */
  }

  #redCount::-moz-range-thumb {
    background: #FF644E;
    width: 20px;
    height: 20px;
  }

/* Slider Température */
.temperature-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 800px; /* Largeur du canvas */
  height: 15px; /* Épaisseur de la piste du slider */
  background: #FFF056;
  outline: none;
  margin: 10px 0;
  border-radius: 4px;
}

/* Piste du slider Température pour WebKit (Chrome, Safari) */
.temperature-slider::-webkit-slider-runnable-track {
  background: #FFF056;
  height: 15px;
  border-radius: 4px;
}

/* Piste du slider Température pour Firefox */
.temperature-slider::-moz-range-track {
  background: #FFF056;
  height: 15px;
  border-radius: 4px;
}

/* Thumb du slider Température pour WebKit (Chrome, Safari) */
.temperature-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: #FFD932;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -2.5px; /* (hauteur du thumb - hauteur de la piste) / 2 = (20px - 15px) / 2 */
  border: none;
}

/* Thumb du slider Température pour Firefox */
.temperature-slider::-moz-range-thumb {
  background: #FFD932;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

/* Hover Effect pour le Thumb Température */
.temperature-slider:hover::-webkit-slider-thumb {
  background: #FFD932;
}

.temperature-slider:hover::-moz-range-thumb {
  background: #FFD932;
}

  /* Boîte d'animation */
  #simulationCanvas {
    border: 5px solid #888;
    background-color: #200A14;
  }
</style>


<div class="simulation-container">

  <!-- Curseur de Concentration Bleue (Au-dessus) -->
  <input type="range" id="blueCount" min="0" max="150" value="10" class="slider-input">
  
<!-- Curseur de Concentration Rouge-->
  <input type="range" id="redCount" min="0" max="150" value="10" class="slider-input">

  <!-- Boîte d'Animation -->
  <canvas id="simulationCanvas" width="800" height="500"></canvas>

  <!-- Curseur de Température (Sous le canvas) -->
  <input type="range" id="temperature" min="1" max="10" value="2" class="temperature-slider">

</div>

<script src="/js/cinetique.js"></script>


{{%note%}}
Permet aussi d'expliquer la technique expérimentale des trempes.
{{%/note%}}



{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/cinetique/)