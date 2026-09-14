+++
title = "Molécules"
outputs = ["Reveal"]
[reveal_hugo]
theme = "league"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {
border: none !important;
}

.imp {
font-weight:bold;color:#FF968D;
}

li {
color: #fff;
}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: outside;
color:#fff;
}

span {
font-weight:normal;
}

.video-container {
  height: 60vh; /* limite la hauteur à 80% de la fenêtre */
  width: calc(60vh * 9 / 16); /* largeur en fonction du ratio portrait */
  margin: 0 auto;
  position: relative;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:10px;
}


</style>



# Structure et propriété

---

{{% section %}}

## Entité organique

---

Une entité <span class="imp">organique</span> est une entité à base de <span class="imp">carbone</span>.


<p class="fragment fade-up">Les atomes de carbone forment le squelette de l’entité sur lequel viennent se greffer des atomes d’hydrogène et différents groupes caractéristiques.</p>

{{%note%}}
Quelques composés simples du carbone sont classés parmi les composés inorganiques.

Les composés cités sont généralement :

Le monoxyde de carbone (CO) et le dioxyde de carbone (CO2), l'acide carbonique, les carbonates et bicarbonates, les cyanures, les carbures (excepté les hydrocarbures).
{{%/note%}}




{{% /section %}}

---

{{% section %}}

## Formule topologique

---

{{< slide  background-image="/formules.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/topoalcanes.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/topogen.png" background-size="contain" background-transition="concave">}}

---

Quelles sont les règles ?

---

Donner la formule semi-développée

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/exotopo.png" style="box-shadow:none;background:none;">
</div>


---

Donner la formule topologique

<iframe style="width: 800px; height: 500px; border-radius:10px;" frameborder="0" src="https://embed.molview.org/v1/?mode=balls&cid=54670067"></iframe>


{{%note%}}
Vitamine C
{{%/note%}}

{{% /section %}}

---

{{% section %}}

## cycle, ramification, insaturation

---

Le squelette carboné peut être :


<ul style="margin-top:-0.5em;">
<li><span class="imp">ouvert</span> ou <b style="color:#FFF056">cyclique</b></li>
</ul>



<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-top:1em;">
<img src="/ouvertcyclique.png" style="box-shadow:none;background:none;">
</div>

---

<ul style="margin-top:-0.5em;">
<li><span class="imp">linéaire</span> ou <b style="color:#FFF056">ramifié</b></li>
</ul>

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-top:1em;">
<img src="/lineaireramifie.png" style="box-shadow:none;background:none;">
</div>

---

<ul>
<li><span class="imp">saturé</span> ou <b style="color:#FFF056">insaturé</b></li>
</ul>

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;margin-top:1em;width:600px;max-width:100%;">
<img src="/satureinsature.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">un squelette carboné est dit <b style="color:#FFF056">insaturé</b><br>s'il y a présence de liaisons multiples.</p>

<p class="fragment fade-up"><u>Rq</u> : les cycles aussi sont des insaturations.</p>


{{%note%}}
Définition plus propre :
Les composés insaturés sont, en chimie organique, des composés dont le nombre total d'atomes est inférieur à celui que l'on peut déduire de la valence maximale de chacun des atomes constitutifs prise individuellement.
{{%/note%}}

{{% /section %}}

---

{{% section %}}

## Isomérie de constitution

---

Deux espèces chimiques différentes sont <span class="imp">isomères de constitution</span> si elles possèdent la <b style="color:#FFF056">même formule brute</b>, mais des <b style="color:#56C1FF">formules semi-développées<br>ou topologiques différentes</b>.

---

Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-top:1em;">
<img src="/isomeres.png" style="box-shadow:none;background:none;">
</div>

{{%note%}}
but-3-èn-1-ol
butanal
{{%/note%}}

---

Trouver tous les isomères de constitution<br>de formule brute $\ce{C4H5NO}$.

---

{{< slide  background-image="/repiso.png" background-size="contain" background-transition="concave">}}


{{%note%}}
Les deux derniers ne sont pas isomères de constitution l'un par rapport à l'autre mais isomères de configuration. Plus précisément, ce sont des diastéréoisomères
{{%/note%}}

{{% /section %}}


---

{{% section %}}

## Familles chimiques à connaître

---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">alcool</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">hydroxy</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/famalco.png" style="box-shadow:none;background:none;">
</div>


---


Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/exalco.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">3-méthyl</b><b style="color:#56C1FF">butan</b><b style="color:#FF968D">-2-ol</b></p>

---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">aldéhyde</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">carbo<u>n</u>yle</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/famalde.png" style="box-shadow:none;background:none;">
</div>

---


Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/exalde.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">2-éthyl</b><b style="color:#56C1FF">pentan</b><b style="color:#FF968D">al</b></p>

