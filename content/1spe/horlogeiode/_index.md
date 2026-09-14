+++
title = "Horloge à iode"
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

ol {
color:#73FDEA;
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

# Expérience de l'horloge à iode

---

{{<youtube -OqPbuo1S_s>}}

---

## Solution A

- On dilue une solution commerciale de peroxyde d'hydrogène (eau oxygénée) à 110&nbsp;volumes en utilisant une pipette jaugée de 16,0&nbsp;mL et une fiole jaugée de 100&nbsp;mL. On obtient la solution A1.

- La solution A est obtenue en prélevant 15 mL de A1 auxquels on ajoute une pointe de thiodène (amidon + urée qui forme un complexe bleu intense avec le diiode).

---

1. Quelle est la concentration en peroxyde d'hydrogène ($\ce{H2O2}$) de la solution commerciale ?

---

<div style="color:#FFF056;">

Solution commerciale à 110 volumes $\rightarrow$ 1&nbsp;L de solution libère $V_{\ce{O2}}=\pu{110 L}$ de dioxygène. 

$$
\begin{aligned}
\Rightarrow n_\ce{O2}&= \frac{V_\ce{O2}}{V_m}\\\\
&=\frac{\pu{110 L}}{\pu{24 L}}\\\\
&=\pu{4,6 mol} 
\end{aligned}
$$

</div>

---

<div style="color:#FFF056;">
Or un tableau d'avancement de la réaction de dissociation du peroxyde d'hydrogène donne&nbsp;:
</div>

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;max-width:100%;">
<img src="/horiode1.png" style="box-shadow:none;background:none;">
</div>

---

<div style="color:#FFF056;">

Pour une solution commerciale d'un volume $V=\pu{1 L}$,<br>la concentration est donc :

$$C=\frac{n_i}{V}=\pu{9,2 mol*L-1}$$

</div>


---

2. Quelle est la concentration obtenue après dilution ?

---

<div style="color:#FFF056;">
Par conservation de la quantité de matière<br>lors d'une dilution :

$$
\begin{aligned}
n_\text{fille}&= n_\text{mère}\\\\
C_\text{fille}\times V_\text{fille}&=C_\text{mère}\times V_\text{mère}\\\\
\Rightarrow C_\text{fille} &= C_\text{mère}\times\frac{V_\text{mère}}{V_\text{fille}}\\\\
&= (\pu{9,2 mol\*L-1})\times\frac{\pu{16 mL}}{\pu{100 mL}}\\\\
&=\pu{1,5 mol\*L-1}
\end{aligned}
$$


</div>

---

3. Quelle est la quantité de matière $n_A$<br>en $\ce{H2O2}$ dans la solution A ?


----

<div style="color:#FFF056;">


$$
\begin{aligned}
n_A &= C_\text{fille}\times V\\\\
& = (\pu{1,5 mol*L-1})\times(\pu{15e-3 L})\\\\
&= \pu{2,3e-2 mol}
\end{aligned}
$$


</div>




---

## Solution B

<br>

- En diluant 20 fois une solution de bétadine, on obtient une solution B1 de concentration en diiode $C_{B1}=\pu{2,1e-3 mol*L-1}$.

---

4. Quelle est la quantité de matière $n_{B1}$ de diiode contenue dans $V_{B1}=\pu{10 mL}$ de la solution B1 ?

---

<div style="color:#FFF056;">


$$
\begin{aligned}
n_{B_1} &= C_{B_1}\times V_{B_1}\\\\
& = (\pu{2,1e-3 mol*L-1})\times(\pu{10e-3 L})\\\\
&= \pu{2,1e-5 mol}
\end{aligned}
$$


</div>

---

- On broie 8,80 g de cachets de vitamine C pure (de formule brute $\ce{C6H8O6}$) puis on les dissout en utilisant une fiole jaugée de 250&nbsp;mL pour obtenir la solution B2.


---


5. Quelle est la quantité de matière $n_{B2}$ de vitamine C contenue dans $V_{B2}=\pu{3,0 mL}$ de la solution B2 ?

---

<div style="color:#FFF056;">

Quantité de matière dissoute :


$$
\begin{aligned}
n &= \frac{m}{M(\ce{C6H8O6})}\\\\
&= \frac{\pu{8,80 g}}{\pu{176 g*mol-1}}\\\\
&= \pu{5,00e-2 mol}
\end{aligned}
$$

</div>


---

<div style="color:#FFF056;">

Concentration de la solution obtenue<br>après dissolution :


$$
\begin{aligned}
C_{B_2} &= \frac{n}{V}\\\\
&= \frac{\pu{5,00e-2 mol}}{\pu{250e-3 L}}\\\\
&= \pu{0,200 mol*L-1}
\end{aligned}
$$

</div>

---

<div style="color:#FFF056;">

Quantité de matière prélevée :


$$
\begin{aligned}
n_{B_2} &= C_{B_2}\times V_{B_2}\\\\
& = (\pu{0,200 mol*L-1})\times(\pu{3,0e-3 L})\\\\
&= \pu{6,0e-4 mol}
\end{aligned}
$$

</div>


{{%note%}}
diiode
n_B1 = C_B1 * V_B1 = 2,1E-5 mol

M(C6H8O6) = 176 g/mol
n = m/M = 8,80/176 = 5,00E-2 mol
Donc nB2 = 5,00E-2 * 3,0/250 = 6,0E-4 mol
{{%/note%}}

---

- On prépare la solution B en ajoutant 3,0&nbsp;mL de B2 à 10&nbsp;mL de B1.

---

6. Écrire la réaction d'oxydoréduction<br>entre le diiode ($\ce{I2}$) et la vitamine C ($\ce{C6H8O6}$).

Les couples sont :

$(\ce{I2}/\ce{I-})$<br>
$(\ce{C6H6O6}/\ce{C6H8O6})$


{{%note%}}
I2 est l'oxydant, il subit donc une réduction (gain d'électrons)

