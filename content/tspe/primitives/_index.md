+++
title = "Primitive"
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


{{%section%}}

# Primitives

---


Une <span class="imp">primitive $F$</span> d'une fonction <b style="color:#FFF056">$f$</b> est une fonction<br>telle que la <b style="color:#FFF056">dérivée</b> de <span class="imp">$F$</span> est égale à <b style="color:#FFF056">$f$</b>.

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px;font-size:1.2em">
$${\color{#FF968D}F}{\color{#FFF056}'} = \color{#FFF056}f$$
</div>


---

Les <span class="imp">primitives</span> d'une <b style="color:#FFF056">fonction constante $f(t) = \alpha$</b><br>
sont les <span class="imp">fonctions affines $F(t) = \alpha t + \beta$</span><br>
avec $\alpha$ et $\beta$ deux constantes.

---

Les <span class="imp">primitives</span> d'une <b style="color:#FFF056">fonction affine $f(t) = \alpha t +\beta$</b><br>
sont les <span class="imp">fonctions polynômes du second degré $F(t) = \frac12 \alpha t^2 + \beta t + \gamma$</span><br>
avec $\alpha$, $\beta$ et $\gamma$ trois constantes.


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/champuni/)