+++
title = "Correction fosse de plongée"
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

</style>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
.shape {
    display: inline-block;
    margin: 5px;
    margin-bottom: -1px;
}
.circle {
    width: 30px;
    height: 30px;
    background-color: #FF644E;
    border-radius: 50%;
}
.square {
    width: 30px;
    height: 30px;
    background-color: #0076BA;
}
.triangle {
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 30px solid #FFD932;
}
.circlevert {
    width: 30px;
    height: 30px;
    background-color: #1DB100;
    border-radius: 50%;
}

</style>


# Correction de l'éxercice fosse<br>de plongée

---



## 1.1. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

La pression dans l'eau augmente<br>proportionnellement à la profondeur du plongeur.

---

{{%section%}}

## 1.2. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

---

Appelons B un point à la surface (<b style="color:#FFD932">$z_B=\pu{0 m}$</b>)<br>et A un point à une profondeur de 20 m (<b style="color:#61D836">$z_A=\pu{-20 m}$</b>)

<p class="fragment">Puis appliquons le principe fondamental de l'hydrostatique entre A et B :<p>

---

${\color{#FFD932}P_B} - {\color{#61D836}P_A} = \rho g ({\color{#61D836}z_A}-{\color{#FFD932}z_B})$

<p class="fragment">On cherche la pression à la profondeur de 20 m <b style="color:#61D836">$P_A$</b> :</p>

<p class="fragment">$- {\color{#61D836}P_A} = \rho g ({\color{#61D836}z_A}-{\color{#FFD932}z_B})-{\color{#FFD932}P_B}$</p>

<p class="fragment">$\quad\;\; {\color{#61D836}P_A} = {\color{#FF644E}-}\rho g ({\color{#61D836}z_A}-{\color{#FFD932}z_B}){\color{#FF644E}+}{\color{#FFD932}P_B}$</p>

---

Application numérique :

<div class="fragment">

$ 
\begin{aligned}
{\color{#61D836}P_A}  &= - \pu{1,0*10^3}\times\pu{9,81}\times({\color{#61D836}-20}-{\color{#FFD932}0})+{\color{#FFD932}\pu{1,013E5}}\\\\
&=\pu{3,0E5 Pa}
\end{aligned}
$

</div>

<div class="fragment">

On retrouve bien une pression de 3,0 bar<br>soit environ 3 fois la pression atmosphérique.

</div>

{{%/section%}}


---

## 1.3. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

$P_0 = P(h=0) = \pu{101,3E3} = \pu{1,013E5}$

<p class="fragment">
$P_0$ (pression à la surface du liquide)<br>représente la pression atmosphérique.
</p>

---

{{%section%}}

## 1.4. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

La modélisation des résultats expérimentaux donne :<br>
$\begin{equation}
P=\pu{9,77E3}\times h+\pu{101,3E3} \tag{a}
\end{equation}$<br>
et comme on l'a vu à question 1.2, la loi fondamentale de la statique des fluides prédit :<br>
$\begin{equation}
P_A = -\rho g (z_A-z_B)+P_B \tag{b}
\end{equation}$

---

Si B est un point à la surface, $P_B=P_0=\color{#FFD932}\pu{101,3E3 Pa}$<br>et $z_B=\color{#61D836}\pu{0 m}$.

<p class="fragment">Si A est un point à la profondeur $h$,<br>alors $z_A=\color{#FF644E}-h$.</p>

<p class="fragment">Posons $P_A=\color{#73FDEA}P$.</p>

<p class="fragment">Dans le cas de l'eau : $\rho \times g= \pu{1,0E3}\times\pu{9,81} = \color{#FF95CA}\pu{9,81E3}$</p>

---

(b) devient :

$
\begin{aligned}
{\color{#73FDEA}P} &= - {\color{#FF95CA}\pu{9,81E3}} ({\color{#FF644E}-h}-{\color{#61D836}0})+{\color{#FFD932}\pu{101,3E3}}\\\\
   &= \pu{9,81E3}\times h + \pu{101,3E3}
\end{aligned}
$

<p class="fragment">On retrouve bien quelque chose de très proche de (a).</p>

{{%/section%}}

---

## 1.5. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

Sources d'erreur :

<ul>
<li class="fragment">mauvaise lecture de la profondeur,</li>
<li class="fragment">erreur de mesure du capteur de pression.</li>
</ul>

---

## 2.1. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

D'après la loi de Mariotte :

$P_1\times V_1 = P_2\times V_2$

---

## 2.2. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

Sachant qu'avec la <span class="imp">profondeur</span>, la <span class="imp">pression</span> augmente<br>et donc le <span class="imp">volume</span> d'air disponible diminue (Mariotte),<br>si le plongeur consomme le même volume d'air<br>à chaque respiration, il aura une autonomie<br>moins grande en profondeur.

---

{{%section%}}

## 2.3. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

À 20 m de profondeur, on est à la pression $P_2$<br>calculée en 1.2., soit environ 3,0 bar.

<p class="fragment">
Appliquons la loi de Mariotte<br>pour connaître le volume $V_2$ d'air disponible :
</p>

<p class="fragment">
$P_1 V_1 = P_2 V_2$<br>
</p>

----


$$\Rightarrow V_2 = \frac{P_1 V_1}{P_2}$$

<p class="fragment">
$$V_2 = \frac{\pu{200 bar}\times \pu{12 L}}{\pu{3,0 bar}}$$
</p>

<p class="fragment">
$$V_2 = \pu{8,0E2 L}$$
</p>

<p class="fragment">
Il y a environ 800 L d'air disponible
</p>


---

Et comme le plongeur consomme<br>15 L d'air par minute,<br>son autonomie est de :

<p class="fragment">
$$\frac{\pu{8,0E2 L}}{\pu{15 L*min-1}} = \pu{53 min}$$
</p>

{{%/section%}}

---

## 2.4. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

Pour qu'il y ait encore de la pression dans la bouteille,<br>il doit rester de l'air...

<p class="fragment">
L'autonomie est donc bien sûr diminuée.
</p>

---

## 3.1. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

$$F = P\times S$$

---

## 3.2. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

$$F_1 = \pu{1,0 bar}\times \pu{70 mm2}$$

<p class="fragment">
$$F_1 = (\pu{1,0E5 Pa})\times(\pu{70E-6 m^2})$$
</p>

<p class="fragment">
$$F_1 = \pu{7,0 N}$$
</p>

---

{{< slide  background-image="/exotympan.png" background-size="contain" background-transition="concave">}}

## 3.3. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

<br><br><br><br><br><br><br>

Une force résultante non nulle agit donc sur le tympan, provoquant une douleur.

---

## 3.4. <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

La manœuvre permet de faire entrer l'air extérieur<br>(à pression plus élevée) dans l'oreille interne.

Cela équilibre les pressions de part et d'autre<br>du tympan, rendant la résultante des forces<br>pressantes nulle. Plus de douleur.

---

## Bilan :

13 questions $\rightarrow$ 13 pts

Dont 6 <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span> !!!

$\Rightarrow$ $\approx 9/20$ très facilement accessible. 

Et rien interdit de grappiller des points<br>sur les questions <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>.

---

[Retour site](https://coursphychi.github.io/1spe/pression/)
