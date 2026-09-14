+++
title = "Cortège"
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
color:#ddd;
}

td {
text-align: center !important;
}

th:not(:last-child), td:not(:last-child) { border-right: 1px solid #00A2FF; }

table {
  margin: auto;
  border-collapse: collapse;
}
td {
  width: 60px;
  height: 60px;
  border: 1px solid white !important;
  text-align: center;
  vertical-align: middle;
  font-size: 0.3em;
}
.caseneutre {
  background-color: #0076BA;
}
.casespeciale {
  background-color: #EE220C;
}
.s-block {
  background-color: #FEAE00;
}
.p-block {
  background-color: #1DB100;
}
.neutre {
  background-color: #0076BA;
}
.noble-gas {
  background-color: #FF644E;
}
.empty {
  border: none !important;
}
.symbol {
  font-size: 1.2em;
  font-weight:bold;
}


</style>





{{%section%}}

## Cortège électronique

---

L'atome de noyau $\ce{_ZX}$ possède $Z$ électrons.

<p class="fragment fade-up">
Ces $Z$ électrons forment le cortège électronique.<br>Ils se répartissent en <span class="imp">couches</span> concentriques autour du noyau numéroté par le nombre quantique principal <span class="imp">$n$</span>.
</p>


---

{{< slide  background-image="/couchesconc.png" background-size="contain" background-transition="concave">}}

---

Et ces couches sont elles-mêmes divisées<br>en <span class="imp">sous-couches $s$, $p$, $d$ et $f$</span>.

<p class="fragment fade-up">
En seconde, on va se concentrer sur les 18&nbsp;premiers éléments ($Z≤18$), et seules les sous-couches<br>$s$ et $p$ seront occupées.
</p>

---

<ul>
<li>Une sous-couche <span class="imp">$s$</span> est saturée<br>lorsqu'elle contient <span class="imp">2</span> électrons</li>
<br>
<li class="fragment fade-up">Une sous-couche <span class="imp">$p$</span> est saturée<br>lorsqu'elle contient <span class="imp">6</span> électrons</li>
</ul>


---

Pour obtenir la configuration la plus stable,<br>l'ordre de remplissage des couches<br>et sous-couches est le suivant :

<span class="fragment fade-up imp">
$1\text{s}\rightarrow 2\text{s}\rightarrow 2\text{p}\rightarrow 3\text{s}\rightarrow 3\text{p}$</span>

---

{{< slide  background-image="/souscouches.png" background-size="contain" background-transition="concave">}}


---

- Donner la configuration électronique<br>du carbone ($Z=6$) :

<p class="fragment" style="color:#1DB100">$1\text{s}^2\, 2\text{s}^2\,2\text{p}^2$</p>

- Donner la configuration électronique<br>de l'aluminium ($Z=13$) :

<p class="fragment fade-up" style="color:#1DB100">$1\text{s}^2\, 2\text{s}^2\, 2\text{p}^6\, 3\text{s}^2\, 3\text{p}^1$</p>

---

On obtient ainsi les <span class="imp">configurations électroniques</span><br>des 18 premiers éléments :

---

{{< slide  background-image="/tabperconf.png" background-size="contain" background-transition="concave">}}


---

En fonction de la sous-couche<br>en cours de remplissage, $s$ ou $p$,<br>on fait apparaître deux blocs<br>dans ce début de tableau périodique.

---


{{< slide  background-image="/tabperblocpetit.png" background-size="contain" background-transition="concave">}}

---

Et si on étend au tableau entier, on voit apparaître les deux autres blocs associés aux sous-couches $\color{#00A2FF}d$ et $\color{#D41876}f$.

---

{{< slide  background-image="/tabperbloc.png" background-size="contain" background-transition="concave">}}

---

Les <span class="imp">électrons de valence</span> sont les électrons appartenant à la couche de nombre $n$ le plus élevé, ainsi que les électrons appartenant à des<br>sous-couches partiellement remplies.


---


Les couches de valence correspondent ainsi aux électrons les plus périphériques. C'est à travers eux qu'un atome interagit avec d'autres entités. Ils sont donc responsables de ses propriétés chimiques.


---

{{< slide  background-image="/tabperconfval.png" background-size="contain" background-transition="concave">}}

---

Cela explique la "périodicité" du tableau périodique :

<p class="fragment fade-up">sont placés dans une même colonne des éléments ayant la même configuration électronique<br>de leurs <span class="imp">électrons de valence</imp>.</p>

---

{{< slide  background-image="/tabperfamilles.png" background-size="contain" background-transition="concave">}}

---

Les <b style="color:#1DB100">propriétés chimiques</b> de ces éléments sont alors <b style="color:#1DB100">similaires</b>, on parle ainsi de <span class="imp">famille chimique</span><br>pour désigner une <span class="imp">colonne</span>.

---

<u>Rq</u> :

On peut condenser l'écriture d'une configuration électronique en écrivant seulement la configuration des électrons de valence précédé de l'élément ayant<br>la configuration des électrons intérieurs<br>(les électrons de cœur).

<p class="fragment fade-up">Il s'agit toujours de l'élément de la dernière colonne (la famille des <span class="imp">gaz nobles</span>) qui précède.</p>


---

{{< slide  background-image="/tabperfamillescond.png" background-size="contain" background-transition="concave">}}

---

Les <span class="imp">lignes</span> du tableau périodique, appelées <span class="imp">périodes</span>, correspondent au <span class="imp">$n$</span> le plus élevé parmi les sous-couches remplis ou en cours de remplissage.

---

{{< slide  background-image="/tabperligne.png" background-size="contain" background-transition="concave">}}

---

Une période commence ainsi toujours par $n\text{s}^1$<br>(les éléments de la première colonne<br>forment la famille des métaux alcalins).

<br>

<iframe  width="560" height="315" src="https://www.youtube.com/embed/uixxJtJPVXk" frameborder="0" allowfullscreen style="border-radius:20px"></iframe>

---

L'avant dernière colonne, la 17<sup>e</sup>, juste avant la 18<sup>e</sup> des gaz rares, correspond à la famille des halogènes.

<br>

<iframe  width="560" height="315" src="https://www.youtube.com/embed/saLvwX3_p1s" frameborder="0" allowfullscreen style="border-radius:20px"></iframe>

---

<iframe  width="800" height="450" src="https://www.youtube.com/embed/u2ogMUDBaf4" frameborder="0" allowfullscreen style="border-radius:20px"></iframe>

---

Trouver l'emplacement dans le tableau périodique<br>à partir de la configuration électronique<br>des électrons de valence :

<ul>
<li class="fragment fade-up">si <span class="imp">$n\text{s}^1$</span> ou <span class="imp">$n\text{s}^2$</span> :<br>
<ul>
<li class="fragment" style="color:#1DB100">$n$ donne la ligne</li>
<li class="fragment" style="color:#1DB100">$ns^1$ est sur la 1<sup>re</sup> colonne</li>
<li class="fragment" style="color:#1DB100">$ns^2$ est sur la 2<sup>e</sup> colonne,<br>sauf si $n=1$ $\rightarrow$ 18<sup>e</sup> colonne (Hélium) </li>

</ul>

---

<table>
<tr>
<td class="empty">Colonne 1</a></td><td class="empty">Colonne 2</td><td class="empty">...</td><td class="empty">Colonne 13</td><td class="empty">Colonne 14</td><td class="empty">Colonne 15</td><td class="empty">Colonne 16</td><td class="empty">Colonne 17</td><td class="empty">Colonne 18</td>
<tr>
<td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="casespeciale"></td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  </tr>
</table>


---

<ul>
<li>si <span class="imp">$n\text{s}^2n\text{p}^i$</span> :<br>
<ul>
<li class="fragment fade-up" style="color:#1DB100">$n$ donne toujours la ligne</li>
<li class="fragment fade-up" style="color:#1DB100">$i+12$ donne le n° de la colonne</li>

</ul>

---

Placer l'élément dont la configuration électronique des électrons de valence est $2\text{s}^2$ :

<p class="fragment fade-up"  style="color:#1DB100"> 
$n=2$ $\rightarrow$ 2<sup>e</sup> ligne<br>
$\text{s}^{\color{#FEAE00}2}$ $\rightarrow$ $\color{#FEAE00}2$<sup>e</sup> colonne
</p>

<table class="fragment fade-up">
<tr>
<td class="empty">Colonne 1</a></td><td class="empty">Colonne 2</td><td class="empty">...</td><td class="empty">Colonne 13</td><td class="empty">Colonne 14</td><td class="empty">Colonne 15</td><td class="empty">Colonne 16</td><td class="empty">Colonne 17</td><td class="empty">Colonne 18</td>
<tr>
<td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="casespeciale"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  </tr>
</table>


---

Et l'emplacement correspondant à $3\text{s}^23\text{p}^4$ ?

<p class="fragment fade-up"  style="color:#1DB100"> 
$n=3$ $\rightarrow$ 3<sup>e</sup> ligne<br>
$\text{p}^{\color{#FEAE00}4}$ $\rightarrow$ $12+\color{#FEAE00}4\color{#1DB100}=$ 16<sup>e</sup> colonne
</p>

<table class="fragment fade-up">
<tr>
<td class="empty">Colonne 1</a></td><td class="empty">Colonne 2</td><td class="empty">...</td><td class="empty">Colonne 13</td><td class="empty">Colonne 14</td><td class="empty">Colonne 15</td><td class="empty">Colonne 16</td><td class="empty">Colonne 17</td><td class="empty">Colonne 18</td>
<tr>
<td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="casespeciale"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  </tr>
</table>


{{%/section%}}

---

{{%section%}}

### Vers la stabilité

---

Les <span class="imp">configurations électroniques les plus stables sont celles des gaz nobles</span>, 18<sup>e</sup> et dernière colonne<br>avec leur couche de valence remplie.

<table class="fragment fade-up">
<tr>
<td class="empty">Colonne 1</a></td><td class="empty">Colonne 2</td><td class="empty">...</td><td class="empty">Colonne 13</td><td class="empty">Colonne 14</td><td class="empty">Colonne 15</td><td class="empty">Colonne 16</td><td class="empty">Colonne 17</td><td class="empty">Colonne 18</td>
<tr>
<td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="empty"></td>
  <td class="casespeciale"><span style="font-size:20px;font-weight:bold">He</span><br>$1\text{s}^2$</td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="casespeciale"><span style="font-size:20px;font-weight:bold">Ne</span><br>$\ce{[He]} 2\text{s}^2 2\text{p}^6$</td>
  </tr>
  <tr>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="empty"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="caseneutre"></td>
  <td class="casespeciale"><span style="font-size:20px;font-weight:bold">Ar</span><br>$\ce{[Ne]} 3\text{s}^2 3\text{p}^6$</td>
  </tr>
</table>

<p class="fragment fade-up">
C'est d'ailleurs ce qui explique la position décalée de l'hélium, sa couche 1 saturée lui confère une grande stabilité qui l'apparente aux autres gaz nobles.
</p>


---

Les autres éléments vont chercher à obtenir<br>la configuration électronique du gaz noble<br>le plus proche d'eux.

<p class="fragment fade-up">Comment ?</p>

<ul>
<li class="fragment fade-up">en perdant ou gagnant des électrons<br>et devenir alors des <span class="imp"> ions monoatomiques</span>.</li>
<li class="fragment fade-up">en gagnant des électrons par formation<br>de <span class="imp">liaisons covalentes</span> et bâtir ainsi des<br>édifices polyatomiques, les <span class="imp">molécules</span>.</li>
</ul>

---

<h4 style="color:#929292"> Formation d'ions monoatomiques</h4>



<p class="fragment fade-up">Quels éléments vont chercher à gagner des électrons,
<br>ceux qui précèdent ou ceux qui suivent les gaz rares ?<br>
Quel type d'ions auront-ils tendance à former ?</p>


<p class="fragment fade-up">Et quels éléments vont chercher<br>à perdre des électrons ?<br>
Pour former quel type d'ion ?</p>

---

{{< slide  background-image="/tabperions.png" background-size="contain" background-transition="concave">}}

---

L'ion $\ce{X^{2-}}$ a pour configuration<br>électronique $1\text{s}^2 2\text{s}^2 2\text{p}^6$.<br>
Déterminer le nom et le symbole de cet ion<br>grâce à la classification périodique.

<p style="color:#1DB100" class="fragment fade-up">
Un anion doublement chargé a 2 électrons<br>en plus par rapport à l'atome.<br>
Par conséquent, l'atome $\ce{X}$ possède 8 électrons $\Rightarrow Z = 8 \Rightarrow \ce{O}$. Il s'agit de l'ion oxygène $\ce{O^{2-}}$.</p>

---

2<sup>e</sup> méthode pour gagner en stabilité<br>en récupérant la configuration électronique<br>du gaz noble le plus proche :

<br>

<h4 style="color:#929292" class="fragment fade-up"> La formation de liaisons covalentes</h4>

---


<p>Si deux atomes mettent en commun chacun<br>un de leurs électrons de valence,<br>
ils forment une <span class="imp">liaison covalente</span>.</p>


<p class="fragment fade-up">Résultat : l'électron mis en commun par l'autre s'ajoute à la configuration électronique.<br>Chaque participant à la liaison a donc<br>gagné un électron dans son cortège.</p>

---

Quels éléments vont-ils le plus avoir tendance à former des liaisons covalentes ? Ceux qui précèdent<br>ou ceux qui suivent les gaz rares ?

---

{{< slide  background-image="/tabperliaison.png" background-size="contain" background-transition="concave">}}

---

<h4 style="color:#929292"> Schéma de Lewis d'une molécule</h4>

<p class="fragment fade-up">Dans un schéma de Lewis d'une molécule,<br>on représente tous les électrons de valence<br>de tous les atomes qui la constituent : </p>

<p class="fragment fade-up">
ces électrons s’organisent en <b style="color:#FFF056;">doublets liants</b> appartenant aux deux atomes liés (ils représentent<br>la liaison covalente) et en <b style="color:#56C1FF;">doublets non-liants</b> appartenant uniquement à l’atome<br>sur lequel ils sont situés.</p>

---

Vérifions sur cette formule de Lewis qu'on a bien tous les électrons de valence apportés par les 6 atomes.

<img src="/lewmeth.png" width="500px" style="background:none;box-shadow: none">


---

- Donner la configuration électronique de chaque élément et entourer les électrons de valence.
- Quel est le nombre d'électrons de valence dans cette molécule ?
- Chaque doublet (<span style="color:#FFF056;">liant</span> ou <span style="color:#56C1FF;">non liant</span>) représente deux électrons. Combien d'électrons sont représentés dans ce schéma de Lewis ? Le compte est-il bon ?

---

<p style="color:#1DB100">Configurations électroniques :</p>

<ul style="color:#1DB100">
<li>H : <span class="fragment" style="color:#1DB100"> $\color{red}1\text{s}^1$ </span></li>
<li >C : <span class="fragment" style="color:#1DB100"> $1\text{s}^2\color{red}2\text{s}^22\text{p}^2$ </span></li>
<li >O : <span class="fragment" style="color:#1DB100"> $1\text{s}^2\color{red}2\text{s}^22\text{p}^4$ </span></li>
<li >F : <span class="fragment" style="color:#1DB100"> $1\text{s}^2\color{red}2\text{s}^22\text{p}^5$ </span></li>
</ul>

---
<p style="color:#1DB100">
$\Rightarrow$ Cela fait $1\times 3 + 4 + 6 +7=20$<br>électrons de valence.</p>

<img src="/lewmeth.png" width="300px" style="background:none;box-shadow: none">

<p style="color:#1DB100" class="fragment fade-up">
Or dans la formule, on a <span style="color:#56C1FF;">5 doublets non-liants</span><br>et <span style="color:#FFF056;">5 doublets liants</span>, soit 10 doublets<br>et donc $10\times 2 = 20$ électrons.</p>

---

Reprendre les questions en remplaçant<br>l'atome de fluor F par un atome de chlore Cl,<br> l'atome de carbone C par un atome de silicium Si et l'atome d'oxygène par un atome de soufre S.

<img src="/lewmeth2.png" width="500px" style="background:none;box-shadow: none">


---

À part l'hydrogène, de combien de doublets doit être entouré un atome dans un schéma de Lewis pour se retrouver avec le même nombre d'électrons de valence que le gaz noble qui le suit dans la classification<br>(conférant ainsi à l'atome un gain de stabilité) ?


<p style="color:#00A2FF" class="fragment">
4 doublets (pour avoir 8 électrons de valence)</p>

---

Et pour l'hydrogène, combien en faut-il ?

<p style="color:#00A2FF" class="fragment fade-up">
Un seul (pour avoir les deux électrons de l'hélium)<br>et il s'agira toujours d'un doublet liant.</p>

----

Exemple :

<p class="fragment fade-up">L'acide méthanoïque de formule $\ce{HCOOH}$ est utilisé par les abeilles, fourmis ou encore les orties.</p>

<p class="fragment fade-up">Combien d'électrons de valence<br>sont-ils apportés par les 5 atomes ?</p>

<p style="color:#1DB100" class="fragment fade-up">
$2\times 1$ pour les hydrogènes,<br>$4$ pour le carbone et $6\times 2$ pour les oxygènes.<br>Cela fait donc 18 électrons, soit 9 doublets.</p>

---

{{< slide  background-image="/exlewis.png" background-size="contain" background-transition="none">}}

Avec ces 9 doublets,<br>on peut envisager différents édifices.

<p class="fragment fade-up">Choisir parmi les schémas de Lewis suivant celui conférant un gain de stabilité pour chacun des atomes (c'est bien sûr celui que la nature choisit).</p>

<br><br><br><br><br><br><br><br><br><br>

---



{{< slide  background-image="/exlewiscorr.png" background-size="contain" background-transition="none" >}}

<p style="color:#1DB100" >
C'est le seul qui donne bien 4 doublets<br>pour le C et les deux O et un seul doublet<br>pour les deux H.</p>


<br><br><br><br><br>


---

L'<span class="imp">énergie de la liaison</span> entre deux atomes dans une molécule correspond à l'<span class="imp">énergie nécessaire<br>pour rompre cette liaison</span>.


{{%note%}}
C'est un peu enfoncer une porte ouverte (qu'est-ce que ça pourrait être d'autre une énergie de liaison ?) mais c'est au programme...
{{%/note%}}

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/2nde/lewis/)