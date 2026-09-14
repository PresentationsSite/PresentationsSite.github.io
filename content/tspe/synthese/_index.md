+++
title = "Synthèse"
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


# Synthèse organique

---

{{% section %}}

## Rappels : étapes d'une synthèse

---

### 1 -- Transformation des réactifs

<br>

<p class="fragment fade-up">On utilise le plus souvent un <span class="imp">montage à reflux<br></span>qui permet <span class="imp">d'accélérer la transformation</span> tout en <span class="imp">évitant les pertes de matière</span> dans les vapeurs.</p>

---

{{< slide  background-image="/montreflux.png" background-size="contain" background-transition="concave">}}


---


<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/gRBG7RdY00I?si=Lg-tUtLk4FpPxJ45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

On obtient un mélange contenant les produits synthétisés, le solvant, le catalyseur éventuel ainsi que des réactifs s'il en reste. C'est le <span class="imp">brut réactionnel</span>.

---


### 2 -- Isolement du produit synthétisé

<br>

<ul>
<li class="fragment fade-up" style="font-size:1.1em;color:#56C1FF;">Si le produit est soluble :</li>
</ul>

<p class="fragment fade-up">On réalise un <span class="imp">extraction liquide-liquide</span>.</p>

 
<p class="fragment fade-up">+&nbsp;lavage</p>
<p class="fragment fade-up">+&nbsp;séchage</p>
<p class="fragment fade-up">+&nbsp;élimination du solvant</p>


