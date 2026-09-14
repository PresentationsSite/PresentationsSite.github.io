+++
title = "Mouvement"
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

td {
text-align: center !important;
}

th:not(:last-child), td:not(:last-child) { border-right: 1px solid #00A2FF; }
</style>





{{%section%}}

# Relativité du mouvement

## Systèmes et référentiels


---


En physique, un <span class="imp">système</span> est l'objet<br>ou l'ensemble d'objets étudiés.

<p class="fragment fade-up">Définir un système correspond donc à tracer<br>une frontière entre ce qui nous intéresse<br>et son environnement.<p>

<p class="fragment fade-up">Exemples : une balle, un marteau,<br>une voiture, la Lune, le système solaire...</p>


---

Une fois qu'on a défini le système, il manque encore quelque chose d'important pour pouvoir<br>décrire son mouvement...

<p class="fragment fade-up imp">Le référentiel !</p>


---

{{< slide  background-image="/trainref.gif" background-size="contain" background-transition="concave">}}

{{%note%}}
Analyse peut-être la plus simple : on avance vers la droite puis on recule, l'autre train restant immobile.<br>

Mais on peut aussi bien dire que c'est l'autre train qui bouge : il avance vers la gauche, puis il recule.<br>

Mais c'est pas tout ! Si je vous dis que les deux vont dans la même direction...
{{%/note%}}

---

Qui bouge ?

Par rapport à qui ?

---

{{< slide  background-image="/trainref1.gif" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/trainref2.gif" background-size="contain" background-transition="concave">}}


---

Pour décrire un mouvement de manière non ambigüe,<br>il faut se placer dans un <span class="imp">référentiel</span>.

---


Le référentiel, c'est l'observateur du mouvement.<br>On le munit d'un <span class="imp">repère spatial</span> qui se déplace avec l'observateur et d'un <span class="imp">repère temporel</span> (une horloge).


---

Exemples de référentiels :

<ul>
<li class="fragment"> le <span class="imp">référentiel terrestre</span>, lié au sol (dans notre exemple de trains, on peut imaginer un arbre).</li>
<li class="fragment"> le référentiel du train où se trouve la croix verte<br>(ce que voit un passager immobile de ce train).</li>
<li class="fragment"> le référentiel de l'autre train (ce que voit un passager immobile dans l'autre train).</li>
<li class="fragment"> le référentiel géocentrique<br>(pour étudier le mouvement<br>d'un satellite par exemple).</li>

---


<p><u>Remarque</u> : un passager immobile par rapport au train n'est pas immobile dans le référentiel terrestre si le train avance... <span class="imp">Le mouvement est relatif</span> !</p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/1s8jrDC6eFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Est-ce que le parachutiste remonte<br>lorsqu'il ouvre son parachute ?

<p class="fragment fade-up">La question est mal posée<br>(car ambigüe : par rapport à qui<br>est-il sensé remonter ?).</p>

---

Meilleure question :

<p class="fragment fade-up">Dans quel référentiel le parachutiste remonte-il ?</p>

---

{{< slide  background-image="/parach.gif" background-size="contain" background-transition="concave">}}


{{%note%}}
Nommer les deux référentiels.
{{%/note%}}

---

Petite énigme :

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/enigmeradeau.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>

---



Une demi-heure après avoir dépassé le radeau,<br>le bateau fait demi-tour.

<p class="fragment fade-up">Il recroise le radeau 3 km en aval<br>du premier croisement.</p>


<p class="fragment fade-up">On suppose que le bateau avance à vitesse<br>constante par rapport à la rivière.</p>

---

Quelle est la vitesse du courant ?

{{%/section%}}

---

{{%section%}}

## Description d'un mouvement

---

Une fois qu'on a choisi le système et le référentiel,<br>il nous reste à décrire le mouvement.


<p class="fragment">
Pour ça, on a besoin de :</p>
<ul class="imp">
<li class="fragment"> sa trajectoire </li>
<li class="fragment" style="color:#FFD932"> sa vitesse </li>
</ul>


---


La <span class="imp">trajectoire</span> d’un point, dans un référentiel d’étude donné, correspond à la courbe formée par l’ensemble des positions successivement occupées par ce point au cours de son mouvement.

<img src="/avionvoltige.png" width="50%" style="border-radius:20px">

---

Deux types de mouvements :

<ul style="color:#fff">
<li class="fragment"><span class="imp">mouvement de translation</span> :<br>
tous les points du système ont la même trajectoire</li>
<li class="fragment"><span class="imp">mouvement de rotation</span> :<br>
tous les points du système (sauf un) ont pour trajectoire un cercle</li>
<ul>

---

{{< slide  background-image="/transrot.png" background-size="contain" background-transition="concave">}}


---

La plupart des mouvements<br>sont une combinaison des deux :<br>une translation d'ensemble + une rotation propre.

<p class="fragment">La rotation a ceci de particulier<br>qu'elle se fait toujours autour d'un point précis :<br>le <span class="imp">centre de masse</span> du système.</p>


---

  <iframe src="/programmes/marteau.html"
          width="90%" height="500" frameborder="0" tabindex="0"></iframe>


---

{{< slide  background-video="/marteauvrai.mp4" background-size="contain" background-transition="concave">}}


{{%note%}}
On récupère une image sur 10
{{%/note%}}

---


{{< slide  background-image="/chronophmarteau.png" background-size="contain" background-transition="concave">}}

---


Le centre de masse est ainsi le point du système<br>qui a la trajectoire la plus simple puisque sa trajectoire est celle que tous les autres points auraient<br>si le mouvement était une pure translation.

----

Pour simplifier, on réduit souvent<br>le système étudié à son centre de masse.<br>
Mais on perd alors l'information sur sa rotation<br>(c'est le prix à payer pour la simplicité).

---

Dorénavant, on étudiera surtout<br>des systèmes réduits à un point.

---

Certaines trajectoires pour ce point<br>portent un nom particulier :

<ul style="color:#fff">
<li class="fragment fade-up"><span class="imp">rectiligne</span> si la trajectoire forme une droite,</li>
<li class="fragment fade-up"><span class="imp">circulaire</span> si la trajectoire forme un cercle,</li>
<li class="fragment fade-up"><span class="imp">curviligne</span> ou quelconque dans les autres cas.</li>
</ul>


---

{{< slide  background-image="/trajnounours.png" background-size="contain" background-transition="concave">}}


{{%/section%}}


---


{{%section%}}


## Déplacement et vitesse

---

La vitesse est un élément essentiel<br>de la description d'un mouvement.


<p class="fragment fade-up">Mais plutôt que de se contenter de sa seule valeur,<br>ne pourrait-on pas aussi avoir accès<br>à sa direction et son sens ?</p>

---

<script>
(function () {
  const drum = new Audio("/audio/drumroll.mp3");
  drum.preload = "auto";

  function play() {
    try {
      drum.pause();
      drum.currentTime = 0;
      const p = drum.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch (_) {}
  }

  function handler(e) {
    const el = e.target.closest(".play-drum");
    if (!el) return;
    e.preventDefault();
    play();
  }

  // clic
  document.addEventListener("click", handler);

  // clavier (Entrée / Espace quand l'emoji a le focus)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const el = document.activeElement;
    if (el && el.classList && el.classList.contains("play-drum")) {
      e.preventDefault();
      play();
    }
  });
})();
</script>

On introduit alors

<span class="play-drum" role="button" tabindex="0" style="cursor:pointer; user-select:none;">
  🥁
</span> 

<p class="fragment fade-up">le <span style="font-weight:bold;color:#FFD932">vecteur vitesse</span>.</p>


---

{{< slide  background-image="/vecdepl.png" background-size="contain" background-transition="concave">}}


Pour définir le vecteur vitesse, on va avoir besoin<br>du <span class="imp" style="color:#00AB8E">vecteur déplacement $\textstyle \overrightarrow{\mathrm{MM'}}$</span>.

<br><br><br><br><br><br><br>

---


<div style="position:relative;margin:auto;width:fit-content;color:#FFD932;border:solid 5px #FFD932;padding:0px 50px 20px 50px;border-radius:10px">
$$\overrightarrow{v_{moy}} = \frac{\color{#00AB8E}\overrightarrow{\mathrm{MM'}}}{\Delta t}$$
</div>

<br>

<p class="fragment fade-up">où $\Delta t$ est la durée pour aller de $\mathrm M$ à $ \mathrm M'$</p>


---

Le <span class="imp" style="color:#FFD932">vecteur vitesse moyenne $\vec{v}_{moy}$</span><br>est donc défini comme le vecteur : 

<ul>
<li class="fragment fade-up" style="color:#fff;">de même direction que $\textstyle \color{#00AB8E}\overrightarrow{\mathrm{MM'}}$,</li>
<li class="fragment fade-up" style="color:#fff;">de même sens que $\textstyle \color{#00AB8E}\overrightarrow{\mathrm{MM'}}$,</li>
	<li class="fragment fade-up" style="color:#fff;">et de norme <span style="color:#FFD932;">$v_{moy}$</span> donnée par : $\color{#FFD932} v_{moy}=\frac{\mathrm{MM'}}{\Delta t}$</li>
</ul>


---

Dans le <span class="imp">Système international d'unités (SI)</span> :
<ul style="color:#fff">
<li> $\mathrm{MM'}$ est mesuré en <span class="imp fragment">$\text{m}$</span></li>
<li>$\Delta t$ est mesuré en <span class="imp fragment">$\text{s}$</span></li>
<li>et donc $v_{moy}$ est donnée en <span class="imp fragment">$\pu{m*s-1}$</span></li>
</ul>

---

Comment tracer un vecteur vitesse ?

---

{{< slide  background-video="/dessinvitesse.mp4" background-size="contain" background-transition="concave">}}


---


{{< slide  background-image="/quvitinst.png" background-size="contain" background-transition="concave">}}


Problème :

Cette définition ne dit pas grand chose<br>de la vitesse au point $M$ à l'instant $t$.



<br><br><br><br><br><br>

{{%note%}}
Comment améliorer la définition pour avoir accès à la vitesse instantanée en M ?
{{%/note%}}

---

<iframe scrolling="no" title="vecteur déplacement et vitesse" src="https://www.geogebra.org/material/iframe/id/wefyydbs/width/620/height/463/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="620px" height="463px" style="border:0px;"> </iframe>

---

Pour passer du vecteur vitesse moyenne entre $\mathrm M$ et $\mathrm M'$ au <span class="imp" style="color:#FFD932">vecteur vitesse en $\mathrm M$</span>, <span class="imp" style="color:#FFD932">$\vec{v}$</span>, on rapproche le plus possible $\mathrm M'$ de $\mathrm M$ le long de la trajectoire.

---

Si la <span class="imp" style="color:#FFD932">vitesse $v$ est constante</span><br>le long de la trajectoire,<br>le mouvement est dit <span class="imp" style="color:#FFD932">uniforme</span>.

---

Si le mouvement est <span class="imp">rectiligne</span>,<br>$\vec{v}$ reste colinéaire à $\vec{v}\_{moy}$,<br>et s'il est en plus <span class="imp" style="color:#FFD932">uniforme</span>,<br>on a <span class="fragment" style="color:#FFD932;font-weight:bold">$\vec{v} = \vec{v}_{moy}$</span> à tout instant<br>(le vecteur vitesse est constant).


{{%/section%}}

---

{{%section%}}

#### Vitesse et trajectoire<br>dépendent du référentiel

---

{{< slide  background-video="/inertietramp.mp4" background-size="contain" background-transition="concave">}}

---

Quelle est la trajectoire du "rebondeur"<br>dans le référentiel du tracteur ?

Et dans le référentiel terrestre ?

<p class="fragment fade-up">Et que peut-on dire de la composante horizontale<br>de sa vitesse (la vitesse de son ombre sur le sol)<br>dans ces deux référentiels ?</p>

---

{{%youtube BLuI118nhzc%}}

---

Quelle est la trajectoire du boulet<br>dans le référentiel du pick-up ?

Et dans le référentiel terrestre ?

<p class="fragment fade-up">Et que peut-on dire de la composante horizontale<br>de sa vitesse (la vitesse de son ombre sur le sol)<br>dans ces deux référentiels ?</p>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/2nde/mouvement/)