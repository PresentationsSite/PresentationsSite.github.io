+++
title = "Son"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
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

@keyframes pulse {
0% {
transform: scale(1);
}
50% {
transform: scale(1.2);
}
100% {
transform: scale(1);
}
}

.coeurquibat {
display: inline-block;
animation: pulse 0.75s infinite;
}

</style>






# Le Son


---

{{% section %}}

## Émission et perception<br>d'un son


---

{{< slide background-video="/htparleur.mp4" background-size="contain" background-transition="concave">}}

---

Le son est produit par une vibration<br>qui se propage de proche en proche<br>dans un milieu matériel.

<p class="fragment">Les particules du milieu lui-même<br>
    ne font qu'osciller sur place.</p>


---


{{< slide  background-image="/animsonrond.gif" background-size="contain" background-transition="concave">}}


---


On est en présence d'une <span class="imp">onde</span> (l'onde sonore) caractérisée par un  <span class="imp" style="color:#FFD932">transport d'énergie et d'information</span> <span class="imp" style="color:#1DB100">sans qu'il y ait transport de matière</span>.

---


{{%youtube aDrs6EieFCM%}}


---

{{< slide  background-image="https://media.tenor.com/dDspMfyVGBMAAAAC/star-wars-millenium-falcon.gif" background-size="contain" background-transition="concave">}}

<p style="color:#ED220D">Sans milieu matériel, pas de son !</p>

<p style="color:#ED220D	">$\Rightarrow$ Le vide spatial est silencieux.</p>

{{%note%}}
Pas de feu non plus d'ailleurs...
{{%/note%}}

---

Par contre, plus le milieu matériel est dense<br>et plus le signal sonore se propage vite.

---


{{%youtube BYe4x3x35is%}}


---

<style type="text/css">@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style><div class="tg-wrap"><table style="border-collapse:collapse;border-spacing:0;margin:0px auto" class="tg"><tbody><tr><td style="background-color:#1e1bb2;border-color:#c0c0c0;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:center;vertical-align:top;word-break:normal">milieu</td><td style="border-color:#c0c0c0;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:center;vertical-align:top;word-break:normal">air</td><td style="border-color:#c0c0c0;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:center;vertical-align:top;word-break:normal">eau</td><td style="border-color:#c0c0c0;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:left;vertical-align:top;word-break:normal">acier</td></tr><tr><td style="background-color:#11575a;border-color:#c0c0c0;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:center;vertical-align:top;word-break:normal">vitesse du son (m/s)</td><td style="border-color:#c0c0c0;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:center;vertical-align:top;word-break:normal">340</td><td style="border-color:#c0c0c0;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:center;vertical-align:top;word-break:normal">1500</td><td style="border-color:#c0c0c0;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:32px;overflow:hidden;padding:10px 20px;text-align:left;vertical-align:top;word-break:normal">5800</td></tr></tbody></table></div>


<p class="fragment">Comment convertir ces vitesses en km/h ?</p>

---

Commençons par convertir des km/h en m/s<br>en prenant l'exemple de $\pu{72 km/h}$ :

<span class="fragment">$\pu{72 km/h}$ </span><span class="fragment">$\displaystyle =\frac{\pu{72 km}}{\pu{1 h}}$</span>  <span class="fragment">$\displaystyle= \frac{\pu{72E3 m}}{\pu{3600 s}}$</span> <span class="fragment">$\displaystyle=\frac{\pu{72E3 m}}{\pu{3,6E3 s}}$</span> 