{{%note%}}
- Le lavage consiste à récupérer les impuretés dans un solvant adapté (les ions dans une solution d'eau salée par exemple) en neutralisant le plus possible la solution.
- Le séchage consiste à ajouter un solide hygroscopique en poudre puis à filtrer.
- L'élimination du solvant se fait sous pression réduite grâce à un évaporateur rotatif
{{%/note%}}

---

{{< slide  background-image="/protextrsol.png" background-size="contain" background-transition="concave">}}

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/iHk2tV8KwUI?si=c__OWLHeN2Kcs4gj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

<ul>
<li style="font-size:1.1em;color:#56C1FF;">Si le produit est insoluble<br>(formation d'un précipité) :</li>
</ul>

<p class="fragment fade-up">On réalise une <span class="imp">extraction solide-liquide</span>.</p>

<p class="fragment fade-up">Pour cela, on utilise une <span class="imp">filtration sous vide</span><br>(qui permet d'accélérer le processus)</p>

<p class="fragment fade-up">En fonction de la phase que l'on<br>souhaite récupérer, on parle :</p>

<ul>
<li class="fragment fade-up">de <span class="imp">filtration</span> pour la phase liquide,</li>
<li class="fragment fade-up">d'<span class="imp">essorage</span> pour la phase solide.</li>
</ul>


---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/2XkwYikTxao?si=LfBsRbelcXx0SHCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

### 3 -- Purification du produit synthétisé

<br>

<ul>
<li class="fragment fade-up" style="font-size:1.1em;color:#56C1FF;">Si le produit est solide :</li>
</ul>

<p class="fragment fade-up">on peut opérer une <span class="imp">recristallisation</span>.</p>

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/3wKTiLfnSNs?si=WIs5yGx8uo-tiyRh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

<ul>
<li style="font-size:1.1em;color:#56C1FF;">Si le produit est liquide :</li>
</ul>

<p class="fragment fade-up">on peut cette fois-ci se lancer<br>dans une <span class="imp">distillation fractionnée</span><br>ou une chromatographie sur colonne.</p>

---

{{< slide  background-image="/distfract.png" background-size="contain" background-transition="concave">}}


---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/iVwT10cV84k?si=V3QtsQz1s0pwBLEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/S-CDbA8tYKM?si=2lPQIBnGUMKQCpkT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

### 4 -- Identification du produit synthétisé<br>et vérification de sa pureté

<ul>
<li class="fragment fade-up">Mesure de la <span class="imp">température de fusion</span><br>au <span class="imp">banc Kofler</span> (pour un solide)</li>
<li class="fragment fade-up">Mesure de la température d'ébullition<br>(pour un liquide)</li>
<li class="fragment fade-up">Mesure de l'indice optique au<br>réfractomètre (pour un liquide)</li>
<li class="fragment fade-up"><span class="imp">Spectrographie infrarouge</span></li>
<li class="fragment fade-up"><span class="imp">Chromatographie sur couche mince<br>(CCM)</span></li>
</ul>

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/XuO9EPJcY7I?si=aNany-wbGKWWdTVy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/p7g21N5oFLE?si=jRtIl0Tbtv9WGOz_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/1e27UfFGfBA?si=10JWPW7ZJQ_rUQgZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

{{% /section %}}

---

{{% section %}}

## Optimisation d'une étape de synthèse

---

### optimiser la vitesse

Pour augmenter la vitesse de la 1<sup>re</sup> étape<br>d'une synthèse ( transformation des réactifs),<br>on peut jouer sur les <span class="imp">facteurs cinétiques</span> que sont :

<ul>
<li class="fragment fade-up">la <span class="imp">température</span> :</li>
</ul>

<p class="fragment fade-up">dans la plupart des cas, une augmentation<br>de la température accélère la réaction<br>et c'est pour cela qu'on utilise<br>un <span class="imp">montage à reflux</span>.</p>

{{%note%}}
exceptions :
- pour T : les réactions enzymatiques sont réputées posséder un pic d'efficacité pour un domaine de température très restreint. Une augmentation de température qui conduirait à se placer en dehors de ce domaine annihilerait l'action de l'enzyme.
Il existe, en outre, des réactions dont la vitesse est indépendante de la température. On parle parfois de « réactions non-Arrhenius ».
Enfin, les réactions sans barrière d'activation (pour lesquelles une énergie d'activation ne peut pas être définie) constituent un cas à part puisque leur vitesse diminue lorsque la température augmente. Il s'agit de « réactions anti-Arrhenius ». Dans ce dernier cas, on peut citer les réactions radicalaires qui constituent un exemple bien connu des chimistes.

À l'inverse, on peut ralentir fortement une réaction avec un bain d'eau froide (trempe) et c'est aussi le principe d'un réfrigérateur
{{%/note%}}


---

<ul>
<li>la <span class="imp">concentration</span> des réactifs :</li>
</ul>

<p class="fragment fade-up"> une augmentation de la concentration des réactifs<br>rend généralement la transformation plus rapide.</p>


{{%note%}}
- pour C : Dans certaines situations expérimentales où les mélanges ne sont pas stœchiométriques, augmenter la concentration du réactif limitant ne rend pas forcément la réaction plus rapide car la probabilité de chocs efficaces augmente mais il y a davantage de produit(s) à former ce qui peut annuler le gain temporel espéré.

Dans le cadre du laboratoire, comme en cuisine, on peut cumuler l'action de deux facteurs cinétiques lorsqu'on ajoute de l'eau froide (ou même glacée) pour stopper une transformation chimique ou une cuisson.
{{%/note%}}

---

On peut aussi citer :

<br>

<ul>
<li class="fragment fade-up" style="">la pression s'il s'agit d'une transformation<br>en phase gazeuse.</li>

<br>

<li class="fragment fade-up"  style="">l'état poreux ou divisé (poudre) d'un solide dans<br>le cas d'une synthèse hétérogène car on augmente ainsi la surface de l'interface entre les réactifs.</li>
</ul>

---

Enfin, on peut augmenter<br>la vitesse de la transformation<br>en utilisant un <span class="imp">catalyseur</span> adapté.

---

### optimiser le rendement

<br>

<p class="fragment fade-up">On peut augmenter le rendement<br>de la transformation en :</p>

<ul>
<li class="fragment fade-up"><span class="imp">introduisant un réactif en excès</span>,</li>
<li class="fragment fade-up"><span class="imp">éliminant un produit du mélange réactionnel</span>.</li>
</ul>

<br>

<p class="fragment fade-up">⚠️ La température ne joue pas sur le rendement !</p>

---

Dans les deux cas, l'idée est<br>de <span class="imp"><span class="imp fragment fade-up">diminuer</span> le quotient de réaction $Q_r$</span>.

<p class="fragment fade-up">Cela a pour conséquence<br>d'écarter le mélange de l'équilibre.</p>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/optimrendement.png" style="box-shadow:none;background:none;">
</div>

---

Par conséquent, pour atteindre<br>cet équilibre plus éloigné :

<br>

<ul>
<li class="fragment fade-up" >L'avancement final $x_\mathrm{f}$ <span class="fragment imp">$\nearrow$</span></li>
<br>
<li class="fragment fade-up" style="list-style-type: '⇒ ';">La quantité final de produit formé $n_{\mathrm{produit},f}$ <span class="fragment imp">$\nearrow$</span></li>
<br>
<li class="fragment fade-up" style="list-style-type: '⇒ ';">$\eta = \frac{m_\mathrm{exp}}{m_\mathrm{max}}=\frac{n_\mathrm{exp}}{n_\mathrm{max}}$ <span class="fragment imp">$\nearrow$</span></li>
</ul>

<br>

<p class="fragment fade-up" style="margin-top:1em;">On a <span class="imp">déplacé l'équilibre de manière<br>à favoriser le sens direct</span> de la réaction.</p>


---

Dans le cas d'une estérification où l'eau est un produit non soluble avec le solvant du milieu réactionnel,<br>on peut utiliser un <span class="imp">appareil de Dean Stark</span>.

<p class="fragment fade-up">Il permet de retirer au fur et à mesure l'eau du milieu réactionnel et d'améliorer ainsi le rendement.</p>

---

<div style="position:relative;margin:auto;width:800px;max-width:100%;">
<iframe width="800" height="427" src="https://www.youtube-nocookie.com/embed/_zbHeEtRTZw?si=g5E8-LguN7JeHR4F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>
</div>

---

<u>Autre exemple</u> :<bR>substitution nucléophile d'un <b style="color:#FFF056">halogénoalcane</b><br>par de l'eau pour synthétiser un alcool



<div class="fragment fade-up">
$$\ce{R-Cl + H2O <=> R-OH + H+ + Cl-}$$
</div>

<p class="fragment fade-up">Problème :<br>
C'est une réaction limitée<br>(et lente en plus) 😒
</p>

---


$$\ce{R-Cl + H2O <=> R-OH + H+ + Cl-}$$


Pour déplacer cet équilibre dans le sens direct jusqu'à atteindre un rendement de 100% (conversion totale),<br>il suffit d'ajouter des ions argents $\ce{Ag+}$<br>dans le milieu réactionnel. 


<p class="fragment fade-up">Par quel miracle ?</p>

---

Les ions chlorures et argents précipitent<br>pour former du chlorure d'argent :

<div class="fragment fade-up">
$$\ce{Ag+ (aq) + Cl- (aq) <=> AgCl (s)}$$
</div>

<p class="fragment fade-up">Et cette réaction est très favorisée ($K\approx \pu{5,6E9}$ sachant que le critère généralement retenu pour considérer une réaction comme totale est $K>10^4$).</p>

---

Même raisonnement que précédemment :
<br>$\ce{[Cl-]}$<span class="imp fragment">$\searrow\searrow$</span>  $\Rightarrow Q_r$ <span class="imp fragment">$\searrow\searrow$</span><br>

<p class="fragment fade-up">$\Rightarrow$ <span class="imp">déplacement de l'équilibre<br>de manière à favoriser le sens direct</b>. </p>

<p class="fragment fade-up">En prime, les ions argents viennent directement dépouiller les halogénoalcanes de leurs ions chlorures<br>ce qui accélère bien la réaction 👍</p>


<p class="fragment fade-up"><u>Rq</u> :<br>les halogénoalcanes étant peu solubles<br>dans l'eau, on utilise plutôt un solvant mixte,<br>mélange eau-éthanol ou eau-acétone.</p>

{{% /section %}}

---

{{% section %}}

## Classification des réactions

---

Une synthèse peut mettre en œuvre un des 5 grands types de réaction suivant
(et parfois, une réaction<br>peut appartenir à deux types à la fois).

---

### 1 -- Réaction d'oxydoréduction

<br>

<ul>
<li class="fragment fade-up">Échange d'électrons</li>
<li class="fragment fade-up">L'oxydant d'un couple oxydoréducteur<br>$\ce{({\color{#FF968D}Ox_1}/Red_1)}$ réagit avec le réducteur<br>d'un autre couple $\ce{(Ox_2/{\color{#56C1FF}Red_2})}$.</li>
</ul>


---

Exemple :<br>Oxydation de l'alcool benzylique<br>en acide benzoïque

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/synthoxy.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up"><u>Rq</u> : cette notation correspond à un <b style="color:#FFF056">schéma de transformation</b> et non à une équation de réaction.</p>
{{%note%}}
Un schéma de transformation mentionne uniquement l’espèce de départ et l’espèce
cible, sans nécessairement traduire la conservation des éléments. Il est d’usage
de mentionner des conditions opératoires sur une flèche représentant le sens de
réalisation de la transformation.
{{%/note%}}

---

### 2 -- Réaction acide-base

<br>

<ul>
<li class="fragment fade-up">Échange d'ion hydrogène</li>
<li class="fragment fade-up">L'acide d'un couple acide-base<br>$\ce{({\color{#FF968D}AH_1}/A_1^-)}$ réagit avec la base<br>d'un autre couple $\ce{(AH_2/{\color{#56C1FF}A_2^-})}$.</li>

---

Exemple :<br>Transformation de l'acide benzoïque<br>en ion benzoate

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/synthaci.png" style="box-shadow:none;background:none;">
</div>

---

### 3 -- Réaction de substitution

Réaction au cours de laquelle un atome ou groupe d'atomes, lié à un carbone par une liaison simple, est remplacé par un autre atome ou groupe d'atomes :

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;">
<img src="/addgen.png" style="box-shadow:none;background:none;">
</div>


<p class="fragment fade-up"><u>Rq</u> : il y a <span class="fragment">autant</span> de produits que de réactifs.</p>

---

Exemple :

Transformation du 2-chloro-2-méthylpropane<br>en 2-méthylpropan-2-ol

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/exsub.png" style="box-shadow:none;background:none;">
</div>

---

### 4 -- Réaction d'addition

Réaction au cours de laquelle un atome ou groupe d'atomes est ajouté sur une molécule possédant au moins une liaison multiple (double ou triple). 

<p class="fragment fade-up"><u>Rq</u> : il y a <span class="fragment">moins</span> de produits que de réactifs.</p>

---

Exemple :

Hydrogénation de l'éthène :

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/exadd.png" style="box-shadow:none;background:none;">
</div>

---

### 5 -- Réaction d'élimination

Réaction au cours de laquelle un atome ou groupe d'atomes est retiré sur une molécule conduisant à la formation d'une liaison multiple (double ou triple).

<p class="fragment fade-up"><u>Rq</u> : il y a <span class="fragment">plus</span> de produits que de réactifs.</p>

---

Exemple :

Déshydratation du 2-méthylpropan-2-ol :

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/exeli.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">Quel est l'autre produit (la molécule éliminée) ?</p>

---

Ces 5 grands types de réaction peuvent<br><span class="imp">modifier un groupe caractéristique</span> (et ainsi<br>changer la famille fonctionnelle d'une molécule)<br>et/ou <span class="imp">modifier la chaîne carbonée</span> !


{{% /section %}}


---

{{% section %}}

## Stratégie de synthèse multi-étapes

---

Synthétiser une molécule cible à partir<br>d'un précurseur nécessite souvent plusieurs étapes.

<p class="fragment fade-up">Pour déterminer la meilleure stratégie de synthèse,<br>on s'aide de <span class="imp">banques de réactions</span> qui regroupent les informations sur la réactivité des espèces organiques de différentes familles fonctionnelles en spécifiant<bR>les conditions expérimentales dans lesquelles<br>les espèces réagissent ou ne réagissent pas.

---

Lorsqu'une espèce chimique appartient à plusieurs familles fonctionnelles réagissant dans les mêmes conditions expérimentales, il est parfois nécessaire de mettre en place une stratégie de synthèse appelée <span class="imp">protection-transformation-déprotection</span><br> afin de synthétiser le produit désiré.

<p class="fragment fade-up">cf. <a href="https://coursphychi.github.io/act-banqueorga.pdf">Activité banque de réactions</a></p>

---

Exemple :

Supposons que l'on veuille former l'acide lactique (acide 2-hydroxypropanoïque) à partir<br>du 2-hydroxypropanal.

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/transacidelactique.png" style="box-shadow:none;background:none;">
</div>

---

On peut penser à une oxydation. 

<p class="fragment fade-up">Mais problème : une banque de réaction nous indique qu'une oxydation par l'ion permanganate transforme bien l'aldéhyde en acide carboxylique mais aussi<br>l'alcool en cétone et ça on veut éviter...</p>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/transacidelactique2.png" style="box-shadow:none;background:none;">
</div>

---

Il faut protéger la fonction alcool.<br>Voilà une stratégie possible :

<div class="fragment fade-up" class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:100%;">
<img src="/stratprotdeprot.png" style="box-shadow:none;background:none;">
</div>



{{% /section %}}

---

{{% section %}}

## Réaction de polymérisation

---

Lors d'une <span class="imp">réaction de polymérisation</span>,<br>de nombreux <span class="imp">monomères</span> réagissent<br>entre eux pour former un <span class="imp">polymère</span>.

---

Exemple :

Un acide carboxylique réagit avec un alcool en milieu acide pour former un ester (et de l'eau).

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/acidelactique.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">Or que peut-on dire de l'acide lactique ?</p>

<p class="fragment fade-up">Il peut donc réagir avec lui-même en milieu acide !</p>

---

{{< slide  background-image="/polymerisation.png" background-size="contain" background-transition="concave">}}

---

On obtient l'acide polylactique.

Biosourcé (amidon de maïs) et biodégradable, le PLA est la première alternative naturelle au polyéthylène.

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/usagespla.png" style="box-shadow:none;background:none;">
</div>

{{% /section %}}

---

{{% section %}}

## Synthèses écoresponsables

---

{{< slide  background-image="/chimieverte.png" background-size="contain" background-transition="concave">}}



{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tspe/synthese/)