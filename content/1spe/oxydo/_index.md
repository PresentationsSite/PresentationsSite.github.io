+++
title = "oxydo-réduction"
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


# Oxydo-réduction

---

{{%section%}}


## Une expérience :<br>l'arbre de Diane

---

On place un fil de cuivre $\ce{Cu (s)}$<br>dans une solution de nitrate d'argent $\left(\ce{Ag+ (aq)  + NO^3- (aq)}\right)$.

---

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/1NKI0gxbQZA?si=CeLWBZM0wFNcdE6K&amp;start=119" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

---

Preuve qu'il y a transformation chimique ?

<br>

<ul class="imp fragment fade-up">
<li>changement de couleur de la solution</li>
<li>apparition d'un solide</li>
</ul>

---

D'où peut venir la coloration<br>
de plus en plus bleutée de la solution ?

<br>

<p class="fragment fade-up imp">De l'ion cuivre II $\ce{Cu^2+ (aq)}$</p>

---

Quel est le solide qui apparaît sur le cuivre ?

<br>

<p class="fragment fade-up imp">De l'argent métallique $\ce{Ag (s)}$</p>

---

Quel serait l'équation de réaction ?

<br>

<p class="fragment fade-up imp">$\ce{ Cu(s) + 2 Ag+ (aq) -> Cu^2+ (aq) + 2 Ag(s)}$</p>

---


<ul>
<li>Les ions argent sont devenus des atomes d'argent.</li>
<li class="fragment fade-up">À l'inverse, les atomes de cuivre sont devenus des ions cuivre.</li>
</ul>

---

Que s'est-il échangé au final entre<br>l'élément argent et l'élément cuivre ?

<br>

<p class="fragment fade-up imp">Des électrons !</p>

---

Le cuivre a <span class="imp">cédé</span> deux électrons.

<p class="fragment fade-up">On dit qu'il a été <span class="imp">oxydé</span>.</p>

<p class="fragment fade-up"><span class="imp">Demi-équation d'oxydation</span> du cuivre :</p>

<p class="fragment fade-up">$$\ce{Cu (s) = Cu^2+ (aq) + 2 e-}$$</p>

---

L'ion argent a lui <span class="imp">capté</span> un électron.

<p class="fragment fade-up">On dit qu'il a été <span class="imp">réduit</span>.</p>

<p class="fragment fade-up"><span class="imp">Demi-équation de réduction</span> de l'ion argent :</p>

<p class="fragment fade-up">$$\ce{Ag+ (aq) + e- = Ag (s)}$$</p>

---

C'est en combinant les deux demi-équations de manière à faire disparaître les électrons échangées du bilan final qu'on obtient la réaction d'oxydo-réduction :

