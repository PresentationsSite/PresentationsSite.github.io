+++
title = "Constante d'acidité"
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



# Force des acides<br>et des bases

---

{{% section %}}

## Autoprotolyse de l'eau

---

L'eau est un <b style="color:#88FA4E">ampholyte</b>.

<p class="fragment fade-up">Les deux couples acide-base<br>auxquels l'eau appartient sont&nbsp;:</p>

<p class="fragment fade-up">$$({\color{#88FA4E}\ce{H2O}}/{\color{#56C1FF}\ce{HO^-}})$$</p>

<p class="fragment fade-up">$$({\color{#FF968D}\ce{H3O+}}/{\color{#88FA4E}\ce{H2O}})$$</p>


---


L'eau peut donc réagir sur elle-même !<br>C'est la réaction d'<span class="imp">autoprotolyse de l'eau</span>.

<p class="fragment fade-up">Équation de la réaction&nbsp;:</p>

<span class="fragment fade-up">$$\ce{{\color{#88FA4E}\ce{H2O}}(ℓ) + {\color{#88FA4E}\ce{H2O}}(ℓ) -> {\color{#FF968D}\ce{H3O+}}(aq) + {\color{#56C1FF}\ce{HO^-}}(aq)}$$</span>

---

La constante d'équilibre de cette réaction, aussi appelée <b style="color:#FFF056">produit ionique de l'eau</b> s'écrit&nbsp;:

<br>

<div class="fragment fade-up" style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;padding: 0 20px 0 20px;">
$${\color{#FFF056}K_\mathrm{e}} = \frac{\ce{[{\color{#FF968D}\ce{H3O+}}]}\times\ce{[{\color{#56C1FF}\ce{HO^-}}]}}{{C^\mathrm{o}}^2}$$
</div>

<br>

<p class="fragment fade-up">
À 25°C, <b style="color:#FFF056">$K_\mathrm{e}=\pu{1,0e-14}$</b>,<br>
d'où <b style="color:#FFF056">$\mathrm{p}K_\mathrm{e} =$</b> <b class="fragment" style="color:#FFF056">$-\log\left(K_\mathrm{e}\right)=$</b> <b class="fragment" style="color:#FFF056">$14$</b>.
</p>

---

Si on connaît <b style="color:#FFF056">$K_\mathrm{e}$</b>, la concentration en <b style="color:#FF968D">ions oxonium</b> permet de déterminer celle en <b style="color:#56C1FF">ions hydroxyde</b><br>et inversement.

---

Exemple :

Le pH d'une solution à 25°C est mesurée à 2,3. 

Déterminer la concentration en ions oxonium<br>et en ions hydroxyde.

---

<div style="color:#FF968D">
$\begin{aligned}
\ce{[H3O+]}&=10^{- \mathrm{pH}}\\
&= 10^{-2,3}\\
&= \pu{5,0e-3 mol*L-1}
\end{aligned}$
</div>

<br>

<div class="fragment fade-up" style="color:#56C1FF">
$\begin{aligned}
\ce{[HO^-]}&=\frac{K_\mathrm{e} \times{C^\mathrm{o}}^2}{\ce{[H3O+]}}\\
&= \frac{\pu{1,0e-14\times 1,0}}{\pu{5,0e-3}}\\
&= \pu{2,0e-12 mol*L-1}
\end{aligned}$
</div>


---

On peut déduire de <b style="color:#FFF056">$K_\mathrm{e}$</b> le pH<br>d'une solution <b style="color:#FF968D">acide</b>, <b style="color:#88FA4E">neutre</b> ou <b style="color:#56C1FF">basique</b>.

---


<ul>
<li>Si la solution est <b style="color:#88FA4E">neutre</b></li>
</ul>

<p>On a par définition :<br><span class="fragment fade-up">$\ce{[{\color{#FF968D}\ce{H3O+}}]=[{\color{#56C1FF}\ce{HO^-}}]}$</span></p>
<br>
<p class="fragment fade-up">
Et comme
$\displaystyle\frac{\ce{[{\color{#FF968D}\ce{H3O+}}}]\times[{\color{#56C1FF}\ce{HO^-}}]}{{C^\mathrm{o}}^2}={\color{#FFF056}K_\mathrm{e}}$
</p>
<br>
<p class="fragment fade-up">
on obtient
$\ce{[{\color{#FF968D}\ce{H3O+}}]}^2 = {\color{#FFF056}K_\mathrm{e}} \times {C^\mathrm{o}}^2
$
</p>

---

Finalement :

$\begin{aligned}
\ce{[{\color{#FF968D}\ce{H3O+}}]} &= \sqrt{{\color{#FFF056}K_\mathrm{e}} \times {C^\mathrm{o}}^2}\\\\
&= \sqrt{{\color{#FFF056}K_\mathrm{e}}}\times  {C^\mathrm{o}} \\\\
&= \pu{1,0e-7 mol*L-1}
\end{aligned}
$


<div class="fragment fade-up">
Ou encore :<br>
<span style="color:#88FA4E;">
$
\displaystyle\mathrm{pH} = \frac{1}{2}\mathrm{p}K_\mathrm{e} = 7,0
$</span>
</div>

---

<ul>
<li>Si la solution est <b style="color:#FF968D">acide</b></li>
</ul>

<p class="fragment fade-up">
$\ce{[{\color{#FF968D}\ce{H3O+}}]>[{\color{#56C1FF}\ce{HO^-}}]}$
</p>

<p class="fragment fade-up">
Et donc $\displaystyle\ce{[{\color{#FF968D}\ce{H3O+}}]}>\frac{{\color{#FFF056}K_\mathrm{e}}\times {C^\mathrm{o}}^2}{\ce{[{\color{#FF968D}\ce{H3O+}}]}}$
</p>

<p class="fragment fade-up">
$\displaystyle \Rightarrow\ce{[{\color{#FF968D}\ce{H3O+}}]}^2>{\color{#FFF056}K_\mathrm{e}}\times {C^\mathrm{o}}^2$
</p>

<p class="fragment fade-up">
$\displaystyle \Rightarrow\ce{[{\color{#FF968D}\ce{H3O+}}]}> \sqrt{{\color{#FFF056}K_\mathrm{e}}}\times {C^\mathrm{o}}$
</p>

<p class="fragment fade-up">
d'où
$\displaystyle \ce{[{\color{#FF968D}\ce{H3O+}}]}> \pu{1,0e-7 mol*L-1}$
</p>

<p class="fragment fade-up">
Ou encore
$\displaystyle \mathrm{pH}<\frac{1}{2}{\color{#FFF056}\mathrm{p}K_\mathrm{e}}$<br>
Soit <span style="color:#FF968D">$\displaystyle \mathrm{pH}<7,0$</span>
</p>

---

<ul>
<li>Si la solution est <b style="color:#56C1FF">basique</b></li>
</ul>

<p class="fragment fade-up">
$\ce{[{\color{#FF968D}\ce{H3O+}}]<[{\color{#56C1FF}\ce{HO^-}}]}$
</p>

<p class="fragment fade-up">
$\displaystyle \Rightarrow \ce{[{\color{#FF968D}\ce{H3O+}}]}< \pu{1,0e-7 mol*L-1}$
</p>

<p class="fragment fade-up">
Soit
<span style="color:#56C1FF">$\displaystyle \mathrm{pH}>7,0$</span>
</p>

---

{{< slide  background-image="/solacide.png" background-size="contain" background-transition="concave">}}

{{% /section %}}


---

{{% section %}}

## Acides forts et bases fortes

---

<div style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;">
<div style="padding: 10px 30px 20px 30px;">
Un <span class="imp">acide fort</span> ou une <b style="color:#56C1FF">base forte</b> réagissent<br>de manière quasi-totale avec l'eau.
</div>
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/tabavacfort.png" style="box-shadow:none;background:none;">
</div>

---


$\ce{{\color{#FF968D}AH} + H2O ->}$ <span class="fragment">$\ce{A- + H3O^+}$</span>
<br><br>
<p class="fragment fade-up">
Si <b style="color:#FF968D">$\ce{AH}$</b> est un <b style="color:#FF968D">acide fort</b>
</p>
<br>
<div class="fragment fade-up">
<div style = "position:relative;margin:auto;width:fit-content;border:solid #FF968D 5px; border-radius:10px;padding:20px;">
<b style="color:#FF968D">$\tau=$ <span class="fragment fade-up">$1$</span></b>
</div>
<br>
(où $\tau$ est le taux d'avancement de la réaction)
</div>

---

D'où ${\color{#FF968D}\ce{[H3O^+]}} = \ce{[AH]_0} = {\color{#FF968D}C}$

<p class="fragment fade-up">La concentration en ions oxonium en solution est<br>égale à la concentration apportée $C$ en acide.</p>
 
 <p class="fragment fade-up"><span class="imp">$\Rightarrow\mathrm{pH}=$ <span class="fragment">$\displaystyle -\log\left(\frac{C}{C^\mathrm{o}}\right)$</span></span></p>


---


${\color{#56C1FF}\ce{A^-}} \ce{+ H2O ->}$ <span class="fragment">$\ce{AH + HO^-}$</span>

<p class="fragment fade-up">
Si <b style="color:#56C1FF">$\ce{A-}$</b> est une <b style="color:#56C1FF">base forte</b>, <b style="color:#56C1FF">$\tau= 1$</b></p>

<p class="fragment fade-up">
D'où ${\color{#56C1FF}\ce{[HO^-]}} \ce{= [A^-]_0} = {\color{#56C1FF}C}$<br>
 la concentration en ions hydroxyde est égale<br>à la concentration apportée $C$ en base.
</p>
 
 <p class="fragment fade-up"><b style="color:#56C1FF">$\Rightarrow\mathrm{pH}=$ <b class="fragment" style="color:#56C1FF">$\displaystyle 14 +\log\left(\frac{C}{C^\mathrm{o}}\right)$</b></b></p>


---


<div style="color:#16E7CF;">
En effet :
</div>

<div class="fragment fade-up" style="color:#16E7CF;">
$$K_e =\frac{\ce{[H3O+]\times [HO-]} }{{C^\circ}^2}$$
</div>

<div class="fragment fade-up" style="color:#16E7CF;">

$$
\begin{aligned}
\Rightarrow \ce{[H3O+]}&=\frac{K_e {C^\circ}^2}{\ce{[HO-]}}\\\\
&=\frac{K_e {C^\circ}^2}{\color{#FFD932}C}
\end{aligned}
$$

</div>

---


<div style="color:#16E7CF;">

$$
\begin{aligned}
\Rightarrow \mathrm{pH} &=-\log\left(\frac{\ce{[H3O+]}}{C^\circ}\right)\\\\
&=-\log\left(K_e\times\frac{C^\circ}{\color{#FFD932}C}\right)\\\\
&=-\left( \log\left(K_e\right)+\log\left(\frac{C^\circ}{\color{#FFD932}C}\right)\right)\\\\
&=\mathrm{p}K_e + \log\left(\frac{\color{#FFD932}C}{C^\circ}\right)
\end{aligned}
$$

</div>


---

Exemples d'acides forts :

<br>

<ul>
<li class="fragment fade-up">l'<b style="color:#FF968D">acide chlorhydrique $\ce{HCℓ(g)}$</b><br>
<pan style="font-size:0.9em;">$\ce{HCℓ(g) + H2O(ℓ) -> H3O^+(aq) + Cℓ^-(aq)}$</span>
</li>
<br>
<li class="fragment fade-up">l'<b style="color:#FF968D">acide nitrique $\ce{HNO3(ℓ)}$</b><br>
<pan style="font-size:0.9em;">$\ce{HNO3(ℓ) + H2O(ℓ) -> H3O^+(aq) + NO3^-(aq)}$</span>
</li>
</ul>

---

Exemple de base forte :

<br>

<ul>
<li class="fragment fade-up">l'<b style="color:#56C1FF">hydroxyde de sodium ou soude $\ce{NaOH(s)}$</b><br>
<pan style="font-size:0.9em;">$\ce{NaOH(s) + H2O(ℓ) -> HO^-(aq) + Na^+(aq)}$</span>
</li>
</ul>

{{% /section %}}

---

{{% section %}}

## Acides faibles et bases faibles

---

La transformation chimique entre un <b style="color:#FF968D">acide faible</b><br>ou une <b style="color:#56C1FF">base faible</b> et l'eau n'est pas totale.

---

$\ce{{\color{#FF968D}AH} + H2O <=> A- + H3O^+}$
<br><br>
<p class="fragment fade-up">
Si <b style="color:#FF968D">$\ce{AH}$</b> est un <b style="color:#FF968D">acide faible</b>
</p>
<br>
<div class="fragment fade-up">
<div style = "position:relative;margin:auto;width:fit-content;border:solid #FF968D 5px; border-radius:10px;padding:20px;">
<b style="color:#FF968D">$\tau$ <span class="fragment fade-up">$<1$</span></b>
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/tabavacfaible.png" style="box-shadow:none;background:none;">
</div>

---

$$
\begin{aligned}
x_f < n &\Rightarrow \ce{[H3O+] < C}\\\\
& \Rightarrow {\color{#FF968D} \mathrm{pH} > -\log\left(\frac{C}{C^\mathrm{o}}\right) }
\end{aligned}
$$

<p class="fragment fade-up">
Le pH d'un acide faible dans l'eau est <span class="fragment imp">plus grand</span> que celui d'un acide fort de même concentration apportée.
</p>

---

${\color{#56C1FF}\ce{A^-}}\ce{ + H2O -> AH + HO^-}$

<p class="fragment fade-up">
Si <b style="color:#56C1FF">$\ce{A-}$</b> est une <b style="color:#56C1FF">base faible</b>, <b style="color:#56C1FF">$\tau < 1$</b></p>


<p class="fragment fade-up">
Le pH d'une base faible dans l'eau est<br><b style="color:#56C1FF" class="fragment">plus faible</b> que celui d'une base forte<br>de même concentration apportée.
</p>

---

En effet :

<pan class="fragment">$\ce{[HO-]}\searrow$</span> <pan class="fragment">$\Rightarrow$ $\ce{[H3O+]}\nearrow$ </span><pan class="fragment">$\Rightarrow$ $\mathrm{pH}\searrow$</span>


---

Exemple d'un acide faible :

<br>

<ul>
<li class="fragment fade-up">l'<b style="color:#FF968D">acide éthanoïque $\ce{CH3COOH(ℓ)}$</b><br>(ou acide acétique)<br>
<span style="font-size:0.9em;">Sa forme dissoute est simplement $\ce{CH3COOH(aq)}$.</span><br>
<span style="font-size:0.8em;">$\ce{CH3COOH(ℓ) + H2O(ℓ) <=> H3O^+(aq) + CH3COO^-(aq)}$</span><br>
Sa base conjuguée est l'ion éthanoate.
</li>
</ul>

---

Exemple d'une base faible :

<br>

<ul>
<li class="fragment fade-up">l'<b style="color:#56C1FF">ammoniac $\ce{NH3(g)}$</b><br>
<span style="font-size:1em;">Sa forme dissoute est simplement $\ce{NH3(aq)}$.</span><br>
<span style="font-size:0.9em;">$\ce{NH3(g) + H2O(ℓ) <=> HO^-(aq) + NH4^+(aq)}$</span><br>
Son acide conjugué est l'ion ammonium.
</li>
</ul>

{{% /section %}}

---

{{% section %}}


## Force d'un acide faible<br>ou d'une base faible

---

$$\ce{{\color{#FF968D}AH} + H2O <=> A- + H3O^+}$$

La constante d'équilibre de la réaction d'un <b style="color:#FF968D">acide faible</b> dans l'eau s'appelle <b style="color:#FF968D">constante d'acidité</b> notée <b style="color:#FF968D">$K_\mathrm{A}$</b>.

<p class="fragment fade-up"><b style="color:#FF968D">$K_\mathrm{A}$</b> caractérise un couple acide-base $({\color{#FF968D}\ce{AH}}/{\color{#56C1FF}\ce{A-}})$.</p>

---

Par définition,

<br>

<div style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;">
<div style="padding: 10px 30px 20px 30px;">

${\color{#FF968D}K_\mathrm{A}}=$ <span class="fragment fade-up">$\displaystyle\frac{\ce{[A-]\_\mathrm{f}  \times[H3O+]\_\mathrm{f} }}{[{\color{#FF968D}\ce{AH}}]\_\mathrm{f}\times C^\mathrm{o}}$</span>

</div></div>

---

Pour comparer la force des acides faibles, ou la force des bases faibles, on compare leurs <b style="color:#FF968D">$K_\mathrm{A}$</b> ou plutôt leurs <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> qui permettent de manipuler des valeurs plus pratiques (généralement entre 0 et 14).

<br>

<div class="fragment fade-up" style = "position:relative;margin:auto;width:fit-content;border:solid #FF968D 5px; border-radius:10px;padding:20px;">
<b style="color:#FF968D">$\displaystyle\mathrm{p}K_\mathrm{A}=-\log\left(K_\mathrm{A}\right)$ </b>
</div>

---

Plus la réaction d'un <b style="color:#FF968D">acide faible</b> sur l'eau est avancée,

<br>

<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li class="fragment fade-up">plus $\tau$ est proche de <b class="fragment" style="color:#FF968D">1</b></li>
<br>
<li class="fragment fade-up">plus <b style="color:#FF968D">$K_\mathrm{A}$</b> est <b class="fragment" style="color:#FF968D">grand</b></li>
<br>
<li class="fragment fade-up">plus <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> est <b class="fragment" style="color:#FF968D">faible</b></li>
</ul>

---

${\color{#56C1FF}\ce{A^-}}\ce{ + H2O <=> AH + HO^-}$

Pour une <b style="color:#56C1FF">base faible</b>, la constante d'équilibre<br>de sa réaction avec l'eau s'écrit :

<div class="fragment fade-up">

$$
\begin{aligned}
{\color{#56C1FF}K_\mathrm{B}}&=\frac{\ce{[AH]\times[HO-]}}{[{\color{#56C1FF}\ce{A^-}}]\times C^\mathrm{o}}\\\\
&=\frac{\ce{[AH]}\times {\color{#FFF056}K_\mathrm{e}\times {C^\mathrm{o}}^2}}{[{\color{#56C1FF}\ce{A^-}}]\times C^\mathrm{o}\times {\color{#FFF056}\ce{[H3O+]}}}\\\\
&= \frac{\color{#FFF056}K_\mathrm{e}}{\color{#FF968D}K_\mathrm{A}}
\end{aligned}
$$

</div>

---

Plus la réaction d'une <b style="color:#56C1FF">base faible</b> sur l'eau est avancée,

<br>

<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li class="fragment fade-up">plus $\tau$ est proche de <b class="fragment" style="color:#56C1FF">1</b></li>
<br>
<li class="fragment fade-up">plus <b style="color:#56C1FF">$K_\mathrm{B}$</b> est <b class="fragment" style="color:#56C1FF">grand</b></li>
<br>
<li class="fragment fade-up">plus <b style="color:#FF968D">$K_\mathrm{A}$</b> est <b class="fragment" style="color:#FF968D">petit</b></li>
<br>
<li class="fragment fade-up">plus <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> est <b class="fragment" style="color:#FF968D">grand</b></li>
</ul>


---

Donc plus un <b style="color:#FF968D">acide faible</b> est fort<br>
(plus il réagit avec l'eau),<br>
plus son <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> est faible.

<br>

<p class="fragment fade-up">
À l'inverse,<br>
plus une <b style="color:#56C1FF">base faible</b> est forte<br> 
(plus elle réagit avec l'eau),<br>
plus son <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> est grand.
</p>

---

Pour le couple $({\color{#FF968D}\ce{H3O+}}/{\color{}\ce{H2O}})$, que vaut <b style="color:#FF968D">$K_\mathrm{A}$</b> ?

<div class="fragment fade-up" style="color:#FF968D">
$${K_\mathrm{A}} = 1$$
</div>

<p class="fragment fade-up">Et <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> ?</p>

<div class="fragment fade-up" style="color:#FF968D">
$$\mathrm{p}K_\mathrm{A} = 0$$
</div>

---

Pour le couple $({\color{}\ce{H2O}}/{\color{#56C1FF}\ce{HO-}})$, que vaut <b style="color:#FF968D">$K_\mathrm{A}$</b> ?

<div class="fragment fade-up" style="color:#56C1FF">
$${K_B} = 1$$
</div>

<div class="fragment fade-up" style="color:#FF968D">
$$\Rightarrow {K_\mathrm{A}} = \frac{\color{#FFF056}K_\mathrm{e}}{\color{#56C1FF}K_B}=10^{-14}$$
</div>

<p class="fragment fade-up">Et <b style="color:#FF968D">$\mathrm{p}K_\mathrm{A}$</b> ?</p>

<div class="fragment fade-up" style="color:#FF968D">
$$\mathrm{p}K_\mathrm{A} = 14$$
</div>


---


On classe les acides et les bases<br>sur une <span class="imp">échelle de pK<sub>A</sub></span>.

---

{{< slide  background-image="/echellepka.png" background-size="contain" background-transition="concave">}}


---


<b style="color:#FF968D">$\ce{NH4+}$</b> est un acide plus faible / <span class="fragment strike">fort</span>  que <b style="color:#FF968D">$\ce{CH3COOH}$</b>

<br>

<p class="fragment fade-up">
<b style="color:#56C1FF">$\ce{NH3}$</b> est une base plus <span class="fragment strike">faible</span> / forte que <b style="color:#56C1FF">$\ce{CH3COO-}$</b>


{{% /section %}}


---

{{% section %}}

## Diagramme de distribution

---

La <span class="imp">proportion à l'équilibre<br>d'un acide $r_\mathrm{AH}$</span> est le quotient :

<div class="fragment fade-up">
$${\color{#FF968D} r_\mathrm{AH}}=\frac{\color{#FF968D} n_\mathrm{AH,f}}{{\color{#FF968D}{n_\mathrm{AH,f}}}+{\color{#56C1FF}n_\mathrm{A^-,f}}}$$
</div>

<div class="fragment fade-up">
Et celle de sa base conjuguée :


$${\color{#56C1FF} r_\mathrm{A^-}}=\frac{\color{#56C1FF} n_\mathrm{A^-,f}}{{\color{#FF968D}{n_\mathrm{AH,f}}}+{\color{#56C1FF}n_\mathrm{A^-,f}}}$$
</div>

---

Dans un <span class="imp">diagramme de distribution</span>, on superpose les courbes donnant la proportion à l'équilibre en quantité d'un acide et de sa base conjuguée en fonction du pH.

---

{{< slide  background-image="/diagdistr.png" background-size="contain" background-transition="concave">}}

{{% /section %}}

---

{{% section %}}

## Diagramme de prédominance

---

Le <span class="imp">diagramme de prédominance</span> est une simplification du diagramme de distribution. On n'indique plus que l'espèce qui prédomine sur un axe de pH :

<ul>
<li class="fragment fade-up">pour $\mathrm{pH < pK_A}$, $\mathrm{{\color{#FF968D}[AH]}>{\color{#56C1FF}[A^-]}}$</li>
<li class="fragment fade-up">pour $\mathrm{pH = pK_A}$, $\mathrm{{\color{#FF968D}[AH]}={\color{#56C1FF}[A^-]}}$</li>
<li class="fragment fade-up">pour $\mathrm{pH > pK_A}$, $\mathrm{{\color{#FF968D}[AH]}<{\color{#56C1FF}[A^-]}}$</li>
</ul>


---

{{< slide  background-image="/diagpredom.png" background-size="contain" background-transition="concave">}}

---

Exemples :

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/exdiagpred.png" style="box-shadow:none;background:none;">
</div>

---

<u>Rq</u> :

L'acide d'un couple peut très bien dominé sa base conjuguée dans une solution aqueuse basique<br>et réciproquement, une base peut dominer<br>dans une solution acide !


{{% /section %}}

---

{{% section %}}

## Indicateur coloré

----


Un <span class="imp">indicateur coloré</span> est un couple acide-base<br>dont la forme acide et la forme basique<br>n'ont pas la même couleur.

---

La <span class="imp">zone de virage</span> d'un indicateur coloré<br>est la zone de pH où les formes acides et basique<br>sont en proportions similaires.

<p class="fragment fade-up">La couleur de l'indicateur coloré dans la zone de virage est alors <span class="fragment fade-up">un mélange des couleurs acide et basique.</span></p>

<p class="fragment fade-up">La zone de virage intervient pour $\mathrm{pH}=$ <span class="fragment" style="color:#ACD89C">$\mathrm{pK_A}$</span>.</p>

---

Les diagramme de prédominance permettent de caractériser efficacement  un indicateur coloré.

---

{{< slide  background-image="/indiccolores.png" background-size="contain" background-transition="concave">}}

---

Pour utiliser efficacement un indicateur coloré<br>lors d'un titrage ayant pour support une réaction<br>acide-base, il faut que <span class="fragment imp">la zone de virage<br>contienne le pH à l'équivalence pH<sub>E</sub>.</span>

---

Exemple : choisir un indicateur coloré<br>adapté au titrage ci-après.

---

{{< slide  background-image="/sautindic.png" background-size="contain" background-transition="concave">}}

---

On retrouve des indicateurs colorés sur<br>les bandelettes et papier pH...


---


{{< slide  background-image="/testph.png" background-size="contain" background-transition="concave">}}

---

... et dans la nature.

----


{{< slide  background-image="/chourouge.png" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="/hortensia.png" background-size="contain" background-transition="concave">}}

{{%note%}}
Hortensias (Hydrangea macrophylla)
Sol Calcaire	Basique / Alcalin (pH>7)	Rose à Rouge (chez nous)
Sol Granitique	Acide (pH<5,5)	  Bleu à Violet (en Bretagne)


Contrairement à une idée reçue, ce n'est pas l'acidité elle-même qui colore les fleurs en bleu, mais la présence d'ions aluminium (Al3+).

En sol acide (granitique) : L'aluminium présent dans la terre devient soluble. La plante l'absorbe, et celui-ci se lie à un pigment de la fleur (la delphinidine-3-glucoside), ce qui produit la couleur bleue.

En sol basique (calcaire) : L'aluminium reste "prisonnier" sous forme de précipités insolubles. La plante ne peut pas l'assimiler, et le pigment reste dans sa forme naturelle, qui est rose.

Dans un sol calcaire, le carbonate de calcium réagit avec les ions H+ pour les neutraliser = effet tampon. Dans un sol granitique, ce tampon est absent. Les pluies, naturellement légèrement acides à cause du CO 
2 dissous (acide carbonique), font donc chuter le pH du sol sans résistance.

Pour forcer un hortensias rose à devenir bleu dans un jardin calcaire, il ne suffit pas d'acidifier le sol (avec de la terre de bruyère) ; il faut souvent ajouter du "bleuissant" (sulfate d'alumine) pour fournir l'aluminium manquant.
{{%/note%}}

{{% /section %}}

---

{{% section %}}

## Acide $\alpha$-aminé

---

{{< slide  background-image="https://i0.wp.com/www.compoundchem.com/wp-content/uploads/2014/09/20-Common-Amino-Acids.png?fit=2480%2C1754&ssl=1" background-size="contain" background-transition="concave">}}

{{%note%}}
alpha car le carbone asymétrique sur lequel est la fonction amine est le premier carbone après celui de la fonction prioritaire acide carboxylique. On devrait l'appeler le carbone 2 en nomenclature officielle UIPAC mais on préfère utiliser par tradition une vieille notation avec lettres grecques où le premier qui suit est alpha, le deuxième beta, etc.

Il existe des acides beta-aminés et gamma-aminés (le fameux GABA acide γ-aminobutyrique qui est le principal neurotransmetteur inhibiteur du système nerveux central).

Mais seuls les acides alpha aminés sont incorporés dans les protéines par les ribosomes.
{{%/note%}}


---

Qu'ont de communs ces acides α-aminés ?

<ul>
<li class="fragment fade-up" style="color:#FF968D">un groupe carboxyle</li>
<li class="fragment fade-up" style="color:#56C1FF">un groupe amine</li>
</ul>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/acidoamine.png" style="box-shadow:none;background:none;">
</div>

---

Les acides aminés sont donc des <span class="imp">amphotères</span> car ils interviennent à la fois dans le couple acide-base <span  class="fragment fade-up" style="color:#FF968D">acide carboxylique ($\ce{-COOH}$)</span> / <span  class="fragment fade-up" style="color:#56C1FF">ion carboxylate ($\ce{-COO^-}$)</span> de constante d'acidité $\mathrm{K_{A1}}$ et le couple <span class="fragment fade-up" style="color:#FF968D">ion ammonium<br>($\ce{-NH3^+}$)</span> / <span  class="fragment fade-up" style="color:#56C1FF">amine ($\ce{-NH2}$)</span> de constante $\mathrm{K_{A2}}$,<br>avec $\mathrm{pK_{A1}<pK_{A2}}$.

---

Diagramme de prédominance d'un acide aminé :

<br>

<div class="fragment zoom-in" style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagpredami.png" style="box-shadow:none;background:none;">
</div>

---

Au pH de l'organisme, un acide aminé<br>est donc une espèce ampholyte.


<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/acam.png" style="box-shadow:none;background:none;">
</div>

---


<p>Et cette forme est doublement ionique.<br>On parle de zwitterion ou de dipôle ionique.</p>

<p class="fragment fade-up">Ça garantit une excellente solubilité dans le sang et<br>le cytoplasme grâce aux fortes liaisons ion-dipôle<br>avec les molécules d'eau.</p>

<p class="fragment fade-up">Cela permet surtout la formation de liaisons ioniques<br>à l'intérieur de la structure tertiaire de la protéine.</p>

---

🦺 <u>Hors-programme</u> ⚠️

<p class="fragment fade-up" style="color:#FFF056;">À l'exception de la glycine, le carbone sur lequel se trouve le groupe amino a 4 liaisons différentes.<br>On parle alors de <span class="imp">carbone asymétrique</span>. </p>

<p class="fragment fade-up" style="color:#FFF056;">La présence de carbone asymétrique donne à la molécule une propriété particulière : la <span class="imp">chiralité</span>. Une molécule chirale n'est pas superposable à son image dans un miroir (comme une main, d'où le nom).</p>

---

{{< slide  background-image="/enantio.png" background-size="contain" background-transition="concave">}}

---

<p style="color:#FFF056;">Deux molécules chirales images l'une de l'autre<br>dans un miroir sont appelées énantiomères<br>(c'est un exemple d'isomérie de configuration).</p>


<p class="fragment fade-up" style="color:#FFF056;">Dans un environnement achiral, ça ne change rien (mêmes températures de changement d'état, même densité, etc.), mais dans un environnement chiral,<br>ces molécules peuvent se comporter de manière radicalement différente.</p>

---

<p style="color:#FFF056;"><u>Ex</u> : la carvone est une molécule chirale dont les deux formes interagissent différemment avec les récepteurs olfactifs de notre nez (qui sont eux-mêmes composés de protéines chirales).</p>

<div class="fragment zoom-in" style="position:relative;margin-left:auto;margin-right:auto;width:650px;max-width:100%;">
<img src="/carvone.png" style="box-shadow:none;background:none;">
</div>


---

<p style="color:#FFF056;">Un exemple plus sinistre : la thalidomide,<br>un médicament des années 50.</p>

<p class="fragment fade-up" style="color:#FFF056;">La thalidomide était vendue comme un mélange racémique (mélange 50/50 des deux énantiomères).</p>

<ul>
<li class="fragment fade-up" style="color:#FFF056;">L'énantiomère (R) possède les propriétés recherchées, à savoir un effet sédatif et anti-nauséeux, très efficace pour les femmes enceintes souffrant de nausées matinales.
</li>

<li class="fragment fade-up" style="color:#FFF056;">L'énantiomère (S) s'est révélé être un agent tératogène extrêmement puissant, provoquant de graves malformations congénitales chez les fœtus.</li>
</ul>

{{%note%}}
Le scandale de la thalidomide (commercialisée sous le nom de Contergan en Europe) est considéré comme la plus grande catastrophe médicale d'origine humaine. Si ses effets tératogènes (induisant des malformations fœtales) n'ont pas été détectés à l'époque, c'est en raison d'une combinaison de lacunes réglementaires, de croyances scientifiques erronées et de pièges biologiques.

Dans les années 1950, la réglementation pharmaceutique était embryonnaire.
Priorité à la toxicité aiguë : Les tests se concentraient sur la dose létale. Comme il était presque impossible de tuer un rat avec de la thalidomide, le médicament a été déclaré "incroyablement sûr".
Pas de tests de tératogénicité : Il n'était tout simplement pas obligatoire de tester l'effet d'une molécule sur le développement du fœtus ou sur les femelles gestantes avant la mise sur le marché.

À cette époque, la communauté scientifique était convaincue que le placenta agissait comme un filtre absolu, protégeant le fœtus de toute substance nocive présente dans le sang maternel. On pensait que seules les nutriments et l'oxygène passaient, et que les médicaments restaient "du côté de la mère". Cette erreur fondamentale a conduit à une confiance aveugle dans la prescription de sédatifs aux femmes enceintes.

La résistance des rongeurs : Les premiers tests sur animaux ont été faits principalement sur des rats et des souris. Or, il s'est avéré plus tard que ces rongeurs sont naturellement résistants aux effets tératogènes de la thalidomide, car ils possèdent des taux d'antioxydants plus élevés protégeant leur embryon.
Si les tests avaient été effectués sur des lapins ou des primates (ce qui est devenu la norme après la catastrophe), les malformations auraient été détectées immédiatement.

Cette tragédie a donné naissance aux essais cliniques modernes et à l'amendement Kefauver-Harris (1962), imposant la preuve de l'efficacité et de la sécurité (y compris reproductive) avant toute mise sur le marché.
{{%/note%}}

---

<p style="color:#FFF056;">Tous les acides aminés présents dans le vivant correspondent à l'énantiomère gauche (S) !</p>

<p class="fragment fade-up" style="color:#FFF056;">
$\Rightarrow$ Le vivant est homochiral :<br>il n'utilise qu'une seule "main". </br>

<p class="fragment fade-up" style="color:#FFF056;">
Inverser un seul acide aminé dans une protéine (en passant de S à R) empêcherait  le bon repliement de la protéine et lui ferait perdre sa fonction biologique.
</p>

<p class="fragment fade-up" style="color:#FFF056;">À l'inverse, les sucres de notre ADN et<br>de notre ARN sont tous de forme "droite".</p>

---


<p style="color:#FFF056;">Un léger surplus de forme S a été<br>observé sur une météorite</p>

<p class="fragment fade-up" style="color:#FFF056;">Une hypothèse serait que la lumière circulairement polarisée émise par des étoiles massives dans le nuage pré-solaire aurait détruit préférentiellement les formes R, laissant un surplus de formes S qui auraient ensuite "ensemencé" la Terre.</p>


---


<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BoPLmR98S2k"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>



{{% /section %}}

---

{{% section %}}

## Solution tampon

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/tampons.png" style="box-shadow:none;background:none;">
</div>

---

Solution pour laquelle un <span class="imp">ajout modéré<br>d'acide ou de base modifie peu le pH</span>.<br>

<p class="fragment fade-up">De même, le pH varie peu lors d'une dilution.</p>

---

Une telle solution peut exister grâce à l'"<span class="imp">effet tampon</span>" qui consiste en l'absorption ou la libération d'ion hydrogène par les espèces présentes dans la solution.

<p class="fragment fade-up">On rencontre cet effet dès lors qu'un acide $\color{#FF968D}\ce{AH}$<br>et sa base conjuguée $\color{#56C1FF}\ce{A-}$ sont présents en solution.</p>

---

Si pour une raison quelconque, la concentration en ions oxonium varie en solution, cela va déplacer<br>l'équilibre entre $\color{#FF968D}\ce{AH}$ et $\color{#56C1FF}\ce{A-}$ de manière<br>à compenser cette variation.


<p class="fragment fade-up">Cette compensation (et donc l'effet tampon)<br>est maximale quand ${\color{#FF968D}\ce{[AH]}}={\color{#56C1FF}\ce{[A-]}}$,<br>
c'est-à-dire lorsque $\mathrm{pH}=$ <span class="fragment">$\mathrm{pK_A}$</span>.</p>

---

Les courbes de titrage pH-métrique confirment que les plus faibles variations de pH ont lieu dans cette zone :

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/titragetampon.png" style="box-shadow:none;background:none;">
</div>

---

Le sang est une solution tampon !

C'est le couple acide carbonique $\ce{H2CO3}$ /<br>ion bicarbonate (ou hydrogénocarbonate) $\ce{HCO3-}$<br>qui est le principal responsable du maintien du pH<br>du sang entre 7,35 et 7,45.

<p class="fragment fade-up">Au-delà de la petite fenêtre, des acidoses ou alcaloses se développent rapidement et conduisent à la mort.<p>
<p class="fragment zoom-in" style="font-size:3em;">💀</p>

{{%note%}}
Les alcaloses arrivent fréquemment aux ruminants. Accumulation d'ammoniac (régime trop riche en azote).
L’animal commence par météoriser (terme rigolo pour gonfler) un peu. Il présente une diarrhée vert foncé ou noire. L’alcalose sanguine se traduit par des signes de malaise : tremblements de tête et des oreilles, salivation excessive et respiration rapide, et évolue rapidement vers la mort de l’animal.
L’alcalose peut se traiter par ingestion de vinaigre, riche en acide acétique, additionné de l’emploi d’hépatoprotecteurs.
https://fr.wikipedia.org/wiki/Alcalose

La météorisation peut se traiter par un trou dans le bide à l'aide d'un trocart, long et fin poignard que les bergers gardaient toujours sur eux pour soigner leurs moutons...
{{%/note%}}

---

<p>La forme ampholyte des acides aminés<br>renforce aussi l'effet tampon :</p>

<ul>
<li class="fragment fade-up">un excès d'ions $\ce{H+}$ peut être absorbé par le groupe $\ce{-COO^-}$ qui peut en absorber ;</li>
<li class="fragment fade-up">un déficit de $\ce{H+}$ peut être compensé par le groupe $\ce{-NH3^+}$ qui peut en libérer.

{{% /section %}}

---

{{% section %}}

## Application

retour sur l'exercice du chaulage du lac acide

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/chaulage.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

---

Pourquoi utilise-t-on du carbonate de calcium<br>sachant que l'ion carbonate est une base faible<br>(couple $(\ce{HCO3-}/\ce{CO3^2-}$) de $\mathrm{p}K_\mathrm{A}=10,3$)<br>plutôt qu'une base forte comme<br>l'hydroxyde de sodium ?

---

Un titrage pH-métrique d'un litre de solution à pH 5,5 représentant l'eau du lac est réalisé avec une solution d'ions carbonates avec $\ce{[CO3^2-]=\pu{1,00 mmol\*L-1}}$, puis par une solution d'ions hydroxyde avec $\ce{[HO^-]=\pu{1,00 mmol*L-1}}$.

<p class="fragment fade-up">La concentration de ces solutions<br>titrantes est-elle adaptée ?</p>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;">
<img src="/compph.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>

{{% /section %}}

---

{{% section %}}

## Graphes de l'activité Python<br>"Taux d'avancement et $\mathrm{p}K_A$"

---

<iframe src="/tau_concentration.html" 
        width="100%" 
        height="600px" 
        frameborder="0">
</iframe>

---


<iframe src="/ph_concentration.html" 
        width="100%" 
        height="600px" 
        frameborder="0">
</iframe>

{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/ka/)