+++
title = "Théorie"
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
color:#96A1A1;
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


# Conversion en énergie électrique

---

<div style="position:relative;margin:auto;width:fit-content;">
<iframe width="640" height="410" src="https://educ.arte.tv/embed/version/53764df0-23fe-43ed-97be-7dca791c32e1/user/242fe557-dba8-4d71-b47a-1372f7232640" frameborder="0" allow="encrypted-media" scrolling="no" allowfullscreen="true" style="border-radius:10px;"></iframe>
</div>

---

{{%section%}}

## Induction électromagnétique

---

### [Activité](/act-indetalt.pdf)

---

En 1820, Œrsted découvre qu'un courant électrique peut mettre en mouvement une aiguille aimantée.


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/n7EWhEYOa0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Dans cette expérience, de l'énergie <span class="imp fragment">électrique</span><br>est donc convertie en énergie <span class="imp fragment">mécanique</span>.


---


En 1831, <span class="imp">Michael Faraday</span> met en évidence<br>le phénomène inverse.

---

{{< slide  background-image="/faraday.png" background-size="contain" background-transition="concave">}}



---

<iframe width="800" height="450" src="https://www.youtube.com/embed/hajIIGHPeuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

[Que doit-il arrivé au champ magnétique pour créer<br>un courant électrique dans un conducteur&nbsp;?](https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_all.html?locale=fr)

<br>

<p class="fragment">Il doit varier.</p>

---

Comment un alternateur<br>applique-t-il cette contrainte ?

<br>

<p class="fragment">En faisant tourner des aimants.</p>

---

Quelle particularité a<br>le courant électrique ainsi créé ?

<br>

<p class="fragment">Il est alternatif.</p>

---

L'alternateur se compose :

- d'un <span class="imp">rotor</span> (c'est la partie en rotation contenant généralement les aimants)
- et d'un <span class="imp">stator</span> (partie fixe contenant généralement les bobines de cuivre)

---

Comment appelle-t-on le dispositif permettant<br>de recueillir l'énergie mécanique d'une source<br>pour la transmettre à un alternateur&nbsp;?

<br>

<p class="fragment">Une <b>turbine</b></p>


---

On appelle <span class="imp">turbo-alternateur</span><br>l'accouplement des deux.

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/c/ca/Turbogenerator01.jpg" background-size="contain" background-transition="concave">}}



{{%note%}}
L'alternateur est en rouge
{{%/note%}}


---

{{< slide  background-image="/chaineconv.png" background-size="contain" background-transition="concave">}}


---

Remarque :

Le rendement d'un alternateur dépend de sa masse : plus il est gros, plus il s'approche de 1<br>(typiquement 99% pour les plus gros<br>dans les centrales de haute puissance).

{{% /section %}}

---



{{%section%}}


## Photovoltaïque

---

### Théorie des bandes

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/EWLgeBVY-08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>



---

### Cellule photovoltaïque

---

Les cellules photovoltaïques sont faites<br>d'un <span class="imp">matériau semi-conducteur</span>.

<p class="fragment fade-up">Exemple d'un tel matériau : <span class="imp fragment">le silicium</span></p>



---

<iframe width="800" height="450" src="https://www.youtube.com/embed/23i-_v_tWTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Pour qu'un matériau semi-conducteur convertisse efficacement l'énergie solaire, il faut que son spectre d'absorption recouvre le mieux possible<br>le spectre reçu du Soleil.

<p class="fragment">Donc dans l'idéal, la longueur d'onde correspondant<br>à l'énergie du<span class="imp"> gap</span> du semi-conducteur<br>doit être dans l'infrarouge.</p>

---

<p>Le Silicium y arrive pas mal.</p>


<img src="/siabsorption.png" style="background-color:white">


---


### Caractéristique d'une cellule photovoltaïque

---

<iframe width=800 height=509 src="https://www.edumedia-sciences.com/fr/media/frame/945/?auth=71677486d928cc2aaa2dfe8768008130/27824" frameborder=0></iframe>


---

{{< slide  background-image="/chainephoto.png" background-size="contain" background-transition="concave">}}

---

Remarques :

<br>

<ul>

<li class="fragment" style="color:#96A1A1;font-weight:normal;">le <span class="imp">rendement</span> d'une cellule photovoltaïque est globalement <span class="imp">faible</span> (< 25%).</li>

<br>

<li class="fragment" style="color:#96A1A1;font-weight:normal;">le <span class="imp">courant</span> produit par une cellule photovoltaïque<br>est <span class="imp">continu</span>. Il faut le convertir en courant alternatif grâce à un onduleur avant de l'envoyer dans le réseau.</li>

</ul>



{{%/section%}}


---


[Retour site](https://coursphychi.github.io/tes/energie/)