---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">cétone</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">carbo<u>n</u>yle</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/famcet.png" style="box-shadow:none;background:none;">
</div>


---


Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/excet.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">2-2-diméthyl</b><b style="color:#56C1FF">pentan</b><b style="color:#FF968D">-3-one</b></p>

---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">acide carboxylique</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">carbo<u>x</u>yle</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/famcarbo.png" style="box-shadow:none;background:none;">
</div>

---

Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/excarbo.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#FF968D">acide</b> <b style="color:#61D836">3-méthyl</b><b style="color:#56C1FF">butan</b><b style="color:#FF968D">oïque</b></p>

---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">halogénoalcane</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">halogéno</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/famhalo.png" style="box-shadow:none;background:none;">
</div>

---

Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/exhalogeno.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">2-bromo-2-méthyl</b><b style="color:#56C1FF">but</b><b style="color:#FF968D">ane</b></p>


---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">amine</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">amino</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/famamin.png" style="box-shadow:none;background:none;">
</div>


---


Exemple 1 :

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/examin1.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#56C1FF">pentan</b><b style="color:#FF968D">-2-amine</b></p>


----

Exemple 2 :

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/examin2.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">N-N-diéthyl</b><b style="color:#56C1FF">propan</b><b style="color:#FF968D">-1-amine</b></p>


---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">ester</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">ester</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/famester.png" style="box-shadow:none;background:none;">
</div>


---


Exemple :

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/exester.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#56C1FF">propan</b><b style="color:#FF968D">oate</b> <b style="color:#61D836">d'éthyle</b></p>


---

<table><thead>
  <tr>
    <th style="text-align:center;">Famille fonctionnelle</th>
    <th style="text-align:center;">Groupe caractéristique</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="text-align:center;"><b style="color:#FFF056">amide</b></td>
    <td style="text-align:center;"><b style="color:#FF968D">amide</b></td>
  </tr>
</table>


<div style="position:relative;margin-left:auto;margin-right:auto;width:550px;max-width:100%;">
<img src="/famamid.png" style="box-shadow:none;background:none;">
</div>


---


Exemple 1 :

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/examid1.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">3-méthyl</b><b style="color:#56C1FF">butan</b><b style="color:#FF968D">amide</b></p>


----

Exemple 2 :

<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;">
<img src="/examid2.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><b style="color:#61D836">N-méthyl</b><b style="color:#56C1FF">éthan</b><b style="color:#FF968D">amide</b></p>


{{% /section %}}

---

{{% section %}}

## Polymères

---

Les <span class="imp">polymères</span> sont des macromolécules construites par répétition d’une ou plusieurs unités structurales appelées « unité de répétition » (ou motif).

---

Les polymères peuvent être synthétiques (polyéthylène, PVC, polyester, PTFE, etc.)<br>
ou naturels (caoutchouc, cellulose, ADN, etc.).

<p class="fragment fade-up">
<u>Rq</u> : pour les polymères naturels,<br>on parle de biopolymères.</p>

---

{{< slide  background-image="/polyethylene.png" background-size="contain" background-transition="concave">}}

{{%note%}}
	•	Bidon de lait HDPE
	•	Sac cabas LDPE
	•	Bouteille d’eau PET (exemple de PEHD recyclé dans le bouchon)
	•	Bouteille de liquide vaisselle PE
	•	Rouleau de film alimentaire LDPE (reflets visibles)
	•	Tuyau d’irrigation HDPE enroulé
	•	Bâche bleue pliée PE
	•	Planche à découper HDPE
	•	Seringue graduée (polyéthylène/polypropylène pour corps et piston)
{{%/note%}}

---

{{< slide  background-image="/pvc.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/polystyrene.png" background-size="contain" background-transition="concave">}}

{{%note%}}
	•	Bloc de calage en PSE (mousse blanche pour emballage)
	•	Gobelet café + couvercle en mousse PS
	•	Petit pot alimentaire rigide (PS thermoformé, yaourt/soupe)
	•	Boîte de CD transparente (PS cristal)
	•	Pile de boîtes de Petri de laboratoire en PS stérilisable
	•	Couverts jetables blancs en PS rigide
	•	Plaque d’isolation rose (PSE extrudé) en arrière-plan
{{%/note%}}

---

{{< slide  background-image="/polypropylene.png" background-size="contain" background-transition="concave">}}

{{%note%}}
	•	Boîte alimentaire hermétique (PP)
	•	Rouleau de non-tissé blanc (PP)
	•	Corde torsadée jaune (PP)
	•	Batterie auto : coffrage en PP copolymère
	•	Pot de yaourt/crème fraîche blanc (PP)
	•	Pile de chaises empilables multicolores (PP moulé)
{{%/note%}}

---

{{< slide  background-image="/cellulose.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/1/16/DNA_orbit_animated.gif" background-size="contain" background-transition="concave">}}



{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/molecules/)