<div class="fragment fade-up">
$$\qquad\qquad\ce{Cu (s) = Cu^2+ (aq) + \color{#56C1FF}2 e-}$$
</div>

<div class="fragment fade-up">
$$\quad\qquad\ce{Ag+ (aq)} + \color{#56C1FF}\ce{e-}\color{#93a1a1}\ce{ = Ag (s)}\qquad\qquad\quad \color{#56C1FF}(\times 2)$$
</div>
<hr class="fragment fade-up" style = "width: 40ch;margin: 0 auto;border: none;border-top: 2px solid #93a1a1;">

<div class="fragment fade-up">
$$\ce{ Cu(s) + 2 Ag+ (aq) -> Cu^2+ (aq) + 2 Ag(s)}$$
</div>

---

La réaction d'oxydoréduction met ainsi en jeu<br>deux couples oxydant-réducteur :

<div class="fragment fade-up">
$$\left(\color{#FF968D}\ce{Ag+}\color{#93a1a1} /\color{#56C1FF}\ce{Ag}\color{#93a1a1}\right)$$
</div>

<div class="fragment fade-up">
$$\left(\color{#FF968D}\ce{Cu^2+}\color{#93a1a1} /\color{#56C1FF}\ce{Cu}\color{#93a1a1}\right)$$
</div>

---

<ul>

<li> L'ion argent $\ce{Ag+}$ est ici un <span class="imp">oxydant</span> car il oxyde le réducteur de l'autre couple (il lui vole des électrons).</li>
<br>
<li class="fragment fade-up">L'atome d'argent $\ce{Ag}$ est son <span class="imp" style="color:#56C1FF;">réducteur conjugué</span><br>(ce que $\ce{Ag+}$ devient une fois réduit).</li>
<br>
<li class="fragment fade-up">L'atome de cuivre $\ce{Cu}$ est ici un <span class="imp" style="color:#56C1FF;">réducteur</span> car il réduit l'oxydant de l'autre couple (il lui cède des électrons).</li>
<br>
<li class="fragment fade-up"> L'ion cuivre II $\ce{Cu^2+}$ est son <span class="imp">oxydant conjugué</span><br>(ce que $\ce{Cu}$ devient une fois oxydé).</li>

---

{{< slide  background-video="/oxydogif.mp4" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Généralisation

---

<div style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;">
<div style="padding: 10px 30px 20px 30px;">
Une <span class="imp">réaction d'oxydo-réduction</span> modélise<br>une transformation mettant en jeu<br><span class="imp">un transfert d'électrons</span> entre<br>deux couples oxydant-réducteur.
</div>
</div>

---

{{< slide  background-image="/deuxcouples2.png" background-size="contain" background-transition="concave">}}

L'oxydant d'un premier couple oxyde<br>le réducteur d'un deuxième couple.

<br><br><br><br><br><br>


---

On peut décomposer cette réaction<br>en deux <span class="imp"><b>demi-équations électroniques</b> :

<br>

<ul>
<li class="fragment fade-up"> la réduction de l'oxydant 1.</li>
<li class="fragment fade-up"> l'oxydation du réducteur 2.</li>
</ul>



---

<ul>

<li>Lors d'une réduction, un oxydant est réduit :<br>il capte des électrons et devient son réducteur conjugué.</li>

<div class="fragment fade-up">
$$\ce{Ox_1 + m e- = Red_1}$$
</div>

<br>

<li class="fragment fade-up">Lors d'une oxydation, un réducteur est oxydé :<br>il cède des électrons et devient son oxydant conjugué.
</li>

<div class="fragment fade-up">
$$\ce{Red_2 = Ox_2 + n e-}$$
</div>

</ul>

---

Pour obtenir l'équation bilan il faut équilibrer<br>le nombre d'électrons dans chaque demi-équation<br>afin qu'ils puissent disparaître du bilan. 

<p class="fragment fade-up">
Il y a en effet forcément autant d'électrons perdus<br>par les uns que d'électrons gagnés par les autres.
</p>

---

$$\quad\qquad\ce{Ox_1} + \color{#FFF056}\ce{m e-}\color{#93a1a1}=\ce{Red_1}\qquad\qquad \color{#56C1FF}(\times n)\qquad$$

$$\qquad\qquad\ce{Red_2 = Ox_2} + \color{#56C1FF} \ce{n e-}\quad \color{#FFF056} (\times m)$$

<hr class="fragment fade-up" style = "width: 35ch;margin: 0 auto;border: none;border-top: 2px solid #93a1a1;">

<div class="fragment fade-up">
$$\ce{n Ox_1 + m Red_2 -> n Red_1 + m Ox_2}$$
</div>


{{%/section%}}

---

{{%section%}}

## Établir une équation d'oxydoréduction

---

### Demi-équation électronique

<br>

<p class="fragment fade-up">
Pour un couple $(\ce{Ox/Red})$ donné :
</p>

---


<ul>
<li>on commence par disposer <b style="color:#FF968D">l'oxydant et les électrons</b> d'un côté de l'égalité et le <b style="color:#56C1FF">réducteur</b> de l'autre&nbsp;:<br>

<br>

<ul>
<li class="fragment fade-up">si réduction (gain d'électrons)&nbsp;:<br>$\color{#FF968D}\ce{Ox + \; e-} \color{#93a1a1} = \color{#56C1FF}\ce{Red}$</li><br>

<li class="fragment fade-up">si oxydation (perte d'électrons)&nbsp;:<br>$\color{#56C1FF}\ce{Red} \color{#93a1a1} =  \color{#FF968D}\ce{Ox + \; e-} $</li>
</ul>
</li>
</ul>

---

<ul>
<li>Si besoin, on équilibre les éléments<br>présents dans $\ce{Ox}$ et $\ce{Red}$</li>
</ul>

<p class="fragment fade-up">
Exemple de la réduction pour le couple $\left(\ce{Cl2 / Cl-}\right)$
</p>
<p class="fragment fade-up">
$\ce{Cl2 + e- = Cl-}$
</p>
<p class="fragment fade-up">
$\rightarrow\ce{Cl2 + e- = \color{#FF968D} 2 \color{#93a1a1} Cl-}$
</p>

---

<ul>
<li>S'il y a plus d'oxygènes $\ce{O}$ d'un côté que de l'autre,<br>on équilibre en ajoutant des molécules d'eau $\ce{H2O}$<br>de l'autre côté.</li>
</ul>

<p class="fragment fade-up">
Exemple de l'oxydation pour le couple $\left(\ce{NO3- / NO }\right)$
</p>
<p class="fragment fade-up">
$\ce{NO = NO3- + e-}$
</p>
<p class="fragment fade-up">
$\rightarrow\ce{NO +\color{#FF968D} 2 H2O\color{#93a1a1} = NO3- + e-}$
</p>

---

<ul>
<li>S'il y a plus d'hydrogène $\ce{H}$ d'un côté que de l'autre, on équilibre en ajoutant des ions hydrogène $\ce{H+}$<br>de l'autre côté.</li>
</ul>

<p class="fragment fade-up">
Suite de l'exemple précédent :
</p>
<p class="fragment fade-up">
$\ce{NO +2 H2O = NO3- + e-}$
</p>
<p class="fragment fade-up">
$\rightarrow\ce{NO + 2 H2O  = NO3- + \color{#FF968D} 4 H+ \color{#93a1a1} + e-}$
</p>

---

<ul>
<li>Enfin, on équilibre les charges grâce aux électrons.</li>
</ul>

<p class="fragment fade-up">
Suite des exemples précédents :
</p>
<p class="fragment fade-up">
$\ce{Cl2 + e- = 2 Cl-}$
</p>
<p class="fragment fade-up">
$\rightarrow\ce{Cl2 + \color{#FF968D}2\color{#93a1a1} e- =  2 \color{#93a1a1} Cl-}$
</p>

<br>

<p class="fragment fade-up">
$\ce{NO + 2 H2O  = NO3- + 4 H+ + e-}$
</p>
<p class="fragment fade-up">
$\rightarrow\ce{NO + 2 H2O  = NO3- + 4 H+ + \color{#FF968D}3\color{#93a1a1} e-}$
</p>

---

### Équation bilan

<br>

<ul>
<li class="fragment fade-up">On détermine l'espèce qui subit la réduction et celle qui subit l'oxydation et on équilibre chacune des demi-équations.</li><br>
</ul>

<br>

<ul>
<li class="fragment fade-up">
On fait en sorte d'avoir autant d'électrons dans la réduction et dans l'oxydation et on les combine.
</li>
</ul>

---

Exemple de l'oxydation<br>du monoxyde d'azote $\ce{NO}$ par le dichlore $\ce{Cl2}$.

Les couples sont $(\ce{NO3-} / \ce{NO})$ et $(\ce{Cl2} / \ce{Cl})$.

---


<p>On nous dit que le $\ce{NO}$ est oxydé, c'est donc<br>le réducteur, et le $\ce{Cl2}$ est l'oxydant.</p>

<ul>
<li class="fragment fade-up">L'oxydant $\ce{Cl2}$ subit une réduction (gain d'électrons)&nbsp;:<br>
 <span class="fragment">$\ce{Cl2 + \color{#FFF056} 2 e- \color{#93a1a1}} = \ce{2 Cl-} $</span></li><br>
 </ul>
 
 <ul>
 <li class="fragment fade-up">Le réducteur $\ce{NO}$ subit une oxydation (perte d'électrons)&nbsp;:<br>
 <span class="fragment">$\ce{ NO + 2 H2O} = \ce{NO3- + 4H+ + \color{#56C1FF} 3 e-}  $</span></li>
 </ul>
 
 ---
 
 Maintenant, on équilibre les deux demi-équations<br>pour faire disparaître les électrons&nbsp;:

<div class="fragment fade-up">

$$ 
\begin{aligned}
\ce{Cl2 + \color{#FFF056} 2 e- \color{#93a1a1}} &= \ce{2 Cl-} &\color{#56C1FF}(\times 3)\\\\
\ce{ NO + 2 H2O} &= \ce{NO3- + 4H+ + \color{#56C1FF} 3 e-}   &\color{#FFF056} (\times 2)
\end{aligned}
$$

</div>

<hr class="fragment fade-up" style = "width: 45ch;margin: 0px 0px 20px 0px; auto;border: none;border-top: 2px solid #93a1a1;">


<div class="fragment fade-up" style="position:relative;margin-left:1em;font-size:0.9em;border: 2px solid #FF968D;padding:10px;width:fit-content;border-radius:10px;">
$\displaystyle\ce{3 Cl2 + 2 NO + 4 H2O -> 6 Cl- + 2 NO3- + 8 H+ } $
</div>

---

Parfois, on peut trouver des espèces identiques<br>($\ce{H+}$ ou $\ce{H2O}$) de chaque côté de l'équation.<br>
Dans ce cas, on simplifie les quantités.

{{%/section%}}

---

{{%section%}}

## Exemples

---

<span style="font-size:2em;">🐣</span><br>
Réaction d'oxydoréduction<br>entre l'ion fer II et l'ion cuivre II

Les couples sont :

$\left(\ce{Fe^3+(aq) / Fe^2+(aq)}\right)$ <br>
et $\left(\ce{Cu^2+(aq) / Cu (s)}\right)$

---

<span style="font-size:2em;">🐥</span><br>
 Réaction d'oxydoréduction<br>entre l'aluminium et le diiode

Les couples sont :

$\left(\ce{Al^3+(aq) / Al (s)}\right)$ <br>
et $\left(\ce{I2(aq) / I-(aq)}\right)$

---

<span style="font-size:2em;">🐥</span><br>
 Réaction d'oxydoréduction<br>entre le dioxygène et le zinc

Les couples sont :

$\left(\ce{O2(aq) / H2O (\ell)}\right)$ <br>
et $\left(\ce{Zn^2+(aq) / Zn (s)}\right)$

---

<span style="font-size:2em;">🐓</span><br> 
Réaction d'oxydoréduction entre<br>le dioxyde de soufre et l'ion permanganate

Les couples sont :

$\left(\ce{SO4^2-(aq) / SO2 (aq)}\right)$ <br>
et $\left(\ce{MnO4-(aq) / Mn^2+(aq)}\right)$

Pensez à simplifier à la fin.

{{%note%}}
2 MnO4- + 5 SO2 + 2 H2O -> 2 Mn2+ + 5 SO42- +4 H+
{{%/note%}}

---

<span style="font-size:3em;">🦚</span><br> 
Réaction d'oxydoréduction entre<br>l'éthanol et les ions dichromates.

Les couples sont :

$\left(\ce{Cr2O7^2- (aq)/ Cr^3+ (aq)}\right)$ <br>
et $\left(\ce{CH3COOH (\ell)/ CH3CH2OH (\ell)}\right)$

{{%note%}}
Cr2O72- + 14 H+ + 6e- = 2 Cr3+ + 7 H2O (*2)
CH3CH2OH + H2O = CH3COOH + 4 H+ + 4 e- (*3)
2 Cr2O72-  + 3 CH3CH2OH + 16H+ = 4 Cr3+ + 3 CH3COOH + 11 H2O
{{%/note%}}


{{%/section%}}

--- 

[Retour site](https://coursphychi.github.io/1spe/oxydo/)
