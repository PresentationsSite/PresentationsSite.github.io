+++
title = "Électrolyse"
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

.video-container {
  height: 60vh; /* limite la hauteur à 80% de la fenêtre */
  width: calc(60vh * 9 / 16); /* largeur en fonction du ratio portrait */
  margin: 0 auto;
  position: relative;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:10px;
}


</style>



# Forcer le sens d'évolution d'un système

---

{{% section %}}

## Évolution forcée

---

Lors d'une <span class="imp">évolution forcée</span>, un système chimique évolue dans le sens inverse de son évolution spontanée. 

<p class="fragment fade-up">
Le quotient de réaction <span class="imp fragment">s'éloigne</span> alors<br>de la constante d'équilibre.
</p>

---


{{< slide  background-image="/evolforcee.png" background-size="contain" background-transition="concave">}}


{{% /section %}}

---

{{% section %}}

## Électrolyse

---

Dans le cas d'une oxydoréduction, on peut forcer<br>le sens d'évolution d'un système en imposant le sens<br>du courant électrique grâce à un générateur électrique.

<p class="fragment fade-up">La transformation s'appelle alors une <span class="imp">électrolyse</span>.</p>

<p class="fragment fade-up imp">L'électrolyse est donc une conversion d'énergie électrique en énergie chimique.</p>

---


On réalise une électrolyse grâce à un <span class="imp">électrolyseur</span> constitué de deux électrodes plongeant dans<br>un <span class="imp">électrolyte</span> (solution ionique) et reliées à<br>un générateur de courant continu qui impose<br>le sens de déplacement des électrons.


---

{{< slide  background-image="/electrolyse1.png" background-size="contain" background-transition="concave">}}

---

<ul>
<li>L'électrode où se déroule la <b style="color:#56C1FF"><u>r</u>éduction</b> est la <b style="color:#56C1FF"><u>c</u>athode</b>.<br>Elle est reliée à la borne <b style="color:#56C1FF">$\ominus$</b> du générateur.</li>
<br>
<li class="fragment fade-up">
L'électrode où se déroule l'<b style="color:#FF968D"><u>o</u>xydation</b> est l'<b style="color:#FF968D"><u>a</u>node</b>.<br>Elle est reliée à la borne <b style="color:#FF968D">$\oplus$</b> du générateur.</li>
</li>


{{% /section %}}

---

{{% section %}}


## Étude quantitative

---

Pendant une durée $\Delta t$ (en s), si le générateur de courant continu délivre un courant d'intensité $I$ (en A), la charge totale $Q$ (en C) transférée vaut :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
 $$Q = I\times \Delta t$$
 </div> 
 
 ---
 
 D'autre part, si l'électrolyse a permis un transfert de $n(\mathrm{e^-})$ moles d'électrons entre les deux électrodes :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
 $$Q = n(\mathrm{e^-})\times {\color{#FFF056} N_A \times\mathrm{e}}=n(\mathrm{e^-})\times {\color{#FFF056} \mathcal{F}}$$
 </div> 
 
 <br>
 
 <ul class="fragment fade-up" style="margin-top:-0.5em; margin-bottom:-0.5em;">
 <li>$\mathrm{e} = \pu{1,6e-19 C}$, charge élémentaire</li>
  <li>$N_A = \pu{6,02e23 mol-1}$, constante d'Avogadro</li>
 <li>$\mathcal{F}=\pu{9,65e4 C*mol-1}$, constante de Faraday</li>
 </ul>
 
 {{% /section %}}

---

{{% section %}}


## Exemple 1 : électrolyse de l'eau

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/qdGrzroYcIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

## Exemple 2 : cuivrage d'un métal

---

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/_VbUQs_uk9Q?si=swpuB4PmHbeGxKJt"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>


{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/electrolyse/)