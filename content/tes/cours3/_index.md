+++
title = "Les différentes centrales"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

.fragment:not(ul,li) {font-weight:bold;color:#73FDEA;}

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


{{%section%}}

## Les différents types<br>de centrales électriques


---

{{< slide  background-image="/centrales.png" background-size="contain" background-transition="concave">}}


---

Parmi ces centrales, lesquelles produisent de l'électricité grâce à un <span class="imp">turbo-alternateur</span> ?

<p class="fragment">Toutes sauf la photovoltaïque !</p>


{{%/section%}}

---


{{%section%}}

## Puissances typiques<br>des différentes centrales


---

{{< slide  background-image="/nucl.png" background-size="contain" background-transition="concave">}}

### ☢️ Nucléaire ☢️

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/I09DhTubNqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<iframe data-src="/nuclear_map.html" 
        width="100%" 
        height="500px" 
        style="border:solid #00AB8E 5px; background:transparent;border-radius:10px;">
</iframe>

{{%note%}}
Le fichier json dans /data/ utiliser dans /nuclear_map.html vient de là : https://github.com/cristianst85/GeoNuclearData/tree/master
{{%/note%}}

---

{{< slide  background-image="/nucl.png" background-size="contain" background-transition="concave">}}

1 réacteur produit environ $\pu{1 GW de puissance}$ et une centrale contient généralement plusieurs réacteurs.

<p class="fragment" style="font-weight:normal;color:#93a1a1">
La centrale de Civaux, dans la Vienne<br>produit $\pu{3 GW}$ de puissance et celle du Blayais,<br>en Gironde, fournit $\pu{3,6 GW}$. C'est théoriquement suffisant pour les 6 millions d'habitants<br>de la Nouvelle-Aquitaine.</p>

---

{{< slide  background-image="/gou.png" background-size="contain" background-transition="concave">}}

### Hydroélectrique 🚰

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/vqbdbigU900" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{< slide  background-image="/gou.png" background-size="contain" background-transition="concave">}}

La centrale électrique la plus puissante au monde est le barrage des Trois Gorges en Chine qui<br>peut produire jusqu'à $\pu{22,5 GW}$.

<p class="fragment" style="font-weight:normal;color:#93a1a1">
En France, la centrale hydroélectrique la plus puissante est celle de Grand'Maison, dans l'Isère,<br>qui peut fournir $\pu{1,8 GW}$.</p>

---

{{< slide  background-image="/fla.png" background-size="contain" background-transition="concave">}}

### Thermique à flamme 🔥

---

{{< slide  background-image="/fla.png" background-size="contain" background-transition="concave">}}

Les centrales thermiques à flamme les plus puissantes (à gaz ou à charbon) peuvent fournir jusqu'à $\pu{5,5 GW}$, mais leur puissance est le plus souvent comprise<br>entre $0,5$ et $\pu{2 GW}$. 


---

{{< slide  background-image="/eol.png" background-size="contain" background-transition="concave">}}

### éolien 💨

---

{{< slide  background-image="/eol.png" background-size="contain" background-transition="concave">}}

Une éolienne onshore peut fournir $2$-$\pu{3 MW}$,<br>ce qui pourrait théoriquement alimenté un village comme L'Houmeau (si elle tournait tout le temps).

<p class="fragment" style="font-weight:normal;color:#93a1a1">
La puissance typique d'une éolienne offshore est plus grande : de $10$ à $\pu{15 MW}$ pour les modernes.</p>

<p class="fragment" style="font-weight:normal;color:#93a1a1">
Le plus grand parc éolien est en Chine.<br>Il peut produire jusqu'à $\pu{6 GW}$.</p>

---

{{< slide  background-image="/sol.png" background-size="contain" background-transition="concave">}}

### ☀️Solaire☀️

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/k_ut9pb3kjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{< slide  background-image="/sol.png" background-size="contain" background-transition="concave">}}

La plus grande centrale solaire photovoltaïque est en Inde et peut fournir jusqu'à $\pu{2,2 GW}$ alors que la plus grande centrale solaire thermique est au Maroc et la puissance installée du complexe est de $\pu{590 MW}$.

<p class="fragment" style="font-weight:normal;color:#93a1a1">
Le Soleil envoie environ $\pu{1 kW/m2}$ au niveau du sol<br>et les rendements des panneaux photovoltaïques sont d'environ 20%. Il faut donc au moins $\pu{5000000 m2}$,<br>soit $\pu{500 ha}$ pour produire $\pu{1 GW}$.</p>

---

{{< slide  background-image="/volc.png" background-size="contain" background-transition="concave">}}

### géothermique 🌋

---

{{< slide  background-image="/volc.png" background-size="contain" background-transition="concave">}}


La plus grande centrale géothermique est en Californie et fournit jusqu'à $\pu{1,6 GW}$, mais la plupart des autres centrales ne fournissent qu'entre $1$ et $\pu{100 MW}$.

{{%/section%}}

---


{{%section%}}


## Avantages/Inconvénients<br>des différentes centrales

---

{{< slide  background-image="/nucl.png" background-size="contain" background-transition="concave">}}

### ☢️ nucléaire ☢️

---

{{< slide  background-image="/nucl.png" background-size="contain" background-transition="concave">}}


Avantages :

<ul>
<li class="fragment">Production d'électricité constante et fiable</li>
<li class="fragment">Faibles émissions de gaz à effet de serre</li>
<li class="fragment">Besoin de peu de combustible pour produire une grande quantité d'énergie</li>
<li class="fragment">Longue durée de vie des centrales</li>
</ul>

---


