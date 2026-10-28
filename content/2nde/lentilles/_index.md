+++
title = "Lentilles"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
custom_css = "css/noir-moderne.css"
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
}
</style>



# Formation des images et lentilles convergentes

---

{{% section %}}

## Former une image

---

{{< slide  background-iframe="/formimage.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Former une image, c'est faire <b style="color:#FF968D">correspondre</b><br>
<b style="color:#FFF056">un point image</b> à <b style="color:#56C1FF">tout point objet</b>.

{{% /section %}}

---

{{% section %}}

## Lentilles convergentes 🔎

---

Une lentille convergente permet bien de faire correspondre un point image à tout point objet, mais seulement à une distance précise de la lentille.

---

{{< slide  background-iframe="/flouimage.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

La lentille convergente agit par double réfraction (une sur la face d'entrée et une autre sur la face de sortie).

---

{{< slide  background-iframe="/doublerefr.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Selon vous, que devient l'image<br>si on cache la moitié de la lentille ?

---

{{< slide  background-iframe="/cachelentille.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

On va maintenant se demander comment déterminer la distance à laquelle se forme l'image et sa taille.

{{% /section %}}

---

{{% section %}}

## La distance focale

---

Que devient l'image si on éloigne<br>de plus en plus l'objet de la lentille<br>le long de l'axe optique ?

---

{{< slide  background-iframe="/foyerimage.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Lorsqu'un objet est très loin de la lentille<br>(on dit «&nbsp;à l'infini&nbsp;»), les rayons de l'objet qui parviennent à la lentille sont quasiment <span class="imp">parallèles</span>.

<p class="fragment fade-up">Ils convergent alors tous en un point<br>appelé <span class="imp">foyer image F'</span> de la lentille.</p>

---

La distance entre le centre optique O de la lentille<br>et le foyer image est appelée <span class="imp">distance focale f'</span>.

<div class="fragment fade-up encadre" style="padding:0 50px;">
$$f'=OF'$$
</div>

---

Aucune image ne peut se former entre O et F'.

<p class="fragment fade-up">La distance focale caractérise une lentille :<br>
plus une distance focale est courte<br>et plus la lentille est <span class="imp fragment">convergente.</span></p>

---

Que se passe-t-il si on décale l'objet lointain<br>
par rapport à l'axe optique ?

---

{{< slide  background-iframe="/planfocal.html" background-size="contain" background-transition="concave" background-interactive="true">}}


---


Le point image se déplace sur le plan focal (plan orthogonal à l'axe optique passant par F').

---

Supposons maintenant qu'on joue le film à l'envers :

<p class="fragment fade-up">À la place des rayons incidents parallèles<br>qui convergent en un point, on voit maintenant<br>des rayons émis par ce point qui ressortent<br>parallèles de la lentille.</p>

---

{{< slide  background-iframe="/foyerimage.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Conclusion :

<p class="fragment fade-up">Il existe un point, le <span class="imp">foyer objet F</span>, tel que les rayons qui passent par lui <span class="imp">ressortent tous parallèles<br>à l'axe optique</span>.</p>

<p class="fragment fade-up">Le foyer objet F est le symétrique de F' par rapport à O.</p>

---

{{< slide  background-iframe="/avecindic.html" background-size="contain" background-transition="concave" background-interactive="true">}}

{{% /section %}}

---

{{% section %}}

## Construction d'une image : les 3 rayons particuliers

---

{{< slide  background-iframe="/troisrayons.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

<p style="color:#E14F61;">Un rayon qui arrive dans la lentille parallèle à l'axe optique ressort <span class="fragment" style="color:#E14F61;"><b>en direction du foyer image F'</b>.</span></p>

<p class="fragment fade-up" style="color:#E0B43E;">Un rayon qui passe par le centre optique<br>de la lentille <span class="fragment" style="color:#E0B43E;"><b>n'est pas dévié</b>.</span></p>

<p class="fragment fade-up" style="color:#77FFBB;">Un rayon qui arrive sur la lentille depuis<br>le foyer objet F ressort <span class="fragment"  style="color:#77FFBB;"><b>parallèle à l'axe optique</b>.</span></p>

{{% /section %}}

---

{{% section %}}

## Grandissement

---

Un peu de vocabulaires :

<br>

<ul>
<li class="fragment fade-up">Une image peut être <b style="color:#FFF056">droite</b> ou <b style="color:#00A2FF">renversée</b></li>

<br>

<li class="fragment fade-up">Et elle peut être <b style="color:#FF95CA">réduite</b> ou <b style="color:#61D836">agrandie</b></li>
</ul>

---

Le <span class="imp">grandissement</span> est le rapport entre la taille<br>de l'image et la taille de l'objet :

<div class="encadre fragment fade-up" style="padding:0 50px;">
$$\gamma = \frac{A'B'}{AB}$$
</div>

---

<ul>
<li>Si l'image est <b style="color:#61D836"> agrandie </b> alors <b 
style="color:#61D836"> $\gamma$<span class="fragment" style="color:#61D836"> $>$ 1</span> </b></li>
<br>
<li class="fragment fade-up">Si l'image est <b style="color:#FF95CA"> réduite </b> alors <b style="color:#FF95CA"> $\gamma$<span class="fragment" style="color:#FF95CA"> $<$ 1</span> </b></li>
</ul>

---

{{< slide  background-iframe="/finlentilles.html" background-size="contain" background-transition="concave" background-interactive="true">}}

{{% /section %}}

---

{{% section %}}

## L'œil👁️<br>accommodation, défauts<br>et corrections 👓

---

{{% /section %}}

---

[Retour site](https://coursphychi.github.io/2nde/lentilles/)