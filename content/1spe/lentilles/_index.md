+++
title = "Images"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

span {font-weight:normal;color:white;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

</style>






# Formation d'images par une lentille convergente

---

{{%section%}}

## Mesures algébriques

---

Les mesures algébriques sont des <span class="imp">longueurs</span><br>
auxquelles on ajoute un <span class="imp">signe</span>.

On note $\overline{AB}$ la mesure algébrique entre $A$ et $B$.

---

Un axe horizontal (l'axe optique, généralement vers la droite) et un axe vertical (généralement vers le haut) permettent de définir le sens positif.

---

{{< slide  background-image="/algebriques.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Relation de conjugaison

---

<div style="position:relative;width:60%;margin-right:auto;margin-left:auto;border-radius:20px;">
<a href="https://www.geogebra.org/m/nvhxr46v">
<img src="/geogeblentille1.png" style="width:100%;border-radius:20px">
</a>
</div>

---

Dans la simulation précédente, la distance entre l'objet et l'écran est fixée et la position<br>de la lentille est modifiable. 

Que remarque-t-on lorsque la position de la lentille permet d'avoir l'image de l'objet sur l'écran ?


---


Relation de conjugaison d'une lentille mince<br>(ou relation de Descartes)

<br>

<div class="fragment" style="background-color:#FF644E;padding:5px 50px 5px 50px;width:fit-content;margin-right:auto;margin-left:auto;color:white;border-radius:10px;">
$$\frac{1}{\overline{OA'}}-\frac{1}{\overline{OA}}=\frac{1}{f'}$$
</div>

{{%note%}}
Pas à apprendre mais à savoir utiliser
{{%/note%}}

---

<div style="position:relative;width:60%;margin-right:auto;margin-left:auto;border-radius:20px;">
<a href="https://www.geogebra.org/m/e35g8zb7">
<img src="/geogeblentille3.png" style="width:100%;border-radius:20px">
</a>
</div>

---

Définition de l'agrandissement algébrique $\gamma$ :

<br>

<div class="fragment" style="background-color:#FF644E;padding:5px 50px 5px 50px;width:fit-content;margin-right:auto;margin-left:auto;color:white;border-radius:10px;">
$$\gamma=\frac{\overline{A'B'}}{\overline{AB}}$$
</div>


---

<div style="position:relative;width:60%;margin-right:auto;margin-left:auto;border-radius:20px;">
<a href="https://www.geogebra.org/m/yp4w2zbq">
<img src="/geogeblentille2.png" style="width:100%;border-radius:20px">
</a>
</div>

---

Le théorème de Thalès permet d'obtenir une formule ne dépendant plus des tailles de l'image et de l'objet mais de leur distance au centre optique de la lentille :

<br>

<div class="fragment" style="background-color:#0076BA;padding:5px 50px 5px 50px;width:fit-content;margin-right:auto;margin-left:auto;color:white;border-radius:10px;">
$$\gamma=\frac{\overline{OA'}}{\overline{OA}}$$
</div>

{{%/section%}}

---

{{%section%}}

## Caractéristiques de l'image d'un objet-plan réel formée par une lentille mince convergente

---

{{< slide  background-image="/imagecas1a.png" background-size="contain" background-transition="concave-in fade-out" transition="concave-in none-out">}}


<p> si<br>$-f' ≤ \overline{OA} ≤ 0$<br>(A entre F et O)</p>


<p style="opacity:0;">alors<br>$\overline{OA'} ≤ 0$ et $\gamma≥1$<br>L'image est <b style="color:#FF95CA">virtuelle</b>, <b style="color:#56C1FF">droite</b> et <b style="color:#88FA4E">agrandie</b></p>


---

{{< slide  background-image="/imagecas1b.png" background-size="contain" background-transition="fade-in concave-out" transition="none-in concave-out">}}

<p> si<br>$-f' ≤ \overline{OA} ≤ 0$<br>(A entre F et O)</p>


<p class="fragment">alors<br>$\overline{OA'} ≤ 0$ et $\gamma≥1$<br>L'image est <b style="color:#FF95CA">virtuelle</b>, <b style="color:#56C1FF">droite</b> et <b style="color:#88FA4E">agrandie</b></p>

---

{{< slide  background-image="/imagecas2a.png" background-size="contain" background-transition="concave-in fade-out" transition="concave-in none-out">}}


<p> si<br>$-2f' ≤\overline{OA} ≤ - f'$</p>


<p style="opacity:0;">alors<br>$\overline{OA'} ≥ 2f'$ et $\gamma≤-1$<br>L'image est <b style="color:#FF95CA">réelle</b>, <b style="color:#56C1FF">renversée</b> et <b style="color:#88FA4E">agrandie</b></p>


---

{{< slide  background-image="/imagecas2b.png" background-size="contain" background-transition="fade-in concave-out" transition="none-in concave-out">}}

<p> si<br>$-2f' ≤ \overline{OA} ≤ - f'$</p>


<p  class="fragment">alors<br>$\overline{OA'} ≥ 2f'$ et $\gamma≤-1$<br>L'image est <b style="color:#FF95CA">réelle</b>, <b style="color:#56C1FF">renversée</b> et <b style="color:#88FA4E">agrandie</b></p>

---

{{< slide  background-image="/imagecas3a.png" background-size="contain" background-transition="concave-in fade-out" transition="concave-in none-out">}}


<p> si<br>$\overline{OA} ≤ - 2f'$</p>


<p style="opacity:0;">alors<br>$f' ≤ \overline{OA'} ≤ 2f'$ et $-1≤\gamma≤0$<br>L'image est <b style="color:#FF95CA">réelle</b>, <b style="color:#56C1FF">renversée</b> et <b style="color:#88FA4E">réduite</b></p>


---

{{< slide  background-image="/imagecas3b.png" background-size="contain" background-transition="fade-in concave-out" transition="none-in concave-out">}}

<p> si<br>$\overline{OA} ≤ - 2f'$</p>


<p class="fragment">alors<br>$f' ≤ \overline{OA'} ≤ 2f'$ et $-1≤\gamma≤0$<br>L'image est <b style="color:#FF95CA">réelle</b>, <b style="color:#56C1FF">renversée</b> et <b style="color:#88FA4E">réduite</b></p>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/lentilles)
