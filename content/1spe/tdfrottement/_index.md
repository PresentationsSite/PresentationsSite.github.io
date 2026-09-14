+++
title = "TD Frottements"
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

# Frottements fluides

Chute d'une goutte d'eau colorée dans de l'huile

---

{{< slide  background-video="/huile.mp4" background-size="contain" background-transition="concave" background-video-muted="true">}}

---

Données :

- Les traits rouges sont espacés de 3 cm.

- rayon de la goutte :  $r = \pu{2,0 mm}$
- masse volumique de l’eau colorée :  $\rho_{goutte} = \pu{1,0E3 kg*m-3}$
- masse volumique de l’huile :  $\rho_{huile} = \pu{9,0E2 kg*m-3}$
- pesanteur :  $g = \pu{9,8 m*s-2}$

---

## A. Étude cinématique et dynamique

---

1. Décrire le mouvement de la goutte.

---

La **poussée d’Archimède** est une force<br>qui s’oppose au poids et dont la valeur<br>est donnée par la formule suivante :	

$$\pi_A = \rho_{fluide}\times V_{objet}\times g$$

---

2. Faire le bilan des forces qui s’appliquent<br>sur la goutte pendant sa chute.

---


3. Calculer la valeur du poids<br>et de la poussée d'Archimède.<br>Les représenter sur un schéma.

---

4. Déterminer la force de frottement<br>fluide $\vec{f}$ de l'huile sur la goutte.

---

## B. Étude énergétique

---

Plutôt que considérer séparément le poids<br>et la poussée d'Archimède, on ne s'occupera que<br>de leur somme envisagée comme un poids apparent<br>(le poids d'une goutte plus légère qu'elle ne l'est).

$\overrightarrow{P}'=\overrightarrow{\pi_A}+\overrightarrow{P}=m'\times \overrightarrow{g}$

Avec comme masse apparente $m'=(\rho_{goutte}-\rho_{huile})\times V_{goutte}$

---


5. Déterminer si chaque force qui agit sur la goutte<br>est conservative ou non conservative.

---

{{< slide  background="/exohuile.png" background-size="contain" background-transition="concave">}}

---

6. Calculer la variation d'énergie mécanique<br>entre A et B et tracer son évolution.

---

7. Que vaut le travail des forces de frottement ?

---

8. Retrouver la valeur de la force de frottement.


{{%/section%}}


---

[Retour site](https://coursphychi.github.io/1spe/egiemeca/)
