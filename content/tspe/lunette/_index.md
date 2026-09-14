+++
title = "Lunette astronomique"
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

# Lunette astronomique

----


{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/1/18/Irving_Porter_Church_Telescope.jpg" background-size="contain" background-transition="concave">}}




{{%/section%}}

---

{{%section%}}

## Rappels sur les lentilles

---


Par quoi est caractérisée une lentille convergente ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:100px;max-width:100%;">
<img src="/lentconv.png" style="box-shadow:none;background:none;">
</div>

---

{{< slide  background-image="/lunette1.png" background-size="contain" background-transition="concave">}}

Par sa <span class="imp">distance focale $f'=\overline{OF'}$</span>

<br><br><br><br><br><br><br><br><br>

F' est le <span class="imp">foyer image</span> de la lentille<br>et O son <span class="imp">centre optique</span>.

---

Foyer objet F tel que $\overline{\mathrm{OF}}=-\overline{\mathrm{OF'}}=-f'$

---

Quelle est la caractéristique géométrique des rayons émis par un objet (source) très éloigné ?

<p class="fragment fade-up">Ils sont <span class="imp">parallèles</span>.</p>

---

Que deviennent ces rayons émis par une source<br>très éloignée lorsqu'ils traversent la lentille ?

---


Ils convergent en un point du plan focal image.

<p class="fragment fade-up">Comment trouver ce point ?</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/lunette2.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">C'est le point d'intersection entre le plan focal et le <b style="color:#FEAE00">rayon particulier passant pas O</b> (seul rayon non dévié).</p>

---

Et si l'objet est dans la direction de l'axe optique ?

<p class="fragment fade-up">Les rayons convergent au foyer image F'.</p>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/lunette3.png" style="box-shadow:none;background:none;">
</div>


<p class="imp fragment fade-up">
$$-\infty \xrightarrow{(L)} \mathrm{F'}$$
</p>

---

Où doit être placé l'objet pour que la lentille en fasse une image en $+\infty$ ($\Leftrightarrow$ rayons émergents parallèles) ?

---

Sur le <span class="imp">plan focal objet</span>.

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/lunette4.png" style="box-shadow:none;background:none;">
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/lunette5.png" style="box-shadow:none;background:none;">
</div>


<p class="imp fragment fade-up">
$$F \xrightarrow{(L)} +\infty$$
</p>

---

Où doit-être l'objet pour que nos yeux<br>puissent le voir sans accommoder ?

<p class="fragment fade-up">Très loin (par rapport à la distance focale<br>de nos yeux), c'est-à-dire en $-\infty$.</p>


{{%/section%}}

---

{{%section%}}

## La lunette afocale

---

Beaucoup d'instruments d'optique (lunette astronomique, télescope, microscope, etc.) se terminent par une lentille appelée <span class="imp">oculaire</span>.


<p class="fragment fade-up">Le rôle de l'<span class="imp">oculaire</span> est d'envoyer<br>les rayons dans l'œil.</p>

---

Comment doivent être ces rayons dans l'idéal ?

<p class="fragment fade-up">Parallèles entre eux !</p>

---

Et comme une lunette astronomique regarde des objets très loins, les rayons issus d'un point objet arrivent eux aussi parallèles entre eux.

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/lunette6.png" style="box-shadow:none;background:none;">
</div>

---

Une lunette astronomique bien réglée est alors<br>par définition <span class="imp">afocale</span> puisqu'on a :

<p class="imp fragment fade-up">
$$-\infty \xrightarrow{\text{(lunette astronomique)}}  + \infty$$
</p>

<p class="imp fragment fade-up">
L'image d'un objet à l'infini est située à l'infini.
</p>


---

À quoi sert une lunette astronomique ?

<p class="fragment fade-up">Elle permet de "grossir" des objets très éloignés.</p>

---

Mais que veut dire "grossir" ?

<p class="fragment fade-up">Grossir, c'est augmenter le <span class="imp">diamètre apparent</span> de l'objet, c'est-à-dire l'<span class="imp">angle</span> (⚠️) sous lequel l'objet est vu.</p>

{{%note%}}
Exemple : le diamètre apparent du Soleil et de la Lune est de 1/2° environ soit 30' d'angle
{{%/note%}}

---

Supposons que l'objet soit vu sous l'<span style="color:#56C1FF;">angle $\alpha$ sans la lunette</span> (le diamètre apparent de l'objet vaut donc $\alpha$)

<p class="fragment fade-up">et sous l'<span style="color:#FF95CA;">angle $\alpha'$ à travers la lunette</span>.</p>

---

{{< slide  background-image="/lunette7.png" background-size="contain" background-transition="concave">}}

---


Le bas de l'objet est aligné avec l'axe optique et le rayon issu du haut de l'objet fait un <span style="color:#56C1FF;">angle $\alpha$</span> avec l'axe optique.

<p class="fragment fade-up">Le rayon issu du haut de l'objet fait l'<span style="color:#FF95CA;">angle $\alpha'$</span><br>avec l'axe optique en quittant la lunette.</p>




---

Le <span class="imp">grossissement $G$</span> est alors défini par :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:15px">
$$G=\frac{\color{#FF95CA}\alpha'}{\color{#56C1FF}\alpha}$$
</div>

---

On utilise <span class="imp">deux lentilles convergentes</span><br>pour réaliser une lunette astronomique de type Kepler.

<p class="fragment fade-up">La première est l'<b style="color:#56C1FF;">objectif</b> et la seconde,<br>déjà évoquée, est l'<b style="color:#FF95CA;">oculaire</b>.</p>

---

Comment disposer les deux lentilles pour que l'oculaire renvoie les rayons le traversant parallèlement ?



<div class="fragment fade-up" style="color:#16E7CF">
Les rayons viennent de l'infini :
$$
\color{#56C1FF} -\infty \xrightarrow{(\mathrm{objectif})} F'_{\mathrm{ob}}
$$
</div>

<div class="fragment fade-up" style="color:#16E7CF">
L'oculaire doit renvoyer les rayons en l'infini :
$$
\color{#FF95CA}  F_{\mathrm{oc}} \xrightarrow{(\mathrm{oculaire})} +\infty
$$
</div>

---

<p style="color:#16E7CF">
<u>Conclusion</u>
</p>

<div class="fragment fade-up" style="color:#16E7CF">
Il faut :

$$
{\color{#56C1FF}F'\_{\mathrm{ob}}} = {\color{#FF95CA}F_{\mathrm{oc}} }
$$
</div>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/lunette8.png" style="box-shadow:none;background:none;">
</div>



---

<p class="imp">
Le foyer image de l'objectif doit être<br>confondu avec le foyer objet de l'oculaire<br>pour obtenir une lunette afocale.
</p>

<br>

<p class="fragment fade-up"><b style="color:#FFF056">Conséquence :</b></p>

<p class="fragment fade-up">
La distance <b style="color:#FFF056">$\mathrm{O_{ob} O_{oc}}$</b> entre les deux lentilles<br>(qui correspond approximativement à<br>la longueur de la lunette) vaut <b class="fragment" style="color:#FFF056">$f'_\mathrm{ob}+f'_\mathrm{oc}$</b>.


---

Comment exprimer le grossissement<br>en fonction de $f'\_{ob}$ et $f'_{oc}$ ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/lunette9.png" style="box-shadow:none;background:none;">
</div>

<u>Rq</u> : $\color{#88FA4E}\mathrm{A_i B_i}$ est l'image réelle renversée<br>de l'objet lointain $\color{#FFF056}\mathrm{A_\infty B_\infty}$ par l'objectif.

---

<p style="color:#16E7CF">
Sur le triangle $\mathrm{O_{ob}A_i B_i}$ :
</p>

<p class="fragment fade-up" style="color:#16E7CF">
$\mathrm{A_i B_i}=f'_\mathrm{ob}\times\tan(\alpha)$
</p>

<p class="fragment fade-up" style="color:#16E7CF">
Sur le triangle $\mathrm{O_{oc}A_i B_i}$ :
</p>

<p class="fragment fade-up" style="color:#16E7CF">
$\mathrm{A_i B_i}=f'_\mathrm{oc}\times\tan(\alpha')$
</p>

---

<p style="color:#16E7CF">
D'où :
</p>

<p class="fragment fade-up" style="color:#16E7CF">
$f'_\mathrm{ob}\times\tan(\alpha) = f'_\mathrm{oc}\times\tan(\alpha')$
</p>

<p class="fragment fade-up" style="color:#16E7CF">
$\displaystyle \Leftrightarrow \frac{\tan(\alpha')}{\tan(\alpha)} = \frac{f'_\mathrm{ob}}{f'_\mathrm{oc}}$
</p>

<p class="fragment fade-up" style="color:#16E7CF">
Et si on se place dans l'approximation des petits angles<br>($\alpha,\alpha'\ll \pu{1 rad}$), on a
$\tan(\alpha)\approx \alpha$<br>et $\tan(\alpha')\approx\alpha'$ ($\alpha$ et $\alpha'$en radians)
</p>

---

<p style="color:#16E7CF">
On en déduit :
</p>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px;color:#16E7CF;">
$$ 
G =  \frac{\alpha'}{\alpha} = \frac{f'_\mathrm{ob}}{f'_\mathrm{oc}}
$$
</div>


<p class="fragment fade-up">⚠️ À savoir redémontrer ⚠️</p>


---

À quelle condition sur $f'\_\mathrm{ob}$ et $f'_\mathrm{oc}$ a-t-on un grossissement supérieur à 1 ?

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$G>1\Rightarrow f'_\mathrm{ob}> f'_\mathrm{oc}$$
</div>




{{%/section%}}

---

{{%section%}}

## Schémas

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/rh-o9qHK6Lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Qu'est-ce qui ne va pas dans ce schéma ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/lunettefoireux.png" style="box-shadow:none;background:none;border-radius:10px">
</div>

---

Les rayons ne doivent pas être déviés en B<sub>i</sub> !


<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/lunette9.png" style="box-shadow:none;background:none;">
</div>


---


Avec œil :


<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/lunette10.png" style="box-shadow:none;background:none;">
</div>

---

Faisceau issu de $\mathrm{B_\infty}$ :

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/lunette11.png" style="box-shadow:none;background:none;">
</div>

{{%/section%}}

---

{{%section%}}

## Caractéristiques d'une<br>lunette astronomique

---

{{< slide  background-image="/legendelunette.png" background-size="contain" background-transition="concave">}}


---


Les étoiles autres que le soleil sont trop loin pour<br>être vues autrement que comme des points<br>à travers une lunette astronomique.

<br>

<p class="fragment fade-up">Quelle autre utilité peut avoir la lunette ?</p> 

---

La lunette permet d'augmenter la luminosité en concentrant la lumière passant à travers l'objectif. 

<p class="fragment fade-up">Pour cela, il faut que la lentille convergente servant d'objectif ait le plus grand diamètre possible.</p>


---

Mais les grandes lentilles présentent<br>de nombreux problèmes :

<ul>
<li class="fragment fade-up">Une lentille disperse<br>$\rightarrow$ problème d'aberration chromatique.</li>
<br>
<li class="fragment fade-up">Une grande lentille est très lourde et peut fléchir.</li>
<br>
<li class="fragment fade-up">L'obtention d'un verre homogène et son polissage sont difficiles et longs. Les coûts deviennent prohibitifs.</li>
</ul>

---

<p>Les miroirs gomment tous ces défauts.<br>
C'est pour cela que les grands télescopes<br>sont réflecteurs et non réfracteurs.</p>

<p class="fragment fade-up">En pratique, on n'est pas allé au-delà de 1 m pour l'objectif d'une lunette alors qu'il existe (presque)<br>des télescope de 40 m de diamètre.</p>

{{%note%}}
Le plus grand monomiroir fait 8,4 m de diamètre (observatoire Vera Rubin au Chili).
Le plus grand télescope optique actuellement en service en ouverture unique : le GTC (au cCanaries) avec un primaire segmenté de 10,4 m. 
Le plus grand miroir primaire prévu (en construction) : celui de l’ELT (ESO Extremely Large Telescope), de 39 m (souvent donné 39,3 m) de diamètre, segmenté en 798 éléments.
{{%/note%}}

---

<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li><b style="color:#56C1FF">Rôle de l'objectif :</b><br>
<span class="fragment">il collecte la lumière et forme l'image intermédiaire $\mathrm{A_i B_i}$ de l'objet situé à l'infini.</span>
</li>
<br>
<li class="fragment fade-up"><b style="color:#FF95CA">Rôle de l'oculaire :</b></li>
<span class="fragment">il sert de loupe en formant l'image de $\mathrm{A_i B_i}$ en l'infini.</span></li>
</ul>

---

Pour avoir la meilleure<br>lunette astronomique, il faut donc :

<ul>
<li class="fragment fade-up">une lentille de grand diamètre pour l'objectif afin d'avoir le meilleur collecteur de lumière possible,</li>
<li class="imp fragment fade-up">une distance focale de l'objectif grande par rapport<br>à celle de l'oculaire pour avoir le plus grand grossissement possible.</li>
</ul>

<p class="fragment fade-up">L'encombrement de la lunette est alors approximativement donné par la somme des<br>distances focales de l'oculaire et de l'objectif.</p>

{{%/section%}}

---

{{< slide background-iframe="https://coursphychi.github.io/lunette.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

[Retour site](https://coursphychi.github.io/tspe/lunette/)