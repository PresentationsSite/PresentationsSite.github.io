+++
title = "Combustions"
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




{{%section%}}

# Combustions

---

<div style="position:relative;margin:auto;width:fit-content;padding:10px 30px 20px 30px;border: 5px solid #FF968D; border-radius: 15px;">
<p>
Une combustion est une réaction<br><span class="imp">exothermique </span>d'<span class="imp">oxydoréduction</span>.<br>
L'oydant est appelé <span class="imp">comburant</span> et est<br>le plus souvent du dioxygène $\ce{O2 (g)}$.<br>
Le réducteur est le <span class="imp">combustible</span>,<br>une espèce organique.
</p>
</div>

---

Une combustion convertit l’énergie stockée<br>dans la matière organique.

---

Lors de la <span class="imp">combustion complète</span> d'un alcane<br>ou d'un alcool, les deux uniques <span class="imp">produits</span> sont :
<ul>
<li class="imp fragment">le dioxyde de carbone ($\ce{CO2 (g)}$)</li>
<li class="imp fragment">la vapeur d'eau ($\ce{H2O (g)}$)</li>

---

Exemple de la combustion complète<br>du méthane ($\ce{CH4 (g)}$).

Les deux couples oxydant-réducteur sont $(\ce{O2 (g)/H2O (g)})$ et $(\ce{CO2 (g)/CH4 (g)})$.

---

<ul>

<li>Demi-équation d'oxydation du méthane :<br>
<span class="fragment">$\ce{CH4 (g) +2 H2O (g) =  CO2 (g) + 8 H+ + 8 e-}$</span>
</li>
<br>
<li class="fragment">Demi-équation de réduction du dioxygène :<br>
<span class="fragment">$\ce{O2 (g) +4 H+ + 4 e- = 2 H2O (g)}$</span>
</li>
</ul>

---

Équation bilan de la réaction :

<div class="fragment">
$$\ce{CH4 (g) + 2 O2 (g) -> CO2(g) + 2 H2O (g)}$$
</div>

---

<div style="position:relative;margin:auto;width:fit-content;padding:10px 30px 20px 30px;border: 5px solid #FF968D; border-radius: 15px;">
<p>
Le pouvoir calorifique massique PC<br>d'un combustible est l'énergie thermique libérée lors de la combustion d'1 kg de combustible.
</p>
</div>

---

{{< slide  background-image="/palmacombu.png" background-size="contain" background-transition="concave">}}

---

On peut retrouver théoriquement l'énergie libérée<br>par une combustion où le combustible<br>est en phase gazeuse grâce aux données<br>des différentes énergie de liaison entre éléments.

---

En effet, dans une combustion comme dans toute transformation chimique, les éléments se réorganisent.

<p class="fragment">Pour cela, des liaisons entre atomes sont rompues<br>et des nouvelles sont formées.</p>

---

Par convention, on compte positivement les transferts de l'environnement vers le système et négativement les transferts du système vers l'environnement.

---

Par conséquent,

<ul>

<li class="fragment">rompre des liaisons correspond à un transfert d'énergie <span><span class="imp fragment">positive</span> (le système nécessite de l'énergie de l'extérieur),</span></li>
<br>
<li class="fragment">former des nouvelles liaisons correspond à un transfert d'énergie <span><b class="fragment"style="color:#56C1FF">négative</b> (le système libère de l'énergie qu'il fournit à son environnement).</span></li>
</ul>

---

L'énergie de réaction fait le bilan entre l'énergie entrante utilisée pour rompre les liaisons et l'énergie sortante libérée par la formation des nouvelles liaisons.

<p class="fragment">
Si le bilan est <b class="fragment"style="color:#56C1FF">négatif</b> (cas des combustions),<br>la transformation est <span class="imp">exothermique</span> puisque<br>le transfert thermique final est vers l'extérieur.</p>

---


<div style="position:relative;margin:auto;width:fit-content;padding:10px 30px 20px 30px;border: 5px solid #FF968D; border-radius: 15px;">
<p>
L'<span class="imp">énergie molaire de réaction</span> est le transfert thermique échangée entre le système et le milieu extérieur par mole
d'avancement.
</p>
</div>

