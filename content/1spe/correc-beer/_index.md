+++
title = "Correction bétadine"
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


# Correction Bétadine

---

{{%section%}}

## 1.  <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>


$$
\begin{aligned}
n_0 &= C_0\times V\\\\
&= (\pu{2,00E-2 mol\*L-1})\times (\pu{250,0 mL})\\\\
&=(\pu{2,00E-2 mol*L-1})\times (\pu{2,500E-1  L})\\\\
&=\pu{5,00E-3 mol}
\end{aligned}
$$

---

$$
\begin{aligned}
m_0 &= n_0\times M(\ce{I2})\\\\
&= n_0\times M(\ce{I})\times 2\\\\
&=(\pu{5,00E-3 mol})\times(\pu{126,9 g*mol-1})\times 2\\\\
&=\pu{1,27 g}
\end{aligned}
$$

Il faut dissoudre 1,27 g de diiode solide<br>pour obtenir 250 mL de solution mère.

{{%/section%}}

---

{{%section%}}

## 2.  <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

On veut préparer une solution fille de concentration $C_3=\pu{0,40E-3 mol\*L-1}$ à partir d'une solution mère de concentration $C_0=\pu{2,00E-2 mol*L-1}$.

Le facteur de dilution vaut donc :

$$F = \frac{C_0}{C_3} = 50$$

---

Par conservation de la quantité de matière<br>lors d'une dilution, 

$$\frac{C_\text{mère}}{C_\text{fille}} = \frac{V_\text{fille}}{V_\text{mère}} = F =50$$

Avec le matériel à disposition, la seule possibilité est donc d'utiliser la fiole jaugée de $\pu{250,0 mL}$<br>et la pipette jaugée de $\pu{5,0 mL}$.

---

Protocole :

- on verse la solution mère dans un bécher,
- on prélève 5 mL de cette solution avec la pipette jaugée,
- on verse ces 5 mL dans la fiole jaugée de 250 mL,
- on complète d'eau distillée jusqu'au trait de jauge.

{{%/section%}}

---

## 3.1. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

Le maximum d'absorbtion d'une solution de diiode est entre 450 et 500 nm, ce qui correspond au bleu.<br>La solution apparaît de la couleur<br>complémentaire qui est l'orange.

---

## 3.2. <span style="font-size:1em;color:#FF95CA"><i class="fas fa-smile"></i></span>

Il faut régler le spectrophotomètre sur $\lambda_{max}$,<br>la longueur d'onde du maximum d'absorption<br>de la solution, soit ici environ 475 nm. 

Cela permet une meilleure sensibilité et d'éviter d'être parasité par une éventuelle autre substance colorée.

---

{{%section%}}

## 4.1.  <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

<table border="1">
  <tr>
    <th></th>
    <td>S<sub>1</sub></td>
    <td>S<sub>2</sub></td>
    <td>S<sub>3</sub></td>
    <td>S<sub>4</sub></td>
    <td>S<sub>5</sub></td>
    <td>S<sub>6</sub></td>
    <td>S<sub>7</sub></td>
  </tr>
    <tr>
    <th>C</th>
    <td>0,10</td>
    <td>0,20</td>
    <td>0,40</td>
    <td>0,50</td>
    <td>0,60</td>
    <td>0,80</td>
    <td>1,0</td>
  </tr>
  <tr>
    <th>A</th>
    <td>0,14</td>
    <td>0,27</td>
    <td>0,58</td>
    <td>0,70</td>
    <td>0,85</td>
    <td>1,18</td>
    <td>1,41</td>
  </tr>
    <tr>
    <th>A/C</th>
    <td>1,4</td>
    <td>1,4</td>
    <td>1,5</td>
    <td>1,4</td>
    <td>1,4</td>
    <td>1,5</td>
    <td>1,4</td>
  </tr>
</table>

---

Le rapport $\frac{\text{absorbance}}{\text{concentration}}$ reste environ constant donc on a bien une situation de proportionnalité entre les deux grandeurs ; la loi de Beer-Lambert est vérifiée pour cette gamme de concentration.

{{%/section%}}

---

## 4.2.  <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

Calculons la moyenne des rapports $A/C$ :

<div style="font-size:0.7em;">

$$
\begin{aligned}
\bar{k} &= \frac{\left(\frac{0,14}{0,10.10^{-3}}+\frac{0,27}{0,20.10^{-3}}+\frac{0,58}{0,40.10^{-3}}+\frac{0,70}{0,50.10^{-3}}+\frac{0,85}{0,60.10^{-3}}+\frac{1,18}{0,80.10^{-3}}+\frac{1,41}{1,0.10^{-3}}\right)}{7}\\\\
&=\pu{1,42E3 L*mol-1}\\\\
\end{aligned}
$$

</div>

On vérifie bien $A=\bar{k}\times C = 1,42.10^3\times C$

---

{{%section%}}

## 4.3.  <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

D'après le flacon, on a<br>$m'=\pu{10 g}$ de polyvidone iodée pour $V'=\pu{100 mL}$.

Montrons que cela correspond à une concentration<br>en diiode hors gamme.

---

La quantité de matière en polyvidone iodée<br>contenue dans 10 g vaut :

$$
\begin{aligned}
n'&=\frac{m'}{M}\\\\
&= \frac{\pu{10 g}}{\pu{2362,8 g\*mol-1}}\\\\
&=\pu{4,2E-3 mol}
\end{aligned}
$$

---

Et la concentration apportée en polyvidone iodée<br>(et donc en diiode) vaut :

$$
\begin{aligned}
C' &= \frac{n'}{V'}\\\\
&= \frac{\pu{4,2E-3 mol}}{\pu{100E-3 L}}\\\\
&=\pu{4,2E-2 mol\*L-1}\\\\
&=\pu{42 mmol*L-1}
\end{aligned}
$$

---

Comme $C'>C_7$, la solution commerciale est plus concentrée que la solution la plus concentrée<br>de la gamme étalon (S<sub>7</sub>). 

On ne peut donc pas déterminer directement<br>la concentration de la solution commerciale<br>à partir de la gamme étalon.

{{%/section%}}

---

{{%section%}}

## 4.4.  <span style="font-size:1em;color:#FFD932"><i class="fas fa-brain"></i></span>

Après une dilution d'un facteur 200,<br>la concentration devient :

$$
\begin{aligned}
C'' &= \frac{\pu{42 mmol\*L-1}}{200}\\\\
&= \pu{0,21 mmol\*L-1}
\end{aligned}
$$

---

On a bien maintenant $C''\in[C_1;C_7]$ et donc on peut appliquer la loi de Beer-Lambert à $C''$ :


$$
\begin{aligned}
A &= 1,42.10^3 \times C''\\\\
&= (\pu{1,42E3 L\*mol-1}) \times (\pu{0,21E-3 mol*L-1})\\\\
&= \pu{0,30}
\end{aligned}
$$

On s'attend donc à une absorbance de 0,30<br>(proche de celle de la solution S<sub>2</sub>)<br>si l'indication du flacon est correcte.

{{%/section%}}



---

[Retour site](https://coursphychi.github.io/1spe/spectro/)
