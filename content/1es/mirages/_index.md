+++
title = "Mirages"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

.fragment {font-weight:normal;}

span {font-weight:normal;color:white;}

a {color:#56C1FF;}

ul {
color:#93a1a1;
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

.short {
  height: 60vh; /* limite la hauteur à 80% de la fenêtre */
  width: calc(60vh * 9 / 16); /* largeur en fonction du ratio portrait */
  margin: 0 auto;
  position: relative;
}

.short iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:10px;
}

</style>



{{%section%}}

# Mirages


---

{{< slide  background-image="/mirageroute.jpg" background-size="contain" background-transition="concave">}}



---

Comment expliquer ce qu'on voit ?


---

{{< slide  background-image="/mirage1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/mirage1expl.png" background-size="contain" background-transition="concave">}}


---


Et comment expliquer les mirages suivant ?

---

{{%youtube epeOGJcR2dE%}}


---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fata_morgana_archipel_des_Glénan.jpg/1280px-Fata_morgana_archipel_des_Glénan.jpg" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/mirboyart.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/mirildere.jpg" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="/mirildere2.jpg" background-size="contain" background-transition="concave">}}

---

{{< runpython lang="vpython" mode="output" width="800" height="633" file="mirage.py" >}}
{{< /runpython >}}




{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1es/terre/terre1/)