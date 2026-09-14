+++
title = "Titrage"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

span {font-weight:normal;color:#93a1a1;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:#93a1a1;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

.video-container {
position: relative;
width: 90%;
max-width: 100%;
margin: auto;
padding-bottom: 50.7%; 
height: 0;
}
.video-container iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

</style>


{{%section%}}

# Titrages

---

Un titrage permet de <span class="imp">déterminer<br>la quantité de matière</span> d'une espèce<br>présente dans un certain volume<br>d'une solution à l'aide d'une<br><span class="imp">transformation chimique</span>.

---

Comme la transformation chimique va faire réagir l'espèce dosée, un titrage est une <span class="imp">méthode destructive</span>.

---

La réaction support du titrage doit être :

<ul>
<li class="fragment fade-up imp">totale</li>
<li class="fragment fade-up imp">rapide</li>
<li class="fragment fade-up imp">unique</li>
</ul>

<p class="fragment fade-up"> (il ne doit pas y a voir d'autres réactions en parallèle)</p>

---

On appelle <b style="color:#FFF056;">réactif titré</b> le réactif<br>dont on cherche la quantité de matière 

<p class="fragment fade-up">et <b style="color:#FF95CA;">réactif titrant</b> celui qu'on va faire réagir avec.</p>

---

Comme la transformation utilisée pour le titrage est totale, en ajoutant petit à petit le <b style="color:#FF95CA;">réactif titrant</b>,<br>il arrivera un moment, <span class="imp">l'équivalence</span>,<br>où tout le <b style="color:#FFF056;">réactif titré</b> aura réagit.

---

En connaissant précisément la quantité de matière ajouté en <b style="color:#FF95CA;">réactif titrant</b>, on peut en déduire<br>la quantité de matière du <b style="color:#FFF056;">réactif titré</b>.

<p class="fragment fade-up">Mais il faut aussi pour ça<br><span class="fragment"><span class="imp">pouvoir repérer l'équivalence</span>.</span></p>

---

En première, on utilise des réactions d'oxydo-réduction comme support de titrage avec un<br><span class="imp">suivi de l'équivalence par colorimétrie</span>.

<p class="fragment fade-up">$\Rightarrow$ Il faut qu'il y ait changement de couleur<br>entre les réactifs et les produits.</p>

---

<ul>
<li><u>Avant l'équivalence</u>, le <b class="fragment" style="color:#FF95CA;">réactif titrant</b> est limitant<br><span class="fragment">(le réactif titré est en excès puisqu'on n'a pas ajouté encore assez de réactif titrant).</span></i>
<br>
<li class="fragment fade-up"><u>Après l'équivalence</u>, c'est le <b class="fragment" style="color:#FFF056;">réactif titré</b> qui devient limitant <span class="fragment">(le réactif titrant est en excès).</span>
<br>
<li class="fragment fade-up"><u>À l'équivalence</u>, il y a donc <span class="fragment"><span class="imp">changement de réactif limitant</span>.</span>
</ul>

<p class=" fragment fade-up ">Le mélange est donc<br><span class="imp">en proportion stœchiométrique<br>à l'équivalence</span>.</p>

---

Appelons <b style="color:#FFF056;">$\ce{A}$</b> le réactif à titrer et <b style="color:#FF95CA;">$\ce{B}$</b> le réactif titrant et supposons que la réaction support du titrage s'écrive $\ce{\color{#FFF056}a A \color{#93a1a1}+  \color{#FF95CA}b B \color{#93a1a1}-> ...}$

<p class="fragment fade-up">Quelle relation peut-on écrire entre <b style="color:#FFF056;">$n_\ce{A}$</b>,<br>la quantité de matière de $\ce{A}$ initialement présente,<br>et <b style="color:#FF95CA;">$n_{\ce{B},E}$</b>, la quantité de matière de $\ce{B}$  apportée<br>au moment de l'équivalence ?</p>

---

<div style="position:relative;margin:auto;padding:10px 50px 20px 50px;border: solid 5px #FF968D; border-radius: 15px;font-size:1.5em;width:fit-content;">
<div>
$$
\color{#FFF056}\frac{n_\ce{A}}{a}\color{#93a1a1}=\color{#FF95CA}\frac{n_{\ce{B},E}}{b}
$$
</div>
</div>

{{%/section%}}

---

{{%section%}}

## Montage expérimental

---

{{< slide  background-image="/montagetitrage.png" background-size="contain" background-transition="concave">}}

---

On doit connaître précisément la concentration <b style="color:#FF95CA;">$C_\ce{B}$</b> de la solution titrante et le volume <b style="color:#FFF056;">$V_\ce{A}$</b> de la solution titrée.

---

<u>Protocole</u> :

<br>

<ul>
<li class="fragment fade-up">On verse doucement la solution titrante<br>dans le bécher (où on maintient une agitation) jusqu'à repérage de l'équivalence<br>(changement de couleur de la solution).</li>
<br>
<li class="fragment fade-up">On note alors le volume <b style="color:#FF95CA;">$V_{\ce{B},E}$</b> lu sur la burette<br>
(le volume de chute de burette)</li>
</ul>
  
  ---

En supposant à nouveau que l'équation de réaction est $\ce{\color{#FFF056}a A \color{#93a1a1}+  \color{#FF95CA}b B \color{#93a1a1}-> ...}$, exprimer la concentration inconnue <b style="color:#FFF056;">$C_\ce{A}$</b> en fonction de <b style="color:#FFF056;">$V_\ce{A}$</b>, <b style="color:#FF95CA;">$C_\ce{B}$</b> et <b style="color:#FF95CA;">$V_{\ce{B},E}$</b>.

---

$$\color{#FFF056}\frac{n_\ce{A}}{a}\color{#93a1a1}=\color{#FF95CA}\frac{n_{\ce{B},E}}{b}$$

<p class="fragment fade-up">
$$\color{#FFF056}\frac{C_\ce{A}\times V_\ce{A}}{a}\color{#93a1a1}=\color{#FF95CA}\frac{C_\ce{B}\times V_{\ce{B},E}}{b}$$
</p>
<p class="fragment fade-up">
$${\color{#FFF056}C_\ce{A}} =  {\color{#FF95CA} C_\ce{B}}  \color{#93a1a1} \times\frac{{\color{#FFF056} a} \times {\color{#FF95CA} V_{\ce{B},E}}}{{\color{#FF95CA}b}\times{\color{#FFF056}V_\ce{A}}}$$
</p>

---

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/8du_PjM7CE4?si=ASEf4ULRoxraLQe2&amp;start=76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

{{%/section%}}

--- 

{{%section%}}

## Évolution des quantités de matière

---

Comment évoluent les quantités de matière des différentes espèces (réactif titrant, réactif titré et produits de la réaction) dans le bécher ?

---

{{< slide  background-image="/evtitrage.png" background-size="contain" background-transition="concave">}}

---

Ces courbes permettent de préciser<br>les conditions d'un suivi colorimétrique :

<br>

<ul>
<li class="fragment fade-up">Il faut soit que l'espèce titrante soit la seule colorée<br>
(on observe alors une coloration du mélange réactionnel à l'équivalence),</li>
<br>
<li class="fragment fade-up">soit que l'espèce titrée soit la seule colorée<br>
(on observe alors une décoloration du mélange réactionnel à l'équivalence).</li>
</ul>


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/titrage/)