<span class="fragment">$$\Rightarrow \pu{72 km/h}=\frac{72}{\color{#E22146}{3,6}}\pu{ m/s}=\pu{20 m/s}$$</span>

---

Il faut donc <span class="imp">diviser par 3,6</span><br>pour passer <span class="imp">des km/h aux m/s</span>.

<p class="fragment">Que doit-on alors faire pour passer des m/s aux km/h ?</p>


<img class="fragment" src="/convkmhms.png" style="background: none;width:60%">


---

Rappel :

En appelant $d$ la distance parcourue (en m)<br>et $\Delta t$ la durée écoulée (en s),<br>la vitesse $v$ d'un signal est<br>donnée par la relation :

<br>

<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#FF644E;padding:0px 50px 0px 50px;width:fit-content;color:white;border-radius:10px;">
$$v = \frac{d}{\Delta t}$$
</div>
</div>

---

<u>Rq :</u>

On écrit $\Delta t$ car une durée est l'écart entre deux instants et le symbole $\Delta$ (Delta) symbolise, en physique, un écart : $\Delta t = t_{final} - t_{initial}$.

<p class="fragment">Symétriquement, on peut aussi considérer<br>la distance comme un écart entre deux positions<br>et au lieu de $d$, on aurait pu écrire $\Delta x$.</p>


---


Si on connaît la vitesse et la durée,<br>comment obtient-on la distance ?

<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#0076BA;padding:0px 50px 0px 50px;width:fit-content;color:white;border-radius:10px;">
$$d=v\times \Delta t$$
</div>
</div>

<p class="fragment">Et si on connaît la distance et la vitesse,<br>comment obtient-on la durée ?</p>

<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#1DB100;padding:0px 50px 0px 50px;width:fit-content;color:white;border-radius:10px;">
$$\Delta t = \frac{d}{v}$$
</div>
</div>


---

{{< slide  background-image="https://media1.giphy.com/media/lkimn0qpby38zMJMY/giphy.gif" background-size="contain" background-transition="concave">}}

---


<p id="jouerSon" style="cursor: pointer;">Pourquoi doit-on compter approximativement 3 s<br>par km entre l'éclair et le tonnerre ?</p>
<audio id="sontonnerre">
  <source src="/tonnerre.mp3" type="audio/mpeg">
</audio>


<script>
document.getElementById('jouerSon').addEventListener('click', function() {
  var audio = document.getElementById('sontonnerre');
  audio.play();
});
</script>


---


<iframe width="560" height="315" src="https://www.youtube.com/embed/_BgJEXQkjNQ?start=65" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Qu'est-ce que cette vidéo<br>nous permet de déterminer&nbsp;?


---


<iframe src="https://pod.phm.education.gouv.fr/video/20160-eruption-du-volcan-tavurvur-en-papouasie-nouvelle-guinee/?is_iframe=true" width="640" height="360" style="padding: 0; margin: 0; border:0" allowfullscreen ></iframe>


---

{{< slide  background-video="/murduson.mp4" background-size="contain" background-transition="fade-in concave-out">}}


---

Pour augmenter l'intensité du son émis,<br>beaucoup d’instruments et d’êtres vivants<br>sont dotés d’une <span class="imp">caisse de résonance</span> <br> qui amplifie et sélectionne les sons.

---

{{< slide  background-image="/caisseres.jpg" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/vocalresonance.gif" background-size="contain" background-transition="concave">}}


---

{{< slide  background-video="/timbreeducoupe.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}


{{% /section %}}


---

{{< slide background-video="/note.mp4" background-size="contain" background-transition="concave">}}



---

{{%section%}}

## Signal sonore périodique



---

Les sons musicaux sont des signaux <span class="imp">périodiques</span>.

<p class="fragment">Un <span class="imp">signal périodique</span> est un signal<br>qui se <span class="imp" style="color:#FFD932">répète à l'identique dans le temps</span>.</p>

<p class="fragment">La <span class="imp">période $T$</span> d'un signal périodique<br>est la <span class="imp" style="color:#FFD932">durée d'une répétition</span> (d'un motif).</p>

<p class="fragment">Unité : <span class="fragment">la seconde</span></p>


---

{{< slide  background-image="/sansperiode.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/periode.png" background-size="contain" background-transition="none">}}

---

{{< slide  background-image="/periode.gif" background-size="contain" background-transition="none">}}

---


{{< slide  background-image="/exoper1.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/exoper1corr.png" background-size="contain" background-transition="none">}}

---

{{< slide  background-image="/exoper2.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/exoper2corr.png" background-size="contain" background-transition="none">}}

---

Pour des sons musicaux, la période est souvent très petite, de l'ordre de la cs ou ms. On lui préfère alors<br>le <span class="imp" style="color:#FFD932">nombre de répétitions (de motifs) par seconde</span><br>qui est l'inverse de la période et qu'on appelle<br>la <span class="imp">fréquence $f$</span>.

<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#ED220D;padding:0px 50px 0px 50px;width:fit-content;color:white;border-radius:15px;">
$$f = \frac{1}{T}$$
</div>
</div>

<p class="fragment">Unité : le <span class="imp">hertz (Hz)</span></p>


---


<a href="https://www.geogebra.org/m/AFykFRzs"><img src="/appletfreq.png" width=500px></a>


---

{{< slide  background-image="/exof.png" background-size="contain">}}

---


Quelle est la période et la fréquence de ce signal ?

<canvas id="myCanvas" width="500" height="500"></canvas>

<script src="/js/2son.js"></script>


{{%note%}}
5 secondes théoriquement
{{%/note%}}


---

<span class="coeurquibat" style="font-size:160px">🫀</span>

Quand on "prend son pouls",<br>
mesure-t-on une période ou une fréquence ?


{{% /section %}}


---

{{% section %}}

## Perception d'un son

---



<p>Fréquence : <span id="demo"></span> Hz</p>

<input type="range" min="1" max="1000" value="" class="slider" id="myRange">

<br>
<p>Volume : <span id="volume"></span></p><br>
<input type="range" min="0" max="100" value="50" class="slider" id="volumeSlider" >
<br><br>
<button id="stopButton"><div style="display: flex; align-items: center; justify-content: center; height: 100%;">
<span id="symbole" style="font-size: 40px; color: white;">&nbsp;►</span></div></button>


<style>
.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 30px;
  background: #0076BA;
  outline: none;
  border-radius: 20px;
  opacity: 0.7;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  background: #00A2FF;
  border-radius: 50%;
  cursor: pointer;
}

	#stopButton {
  background-color: #61D836;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  width: 80px; 
  height: 80px; 
  transition: transform 0.1s;
}

	#stopButton:active {
  transform: scale(0.9);
}


	#volumeSlider{
	position: absolute;
   width: 150px;
   transform:  translate(-75px) rotate(270deg);
   background: #D41876;
}

	#volumeSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  background: #FF95CA;
  border-radius: 50%;
  cursor: pointer;
}

</style>

<script>
    // Créer un contexte audio
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Créer l'oscillateur
    let oscillator;
    
    // Créer le curseur
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    
    let minp = 1;
    let maxp = 1000;
    
    let minv = Math.log(20);
    let maxv = Math.log(20000);
    
    let scale = (maxv-minv) / (maxp-minp);
    
    // Mettre à jour le curseur chaque fois que l'utilisateur change la valeur
    slider.oninput = function() {
        let freq = Math.exp(minv + scale*(this.value-minp));
        output.innerHTML = freq.toFixed(0);
        if (!oscillator) {
            oscillator = audioCtx.createOscillator();
            oscillator.connect(audioCtx.destination);
            //oscillator.start();
        }
        oscillator.frequency.value = freq;
    }

  let testdebut = true;
  let bascule = true;
  // Arrêter le son
let bouton = document.getElementById("stopButton");
let symbole = document.getElementById("symbole");
bouton.onclick = function() {
if (testdebut) {
oscillator.start();
testdebut = !testdebut;
bouton.style.background = "red";
symbole.innerHTML = "&#10073;&#10073;"
}
else if (bascule) {
audioCtx.suspend();
bascule = !bascule;
bouton.style.background = "#61D836";
symbole.innerHTML = "&nbsp;►"
}
else {
audioCtx.resume();
bascule = !bascule;
bouton.style.background = "red";
symbole.innerHTML = "&#10073;&#10073;"
}
}
    
// Initial value
let initialValue = (Math.log(440) - minv) / scale + minp;
slider.value = initialValue.toFixed(0);
slider.dispatchEvent(new Event('input'));

let gainNode = audioCtx.createGain();
gainNode.connect(audioCtx.destination);

// Connecter l'oscillateur au noeud de gain
oscillator.connect(gainNode);

// Créer le curseur de volume
let volumeSlider = document.getElementById("volumeSlider");
let volumeOutput = document.getElementById("volume");
volumeOutput.innerHTML = volumeSlider.value; // Afficher la valeur par défaut

// Mettre à jour le volume chaque fois que l'utilisateur change la valeur du curseur
volumeSlider.oninput = function() {
let volume = this.value / 100 * 2 - 1;
gainNode.gain.value = volume;
volumeOutput.innerHTML = this.value;
}

</script>


{{%note%}}
- piège de bien mesurer entre deux couleurs identiques
- Permet de parler de comment améliorer la précision lorsque phénomène répétitif :mesurer un nombre n de répétitions puis diviser le résultat par n (l'unique mesure a théoriquement la même précision que l'on mesure 1 ou 10 périodes mais par contre, dans le cas de 10, on divise cette précision d'une mesure unique par 10. Donc la mesure est 10 fois meilleurs !)
{{%/note%}}

---

{{< slide  background-image="/freqaudibles.png" background-size="contain" background-transition="concave">}}

Le domaine des fréquences des sons audibles<br>pour l'oreille humaine est situé entre 20 et 20000 Hz.

<br><br><br><br><br><br><br>

{{%note%}}
Tous les animaux pareils ?
+ Vieillesse où déterioration
{{%/note%}}

---

Pour un son musical, la <span class="imp">hauteur</span> désigne la note jouée (plus ou moins grave ou aigüe).

<span style="color:#61D836"><b>La hauteur est liée à la fréquence</b><span> :<br>
plus la fréquence est grande,<br><span class="fragment">plus la hauteur est <span class="fragment">grande</span></span><br><span class="fragment">et plus la note est <span class="fragment">aigüe.</span></span>

---

Le signal de deux notes identiques jouées par des instruments différents possède la même période<br>mais la <span class="imp">forme des signaux</span> est différente.

<p class="fragment">On appelle <span class="imp">timbre</span> ce qui distingue<br>deux notes de même hauteur.</p>

---

<iframe width=550 height=440 src="https://www.edumedia-sciences.com/fr/media/frame/320/?auth=8c1ba56b82bdf81fef2eb4ff1c4b50c7/27824" frameborder=0></iframe>

{{%note%}}
https://www.edumedia-sciences.com/fr/media/frame/320/?auth=8c1ba56b82bdf81fef2eb4ff1c4b50c7/27824
{{%/note%}}

---

Enfin, la troisième caractéristique<br>d'un son est son <span class="imp" style="color:#61D836">intensité</span>.

<p class="fragment">L'<span class="imp" style="color:#61D836">intensité sonore</span> est <span class="imp" style="color:#FF644E">proportionnelle</span><br>à l'<span class="imp">amplitude</span> du signal<br>(une amplitude n fois plus grande<br>multiplie par n l'intensité sonore).</p>

---

{{< slide  background-image="/amplitude.png" background-size="contain" background-transition="concave" >}}


---

{{< slide  background-video="/trompette1.mp4" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-video="/trompette2.mp4" background-size="contain" background-transition="concave" >}}


---

{{< slide  background-video="/trompette4.mp4" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-image="/3amplitudes.png" background-size="contain" background-transition="concave" >}}

---

Si l'<span style="color:#61D836">intensité sonore</span> de la trompette seule vaut <span style="color:#61D836">$I_0$</span><br>à une certaine distance, alors l'intensité des 4 trompettes jouées ensemble vaudra <span class="fragment" style="color:#61D836">$4I_0$</span><br>à la même distance.

---

Mais cette relation de proportionnalité rend mal compte de notre <span class="imp" style="color:#FFD932">sensation auditive</span>.

<p class="fragment">On peut par exemple mesurer que l'<span class="imp">amplitude</span> du son émis par quelqu'un qui parle fort est environ 10&nbsp;000 fois plus grande que celle d'une personne qui chuchote à la même distance ! Pourtant, on n'a<br>pas la <span class="imp" style="color:#FFD932">sensation</span> d'un son 10&nbsp;000 fois plus fort...</p>

<p class="fragment" style="color:1DB100"><span class="imp">Amplitude</span> et <span class="imp" style="color:#FFD932">sensation auditive</span><br>ne sont pas <span class="imp" style="color:#FF644E">proportionnelles</span>&nbsp;!</p>

{{%note%}}
70dB pour parle fort
30dB pour chuchotement
{{%/note%}}


---

Pour tenir compte de cette échelle non proportionnelle, on utilise une autre grandeur :<br>le <span class="imp" style="color:#FF42A1">niveau sonore</span>, mesuré en décibels (dB).

<p class="fragment">Lorsque l'<span class="imp" style="color:#61D836">intensité sonore</span> augmente, le <span class="imp" style="color:#FF42A1">niveau sonore</span> augmente aussi, mais beaucoup moins vite.</p>

---


{{< slide  background-video="/trompettedbfort.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

{{%note%}}
Une, deux puis 4 trompettes ensemble.
{{%/note%}}

{{%note%}}
Testons-le avec l'application Fizziq :
il faut 3 tel, 1 choisit le capteur "niveau de bruit" (qui moyenne le niveau sonore) et les deux autres joue un bruit de rue passante (choisit dans outils). On règle chacun des émetteurs (distance et volume) pour qu'ils donnent la même valeur de niveau sonore puis on les fait jouer en même temps.
{{%/note%}}

---

{{< slide  background-image="/echelledb.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/loudness.png" background-size="30%" background-transition="concave">}}

---

{{%youtube DFGU0yaD9vo%}}

---

Durée limite d’exposition (sans protection)<br>avant dommages :
- de 120 à 140 dB, quelques secondes suffisent à
provoquer des dégâts irréversibles ;
- 95 dB : 15 min / jour ;
- 86 dB : 2h / jour ;
- 80 dB : 8h / jour.


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/2nde/son/)