+++
title = "Piles"
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



# Piles

---

{{% section %}}

## Rappels oxydoréduction

---

<div style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;">
<div style="padding: 10px 30px 20px 30px;">
Une <span class="imp">réaction d'oxydo-réduction</span> modélise<br>une transformation mettant en jeu<br><span class="fragment imp">un transfert d'électrons</span> entre<br>deux couples oxydant-réducteur.
</div>
</div>

---

{{< slide  background-image="/deuxcouples2.png" background-size="contain" background-transition="concave">}}

L'oxydant d'un premier couple oxyde<br>le réducteur d'un deuxième couple.

<br><br><br><br><br><br>


---

On peut décomposer cette réaction<br>en deux <span class="imp"><b>demi-équations électroniques</b> :

<br>

<ul>
<li class="fragment fade-up"> la réduction de l'oxydant 1.</li>
<li class="fragment fade-up"> l'oxydation du réducteur 2.</li>
</ul>

---

<ul>

<li>Lors d'une réduction, un oxydant est réduit :<br>il capte des électrons et devient son réducteur conjugué.</li>
$$\ce{Ox_1 + m e- = Red_1}$$

<br>

<li class="fragment fade-up">Lors d'une oxydation, un réducteur est oxydé :<br>il cède des électrons et devient son oxydant conjugué.
$$\ce{Red_2 = Ox_2 + n e-}$$
</li>

</ul>

---

Pour obtenir l'équation bilan il faut équilibrer<br>le nombre d'électrons dans chaque demi-équation<br>afin qu'ils puissent disparaître du bilan. 

<p class="fragment fade-up">
Il y a en effet forcément autant d'électrons perdus<br>par les uns que d'électrons gagnés par les autres.
</p>

---

