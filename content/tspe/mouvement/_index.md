+++
title = "Mouvement"
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

# Cinématique

---

La <span class="imp">cinématique</span> est l'étude du mouvement.

---

Un mouvement s'étudie dans un <span class="imp">référentiel</span>.

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:20px 50px 20px 50px;border-radius:10px">
Un référentiel est un solide (ensemble de points fixes entre eux) par rapport auquel on repère<br>la position ou le mouvement.
</div>

---

Un référentiel est composé :

<br>

<ul>
<li class="fragment fade-up">d'un <span class="imp">repère d'espace</span> $(0;\vec{i},\vec{j},\vec{k})$<br>permettant de définir la position,</li>
<br>
<li class="fragment fade-up">d'un <span class="imp">repère de temps</span> ou horloge $(t)$<br>permettant d'associer une date à chaque position.</li>
</ul>

---

Référentiels usuels :

<br>

<ul>
<li class="fragment fade-up"><span class="imp">Référentiel terrestre</span> :<br>tout solide immobile à la surface de la Terre.</li>
</ul>

---

<ul>
<li>Référentiel <span class="imp">géocentrique</span> :<br>solide défini par le centre de la Terre et 3 étoiles lointaines considérées comme fixes.</li>
</ul>

---


<ul>
<li>Référentiel <span class="imp">héliocentrique</span> :<br>solide défini par le centre du Soleil et 3 étoiles lointaines considérées comme fixes.</li>
</ul>


{{%/section%}}

---

{{%section%}}

## Vecteur position

---

{{< slide  background-image="/vecposition.png" background-size="contain" background-transition="concave">}}

---

Dans un repère orthonormé $(0;\vec{i},\vec{j},\vec{k})$, la position d'un point $\mathrm{M}$ à la date $t$ est donnée par son <b style="color:#56C1FF;">vecteur position


<p class="fragment fade-up">$\overrightarrow{\mathrm{OM}}(t)\left(\begin{aligned}x(t)\\y(t)\\z(t)\end{aligned}\right)$</p>


<p class="fragment fade-up">$\overrightarrow{\mathrm{OM}}(t)=x(t)\vec{i}+y(t)\vec{j}+z(t)\vec{k}$</p>

</b>

---

On notera fréquemment :

<b style="color:#56C1FF">
$$
\begin{cases}
x(t)=\ldots\\
y(t)=\ldots\\
z(t)=\ldots
\end{cases}
$$
</b>


<p class="fragment fade-up"><u>Rq</u> : en pratique, les mouvements seront presque toujours à 2 dimensions seulement.
<b style="color:#56C1FF">
$$
\begin{cases}
x(t)=\ldots\\
y(t)=\ldots
\end{cases}
$$
</b>
</p>


---

La <span class="imp">norme</span> $\mathrm{OM}$(t) du vecteur position vaut :

<p class="fragment fade-up">$\mathrm{OM}(t)=||\overrightarrow{\mathrm{OM}}(t)||=\sqrt{x(t)^2+y(t)^2+z(t)^2}$</p>

<p class="fragment fade-up">Unité : <span class="fragment">$\pu{m}$</span></p>

{{%/section%}}

---

{{%section%}}

## Vecteur vitesse


---

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vecvitmoy.png" style="box-shadow:none;background:none;">
</div>

---

Le vecteur vitesse moyenne d'un point $\mathrm{M}$<br>entre deux instants $t$ et $t+\Delta t$ est défini par :

<p class="fragment fade-up">
$
\begin{aligned}
\vec{v}_m(t) &= \frac{\overrightarrow{\mathrm{M}(t)\mathrm{M}(t+\Delta t)}}{\Delta t}\\
&= \frac{\overrightarrow{\mathrm{OM}(t+\Delta t)}-\overrightarrow{\mathrm{OM}(t)}}{\Delta t}\\
&=\frac{\overrightarrow{\Delta\mathrm{OM}(t)}}{\mathrm{\Delta}t}
\end{aligned}
$
</p>

---

On obtient le vecteur vitesse $\vec{v}(t)$<br>en faisant tendre $\Delta$ vers $0$.

<p class="fragment fade-up">On obtient alors la <span class="imp">dérivée</span> du vecteur position.</p>


---

Le <b style="color:#FFD932">vecteur vitesse $\vec{v}(t)$</b> d'un point $\mathrm{M}$ à la date $t$ est la <b style="color:#FFD932">dérivée par rapport au temps du vecteur position</b> :



<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FFD932;padding:0px 50px 20px 50px;border-radius:20px;color:#FFD932;font-size:1.em;">
$$\vec{v}(t)=\frac{\mathrm{d}\overrightarrow{\mathrm{OM}}}{\mathrm{d}t}$$
</div>



