+++
title = "Inférence bayésienne"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
.drawing-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 30px); /* Augmentez la taille des cellules */
    grid-gap: 2px; /* Ajustez l'espacement si nécessaire */
    margin-bottom: 20px;
}
.grid-item {
    width: 30px; /* Taille plus grande pour chaque cellule */
    height: 30px; /* Taille plus grande pour chaque cellule */
    background-color: #fff;
    border: 1px solid #ccc; /* Bordures plus fines et grises */
}
    .grid-item.checked {
        background-color: #000;
    }
    #prediction {
        margin-bottom: 0; /* Pour réduire l'espace avec le chiffre prédit */
        font-size: 20pt; /* Rendre le texte un peu plus petit */
    }
    #predictedLabel {
        color: red; /* Déjà défini dans le HTML, mais peut être ajusté ici pour la cohérence */
    }
    button {
    background-color: #4CAF50; /* Couleur verte */
    color: white; /* Texte blanc */
    padding: 15px 32px; /* Plus grand padding pour un bouton plus grand */
    font-size: 16px; /* Taille de la police plus grande */
    border: none; /* Pas de bordure */
    border-radius: 5px; /* Bords arrondis */
    cursor: pointer; /* Change le curseur en pointeur */
    margin: 10px; /* Ajoute de l'espace autour des boutons */
}
button:hover {
    background-color: #45a049; /* Un peu plus foncé lorsque survolé */
}
.reset-btn {
    background-color: #007bff; /* Bleu Bootstrap */
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
}
.reset-btn:hover {
    background-color: #0056b3; /* Bleu plus foncé au survol */
}
#nearest-neighbors-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.neighbor {
    display: grid;
    grid-template-columns: repeat(8, 5px); /* Adaptez la taille des "pixels" */
    margin: 5px;
}
.neighbor div {
    width: 5px; /* Taille du "pixel" */
    height: 5px;
    border: 0.5px solid #ccc; /* Bordure fine pour chaque "pixel" */
}
</style>



# Inférence bayésienne

---

{{%section%}}

## Raisonnement<br>déductif et inductif

---

Un <span class="imp">raisonnement déductif</span> part d'énoncés supposés vrais (les prémisses) et en tire logiquement des conclusions.

---

{{< slide  background-image="/entonnoir.png" background-size="contain" background-transition="concave">}}

Un raisonnement déductif est descendant : 

<p class="fragment fade-up">la déduction consiste à tirer des conséquences particulières à partir de principes généraux en préservant la vérité dans le processus.<p>

---

Exemple type :

<ol>
<li class="fragment fade-up">Tous les hommes sont mortel (🕺$\Rightarrow$💀)</li>
<li class="fragment fade-up">Socrate est un homme (🕺)</li>
<li class="fragment fade-up">Socrate est mortel (💀)</li>
</ol>

---

{{< slide  background-image="https://sciencesilencieuse.github.io/preuvehartshorne.png" background-size="contain" background-transition="concave">}}

Autre exemple :
<br><br><br><br><br><br><br><br><br>

---

Mais c'est pourtant un autre type de raisonnement qu'on utilise plus naturellement :

<p class="imp fragment fade-up">le <span class="imp">raisonnement inductif</span>.</p>

<p class="fragment fade-up">Il est, lui, ascendant puisqu'il vise à établir<br>des conséquences générales à partir d'observations particulières.</p>

---

Ce type de déduction n'est pas logiquement valide : même beaucoup d’observations compatibles n’impliquent pas logiquement une loi générale.

---

Elle nous amène à faire des erreurs de raisonnement appelées biais de confirmation comme dans l'[exemple du test de Wason](https://app.wooclap.com/events/DFJPPC/questions/68fe3cd9722b5164b8498910).

---

Vouloir retourner le 4 revient à croire que<br>sachant $A\Rightarrow B$, alors $B\Rightarrow A$ :

<p class="fragment fade-up">l'observation d'une conséquence nous amène<br>alors à prédire la présence de la cause. </p>

<p class="fragment fade-up">Or une implication n'est pas logiquement équivalente à sa réciproque (seulement<br>à sa contraposée $\overline{B}\Rightarrow\overline{A}$).</p>

---

<ol>
<li>Tous les chats sont mortels (🐈$\Rightarrow$💀)</li>
<li class="fragment fade-up">Socrate est mortel (💀)</li>
<li class="fragment fade-up">Donc Socrate est un chat (🐈)</li>
</ol>


