+++
title = "Spectroscopie IR"
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

# Spectroscopie infrarouge

---

La spectroscopie IR consiste à établir<br>le spectre de <span class="imp">transmittance</span> d'un échantillon.

---

On trace la <span class="imp">transmittance</span> (en %) <br>en fonction du <span class="imp">nombre d'onde</span> (en $\pu{cm^-1})$,<br>une grandeur proportionnelle à la fréquence.

---

<ul>
<li>Plus la transmittance est faible<br>et plus l'absorbance est grande.</li>
<li class="fragment">Le nombre d'onde est l'inverse<br>de la longueur d'onde.</li>
</ul>

---

La spectroscopie infrarouge exploite le fait que<br>les molécules possèdent des fréquences spécifiques pour lesquelles elles vibrent en correspondance<br>avec des niveaux d'énergie discrets<br>(modes vibratoires). 

---

Ces fréquences de résonance dépendent de<br>la nature de la liaison entre les atomes.

<p class="fragment">
Et pour chaque résonance, on obtient un creux dans<br>le spectre de transmittance (correspondant à une<br>forte absorbance du rayonnement IR).
</p>

---

{{< slide  background-video="/co2vib4.mp4" background-video-loop="true" background-size="contain" background-transition="concave" background="#fff">}}


Les 4 modes de vibration de la molécule de $\ce{CO2}$<br>
\+ <a href="https://ir.cheminfo.org">Application</a> pour simuler le spectre<br>et visualiser les vibrations


---

<iframe width="640" height="500" src="https://www.youtube.com/embed/qFsmnTmS2sg?si=9tXm4fZgbhK2kECD&amp;start=67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


{{%note%}}
Juste pour les curieux.
Lien vers la vidéo : https://archive.org/details/vibration_of_molecules
{{%/note%}}

---

{{<youtube DDTIJgIh86E>}}

---

{{<youtube U0Hu3-J0igE>}}

---

⚠️Petite bizarrerie⚠️

L'axe des abscisses<br>
(le nombre d'onde en $\pu{cm^-1}$)<br>est orienté vers la gauche !


{{%/section%}}


---

[Retour site](https://coursphychi.github.io/1spe/orga/)