$$\quad\qquad\ce{Ox_1} + \color{#FFF056}\ce{m e-}\color{#93a1a1}=\ce{Red_1}\qquad\qquad \color{#56C1FF}(\times n)\qquad$$

$$\qquad\qquad\ce{Red_2 = Ox_2} + \color{#56C1FF} \ce{n e-}\quad \color{#FFF056} (\times m)$$

<hr style = "width: 35ch;margin: 0 auto;border: none;border-top: 2px solid #93a1a1;">

$$\ce{n Ox_1 + m Red_2 -> n Red_1 + m Ox_2}$$


---

### Établir une équation d'oxydoréduction

---

<span style="font-size:2em;">🐣</span><br>
Réaction d'oxydoréduction<br>entre l'ion fer II et l'ion cuivre II

Les couples sont :

$\left(\ce{Fe^3+(aq) / Fe^2+(aq)}\right)$ <br>
et $\left(\ce{Cu^2+(aq) / Cu (s)}\right)$

---

<span style="font-size:2em;">🐥</span><br>
 Réaction d'oxydoréduction<br>entre l'aluminium et le diiode

Les couples sont :

$\left(\ce{Al^3+(aq) / Al (s)}\right)$ <br>
et $\left(\ce{I2(aq) / I-(aq)}\right)$

---

<span style="font-size:2em;">🐥</span><br>
 Réaction d'oxydoréduction<br>entre le dioxygène et le zinc

Les couples sont :

$\left(\ce{O2(aq) / H2O (\ell)}\right)$ <br>
et $\left(\ce{Zn^2+(aq) / Zn (s)}\right)$

---

<span style="font-size:2em;">🐓</span><br> 
Réaction d'oxydoréduction entre<br>le dioxyde de soufre et l'ion permanganate

Les couples sont :

$\left(\ce{SO4^2-(aq) / SO2 (aq)}\right)$ <br>
et $\left(\ce{MnO4-(aq) / Mn^2+(aq)}\right)$

Pensez à simplifier à la fin.

{{%note%}}
2 MnO4- + 5 SO2 + 2 H2O -> 2 Mn2+ + 5 SO42- +4 H+
{{%/note%}}

---

<span style="font-size:3em;">🦚</span><br> 
Réaction d'oxydoréduction entre<br>l'éthanol et les ions dichromates.

Les couples sont :

$\left(\ce{Cr2O7^2- (aq)/ Cr^3+ (aq)}\right)$ <br>
et $\left(\ce{CH3COOH (\ell)/ CH3CH2OH (\ell)}\right)$

{{%note%}}
Cr2O72- + 14 H+ + 6e- = 2 Cr3+ + 7 H2O (*2)
CH3CH2OH + H2O = CH3COOH + 4 H+ + 4 e- (*3)
2 Cr2O72-  + 3 CH3CH2OH + 16H+ = 4 Cr3+ + 3 CH3COOH + 11 H2O
{{%/note%}}



{{% /section %}}

----

{{% section %}}


## oxydants et réducteurs usuels

---

Parmi les oxydants, on peut citer :

<br>

<ul>
<li class="fragment fade-up">le dioxygène $\ce{O2 (g)}$ utilisé dans <span class="fragment">la respiration</span> et <span class="fragment">les piles à combustible.</span></li>
</ul>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/AFZZoMc8PjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/qdGrzroYcIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

le dioxygène dissous $\ce{O2(aq)}$ est, lui,<br>responsable de <span class="fragment">la corrosion</span>.

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="https://www.marineinsight.com/wp-content/uploads/2020/05/image001.jpg" style="box-shadow:none;background:none;border-radius:15px;">
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/corrosiontspe.png" style="box-shadow:none;background:none;">
</div>

---

<ul>
<li>l'ion hypochlorite $\ce{CℓO^-}$ utilisé dans <span class="fragment">l'eau de Javel.</span></li>
</ul>


<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-top:1em;">
<img src="https://www.maximo.fr/media/image/f6/d8/e581e6133824276b7100e28852a7.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

---

<ul>
<li>le dichlore $\ce{Cℓ_2}$ utilisé dans la production d'acide chlorhydrique (et historiquement comme arme chimique dès la première guerre mondiale).</li>
</ul>


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-top:1em;">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Chlorine_ampoule.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

---

{{< slide  background-image="/bouthydr.png" background-size="contain" background-transition="concave">}}

Parmi les réducteurs, on peut citer :

<ul>
<li class="fragment fade-up">le dihydrogène $\ce{H2 (g)}$ utilisé dans <span class="fragment">les piles à hydrogène</span> ou encore <span class="fragment">la production d'acide chlorhydrique ;</span></li>
</ul>

<br>
<br>
<br>
<br>
<br>
<br>


---

<ul>
<li>le glucose, réducteur dans la réaction <span class="fragment"> de la respiration aérobie ;</span></li>
</ul>

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/gluc.png" style="box-shadow:none;background:none;">
</div>

---

<ul>
<li>l'acide ascorbique (vitamine C), antioxydant dans l'alimentation.</li>
</ul>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/vitc.png" style="box-shadow:none;background:none;">
</div>

---

La présence d'un seul ou deux électrons de valence pour les <span class="imp">métaux du bloc $\mathrm{s}$</span> du tableau périodique (lithium, sodium, magnésium, etc.) leur confère<br>un caractère fortement réducteur<br>(ils veulent s'en débarrasser).

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/blocs.png" style="box-shadow:none;background:none;">
</div>

---

C'est la raison pour laquelle ils se retrouvent au cœur de nombreuses piles (pile <b style="color:#FFF056">alcaline</b>, pile <b style="color:#FFF056">lithium</b>-ion,<br>pile <b style="color:#FFF056">magnésium</b>-soufre, etc.).

---

<p>La famille des alcalins est même capable<br>de réduire l'eau, ce qui peut provoquer<br>leur enflamment à son contact !</p>

---

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yGDkiUAwxRs?si=pls_cHsG20qzRN7W"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>


{{% /section %}}

---

{{% section %}}

## Principe de fonctionnement

---

Lorsqu'un oxydant est en contact d'un réducteur,<br>une transformation spontanée peut avoir lieu.

<p class="fragment fade-up">Cette <span class="imp">réaction d'oxydo-réduction</span> correspond à<br>un <span class="imp">transfert d'électrons</span> <span class="fragment">du reducteur</span> vers <span class="fragment">l'oxydant</span>.


---

Séparer les réactifs et les relier par un conducteur permet d'externaliser le transfert d'électrons.

<p class="fragment fade-up">C'est le principe d'une <span class="imp">pile</span>.</p>

---

Une pile est en réalité constituée de deux <span class="imp">demi-piles</span>.

<p class="fragment fade-up">Chaque demi-pile abrite les deux membres<br>d'un couple oxydant-réducteur.</p>

<p class="fragment fade-up">
$\mathrm{(Ox_1/Red_1)}$ dans la demi-pile 1<br>
et $\mathrm{(Ox_2/Red_2)}$ dans la demi-pile 2.
</p>

<p class="fragment fade-up">Et dans chaque demi-pile a lieu<br>une des deux demi-équations électroniques.</p>

---

Chaque demi-pile a besoin de<br>deux ingrédients supplémentaires :

<br>

<ul>
<li class="fragment fade-up">une <span class="imp">électrode</span> faite d'un matériau<br>conducteur solide qui va servir<br>d'interface avec le circuit extérieur.</li>
<br>
<li class="fragment fade-up">un <span class="imp">électrolyte</span> (milieu conducteur<br>par <span class="imp">déplacement d'ions</span>).</li>
</ul>

---

<p style="margin-top:1em"><u>Rq</u> : l'électrode peut être directement l'oxydant ou le réducteur s'il est métallique ou un conducteur inerte comme du graphite ou du platine.</p>

---

Supposons que la réaction spontanée<br>ait lieu entre $\mathrm{Ox_1}$ et $\mathrm{Red_2}$.

<br>

<ul>
<li class="fragment fade-up">La demi-pile 2 est alors le siège de <b class="fragment" style="color:#56C1FF;">l'<u>o</u>xydation</b><br>et va donc <b class="fragment" style="color:#56C1FF;">fournir</b> les électrons. Son électrode, appelée <b class="fragment" style="color:#56C1FF;"><u>a</u>node</b> est ainsi le pole <b class="fragment" style="color:#56C1FF;">négatif</b> de la pile.</li>
<br>
<li class="fragment fade-up">La demi-pile 1 est, elle, le siège de <b class="fragment" style="color:#FF968D;">la <u>r</u>éduction</b><br>et va donc <b class="fragment" style="color:#FF968D;">capter</b> les électrons. Son électrode, appelée <b class="fragment" style="color:#FF968D;"><u>c</u>athode</b> est ainsi le pole <b class="fragment" style="color:#FF968D;">positif</b> de la pile.</li>
</ul>

---

⚠️

Les noms anodes et cathodes ne sont pas liés<br>à la polarité (on verra que pour l'électrolyseur,<br>les polarités sont inversées : l'anode est le pole $\oplus$<br>alors que la cathode est le pole $\ominus$).

<p class="fragment fade-up">Mais les noms sont liés à la réaction :</p>

<ul>
<li class="fragment fade-up"> la <b  style="color:#56C1FF;"><u>c</u>athode</b> est toujours le siège de la <b style="color:#56C1FF;"><u>r</u>éduction</b>.</li>
<li class="fragment fade-up"> L'<b style="color:#FF968D;"><u>a</u>node</u></b> est toujours le siège de l'<b  style="color:#FF968D;"><u>o</u>xydation</b>.</li>
</ul>


---


Plus qu'à connecter les deux électrodes au circuit électrique qu'on cherche à alimenter. 

<p class="fragment fade-up">Mais pour que du courant circule il faut assurer<br>un contact électrique entre les deux demi-piles<br>grâce à une <span class="imp">jonction électrolytique</span><br>(<span class="imp">pont salin</span>, membrane, vase poreux, etc.).</p>

---

Rôle du pont salin :

<span class="imp">Maintien de la neutralité électrique<br>en fermant le circuit</span>

<p class="fragment fade-up">Lorsque la réaction redox se produit, des électrons circulent dans le circuit externe, ce qui crée un déséquilibre de charges dans les solutions<br>des deux demi-piles.</p>

 <p class="fragment fade-up">Le pont salin permet alors le déplacement d’ions (anions vers l’anode et cations vers la cathode) <br>pour compenser ce déséquilibre.</p>
 
 ---

Que se passerait-il sans le pont salin ?

<p class="fragment fade-up">
Le déséquilibre de charge créerait un champ électrique qui finirait par stopper le flux d’électrons, phénomène que l’on appelle la polarisation des demi-piles.
</p>

{{%note%}}
C'est finalement ce qui se passe pour tout circuit ouvert connecté à un générateur.
{{%/note%}}

---

L'intérêt du pont salin est d'assurer cette jonction électrolytique <u>sans</u> mélanger les deux solutions ! 

<p class="fragment fade-up">Sinon, on irait à l'encontre même du principe de la pile qui était de séparer l'oxydation et la réduction pour externaliser le transfert d'électrons. </p>

---

Et pourtant...

Voici le schéma d'une pile très utilisée à la fin du 19<sup>e</sup> siècle (elle alimentait la plupart des télégraphes).
<br><br>
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/gravity_cell.gif" style="box-shadow:none;background:none;border-radius:15px;">
</div>

{{%note%}}
https://picassciences.com/wp-content/uploads/2013/02/les-piles-c3a9lectro.pdf
Pile CALLAUD (et sa variante la pile de HILL)
Comme la pile Daniell, elle contient deux électrolytes : une solution de sulfate de cuivre et une d'eau acidulée (H2SO4).
Le vase poreux est supprimé et les 2 solutions sont séparées par simple différence de densité.
Afin d'éviter un mélange des deux solutions, la pile doit rester immobile et doit débiter de façon quasi continue d'où un emploi bien adapté en téléphonie.
Ces piles ont été utilisées,par le Service des Téléphones et les compagnies de Chemin de Fer pendant de nombreuses décennies à partir des années 1860.
Elles ont été produites en France à des milliers d'exemplaire.
Il est encore possible de trouver des bocaux en verre, mais les structures internes souvent corrodées sont de nos jours quasi introuvables.
Des variantes de cette pile au sulfate de cuivre (blue Vitriol) ont été produites et très employées aux Etats-Unis.
Du fait de son principe de fonctionnement, cette pile est connue dans ce pays sous le nom de Gravity Battery ou Gravity Cell.
Un des problèmes de cette pile est l'appauvrissement progressif de
l'électrolyte en sulfate de cuivre.
Pour assurer un service régulier et de longue durée à cette pile, il estnécessaire de rajouter périodiquement des cristaux de sulfate à la solution.
{{%/note%}}

---

Comment ça marche ?

<br>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/gravity_cell_col.jpg" style="box-shadow:none;background:none;border-radius:15px;">
</div>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/TQ1BN93FoDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Donc il peut malgré tout y avoir un léger mélange des solutions (c'est aussi le cas avec un pont salin) mais du moment que les concentrations d'un même électrolyte restent très différents dans les deux compartiments,<br>la réaction est maintenue.


{{% /section %}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/GT4yJjJ9OKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{% section %}}

## Déplacement des charges

---

Sur le schéma d'une pile, il faut savoir indiquer :

<ul>
<li class="fragment fade-up">les <span class="imp">polarités des électrodes</span> ;</li>
<li class="fragment fade-up">le <span class="imp">déplacement des électrons</span><br>dans le circuit électrique ;</li>
<li class="fragment fade-up">le <span class="imp">sens conventionnel du courant</span><br>dans le circuit électrique ;</li>
<li class="fragment fade-up">les <span class="imp">déplacement des électrolytes</span><br>dans le pont salin.</li>
</ul>

----

Le schéma suivant indique ces déplacements<br>dans le cas de la pile Daniell.

---

{{< slide  background-image="/schemapilecomplet.png" background-size="contain" background-transition="concave">}}

---

<iframe width=880 height=560 src="https://www.edumedia.com/media/frame/fr/711/?auth=263895047a3b739211e26a307bc61deb/75935" frameborder=0></iframe>

{{% /section %}}

---

{{% section %}}

## Étude quantitative

---

### Tension à vide


<p class="fragment fade-up">La <span class="imp">tension à vide</span> d'une pile est la valeur absolue<br>de la tension mesurée entre ses électrodes<br>en <b>circuit ouvert</b>, c'est-à-dire quand aucun<br>courant électrique ne la traverse.</p>

<p class="fragment fade-up">
Cette tension à vide est mesurée en branchant<br>les électrodes aux bornes d'un <span class="imp">voltmètre</span>.
</p>

<p class="fragment fade-up">
<u>Rq</u> : la tension à vide est aussi appelée force électromotrice (f.e.m.) de la pile.
</p>

---

### Capacité électrique

<br>

<p class="fragment fade-up">La <span class="imp">capacité électrique $Q$</span> d'une pile est la charge électrique maximale que la pile est susceptible<br>de faire circuler dans un circuit extérieur.</p>

---

<div style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;">
<div style="padding: 20px 30px 20px 30px;font-size:1.2em;">
$
\begin{aligned}
Q &=n(\text{é})_\mathrm{max}\times N_A\times e\\
&= n(\text{é})_\mathrm{max}\times \mathcal{F}
\end{aligned}
$
</div>
</div>

---

<ul>
<li>$n(\text{é})_\mathrm{max}$ est la quantité maximale<br>d'électrons échangés<br><b style="color:#FFF056"><span class="fragment">(en <span class="fragment">$\pu{mol}$</span>)</span></b></li>
<li class="fragment fade-up">$N_A$ est le <b class="fragment" style="color:#FFF056">nombre d'Avogadro</b><br>($N_A=\pu{6,02E23 mol-1}$)</li>
<li class="fragment fade-up">$e$ est la <b class="fragment" style="color:#FFF056">charge élémentaire</b><br><span class="fragment">($e=$<span class="fragment">$\pu{1,60E-19 C}$</span>)</span></li>
<li class="fragment fade-up">$\mathcal{F}$ est la <b style="color:#FFF056">constante de Faraday</b><br><span class="fragment">$\mathcal{F}=$<span class="fragment">$\color{#FFF056}{e\times N_A}$</span><br>$\phantom{\mathcal{F}}=\pu{96,5E3 C*mol-1}$</span></li>
</ul>

---

Comment trouve-t-on $n(\text{é})_\mathrm{max}$ ?

<ul>
<li class="fragment fade-up">On détermine le nombre $\nu_\text{é}$ d'électrons<br>échangés dans l'équation globale de<br>la réaction de fonctionnement de la pile.</li>


<li class="fragment fade-up">Puis on détermine l'avancement maximal<br>$x_\mathrm{max}$ de la réaction.</li>
</ul>

<br>

<p class="fragment fade-up">On a alors :</p>

<div class="fragment fade-up" style="display: relative; margin: auto; height: 100%;border: solid 5px #fff; border-radius: 20px; width: fit-content;">
<div style="padding: 10px 30px 0px 30px;">
$n_\text{é} = \nu_\text{é}\times x_\mathrm{max}$</p>
</div>
</div>

---

<style>
ul.custom-pencil li {
  list-style: none;
  position: relative;
  padding-left: 1.5em;
  color:#8ABE5E;
}

ul.custom-pencil li::before {
  content: "✏︎";
  position: absolute;
  left: 0;
}
</style>

Exemple :

Une pile cuivre-aluminium repose sur<br>les deux couples oxydant/réducteur suivant :<br>
$\ce{(Aℓ^3+(aq)/Aℓ(s))}$ et $\ce{(Cu^2+(aq)/Cu(s))}$

La transformation spontanée a lieu entre<bR>les ions cuivre et l'aluminium.

<ul class="custom-pencil">
<li>Écrire l'équation de la réaction<br>de fonctionnement de la pile<br>à partir des demi-équations.</li>

<li>Combien d'électrons sont échangés<br>dans cette réaction ?</li>
</ul>

{{%note%}}
6 électrons sont échangés
{{%/note%}}

---

Composition de la pile :
- demi-pile 1 : électrode de 35 g d'aluminium<br>dans 200 mL d'une solution de sulfate d'aluminium <br> $\pu{0,50 mol*L-1}$ ;
- demi-pile 2 : électrode de 50 g de cuivre dans 200 mL d'une solution de sulfate de cuivre à $\pu{0,50 mol*L-1}$ ;



<ul class="custom-pencil" style="margin-top:1em;">
<li>Calculer l'avancement maximale<br>de la réaction supposée totale.</li>
<li>En déduire la capacité électrique<br>de la pile.</li>

{{%note%}}
Les 2 réactifs sont Al et Cu2+
ni(Al) = m(Al)/M(Al) = 35/27 = 1,3 mol 
ni(Cu2+) = 200E-3 * 0,50 = 1,0E-1 mol
hyp 1 : ni(Al)-2xmax = 0 => xmax = ni(Al)/2 = 0,65 mol
hyp 2 : ni(Cu2+)-3xmax = 0 => xmax = ni(Cu2+)/3 = 3,3E-2 mol Validée
Q = 6*xmax*F = 6*3,3E-2*96500 = 1,9E4 C 
Soit 5,3 Ah

On aurait pu directement demander la capacité de la pile sans question intermédiaire !
{{%/note%}}


---

### Durée de fonctionnement


L'intensité $I$ délivrée (supposée constante), la capacité électrique $Q$ et la <span class="imp">durée de vie $\Delta t_\mathrm{max}$</span> de la pile<br>sont reliées par la relation :


<div class="fragment fade-up" style="display: relative; margin: auto; height: 100%;border: solid 5px #FF968D; border-radius: 20px; width: fit-content;">
<div style="padding: 10px 30px 20px 30px;font-size:1.2em;">
$
\begin{aligned}
Q = I\times\Delta t_\mathrm{max}
\end{aligned}
$
</div>
</div>


<ul style="margin-top:0.5em;">
<li class="fragment fade-up">$Q$ en <b class="fragment" style="color:#FFF056">C</b></li>
<li class="fragment fade-up">$I$ en <b class="fragment" style="color:#FFF056">A</b></li>
<li class="fragment fade-up">$\Delta t_\mathrm{max}$ en <b class="fragment" style="color:#FFF056">s</b></li>
</ul>

---

<u>Rq 1</u> :

<p class="fragment fade-up">Cette relation permet aussi de trouver la capacité électrique $Q$ si on nous donne l'intensité $I$ et la durée maximale de fonctionnement $\Delta t_\mathrm{max}$ !</p>

<br>

<p class="fragment fade-up"><u>Rq 2</u> :</p>

<p class="fragment fade-up">Industriellement, la capacité est<br>le plus souvent donnée en <span class="fragment"><b  style="color:#FFF056">$\pu{Ah}$</b> ou <b style="color:#FFF056">$\pu{mAh}$</b>.</span><br>
<span class="fragment">Conversion : 1 mAh $=$ <b class="fragment" style="color:#FFF056">3,6 </b>C</span> 
</p>


{{% /section %}}


---

{{% section %}}

## Conversion d'énergie

---

Quelle conversion d'énergie<br>est-elle réalisée au sein d'une pile ?

<span class="imp fragment fade-up">Une pile convertit de l'énergie chimique<br>en énergie électrique.</span>

---

Quelle est la différence avec un <span class="imp">accumulateur</span> ?

<p class="fragment fade-up">Un accumulateur peut se recharger<br>(par électrolyse qu'on étudiera plus tard).</p>

<p class="fragment fade-up">Lors de la recharge, il convertit de<br>l'énergie électrique en énergie chimique.</p>

<p class="fragment fade-up">Et une <span class="imp">batterie</span> ?</p>

 <p class="fragment fade-up">Une batterie est une série d'accumulateurs.</p>
 
 ---
 
 Quoi d'autre permet de stocker de l'énergie<br>sous forme chimique ?
 
 <span class="imp fragment fade-up">La chlorophylle !</span>


{{% /section %}}


---

[Retour site](https://coursphychi.github.io/tspe/piles/)