<p class="fragment fade-up">Notation :<br>
En physique, $\Delta$ correspond à une variation<br>et $\mathrm{d}$ à une variation infinitésimale.
</p>

---

<b style="color:#FFD932">
<p>
$$
\begin{array}{rcrcrcr}
\vec{v}(t) & = & v_x(t)\, \vec{i} & + & v_y(t) \, \vec{j} & +  &v_z(t)  \, \vec{k}\\
& = &\frac{\mathrm{d}x}{\mathrm{d}t} \,\vec{i} & +& \frac{\mathrm{d}y}{\mathrm{d}t} \, \vec{j} & +  &\frac{\mathrm{d}z}{\mathrm{d}t} \, \vec{k}
\end{array}
$$
</p>
</b>


<b style="color:#FFD932" >
<p class="fragment fade-up">
$$
\begin{cases}
v_x(t)=\frac{\mathrm{d}x}{\mathrm{d}t}=\ldots\\
v_y(t)=\frac{\mathrm{d}y}{\mathrm{d}t}=\ldots\\
v_z(t)=\frac{\mathrm{d}z}{\mathrm{d}t}=\ldots
\end{cases}
$$
</p>
</b>



<p class="fragment fade-up"><u>Rq</u> :
La notation physique $\frac{\mathrm{d}x}{\mathrm{d}t}$ correspond<br>à la notation mathématique $x'(t)$.
</p>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/vecvit.png" style="box-shadow:none;background:none;">
</div>

Le vecteur vitesse est porté par la <span class="imp">tangente à la trajectoire</span> et orienté dans le sens du mouvement.


---

La <span class="imp">norme</span> $v$(t) du vecteur vitesse vaut :

<p class="fragment fade-up">$v(t)=||\vec{v}(t)||=\sqrt{v_x(t)^2+v_y(t)^2+v_z(t)^2}$</p>

<p class="fragment fade-up">Unité : <span class="fragment">$\pu{m*s-1}$</span></p>

{{%/section%}}

---

{{%section%}}

## Vecteur accélération


---

<div style="position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vecaccmoy.png" style="box-shadow:none;background:none;">
</div>

---

Le vecteur accélération moyenne d'un point $\mathrm{M}$<br>entre deux instants $t$ et $t+\Delta t$ est défini<br>à partir du vecteur variation de vitesse :

$
\begin{aligned}
\vec{a}_m(t) &= \frac{\vec{v}(t+\Delta t)-\vec{v}(t)}{\Delta t}\\\\
&= \frac{\overrightarrow{\Delta v}(t)}{\Delta t}
\end{aligned}
$

---

On obtient le vecteur vitesse $\vec{a}(t)$<br>en faisant tendre $\Delta$ vers $0$.

<p class="fragment fade-up">Cela donne la <span class="imp">dérivée</span> du vecteur vitesse et donc<br>la <span class="imp">dérivée seconde</span> du vecteur position.</p>


---

Le <b style="color:#61D836">vecteur accélération $\vec{a}(t)$</b> d'un point $\mathrm{M}$ à la date $t$ est la <b style="color:#61D836">dérivée par rapport au temps du vecteur vitesse</b> et <b style="color:#61D836">la dérivée seconde du vecteur position</b> :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #61D836;padding:0px 50px 20px 50px;border-radius:20px;color:#61D836;font-size:1.em;">
$$
\begin{aligned}
\vec{a}(t)&=\frac{\mathrm{d}\vec{v}}{\mathrm{d}t}\\
&=\frac{\mathrm{d^2}\overrightarrow{\mathrm{OM}}}{\mathrm{d}t^2}
\end{aligned}
$$
</div>


---

<b style="color:#61D836">
<p>
$$
\begin{array}{rcrcrcr}
\vec{a}(t) & = & a_x(t)\, \vec{i} & + & a_y(t) \, \vec{j} & +  &a_z(t)  \, \vec{k}\\
& = &\frac{\mathrm{d}v_x}{\mathrm{d}t} \,\vec{i} & +& \frac{\mathrm{d}v_y}{\mathrm{d}t} \, \vec{j} & +  &\frac{\mathrm{d}v_z}{\mathrm{d}t} \, \vec{k}
\end{array}
$$
</p>
</b>


<b style="color:#61D836" >
<p class="fragment fade-up">
$$
\begin{cases}
a_x(t)=\frac{\mathrm{d}v_x}{\mathrm{d}t}=\ldots\\
a_y(t)=\frac{\mathrm{d}v_y}{\mathrm{d}t}=\ldots\\
a_z(t)=\frac{\mathrm{d}v_z}{\mathrm{d}t}=\ldots
\end{cases}
$$
</p>
</b>