---

Reprenons l'exemple de la combustion du méthane.

Pour une mole d'avancement, on consomme
<ul>
<li class="fragment">une mole de méthane</li> 
<li class="fragment">deux moles de dioxygène</li>
</ul>

<p class="fragment">Et on produit</p>
<ul>
<li class="fragment">une mole de dioxyde de carbone</li> 
<li class="fragment">deux moles d'eau</li>

---

Plus qu'à regarder les énergies de liaison :

<table border="1">
    <thead>
        <tr>
            <th>Liaisons</th>
            <th>Énergie de liaison</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>C-H</td>
            <td>412 kJ·mol<sup>-1</sup></td>
        </tr>
        <tr>
            <td>O-H</td>
            <td>464 kJ·mol<sup>-1</sup></td>
        </tr>
        <tr>
            <td>O=O</td>
            <td>502 kJ·mol<sup>-1</sup></td>
        </tr>
         <tr>
            <td>C=O</td>
            <td>795 kJ·mol<sup>-1</sup></td>
        </tr>
    </tbody>
</table>

---

<div style="position:relative;margin:auto;width:fit-content;padding:10px 30px 20px 30px;border: 5px solid #FF968D; border-radius: 15px;">
<p>
L'<span class="imp">énergie de liaison</span> est l'énergie minimale à fournir pour dissocier, à l’état gazeux, une mole de liaisons A-B.
</p>
</div>


---

Énergie de dissociation des réactifs :

<ul>
<li>En consommant 1 mol de $\ce{CH4}$, on dissocie<br>4 liaisons C-H, soit $4\times 412 = \pu{1,65E3 kJ}$.</li>
<li>En consommant 2 mol de $\ce{O2}$, on dissocie<br>2 liaisons O=O, soit $2\times 502 = \pu{1,00E3 kJ}$.</li>
</ul>

Cela nécessite en tout $1,65 +1,00 = \pu{2,65 MJ}$.

---

Énergie de formation des produits :

<ul>
<li>En produisant 1 mol de $\ce{CO2}$, on forme<br>2 liaisons C=O, soit $2\times (-795) = \pu{-1,59E3 kJ}$</li>
<li>En produisant 2 mol de $\ce{H2O}$, on forme<br>4 liaisons O-H, soit $4\times (-464) = \pu{-1,86E3 kJ}$</li>
</ul>

Cela donne $-1,59 + (-1,86) = -\pu{3,45 MJ}$.

---

L'énergie molaire de la combustion vaut donc $2,65-3,45=\pu{-0,80 MJ*mol-1}$	

La combustion d'une mole de méthane libère<br>$\pu{0,80 MJ}$ dans l'environnement.

---

Peut-on retrouver le PC du méthane à partir<br>de son énergie molaire de réaction ?

<br>

<p class="fragment">Bien sûr !</p>

---

Masse d'une mole de méthane : $1\times M(\ce{CH4}) = M(\ce{C}) + 4\times M(\ce{H}) = \pu{16 g}$

Donc la combustion de $\pu{16 g}$ de méthane libère $\pu{0,80 MJ}$ et on cherche l'énergie libérée par la combustion d'un kilogramme de méthane...

---

$\displaystyle PC = \frac{\pu{1,0E3}}{16}\times 0,80 = \pu{50 MJ*kg-1}$

La combustion d'$\pu{1 kg}$ de méthane libère<br>donc $\pu{50 MJ}$ d'énergie thermique.

---

Comment détermine-t-on<br>le contenu énergétique des aliments ?

<img src="/etiquettenoix.png" style="width:40%;border-radius:15px;">

---

<div style="position:relative;margin:auto;width:fit-content;">
<iframe width="305" height="542" src="https://www.youtube.com/embed/gx1J3FyaT7Y" title="Determining calories in food by burning it" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


{{%/section%}}

---

{{<youtube 5fzc3wgAKks>}}

---

[Retour site](https://coursphychi.github.io/1spe/combustion/)
