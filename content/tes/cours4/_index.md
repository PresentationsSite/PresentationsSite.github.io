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




# Énergie électrique en France et<br>dans le monde


---


{{%section%}}

## Mix France et Monde


---



{{< slide  background-image="/prodfrance2021.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/prodmonde2021.png" background-size="contain" background-transition="concave">}}

{{%note%}}
*Le terme « Bioénergies et autres ENR » est une catégorie "fourre-tout" qui regroupe toutes les sources de production d'électricité renouvelables qui ne sont ni de l'hydraulique, ni de l'éolien, ni du solaire.
Voici le détail de ce que l'on trouve derrière ces appellations :
Les Bioénergies (L'énergie du "vivant")
C'est la production d'électricité à partir de la combustion ou de la fermentation de matières organiques. On y trouve :
•	La biomasse solide : C’est la plus grosse part. On brûle du bois (pellets, plaquettes forestières), des résidus agricoles (paille, coques de noix, bagasse de canne à sucre) ou des déchets de l'industrie du bois pour faire tourner des turbines à vapeur.
•	Le biogaz : On récupère le gaz issu de la décomposition de déchets organiques (boues de stations d'épuration, décharges, fumier agricole) pour le brûler dans un moteur ou une turbine.
•	La fraction renouvelable des déchets ménagers : Dans les incinérateurs (unités de valorisation énergétique), environ 50 % de l'électricité produite est considérée comme "bioénergie" car elle provient de déchets biodégradables (restes alimentaires, papier, carton).
•	Les bioliquides : Plus rares, ce sont des huiles végétales ou des graisses animales utilisées comme combustible.
Les "Autres ENR" (Les sources de niche)
Cette catégorie regroupe des technologies souvent très performantes localement mais qui représentent de petits volumes au niveau mondial :
•	La Géothermie : On puise la chaleur naturelle dans les profondeurs de la Terre (vapeur ou eau très chaude) pour actionner des turbines. C'est une énergie très stable (contrairement au vent ou au soleil). Elle est majeure dans des pays comme l'Islande, le Kenya ou les Philippines.
•	Les Énergies marines :
•	Marémotrice : Utilise l'énergie des marées (comme l'usine de la Rance en France).
•	Hydrolienne : Utilise l'énergie des courants marins.
•	Houlomotrice : Utilise l'énergie des vagues.
•	Le Solaire thermodynamique (CSP) : À ne pas confondre avec les panneaux photovoltaïques. Ici, des miroirs concentrent la chaleur du soleil pour chauffer un fluide et faire de la vapeur. On le classe parfois à part, mais il peut tomber dans cette catégorie selon les instituts de statistiques.
{{%/note%}}

---

En termes d'énergie électrique :

<p class="fragment fade-up">Monde $\approx$ <span class="fragment imp" style="color: #FF968D;">50</span> France</p>

---

### Répartition des moyens de production en France :<br>[Données RTE](https://analysesetdonnees.rte-france.com/production/synthese)


{{% /section %}}

---

{{%section%}}

## Évolution du mix et données par pays

---

<iframe src="https://ourworldindata.org/grapher/share-elec-by-source?facet=none" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>


---

<iframe src="https://ourworldindata.org/grapher/electricity-prod-source-stacked" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>


---

<iframe src="https://ourworldindata.org/grapher/per-capita-electricity-source-stacked?country=OWID_WRL~CHN~IND~USA~JPN~DEU~GBR~BRA~FRA~CAN~SWE~ZAF~AUS" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/per-capita-electricity-fossil-nuclear-renewables?time=latest&country=OWID_WRL~CHN~IND~USA~GBR~FRA~AUS~SWE~JPN~BRA~DEU" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/share-electricity-coal" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/share-electricity-gas" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/share-electricity-nuclear" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/share-electricity-renewables" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/share-electricity-hydro" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---

<iframe src="https://ourworldindata.org/grapher/share-electricity-solar" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

---


<iframe src="https://ourworldindata.org/grapher/share-electricity-wind" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>


{{%/section%}}

---

{{%section%}}

### Le prix du kWh

---

<iframe src="https://ourworldindata.org/grapher/levelized-cost-of-energy" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

{{%/section%}}

---
{{%section%}}

### $\ce{CO2}$


40% des émissions de $\ce{CO2}$ mondiales<br>proviennent de la production d'électricité.

---

<iframe src="https://ourworldindata.org/grapher/carbon-intensity-electricity" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

{{% /section %}}


---


[Retour site](https://coursphychi.github.io/tes/energie/)