---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/vecacc.png" style="box-shadow:none;background:none;">
</div>

Le vecteur accélération est dans la direction<br>et le sens du vecteur variation de vitesse. 

<p class="fragment fade-up">Dans le cas d'une trajectoire courbe,<br>il pointe vers l'intérieur de la courbe.</p>


---

La <span class="imp">norme</span> $a$(t) du vecteur accélération vaut :

<p class="fragment fade-up">$a(t)=||\vec{a}(t)||=\sqrt{a_x(t)^2+a_y(t)^2+a_z(t)^2}$</p>

<p class="fragment fade-up">Unité : <span class="fragment imp">$\pu{m*s-2}$</span></p>

---

{{< slide  background-image="/normpeople.png" background-size="contain" background-transition="concave">}}


{{%/section%}}


---


<iframe scrolling="no" title="Mouvement" src="https://www.geogebra.org/material/iframe/id/uk5ujj5u/width/650/height/650/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/true/ld/false/sdz/true/ctl/false" width="650px" height="650px" style="border:0px;"> </iframe>

---

{{%section%}}

## Vidéos

---


<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/Ooe94mPwXEY?si=vT3LiuPpVc0f8KOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

Jusqu'à 3'22'' (la méthode d'Euler est introduite après, utile pour le supérieur mais pas au programme de Tspé)

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/9W6zhF1cdso?si=yDmqcv_dHdqQ47FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

Jusqu'à 4'51'' (mouvement circulaire uniforme décrit dans un repère orthonormé fixe = pas au programme)

{{%/section%}}


---

{{%section%}}

## Mouvements rectilignes

---

Un mouvement est rectiligne<br>si sa trajectoire est <span class="fragment">une <span class="imp">droite</span>.</span>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:350px;max-width:100%;">
<img src="/shockmeme.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>


<p class="fragment fade-up">Le vecteur vitesse conserve alors<br>la même direction (celle du mouvement).</p>

---

Si le vecteur vitesse est constant,<br>le mouvement est dit <span class="imp">rectiligne <span class="fragment imp">uniforme</span></span>.

<p class="fragment fade-up">Que vaut alors le vecteur accélération ?</p>

<p class="fragment fade-up">
$$
\vec{a}=\frac{\mathrm{d}\vec{v}}{\mathrm{d}t}=\vec{0}
$$
</p>

<div class="imp fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0px 50px 20px 50px;border-radius:20px;color:#FF968D;font-size:1.2em;">
MRU $\Leftrightarrow$ $\vec{a}=\vec{0}$
</div>

---

{{< slide transition="concave-in none-out" >}}

Tracer les évolutions de la position <b style="color:#00A2FF">$x(t)$</b>, <br>de la vitesse <b style="color:#FFD932">$v(t)$</b> et de l'accélération <b style="color:#61D836">$a(t)$</b>.


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/graphexvavide.png" style="box-shadow:none;background:none;">
</div>

---

{{< slide transition="none-in concave-out" >}}

Tracer les évolutions de la position <b style="color:#00A2FF">$x(t)$</b>, <br>de la vitesse <b style="color:#FFD932">$v(t)$</b> et de l'accélération <b style="color:#61D836">$a(t)$</b>.


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/graphexva.png" style="box-shadow:none;background:none;">
</div>

---

<span class="imp">$\vec{a}(t)=\vec{cte}$</span>

Un mouvement rectiligne avec un vecteur accélération constant est dit <span class="imp">rectiligne uniformément accéléré</span>.

---

{{< slide transition="concave-in none-out" >}}

Tracer les évolutions de la position <b style="color:#00A2FF">$x(t)$</b>, <br>de la vitesse <b style="color:#FFD932">$v(t)$</b> et de l'accélération <b style="color:#61D836">$a(t)$</b>.


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/graphexvavide.png" style="box-shadow:none;background:none;">
</div>

---

{{< slide transition="none-in concave-out" >}}

Tracer les évolutions de la position <b style="color:#00A2FF">$x(t)$</b>, <br>de la vitesse <b style="color:#FFD932">$v(t)$</b> et de l'accélération <b style="color:#61D836">$a(t)$</b>.


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/graphexva2.png" style="box-shadow:none;background:none;">
</div>

---

<iframe scrolling="no" title="xva" src="https://www.geogebra.org/material/iframe/id/dpm6zhuu/width/720/height/506/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/true/ld/false/sdz/false/ctl/false" width="720px" height="506px" style="border:0px;border-radius:10px;"> </iframe>

---

Petite exercice :

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2022_F1_CourseLayout_Belgium.svg/2539px-2022_F1_CourseLayout_Belgium.svg.png" style="box-shadow:none;background:none;">
</div>

---

Avant d'aborder le virage des combes (5) du circuit<br>de Spa-Francorchamps, un pilote de F1 freine fortement pour passer sa vitesse de 327 km/h<br>à 176 km/h en 1,48 s.


<p class="fragment fade-up">En supposant le mouvement rectiligne uniformément accéléré, décrire le vecteur accélération de la F1.
</p>

<p class="fragment fade-up">Sur combien de mètres a lieu le freinage ?
</p>


<p class="fragment fade-up">Il se fait en réalité sur 93 m, que peut-on conclure ?
</p>




{{%/section%}}

---

{{%section%}}

## Mouvements circulaires

---

Un mouvement est <span class="imp">circulaire</span><br>si sa trajectoire est <span class="fragment">un <span class="imp">cercle</span> (ou un arc de cercle).</span>


<p class="fragment fade-up">On parle de <span class="imp">mouvement circulaire uniforme</span> si<br>la norme du vecteur vitesse est constante.</p>

---

Pour décrire le mouvement circulaire<br>d'un point M sur un cercle de centre O,<br>on utilise un <span class="imp">repère de Frenet</span>.

---

C'est un repère mobile centré au point<br>étudié M et de vecteurs unitaires :

<ul>
<li class="fragment fade-up"><b style="color:#FFD932">$\vec{u}_T$ : vecteur tangent</b><br>$\hphantom{\vec{u_t}}$&nbsp;&nbsp;&nbsp;tangent à la trajectoire,<br>$\hphantom{\vec{u_t}}$&nbsp;&nbsp;&nbsp;orienté dans le sens du mouvement</b></li>
<li class="fragment fade-up"><b style="color:#61D836">$\vec{u}_N$ : vecteur normal</b><br>$\hphantom{\vec{u_n}}$&nbsp;&nbsp;&nbsp;de direction (OM)<br>$\hphantom{\vec{u_n}}$&nbsp;&nbsp;&nbsp;orienté vers le centre O</li>
</ul>

<p class="fragment fade-up"><u>Rq</u> : $\vec{u}_T$ est parfois noté $\vec{T}$ et $\vec{u}_N$ noté $\vec{N}$.

---

<iframe scrolling="no" title="Frenet" src="https://www.geogebra.org/material/iframe/id/njrcnku6/width/488/height/468/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/true/ld/false/sdz/false/ctl/false" width="488px" height="468px" style="border:0px;border-radius:10px;"> </iframe>

---

Dans le repère de Frenet $(\mathrm{M};\vec{u}_T,\vec{u}_N)$,<br>le <b style="color:#FFF056">vecteur vitesse</b> se décompose en :

<div class="fragment fade-up">
$$
\vec{v}(t)
\begin{cases}
v_T(t)=v(t)\\
v_N(t)=0
\end{cases}
$$
</div>

<p class="fragment fade-up">Finalement :<br>
$\vec{v}(t)=v(t)\,\vec{u}_T$
</p>

---

Et le <b style="color:#61D836">vecteur accélération</b> :

<div class="fragment fade-up">
$$
\vec{a}(t)
\begin{cases}
a_T(t)=\frac{\mathrm{d}v}{\mathrm{d} t}\\
a_N(t)=\frac{v^2}{R}
\end{cases}
$$
</div>

<p class="fragment fade-up">Finalement :<br>
$\vec{a}(t)=\frac{\mathrm{d}v}{\mathrm{d} t}\,\vec{u}_T + \frac{v^2}{R}\,\vec{u}_N$
</p>

---

<iframe scrolling="no" title="Mouvement circulaire" src="https://www.geogebra.org/material/iframe/id/rjynsa48/width/676/height/537/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/true/ld/false/sdz/false/ctl/false" width="676px" height="537px" style="border:0px;border-radius:10px;"> </iframe>

---

Et si le mouvement est circulaire uniforme ?

<p class="fragment fade-up">On a $\frac{\mathrm{d}v}{\mathrm{d}t}=0$ puisque $v=\mathrm{cte}$</p>

<div class="fragment fade-up">
Et donc :

$$
\vec{a}(t)
\begin{cases}
a_T(t)=0\\\\
a_N(t)=\frac{v^2}{R}
\end{cases}
$$
</div>



<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #61D836;padding:10px 50px 20px 50px;border-radius:20px;font-size:1.2em;">
$\vec{a}(t)= \frac{v^2}{R}\,\vec{u}_N$
</div>

---


L'accélération est <span class="imp fragment">centripète</span> (dirigée<br>vers le centre) et de <span class="imp">norme constante</span>.



{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/mouvement/)