I2 + 2 e- = 2 I-

C6H8O6 est le réducteur, il subit donc une oxydation (perte d'électrons)

C6H8O6 = C6H6O6 + 2e- + 2H+

I2 + C6H8O6 -> 2 I- + C6H6O6 + 2 H+
{{%/note%}}

---

7. Tracer un tableau d'avancement et déterminer l'état final de la réaction entre le diiode et la vitamine C en la supposant totale.

{{%note%}}
I2      +         C6H8O6        ->       2 I-      +      C6H6O6 +     2 H+

n_B1            n_B2							0							0					0

n_B1 - x		  n_B2 - x				   2x							x					2x

Détermination du réactif limitant :

c'est forcément  celui qui a la moins grande quantité initiale puisqu'ils ont la même stoechiométrie -> I2
xmax = 2,1 E-5

Etat final

0					5,8E-4                         4,2E-5           2,1E-5       4,2E-5
{{%/note%}}

---

On verse le contenu du bécher B dans le bécher A.

Il y a alors réaction d'oxydoréduction entre le peroxyde d'hydrogène et les ions iodures.

---

8. Écrire la réaction.


Les couples sont :

$(\ce{H2O2}/\ce{H2O})$<br>
$(\ce{I2}/\ce{I-})$

{{%note%}}
H2O2 est l'oxydant, il subit donc une réduction (gain d'électrons)

H2O2 + 2 e- + 2 H+ = 2 H2O

I- est le réducteur, il subit donc une oxydation (perte d'électrons)

2 I- = I2 + 2e- 

H2O2 + 2 I-  + 2H+ -> 2H2O + I2 
{{%/note%}}

9. Le $\ce{H2O2}$ est-il limitant ?

---

10. Comment expliquer alors que la solution ne se colore pas instantanément.

{{%note%}}
La réaction entre le peroxyde d'hydrogène et les ions iodures est beaucoup plus lente que celle entre le diiode et la vitamine C. 

Résultat : à peine le diiode est formé par la première réaction que la vitamine C le réduit à nouveau en ions iodures. Cela continuera ainsi tant qu'il y aura de la vitamine C. Comme on a plus de peroxyde d'hydrogène que de vitamine C, la vitamine C finit par s'épuiser et c'est le moment où le I2 peut enfin s'accumuler donnant la couleur bleu intense (complexe avec l'amidon).
{{%/note%}}


{{%/section%}}


---



[Retour site](https://coursphychi.github.io/1spe/oxydo/)