---

Bien que logiquement erronée, l'induction est<br>le seul raisonnement disponible pour<br>construire des théories ou modèles.

<p class="fragment fade-up">On ne peut que tenter de déduire des lois à partir d'observations fatalement incomplètes du monde.</p>

---

Cela explique pourquoi la <span class="imp">démarche scientifique</span> semble se construire à l'envers :

<p class="fragment fade-up">on ne cherche jamais à prouver une théorie puisque c'est logiquement impossible.</p>

<p class="fragment fade-up">Tout ce qu'on peut faire, c'est la détruire.</p>

---

À partir des observations, on émet une hypothèse sur la marche du monde : une <span class="imp">théorie</span>.

<p class="fragment fade-up">Le boulot de la communauté scientifique est<br>alors de tout faire pour invalider la théorie.</p>

<p class="fragment fade-up">Tant qu'elle résiste, on la garde.</p>

---

Recette pour détruire une théorie :

 <p class="fragment fade-up">on détermine les conséquences vérifiables que<br>la théorie implique (par un raisonnement déductif où la théorie est placée en prémisse).</p>
 
 <p class="fragment fade-up">Si une expérience montre qu'une de ces conséquences est fausse, la théorie s'effondre.</p>
 
 <p class="fragment fade-up">Un seul contre exemple suffit !</p>

---

Au mieux, on ne peut qu'hypothétiser un modèle du monde et échouer à l'invalider.

<p class="fragment fade-up"><u>Rq</u> : une théorie ne permettant pas son<br>invalidation (sans conséquence vérifiable)<br>n'est pas une théorie scientifique !</p>

---

Autre exemple de raisonnement inductif :

<p class="fragment fade-up">le <span class="imp">diagnostic médical</span></p>

<p class="fragment fade-up">En effet, on essaye là encore de détermine<br>la cause (la maladie) à partir de l'observation<br>des conséquences (les symptômes).

---

On retrouve aussi le raisonnement inductif au cœur du travail d'un enquêteur et au tribunal.


{{%/section%}}

---

{{%section%}}

## Théorème de Bayes

---

Le théorème de Bayes permet de rendre<br>le raisonnement inductif plus rigoureux.

---

Le théorème de Bayes ne "démontre" pas que l’induction est vraie au sens logique, mais il fournit un cadre propre pour faire de l’induction une<br>mise à jour rationnelle de croyances :

---

<div style="position:relative;margin:auto;width:fit-content;">
<ul>
<li>On formalise une hypothèse $H$.</li>
<li class="fragment fade-up">On explicite notre opinion a priori<br>sur la validité de l'hypothèse $P(H)$.</li>
<li class="fragment fade-up">On observe des données $D$.</li>
<li class="fragment fade-up">On met à jour la <span class="imp">plausibilité</span> de $H$<br>(la probabilité de $H$ sachant $D$ ou $P(H|D)$) grâce au théorème.</li>
</ul>
</div>

---

$$P(H \mid D)=\frac{P(D \mid H) P(H)}{P(D \mid H) P(H)+P(D \mid \overline H) P(\overline H)}$$

<br>

<div style="position:relative;margin:auto;width:fit-content;">
<ul>
<li class="fragment fade-up">$P(D \mid H)$ : à quel point les données sont attendues si l’hypothèse est vraie (vraisemblance des données).</li>
<li class="fragment fade-up">$P(D \mid \overline H)$ : à quel point les données sont attendues si l’hypothèse est fausse.</li>
<li class="fragment fade-up">$P(H \mid  D)$ : ce qu’on pense après avoir vu les données (posterior).</li>
</ul>
</div>

---

<u>Rq</u> : $P(D \mid H) P(H)+P(D \mid \overline H) P(\overline H)=P(D)$

---

{{< slide  background-image="/preuvebayes.png" background-size="contain" background-transition="concave">}}

---

Bayes formalise l’induction comme une procédure de mise à jour rationnelle de croyances sous incertitude, en rendant explicites les hypothèses.

---

Prenons un exemple :

<p class="fragment fade-up">on se demande si le CO₂ est un bon candidat<br>pour expliquer le réchauffement climatique.</p>

<br>

<div style="position:relative;margin:auto;width:fit-content;">
<ul>
<li class="fragment fade-up">$H$ : le CO₂ est un bon candidat</li>
<li class="fragment fade-up">$\overline H$ : le CO₂ n'est pas un bon candidat</li>
</ul>
</div>

