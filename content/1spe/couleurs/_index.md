+++
title = "Couleurs"
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





# Couleurs

---

{{%section%}}

## Vision des couleurs

---

{{< slide  background-image="/trichromie.png" background-size="contain" background-transition="concave">}}

---

La vision humaine des couleurs est <b class="imp">trichromique</b>.

{{%note%}}
La plupart des autres mammifères que les grands singes voient en dichromie (bleu et vert).
Les oiseaux et la plupart des reptiles sont tetrachromates. Souvent, le cône supplémentaire est sensible aux ultraviolets.
Certains humains seraient tetrachromates (surtout des femmes car sur chromosome X). Le cone supplémentaire serait entre le rouge et le vert et permettrait de mieux distinguer les couleurs.
Utilisation des ultraviolets par les fleurs et les insectes pollinisateurs (les abeilles seraient trichromates UV, bleu, vert).
{{%/note%}}

---

{{< slide  background-image="/fleursuv.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/dalto.png" background-size="contain" background-transition="concave">}}

{{%note%}}
1/12 hommes, 1/200 femmes (gènes codant l'opsine, famille des protéines photosensibles, sur le chromosome X)
La majorité des daltoniens n'ont pas le cône vert. Ils ne peuvent alors distinguer le rouge du vert. C'est la forme dont était atteinte John Dalton.
Un exemple de planche du test d’Ishihara.
Le daltonisme est souvent vu comme un handicap, mais dans certaines situations spéciales, c'est l'inverse. 
Deuteranomals are better at distinguishing shades of khaki, which may be advantageous when looking for predators, food, or camouflaged objects hidden among foliage. Dichromats tend to learn to use texture and shape clues and so may be able to penetrate camouflage that has been designed to deceive individuals with normal color vision.
Some tentative evidence finds that the color blind are better at penetrating certain color camouflages. Such findings may give an evolutionary reason for the high rate of red–green color blindness. There is also a study suggesting that people with some types of color blindness can distinguish colors that people with normal color vision are not able to distinguish. In World War II, color blind observers were used to penetrate camouflage.
In the presence of chromatic noise, the color blind are more capable of seeing a luminous signal, as long as the chromatic noise appears metameric to them. This is the effect behind most "reverse" Pseudoisochromatic plates (e.g. "hidden digit" Ishihara plates) that are discernible to the color blind but unreadable to people with typical color vision.[citation needed]
{{%/note%}}

---

{{< slide  background-image="/sidalto.jpg" background-size="contain" background-transition="concave">}}

---

On peut modéliser la perception de toute couleur comme une combinaison de trois seulement :<br>
<b style="color:#f00">le rouge</b>, <b style="color:#0f0">le vert</b>, et <b style="color:#00f">le bleu</b>

---

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.color-disk {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    margin-bottom: 20px;
}

.sliders {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
}

input[type=range] {
    -webkit-appearance: none;
    appearance: none;
    width: 200px;
    height: 15px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
    opacity: 1;
    transition: opacity .15s ease-in-out;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    border: 2px solid currentColor;
    cursor: pointer;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

input[type=range]::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    border: 2px solid currentColor;
    cursor: pointer;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

input[type=range]::-ms-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    border: 2px solid currentColor;
    cursor: pointer;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

input[type=range].red {
    background: linear-gradient(to right, #000, red);
}

input[type=range].green {
    background: linear-gradient(to right, #000, green);
}

input[type=range].blue {
    background: linear-gradient(to right, #000, blue);
}
</style>

<div class="container">
    <div class="color-disk" id="colorDisk"></div>
    <div class="sliders">
        <div class="slider-container">
            <input type="range" id="redSlider" min="0" max="255" value="0" class="red">
        </div>
        <div class="slider-container">
            <input type="range" id="greenSlider" min="0" max="255" value="0" class="green">
        </div>
        <div class="slider-container">
            <input type="range" id="blueSlider" min="0" max="255" value="0" class="blue">
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    const colorDisk = document.getElementById('colorDisk');

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        colorDisk.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
});
</script>


---

{{< slide  background-image="/synthadd.png" background-size="contain" background-transition="concave">}}


C'est la 

<div  style="background-color:#FF968D;padding:20px 50px 20px 50px;width:fit-content;margin-right:auto;margin-left:auto;color:white;border:#B51700 5px solid;;border-radius: 10px;">
<span style="color:#B51700;font-size:1.2em;">
synthèse additive des couleurs</span>
</div>

<br><br><br><br><br><br><br>


---

{{< slide  background-image="/3cou.png" background-size="contain" background-transition="concave">}}


---

## [Applet Geogebra](https://www.geogebra.org/m/cadVqshW)

---

{{< slide  background-image="/roue.png" background-size="contain" background-transition="concave">}}

---

La <b style="color:#fff;">lumière blanche</b> est une<br>addition de lumières colorées.

<ul>
<li class="fragment"><b style="color:#f00;">rouge</b> + <b style="color:#0f0">vert</b> + <b style="color:#00f">bleu</b> = <b class="fragment" style="color:#fff;">blanc</b></li>
<li class="fragment"><b style="color:#f00;">rouge</b> + <b style="color:#0f0">vert</b> = <b class="fragment" style="color:#ff0;">jaune</b></li>
<li class="fragment"> <b style="color:#0f0">vert</b> + <b style="color:#00f">bleu</b> = <b class="fragment" style="color:#0ff;">cyan</b></li>
<li class="fragment"><b style="color:#f00;">rouge</b> + <b style="color:#00f">bleu</b> = <b class="fragment" style="color:#f0f;">magenta</b></li>
</ul>


{{%note%}}
Vidéo de [art.pete.repeat](https://www.instagram.com/reel/C4_RpwJRizk/?igsh=anh6d3RhNHl2YnVs) trouvée sur Instagram.
{{%/note%}}

---

{{< slide  background-video="/couleursombres.mp4" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/darwininverse.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/darwinnb.png" background-size="contain" background-transition="fade-in concave-out">}}

---

## [Illusion d'optique](https://www.geogebra.org/m/NYJFwGn9)

---

Des <b style="color:#fff">couleurs complémentaires</b> sont des couleurs<br>qui donnent du <b style="color:#fff">blanc</b> lorsqu'on les additionne.

<ul>
<li class="fragment"><b style="color:#f00;">rouge</b> + <b class="fragment" style="color:#0ff">cyan</b> = <b style="color:#fff;">blanc</b></li>
<li class="fragment"> <b style="color:#0f0">vert</b> + <b class="fragment" style="color:#f0f">magenta</b> = <b style="color:#fff;">blanc</b></li>
<li class="fragment"><b style="color:#00f;">bleu</b> + <b class="fragment" style="color:#ff0">jaune</b> = <b style="color:#fff;">blanc</b></li>
</ul>

---

{{< slide  background-image="/coulcomp.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Couleur des objets

---

Que peut-il arriver à la lumière<br>lorsqu'elle arrive sur un objet ?

<br>

<p class="fragment">Elle peut être :</p>
<ul class="fragment">
<li class="imp">absorbée</li>
<li class="imp">diffusée (ou réfléchie)</li>
<li class="imp">transmise</li>
</ul>

---

{{< slide  background-image="/transmdiff.png" background-size="contain" background-transition="concave">}}

---

peut-on changer la couleur perçue<br>
d'un objet sans le repeindre ?

---

{{< slide  background-image="/testcouleurs.png" background-size="contain" background-transition="concave">}}

Passons cette image devant<br>différentes lumières colorées.

<br><br><br><br><br><br><br><br><br><br><br>

---


{{< slide background="#f00" transition="concave" >}}

---

{{< slide  background="#0f0" transition="concave"  >}}

---

{{< slide  background="#00f" transition="concave"  >}}

---

{{< slide background="#ff0" transition="concave"  >}}

---

{{< slide  background="#0ff" transition="concave"  >}}

---

{{< slide  background="#f0f" transition="concave"  >}}

---

{{< slide  background-image="/restestcoul.png" background-size="contain" background-transition="concave">}}

---

Un objet opaque diffuse les lumières colorées correspondant à "sa" couleur et absorbe les autres.

---

{{< slide  background-image="/synthsous.png" background-size="contain" background-transition="concave">}}


On parle de

<div  style="background-color:#56C1FF;padding:20px 50px 20px 50px;width:fit-content;margin-right:auto;margin-left:auto;color:white;border:#0076BA 5px solid;;border-radius: 10px;">
<span style="color:#0076BA;font-size:1.2em;">
synthèse soustractive des couleurs</span>
</div>

<br><br><br><br><br><br><br>

---

Cela explique pourquoi les couleurs primaires en peinture sont le <b style="color:#0ff">cyan</b>, le <b style="color:#ff0">jaune</b> et le <b style="color:#f0f">magenta</b>.

<p class="fragment">Le mélange de peintures de différentes couleurs va absorber et donc soustraire toujours plus de lumières colorées à la lumière incidente. Il faut donc partir<br>des couleurs qui en soustraient le moins.</p>

---

## [Applet Geogebra](https://www.geogebra.org/m/fXHhDwjC)

---

## [Un autre applet Geogebra](https://www.geogebra.org/m/KRtZYSn3)


---

### Application :

Principe de l'imprimerie couleur (CMJN ou CMYK).

---

{{< slide  background-image="/cmyk.png" background-size="contain" background-transition="concave">}}

---

Si l'objet est transparent, alors la lumière <b class="imp">transmise</b> joue le rôle de la lumière diffusée d'un objet opaque.

<p class="fragment">Superposer des filtres colorés va absorber et donc soustraire de plus en plus de lumières colorées.</p>

---

## [Applet Geogebra](https://www.geogebra.org/m/ea2pMeRf)

---

{{< slide background="#f00" transition="concave" >}}

---

{{< slide  background="#0f0" transition="concave"  >}}

---

{{< slide  background="#00f" transition="concave"  >}}

---

{{< slide background="#ff0" transition="concave"  >}}

---

{{< slide  background="#0ff" transition="concave"  >}}

---

{{< slide  background="#f0f" transition="concave"  >}}

---

De quelle couleur est le filtre numérique qu'applique certains OS le soir sur l'image diffusée par l'écran pour nous prémunir de la lumière bleue nocive au sommeil ?

{{%note%}}
l'exposition de nuit à une lumière comportant, comme celle du jour, une forte composante bleue, peut perturber l'horloge circadienne, avec des conséquences notables sur la santé. L'utilisation croissante d'écrans d'ordinateur ou de téléphone portable pourrait ainsi constituer un risque. Une étude a montré que cette perturbation concerne plus les jeunes, ce qui pourrait s'expliquer par le jaunissement du cristallin avec l'âge, réduisant le bleu qui parvient à la rétine.
{{%/note%}}

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/couleurs/)
