+++
title = "Biais cognitifs"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>

img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

span {font-weight:normal;color:#93a1a1;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:#93a1a1;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

</style>



{{%section%}}

# Biais cognitifs

---

<div style="position:relative;margin:auto;width:fit-content;background:#B51700;color:#FF968D;padding:20px 50px 20px 50px;border-radius:10px;font-size:1.2em;">
Déviation dans le traitement<br>cognitif d'une information
</div>

---

La découverte et l'étude des biais cognitifs a contribué à battre en brèche l'un des postulats premiers de la microéconomie voulant que l'acteur soit pleinement rationnel (théorie du choix rationnel).



{{%note%}}
microéconomie : branche de l'économie qui modélise le comportement des agents économiques (consommateurs, ménages, entreprises, etc.) et leurs interactions, notamment sur les marchés.
{{%/note%}}


---

Kahneman et Tverski sont les deux psychologues pionniers de ce champ de recherche.


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="https://miro.medium.com/v2/resize:fit:1240/0*DxXi0sR7I6BuDdCz.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>



<p class="fragment fade-up">Kahneman a reçu le prix Nobel d'économie en 2002,<br>6 ans après la mort de Tverski.</p>

---

{{< slide  background-iframe="https://upload.wikimedia.org/wikipedia/commons/1/16/The_Cognitive_Bias_Codex_%28French%29_-_John_Manoogian_III_%28jm3%29.svg" background-size="contain" background-transition="concave" background-interactive="true" background-color="white">}}


{{%/section%}}

---

{{%section%}}

## Effet de leurre

---

Dans une étude un peu bizarre de 2017, 102 visages ont été jugés par 2513 personnes entre 17 et 90 ans.

<p class="fragment fade-up">Parmi les 626 votants âgés de 17 à 20 ans, les deux plus hauts scores d'attractivité pour des visages masculins (3,9/7 chacun) ont été donnés à Richard et Louis.</p>

{{%note%}}
Lien vers les docs :
https://figshare.com/articles/dataset/Face_Research_Lab_London_Set/5047666?utm_source=chatgpt.com
Images are of 102 adult faces 1350x1350 pixels in full colour. Template files mark out 189 coordinates delineating face shape, for use with Psychomorph or WebMorph.org.

Self-reported age, gender and ethnicity are included in the file london_faces_info.csv. Attractiveness ratings (on a 1-7 scale from "much less attractiveness than average" to "much more attractive than average") for the neutral front faces from 2513 people (ages 17-90) are included in the file london_faces_ratings.csv.

All individuals gave signed consent for their images to be "used in lab-based and web-based studies in their original or altered forms and to illustrate research (e.g., in scientific journals, news media or presentations)." Images were taken in London, UK, in April 2012.
{{%/note%}}

---

{{< slide  background-image="/facelab_london.png" background-size="contain" background-transition="concave">}}

---

Une IA a alors permis d'ajouter Charles, une version "moins attractive" soit de Richard, soit de Louis.

<p class="fragment fade-up">Le faux Louis a été ajouté à la moitié des questionnaires et le faux Richard à l'autre moitié.</p>

---

{{< slide  background-image="/biaisappat1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/biaisappat2.png" background-size="contain" background-transition="concave">}}

---

Résultats :

---

{{< slide  background-image="/leurrecharles.png" background-size="contain" background-transition="concave">}}

---

L'idée est que Charles est sensé basculer<br>le choix vers son meilleur jumeau.<br>
C'est l'<span class="imp">effet de leurre</span>.

<p class="fragment fade-up">Sur notre expérience, deux problèmes<br>viennent entacher les résultats :</p>

<ul>
<li class="fragment fade-up">l'asymétrie entre l'attractivité de Richard<br>et Louis est grande sur notre échantillon,</li>
<li class="fragment fade-up">c'est "faux Richard" et non Richard qui a<br>siphonné les voix de Louis dans la variante B.</li>
</ul>


---

Exemples d'utilisation dans l'industrie :

<p class="fragment fade-up">dans une expérience conduite par Dan Ariely,<br>on montre à des étudiants deux vraies pubs pour<br>le journal The Economist présentant différentes options d'abonnement et on leur demande<br>de choisir leur option préférée.</p>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/ecoappat1.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>

---

Confrontés à cette première variante, 68% des étudiants sondés disent préférer l'option en ligne<br>et 32% l'option papier + web.

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/ecoappat2.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>

---



Maintenant, les étudiants ne sont plus que 16%<br>à choisir la version en ligne, 0% à choisir la version intermédiaire et 84% pour la version web+papier !


{{%note%}}
Given these choices, 16% of the students in the experiment conducted by Ariely chose the first option, 0% chose the middle option, and 84% chose the third option. Even though nobody picked the second option, when he removed that option the result was the inverse: 68% of the students picked the online-only option, and 32% chose the print and web option.
https://en.wikipedia.org/wiki/Decoy_effect
{{%/note%}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Decoy_pricing.svg/1280px-Decoy_pricing.svg.png?20240109134941" background-size="contain" background-transition="concave">}}

---

Recette :

il faut que la 3<sup>e</sup> option introduite (le leurre)<br>soit <span class="imp">asymétriquement dominée</span>, c'est-à-dire complètement dominée par l'une des options<br>mais qu'en partie par l'autre.

<p class="fragment fade-up">Le choix est alors tiré vers l'option<br>totalement dominante.</p>

---


<u>Rq</u> :

Dans notre expérience, faux Richard<br>n'est pas assez dominé par Richard.

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/fauxrichard.png" style="box-shadow:none;background:none;">
</div>

---

L'effet contredit l'axiome d'<span class="imp">indépendance des alternatives non pertinentes</span> utilisé dans les sciences sociales et dans le cadre de la théorie de la décision.

<p class="fragment fade-up">Selon l'axiome, si un individu préfère A à B, alors l'ajout d'une 3<sup>e</sup> possibilité X ne doit pas changer<br>la préférence entre A et B.</p>

---

Ce biais fait partie de la famille des effets de contraste :

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/biaiscontraste.png" style="box-shadow:none;background:none;">
</div>


---


{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Checker_shadow_illusion.svg/3840px-Checker_shadow_illusion.svg.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/illchecker.mp4" background-size="contain" background-transition="concave" background-video-loop="loop">}}

{{%/section%}}

---

{{%section%}}

## Attention sélective

---

<video controls width="800"  style="max-width:100%;border-radius:10px;">
  <source src="/gorille.mp4" type="video/mp4" />

{{%note%}}
Récompense à celui qui trouve le bon nombre de passes entre membres de l'équipe habillée en blanc.
{{%/note%}}


---

C'est l'expérience du <span class="imp">gorille invisible</span>.

<p class="fragment fade-up">Elle met en évidence la <span class="imp">cécité d'inattention</span> : échouer à remarquer un stimulus pourtant parfaitement visible.</p>

<p class="fragment fade-up">Environ 50% des personnes ayant bien compté<br>15 passes ne voient pas le gorille.</p> 


{{%/section%}}

---


{{%section%}}

## Effet d'ancrage

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/3840px-Flag_of_the_United_Nations.svg.png" background-size="contain" background-transition="concave">}}

---

Le nombre de pays africains<br>à l'ONU est-il supérieur à

Variante 1 : 10 % ?

Variante 2 : 65 % ?


<p class="fragment fade-up">Quel est selon vous le pourcentage<br>de pays africains à l'ONU ?</p>

---

{{< slide  background-image="/ancrageonu.png" background-size="contain" background-transition="concave">}}

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:100px;max-width:100%;">
<img src="/tabchoco.png" style="box-shadow:none;background:none;">
</div>

Achèterais-tu cette tablette de chocolat pour 

Variante 1 : 2,90 ?

Variante 2 : 8,90€ ?

<p class="fragment fade-up">Quel est le prix max que tu serais prêt(e)<br>à payer (en €) pour cette tablette ?</p>

---

{{< slide  background-image="/ancragechoco.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Blue_Whale_001_body_bw.jpg/1920px-Blue_Whale_001_body_bw.jpg" background-size="contain" background-transition="concave">}}

---

Variante 1 :<br>
Selon toi, une baleine bleue adulte<br>mesure-t-elle plus ou moins de 49 m ?

Variante 2 : estimation directe

---

{{< slide  background-image="/ancragebaleine.png" background-size="contain" background-transition="concave">}}

---

L'effet permet de manipuler une négociation : 

<p class="fragment fade-up">On commence par communiquer un premier prix<br>très élevé, présenté comme normal.</p>

<p class="fragment fade-up">Même si l'autre partie considère ce prix bien trop grand, il sert inconsciemment de cadre de référence (d'ancre) à la négociation. Et lorsqu'un prix plus normal est proposé, il fait office de bonne affaire.</p>

{{%/section%}}

---

{{%section%}}

## Effet Stroop

---

{{< slide  background-iframe="/stroop.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

L'article de recherche original de John Ridley Stroop publié en 1935 est l'un des plus cités<br>en psychologie expérimentale. 

{{%/section%}}

---

{{%section%}}

## Effet de cadrage

---

600 personnes ont été contaminées par un nouveau virus. Un laboratoire met au point deux stratégies<br>de traitement différentes.

---

### Cadrage positif :

- Traitement A : 200 personnes seront sauvées.
- Traitement B : il y a 1/3 de chances que les 600 personnes soient sauvées, et 2/3 de chances que personne ne soit sauvé.


---


### Cadrage négatif :


- Traitement A : 400 personnes mourront.
- Traitement B : il y a 1/3 de chances que personne ne meure, et 2/3 de chances que les 600 personnes meurent.

--- 

Dans l'étude originale de Kahneman et Tversy :

- 72% choisissent le traitement A<br>dans le cadrage positif.
- 78% choisissent le traitement B<br>dans le cadrage négatif.

---

Lorsqu'il s'agit de vies sauvées, on choisit massivement l'option la moins incertaine alors que quand il s'agit de vies perdues, on préfère nettement garder<br>une chance de tuer personne.

---

Depuis le début des années 1980, les chercheurs en psychologie cognitive ont montré que les humains sont davantage motivés par la peur d’une perte que par la perspective d’un gain, fussent-ils du même montant. 

<p class="fragment fade-up">Nos comportements tendent donc à <span class="imp">réduire les pertes potentielles plutôt que de maximiser les gains</span>.</p>

---

Les comportements humains cherchent aussi à réduire un maximum les risques, synonymes d’incertitudes. C’est ce que l’on appelle l’<span class="imp">aversion au risque</span>.

---

L’effet de cadrage articule<br>le rapport à la perte et au risque. 

<p class="fragment fade-up">La majorité des personnes préfère sécuriser un gain minime que de parier sur un gain incertain, tandis que lorsqu’on présente les choses sous la forme de pertes, les sujets vont majoritairement tolérer une prise de risque supérieure afin de réduire celles-ci.</p>

---

Dans notre échantillon, ça n'a pas marché du tout...

51% / 49% pour le cadrage positif

52% / 48% pour le cadrage négatif

<p class="fragment fade-up">Pourquoi ? <span class="fragment">Mystère...</span></p>


<p class="fragment fade-up">L'effet est pourtant robuste<br>et marche dans différents contextes.</p>

---

Exemples :

<p class="fragment fade-up">La propension d'un accusé à accepter un "plea bargain" (reconnaître sa culpabilité contre une peine réduite) dépend fortement de s'il était placé en<br>détention provisoire ou non.</p>

<p class="fragment fade-up">En détention provisoire, le deal est vu comme permettant de sortir plus tôt de prison (la prison est devenue la référence) alors que sinon, il revient<br>à accepter d'être privé de liberté.</p>

---

Les consommateurs sont prêts à payer 8,2 ¢ de plus par livre quand l’étiquette dit « 80 % maigre »<br>plutôt que « 20 % gras ».

<p class="fragment fade-up">Pour des produits identiques avec un surcoût carbone, la probabilité de choisir l’option plus chère passe,<br>chez les Républicains US, de 13 % si étiqueté comme "taxe carbone" à 53 % si étiqueté comme "compensation carbone".</p>

{{%note%}}
Plus impressionnants chez les républicains car ils partent de beaucoup plus bas pour la "taxe".
{{%/note%}}

---

Taux effectif de consentement au don d'organes 

<ul>
<li class="fragment fade-up">en Allemagne : ≈ 12 %</li>
<li class="fragment fade-up">en Autriche : ≈ 99–100 %</li>
</ul><br>

<p class="fragment fade-up">À votre avis, pourquoi ?</p>


{{%/section%}}

---

{{%section%}}

## Test de Wason

---

Chaque carte a une lettre d’un côté<br>et un chiffre de l’autre.

<p class="fragment fade-up">Règle :</p>

<div  class="fragment fade-up"style="position:relative;margin:auto;width:fit-content;background:#004D7F;color:#56C1FF;padding:20px 50px 20px 50px;border-radius:10px;border solid 3px #56C1FF">
Si une carte a une voyelle d’un côté,<br>alors elle a un nombre pair de l’autre.
</div>

---

{{< slide  background-image="/wason.png" background-size="contain" background-transition="concave">}}

Quelle(s) carte(s) faut-il retourner, et seulement celle(s)-là, pour tester si la règle est vraie ?

<br><br><br><br><br><br><br><br><br><br>

---

Ce test met en évidence deux biais :

<ul>
<li class="fragment fade-up"><span class="imp">biais de vérification</span> : on cherche d'avantage<br>à confirmer qu'à réfuter</li>
<li class="fragment fade-up"><span class="imp">biais d'appariement</span> : on a tendance à se focaliser<br>sur les items cités dans l'énoncé</li>
</ul>

---

Une reformulation plus concrète du problème fait largement chuter le nombre d'erreurs.

---

Quatre personnes sont en train de boire dans un bar<br>et vous disposez des informations suivantes :

<ul>
 <li class="fragment fade-up">la première boit une boisson alcoolisée,</li>
 <li class="fragment fade-up">la seconde a moins de 18 ans,</li>
 <li class="fragment fade-up">la troisième a plus de 18 ans,</li>
  <li class="fragment fade-up">et la dernière boit une boisson sans alcool.</li>
 </ul> 
 
 <p class="fragment fade-up">Quelle(s) personne(s) devez-vous interroger sur leur âge ou sur le contenu de leur verre pour vous assurer que tous respectent bien la règle suivante : "Si une personne boit de l'alcool, elle doit avoir plus de 18 ans".</p>


{{%/section%}}

---

{{%section%}}

## Effet Mcgurk

---

{{< slide  background-video="/mcgurk.mp4" background-size="contain" background-transition="concave" background-video-muted="true">}}

---

<style>
  /* Taille du bouton (change 160px si besoin) */
  :root { --audio-btn-size: 160px; }

  .reveal .audio-cta {
    min-height: 60vh;            /* force un vrai centrage visuel */
    display: grid;
    place-items: center;
  }

  .reveal .audio-btn {
    width: var(--audio-btn-size);
    height: var(--audio-btn-size);
    border: 0;
    border-radius: 9999px;
    background: rgba(0,0,0,.65);
    color: #fff;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 12px 30px rgba(0,0,0,.25);
    transition: transform .12s ease, box-shadow .2s ease, background .2s ease;
  }
  .reveal .audio-btn:hover  { transform: translateY(-1px) scale(1.02); }
  .reveal .audio-btn:active { transform: translateY( 1px) scale(0.98); }
  .reveal .audio-btn:focus-visible { outline: 3px solid #88c; outline-offset: 4px; }

  .reveal .audio-btn .icon {
    font-size: calc(var(--audio-btn-size) * 0.5);
    line-height: 1;
  }
  .reveal .audio-btn.playing { background: rgba(0,128,0,.65); }

  /* accessibilité */
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); border: 0;
  }
</style>

<div class="audio-cta">
  <button class="audio-btn"
          type="button"
          aria-label="Lire/mettre en pause l’audio"
          aria-pressed="false">
    <span class="icon" aria-hidden="true">♪</span>
    <span class="sr-only">Lire/mettre en pause</span>
  </button>

  <!-- Source -->
  <audio class="audio-el" preload="none" src="/mcgurk.mp3"></audio>
</div>

<script>
(() => {
  if (window.__audioBtnBoot) return; window.__audioBtnBoot = true;

  function setPlaying(btn, on){ btn.classList.toggle('playing', on); btn.setAttribute('aria-pressed', on?'true':'false'); }
  function getPair(btn){
    const c = btn.closest('.audio-cta'); if(!c) return {};
    return { btn, audio: c.querySelector('.audio-el') };
  }
  function toggleFromBtn(btn){
    const { audio } = getPair(btn); if(!audio) return;
    if (audio.paused){
      audio.play().then(() => {
        setPlaying(btn, true);
        if (!audio.__wired){
          audio.addEventListener('pause', () => setPlaying(btn, false));
          audio.addEventListener('ended', () => setPlaying(btn, false));
          audio.__wired = true;
        }
      }).catch(e => console.warn('Lecture bloquée:', e));
    } else {
      audio.pause();
    }
  }

  // Délégation: un seul écouteur pour tous les boutons, existants et futurs
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.audio-btn');
    if (btn) { e.preventDefault(); toggleFromBtn(btn); }
  });
  document.addEventListener('keydown', (e) => {
    const btn = e.target.closest && e.target.closest('.audio-btn');
    if (!btn) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleFromBtn(btn); }
  });

  // Stoppe les audios des autres slides quand on change de slide
  if (window.Reveal && Reveal.on){
    Reveal.on('slidechanged', (evt) => {
      document.querySelectorAll('.audio-el').forEach(a => {
        if (!evt.currentSlide.contains(a)) { a.pause(); a.currentTime = 0; }
      });
    });
  }
})();
</script>

---

{{< slide  background-video="/mcgurk.mp4" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

## Gamme de Shepard

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Barber-pole-01.gif" style="box-shadow:none;background:none;border-radius:10px;">
</div>

<div class="audio-cta">
  <button class="audio-btn"
          type="button"
          aria-label="Lire/mettre en pause l’audio"
          aria-pressed="false">
    <span class="icon" aria-hidden="true">♪</span>
    <span class="sr-only">Lire/mettre en pause</span>
  </button>

  <audio class="audio-el" preload="none" src="/shepard.mp3"></audio>
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/neckercube.png" style="box-shadow:none;background:none;">
</div>

<div class="audio-cta">
  <button class="audio-btn"
          type="button"
          aria-label="Lire/mettre en pause l’audio"
          aria-pressed="false">
    <span class="icon" aria-hidden="true">♪</span>
    <span class="sr-only">Lire/mettre en pause</span>
  </button>

  <audio class="audio-el" preload="none" src="/triton.mp3"></audio>
</div>

{{%note%}}
Paradoxe du triton
https://en.wikipedia.org/wiki/Tritone_paradox
{{%/note%}}

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tes/vivant/ia/#algorithme-des-k-moyennes----exemple-dapprentissage-non-supervisé)