---

Supposons que l'on soit sans avis au départ. 

<p class="fragment fade-up">Notre prior est alors $P(H)=P(\overline H)=50\%$</p>

<p class="fragment fade-up">Le théorème de Bayes va permettre de mettre<br>à jour rationnellement notre avis<br>en fonction des données.</p>

---

$$P(H \mid D)=\frac{P(D \mid H) P(H)}{P(D \mid H) P(H)+P(D \mid \overline H) P(\overline H)}$$

<ul>
<li class="fragment fade-up">$P(D \mid H)$ : probabilité d'obtenir cette donnée si le CO₂ est responsable du réchauffement climatique.</li>
<li class="fragment fade-up">$P(D \mid \overline H)$ : probabilité d'obtenir cette donnée si le CO₂ n'est  pas responsable du réchauffement climatique.</li>
<li class="fragment fade-up">$P(H \mid  D)$ : opinion après observation des données.</li>
</ul>

---

Certes, $H\Rightarrow D$ n'implique pas $D\Rightarrow H$.

<p class="fragment fade-up">Mais si $D$ s'explique mieux avec $H$ qu'avec $\overline H$,<br>c'est naturel que l'observation de $D$<br>rende $H$ plus probable.</p>

---

Quel que soit le prior, il est tiré dans le sens de la plus grande vraissemblance des données.

---

<iframe scrolling="no" title="Bayes géométriquement" src="https://www.geogebra.org/material/iframe/id/jy5thkeg/width/1011/height/698/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="850px" height="587px" style="border:0px;border-radius:10px;"> </iframe>


{{%/section%}}

---

{{%section%}}

## Inférence bayésienne<br>et cerveau

---

Notre cerveau serait naturellement adapté à réaliser des calculs bayésiens comme le montre l'expérience suivante sur des bébés de 8 mois.

---

{{< slide  background-image="http://coursphychi.github.io/bayesscience.png" background-size="contain" background-transition="concave">}}

---

Le temps d'attention du bébé est bien plus grand dans le premier cas que dans le second.


{{%/section%}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/x-2uVNze56s?si=my6Y6lLlI8I66MSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{%section%}}

## Doomsday argument

---


Expérience de pensée au résultat inquiétant<br>de Nick Bostrom qui est coutumier du fait<br>(on lui doit aussi l'IA et les trombones,<br>[le monde est une simulation](https://youtu.be/tlTKTTt47WE), etc.)


---

Un dieu bizarre se lance dans une petite expérience en créant 100 maisons<br>numérotées de 1 à 100.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/maisonsdoomsday.jpg" style="box-shadow:none;background:none;">
</div>

---

Le dieu lance ensuite une pièce 🪙

<ul>
<li class="fragment fade-up">S'il obtient pile, il crée 10 humains qu'il place dans les maisons 1 à 10.</li>
<li class="fragment fade-up">S'il obtient face, il place un humain dans chaque maison.</li>
</ul></p>



---

Vous prenez conscience dans une de ces maisons. Vous êtes mis au courant de toute la situation.

<p class="fragment fade-up">L'expérimentateur vous demande alors la probabilité que vous ayez 9 congénères plutôt que 99 sachant que vous êtes dans l'impossibilité à ce moment d'aller voir le numéro de votre maison.</p>

---

Vous sortez sur le perron et constatez que<br>le numéro de votre maison est le 9.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/maisonsdoomsday2.jpg" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">La probabilité précédente change-t-elle ?</p>

---

### Application à l'humanité

<p class="fragment fade-up">On envisage deux scénarios :</p>

<ul>
<li class="fragment fade-up">Apocalypse précoce 🪦 : l'humanité va bientôt s'éteindre. Il y aura eu en tout 200 milliards d'humains.</li>
<li class="fragment fade-up">Apocalypse tardive 🛸 : l'humanité va perdurer encore des millénaires et s'étendre dans la galaxie. Il y aura en tout 200 mille milliards d'humains.</li>
</ul>

---

Quelle probabilité a priori attribuez-vous<br>à ces deux scénarios ?

<p class="fragment fade-up">Vous êtes à peu près le 100 milliardième humain sur Terre. Comment votre prior est-il modifié<br>par cette information ?</p>


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tes/vivant/bayes)