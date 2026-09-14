+++
title = "Avion"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
theme = "black"
+++



# Un voyage<br>en avion

---

Comment faire pour décoller à midi (heure locale) d’un endroit et atterrir à midi (heure locale) à une autre longitude (mais la même latitude) ? 


---


{{< slide  background-video="/terretourne.mp4" background-size="contain" background-transition="concave" background-video-muted="true">}}

---

Supposons que le départ soit à Bordeaux<br>et l’arrivée à Portland, Oregon.


---

{{< slide  background-image="/45para.png" background-size="110%" background-transition="concave">}}

---

{{< slide  background-image="/bordport.png" background-size="80%" background-transition="concave">}}

---



Quelle sera la durée du voyage<br>et à quelle vitesse devra-t-on aller ?


---

{{< slide  background-image="/solwolf1.png" background-size="50%" background-transition="concave">}}

---


{{< slide  background-image="/solwolf2.png" background-size="50%" background-transition="concave">}}

---

Atterrissage à 14h40 (2h40 PM) heure locale<br>ou plutôt 13h40 puisqu’on triche d’une heure<br>en France sur notre fuseau horaire<br>(d’où 9h de décallage horaire).

---

{{< slide  background-image="/fuseaux.png" background-size="contain" background-transition="concave">}}

---

On a trouvé un vol d'un peu plus de 10h.

Et pourtant, si on regarde la durée<br>d'un vol Bordeaux $\rightarrow$ Portland...


---

{{< slide  background-image="/solwolf3.png" background-size="50%" background-transition="concave">}}


---

Comment l'expliquer ?

---


{{< slide  background-image="/solwolf4.png" background-size="50%" background-transition="concave">}}

---

{{< slide  background-image="/googleearth.png" background-size="contain" background-transition="concave">}}

---

[Applet Geogebra](https://www.geogebra.org/m/r6j7kzpf)


---

{{< slide  background-image="/calculsavion.png" background-size="contain" background-transition="concave">}}

---

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#0076BA;padding:15px 10px 20px 10px; width:content; color:white">
Un <b>grand cercle</b> est l'intersection entre une sphère<br>et un plan passant par le centre de cette sphère<br>(il a même centre et même diamètre que la sphère).
</div></div>

<br>

<p class="fragment">
Exemples :<br>
<dpan class="fragment">l'équateur, les méridiens</span>
</p>

<p class="fragment">
Contre-exemples :<br>
<dpan class="fragment">les tropiques, les cercles polaires</span>
</p>

---

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#FF644E;padding:15px 10px 20px 10px; width:content; color:white">
Le trajet le plus court entre deux points<br>sur une sphère suit l'arc de grand cercle<br>passant par ces deux points.
</div></div>



---

La projection gnomonique est une projection cartographique azimutale transformant<br>les grands cercles en lignes droites.

---

La carte est dessinée sur le plan tangent gris : 

<img src="/projgono.png" style="width:80%">


---

Le trajet le plus court entre deux points de la sphère correspond alors au segment de droite entre les deux points sur la carte issue de cette projection.

En faisant passer le plan tangent<br>par le pôle Nord, cela donne :

---

{{< slide  background-image="/gonopolnord.png" background-size="contain" background-transition="concave">}}

---


Cette projection aurait été développée par Thalès<br>pour cartographier les étoiles. Cela serait ainsi<br>la plus ancienne projection cartographique.


---

[Retour site](https://coursphychi.github.io/1es/terre/terre1/#se-déplacer-sur-une-sphère)