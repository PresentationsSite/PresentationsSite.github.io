+++
title = "Lois de Newton"
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



# Lois de Newton

---

{{%section%}}

## Point matériel et centre de masse

---

On modélise un système mécanique<br>par un <span class="imp">point matériel</span>, point géométrique<br>auquel on associe la masse $m$ du système.

---

On situera le point matériel au <span class="imp">centre de masse</span><br>du système, position moyenne de répartition<br>des masses du système.

<p class="fragment fade-up"><u>Rq</u> : on parle aussi de centre d'inertie, ou de centre de gravité dans le cas d'un champ de pesanteur uniforme.</p>


{{%/section%}}

---

{{%section%}}

## Première loi de Newton<br>ou principe d'inertie<br>et référentiels galiléens

---

{{< slide  background-video="/inertierepos.mp4" background-size="contain" background-transition="concave" background-video-loop="false">}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/wV2UTkkQ0Fg?si=fOqNGooWsHn1QwRl&amp;start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:15px;"></iframe>

---

{{< slide  background-video="/baseballcasque.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}


---

La <span class="imp">première loi de Newton</span> permet<br>de définir les <b style="color:#56C1FF">référentiels galiléens</b>.

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:20px 50px 20px 50px;border-radius:10px">
Il existe une famille de référentiels,<br>appelés <b style="color:#56C1FF">référentiels galiléens</b>, tels que tout point matériel <span class="imp">pseudo-isolé</span> (qui est soumis à<br>des forces externes dont la somme est nulle)<br>est soit <b style="color:#FFF056">au repos</b>, soit animé d'un<br><b style="color:#FFF056">mouvement rectiligne uniforme</b><br>par rapport à l'un de ces référentiels.
</div>

<p class="fragment fade-up"><u>Rq</u> : on parle aussi de référentiels inertiels.</p>

---

<u>Rq :</u>

Sur des <span class="imp">durée suffisamment courtes</span> pour pouvoir négliger les effets de la rotation de la surface terrestre, le <b style="color:#56C1FF">référentiel terrestre</b> peut être<br>considéré comme <b style="color:#56C1FF">galiléen</b>.

---

La détermination d'un bon référentiel galiléen est expérimentale, seule la cohérence entre la théorie (première loi de Newton) et la mesure (mouvement rectiligne uniforme) valide le choix a posteriori.

---


Dans un <b style="color:#56C1FF">référentiel galiléen</b> :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0px 50px 0px 50px;border-radius:10px">
$${\color{#FF968D}\sum \vec{F}_\mathrm{ext} = \vec{0}} \Leftrightarrow \color{#FFF056}{\vec{v}=\overrightarrow{\text{cte}}\text{ (MRU)}}$$
</div>

<p class="fragment fade-up">où $\vec{F}_\mathrm{ext}$ est une force extérieure<br>agissant sur le système.</p>

{{%/section%}}

---

{{%section%}}

## Deuxième loi de Newton

---

La deuxième loi de Newton lie la <b style="color:#FFF056">cinématique</b><br>à la <span class="imp">dynamique</span>, le <b style="color:#FFF056">mouvement</b> aux <span class="imp">forces</span>.

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:20px 50px 20px 50px;border-radius:10px">
Dans un <b style="color:#56C1FF">référentiel galiléen</b>, le produit de la masse par l'<b style="color:#FFF056">accélération</b> d'un point matériel<br>est égal à la <span class="imp">résultante des forces<br>extérieures</span> qu'il subit.
</div>

---

Dans un <b style="color:#56C1FF">référentiel galiléen</b> :


<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0px 50px 0px 50px;border-radius:10px">
$${\color{#FF968D}\sum \vec{F}_\mathrm{ext}} =  m\color{#FFF056}{\vec{a}}$$
</div>

<br>

<ul>
<li class="fragment fade-up">$F_\mathrm{ext}$ en <span class="fragment fade-up imp">$\pu{N}$</span></li>
<li class="fragment fade-up">$m$ en <span class="fragment fade-up imp">$\pu{kg}$</span></li>
<li class="fragment fade-up">$a$ en <span class="fragment fade-up imp">$\pu{m*s-2}$</span></li>
</ul>

---


<iframe width="800" height="450" src="https://www.youtube.com/embed/sPZ2bjW53c8?si=DgySGmJWjYJU8tBo&amp;start=32" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:15px;"></iframe>


---

Qu'obtient-on dans le cas d'un MRU ?

<p class="fragment fade-up">$\sum \vec{F}_\mathrm{ext} = \vec{0}$</p>

<p class="fragment fade-up">On pourrait croire alors que la 2<sup>e</sup> loi rend la 1<sup>re</sup> inutile. Mais la 1<sup>re</sup> affirme surtout l'existence de référentiels galiléens or la 2<sup>e</sup> n'est valide que dans ceux-ci !
</p>

---

<u>Rq</u> :

On appelle aussi la 2<sup>e</sup> loi de Newton, le <span class="imp">principe fondamental de la dynamique (PFD)</span>.

{{%/section%}}

---

{{%section%}}

## Troisième loi de Newton<br>ou principe des actions réciproques

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/36keC5eDUWk?si=lc2e3qlt2ql_KEed&amp;start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:15px;"></iframe>

---

Si un système A agit sur un système B,<br>alors le système B agit sur le système A<br>avec une action <span class="imp">parfaitement opposée</span><br>à celle de A sur B.


<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0px 50px 0px 50px;border-radius:10px">
$$\vec{F}_{B/A} = -\vec{F}_{A/B}$$
</div>

{{%note%}}
Pour déduire la 3ᵉ loi à partir de la 2ᵉ, il faut ajouter au moins une hypothèse globale : la conservation de la quantité de mouvement pour un système isolé entier, ou l’homogénéité de l’espace (principe de Noether).
Les trois lois forment ainsi un triptyque minimal : cadre, outil, symétrie.  Supprimer l’une ou prétendre la déduire des deux autres ferait perdre soit la définition du référentiel, soit la conservation de \vec p, deux piliers de la mécanique classique.
{{%/note%}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/OnoNITE-CLc?si=0LBgaEIfp5CqrFYO&amp;start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:15px;"></iframe>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/newton/)