{{< slide  background-image="/nucl.png" background-size="contain" background-transition="concave">}}


Inconvénients :

<ul>
<li class="fragment">Risques associés aux accidents nucléaires</li>
<li class="fragment">Problèmes de gestion des déchets radioactifs</li>
<li class="fragment">Coûts élevés de construction et de démantèlement</li>
<li class="fragment">Risques de prolifération nucléaire</li>
<li class="fragment">Ressource non renouvelable</li>
</ul>

---

{{< slide  background-image="/fla.png" background-size="contain" background-transition="concave">}}

### 🔥 Thermique à flamme 🔥

---

{{< slide  background-image="/fla.png" background-size="contain" background-transition="concave">}}


Avantages :

<ul>
<li class="fragment">Production d'électricité constante et fiable</li>
<li class="fragment">Technologie éprouvée et bien maîtrisée</li>
<li class="fragment">Coûts initiaux relativement faibles</li>
<li class="fragment">Facilement pilotable pour ajuster l'offre à la demande (en particulier pour le gaz)</li>
</ul>

---


{{< slide  background-image="/fla.png" background-size="contain" background-transition="concave">}}


Inconvénients :

<ul>
<li class="fragment">Fortes émissions de gaz à effet de serre</li>
<li class="fragment">Pollution atmosphérique (particules, $\ce{SO2}$, $\ce{NO_x}$)</li>
<li class="fragment">Exploitation des ressources fossiles non renouvelables</li>
<li class="fragment">Impact environnemental de l'extraction du charbon</li>
</ul>

---

{{< slide  background-image="/gou.png" background-size="contain" background-transition="concave">}}

### hydroélectrique 🚰

---

{{< slide  background-image="/gou.png" background-size="contain" background-transition="concave">}}


Avantages :

<ul>
<li class="fragment">Production d'électricité renouvelable</li>
<li class="fragment">Capacité de stockage d'énergie<br>($\rightarrow$ régulation du réseau)</li>
<li class="fragment">Longue durée de vie des installations</li>
<li class="fragment">Faibles émissions de gaz à effet de serre</li>
</ul>

---


{{< slide  background-image="/gou.png" background-size="contain" background-transition="concave">}}


Inconvénients :

<ul>
<li class="fragment">Impact sur les écosystèmes aquatiques</li>
<li class="fragment">Déplacement des populations locales</li>
<li class="fragment">Risques d'inondation en aval</li>
<li class="fragment">Coûts initiaux élevés</li>
</ul>

---

{{< slide  background-image="/eol.png" background-size="contain" background-transition="concave">}}

### éolien 💨

---

{{< slide  background-image="/eol.png" background-size="contain" background-transition="concave">}}


Avantages :

<ul>
<li class="fragment">Énergie renouvelable</li>
<li class="fragment">Faibles émissions de gaz à effet de serre</li>
<li class="fragment">Coûts opérationnels faibles</li>
</ul>

---


{{< slide  background-image="/eol.png" background-size="contain" background-transition="concave">}}


Inconvénients :

<ul>
<li class="fragment">Production intermittente</li>
<li class="fragment">Importante consommation de métaux<br>par kWh produit</li>
<li class="fragment">Impact visuel et sonore</li>
<li class="fragment">Besoin de grands espaces pour les installations</li>
</ul>

---

{{< slide  background-image="/sol.png" background-size="contain" background-transition="concave">}}

### ☀️ Photovoltaïque ☀️

---

{{< slide  background-image="/sol.png" background-size="contain" background-transition="concave">}}


Avantages :

<ul>
<li class="fragment">Énergie renouvelable</li>
<li class="fragment">Faibles émissions de gaz à effet de serre</li>
<li class="fragment">Peu d'entretien nécessaire</li>
<li class="fragment">Modularité et adaptabilité</li>
</ul>

{{%note%}}

1. **Taille variable** : Les installations photovoltaïques peuvent être aussi petites qu'un panneau solaire unique sur un toit résidentiel ou aussi grandes qu'une centrale solaire de plusieurs mégawatts. Cela permet de les adapter à des besoins énergétiques très variés.

2. **Expansion facile** : Si un utilisateur a besoin de plus d'énergie à l'avenir, il peut simplement ajouter plus de panneaux à son installation existante. Cela contraste avec d'autres formes de production d'énergie où l'expansion peut nécessiter une refonte majeure ou la construction d'une nouvelle centrale.

3. **Intégration dans l'architecture** : Les panneaux solaires peuvent être intégrés dans des bâtiments et d'autres structures, comme des fenêtres, des façades, ou des toits. Cela permet de les utiliser dans des zones urbaines où l'espace au sol est limité.

4. **Adaptabilité géographique** : Bien que les panneaux solaires soient plus efficaces dans les régions ensoleillées, ils peuvent être installés presque partout dans le monde. Cela les rend adaptés à une grande variété de climats et de conditions géographiques.

5. **Installations décentralisées** : La modularité des systèmes photovoltaïques permet des installations décentralisées. Cela signifie que l'énergie peut être produite plus près du point de consommation, réduisant ainsi les pertes de transmission et la nécessité d'infrastructures de transmission coûteuses.

{{%/note%}}


---


{{< slide  background-image="/sol.png" background-size="contain" background-transition="concave">}}


Inconvénients :

<ul>
<li class="fragment">Production intermittente.</li>
<li class="fragment">Importante consommation de matériaux<br>par kWh produit.</li>
<li class="fragment">Besoin de beaucoup de surface.</li>
</ul>

{{%/section%}}


---


[Retour site](https://coursphychi.github.io/tes/energie/)
