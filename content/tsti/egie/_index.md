+++
title = "Énergie/Puissance"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



Saurez-vous trouver les erreurs<br>dans la vidéo suivante ?

---

{{< slide  background-video="/vidmetro.mp4" background-size="contain" background-transition="concave" background-video-loop="false">}}

---

{{% section %}}
## Énergie / Puissance

---

L'énergie mesure la capacité à changer<br>la température ou à changer<br>le mouvement d'un corps.

---

L'énergie est une sorte de monnaie d'échange qui passe d'une forme à une autre sans jamais disparaître (l'énergie se conserve !).

[Une animation interactive pour l'illustrer.](https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_fr.html)

---

La puissance mesure le taux de variation<br>(la vitesse de variation) de l'énergie.

---

{{%youtube BKfufXnupMA%}}

---

{{%youtube S4O5voOCqAQ%}}


{{% /section %}}

---
{{% section %}}
**Puissance instantanée** :
<br>
<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min-content;padding: 0px 10px 0px 10px;">
$$p(t) = \frac{\mathrm{d}E}{\mathrm{d}t}$$
</div></div>

La puissance instantanée est la **dérivée**<br>par rapport au temps de l’énergie.

<p class="fragment">C'est donc le <b>taux de variation<br>instantanée</b> de l'énergie.</p>

---

C'est donc aussi, par définition d'une dérivée,<br>la limite lorsque $\Delta t$ tend vers 0<br>de la puissance moyenne $P=\frac{\Delta E}{\Delta t}$,<br>comme on peut s'en convaincre dans<br>l'applet geogebra de la diapo suivante.

---

<div style=" position: relative;overflow: hidden;max-width: 758px;margin: auto; padding-bottom: min(63.19%,479px);"> 
<iframe scrolling="no" title="Puissance" src="https://www.geogebra.org/material/iframe/id/ny4d6hy2/width/758/height/479/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%;"> </iframe>
</div>

---

[Lien vers l'applet ](https://www.geogebra.org/m/wduzyd4w) (au cas où il s'affiche<br>mal sur la diapo précédente).

---

La courbe suivante représente l'évolution de l'énergie dépensée par un cycliste pendant 20 min.

- Déterminer sa puissance instantanée<br>
à $t =\pu{5 min}$ et à  $t =\pu{18 min}$.

- Tracer $p(t)$.

---
{{< slide  background-image="/egieexo.png" background-size="contain" background-transition="concave">}}

---

Solution :


---

{{< slide  background-image="/egieexosol.png" background-size="contain" background-transition="concave">}}

---

Lors d'une situation expérimentale réelle,<br>on ne dispose quasiment jamais des courbes continues de $p(t)$ ou de $E(t)$, car les mesures sont généralement des séries discrètes de points.

---

Pour déterminer la puissance<br>à partir d'une série de mesures de $E$ :

---
{{< slide  background-video="/gifderpuiss.mp4" background-size="contain" background-transition="concave" background-video-loop="loop">}}

<!--
---

Code Python pour déterminer la puissance<br>à partir d'une série de mesures de $E$ :

---

```python
# mesures de E(t) à différents t
E  = [0.0, 0.226, 0.905, 2.150, 3.960, 6.676, 10.297, 15.502, 22.178, 30.552, 39.943, 49.675, 57.935, 64.611, 69.590, 73.324, 76.040, 77.850, 79.095, 79.774, 80.0]  
n = len(E)
dt = 0.1  # temps entre 2 mesures

P = []
for i in range(1,n-1) :
	### Code à déterminer
	P.append(p)
T = [i*dt for i in range(n)] # liste des temps

import matplotlib.pyplot as plt
fig, ax1 = plt.subplots(figsize=(15,10))
ax2 = ax1.twinx()
ax1.plot(T,E,'ro--')
ax2.plot(T[1:n-1],P,'bo--')
ax1.set_xlabel('temps (s)')
ax1.set_ylabel('Énergie (J)',c='red')
ax2.set_ylabel('Puissance (W)',c='blue')
```

---

[Lien vers Colab](https://colab.research.google.com/drive/1Spnaf9eOirMYTT5JxFcRUcGbLXnR0nuJ?usp=sharing) pour compléter les codes<br>(il faut vous connecter à un compte Google<br>pour pouvoir exécuter le code).
-->

{{% /section %}}

---
{{% section %}}

L’**énergie** mise en jeu par un système<br>
pendant un intervalle de temps vaut l'aire<br>
sous la courbe représentant la puissance<br>
en fonction du temps pendant cet intervalle.

---
{{< slide  background-video="/egieaire.mp4" background-size="contain" background-transition="concave" background-video-loop="loop">}}


---

Mathématiquement, l'énergie délivrée<br>entre $t_1$ et $t_2$ est donnée par l'intégrale suivante :
<br>
<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min-content;padding: 0px 10px 0px 10px;">
$$E = \int_{t_1}^{t_2}p(t)dt$$
</div></div>

---

Pas d'inquiétude, cette notation deviendra<br>plus claire lorsque vous aurez fait le cours <br>sur les intégrales en maths (pas la peine<br>de l'utiliser avant cela).

<p class="fragment">Pour ce qui nous concerne, ce n'est qu'une façon évoluée de désigner l'aire sous la courbe représentative de $p(t)$.</p>


---

<div style=" position: relative;overflow: hidden;max-width: 758px;margin: auto; padding-bottom: min(63.19%,479px);"> 
<iframe scrolling="no" title="Énergie - Puissance" src="https://www.geogebra.org/material/iframe/id/zzhegfep/width/758/height/479/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%;"> </iframe>
</div>

---

[Lien vers l'applet Geogebra](https://www.geogebra.org/m/wcqnssch) (au cas où ça s'affiche mal sur la diapo précédente).

---

Le graphe suivant présente<br>la puissance instantanée consommée<br>par un dispositif de chauffage.

- Quelle est l'énergie totale consommée<br>entre 0 et 120&nbsp;s&nbsp;?

- Tracer $E(t)$.

---

{{< slide  background-image="/puissexo.png" background-size="contain" background-transition="concave">}}

---

Solution :

---

{{< slide  background-image="/puissexosol.png" background-size="contain" background-transition="concave">}}

---

Pour déterminer l'énergie<br>à partir d'une série de mesures de $P$ :


---
{{< slide  background-video="/gifintegie.mp4" background-size="contain" background-transition="concave" background-video-loop="loop">}}

<!---

---

```python
# mesures de p(t) à différents t
P = [4.525, 9.62, 15.275, 22.63, 31.685, 44.13, 59.405, 75.25, 88.825, 95.615, 89.96, 74.68, 58.275, 43.565, 32.25, 22.63, 15.275, 9.62, 4.525]
n = len(P)
dt = 0.1  # temps entre 2 mesures

Etot = 0
E = []
for i in range(n-1) :
	### Code à déterminer
	E.append(Etot)
T = [i*dt for i in range(n)] # liste des temps

import matplotlib.pyplot as plt
fig, ax1 = plt.subplots(figsize=(15,10))
ax2 = ax1.twinx()
ax1.plot(T,P,'bo--',label='Puissance')
ax2.plot(T[1:n],E,'ro--',label='Energie')

ax1.set_xlabel('temps (s)')
ax1.set_ylabel('Puissance (W)',c='blue')
ax2.set_ylabel('Énergie (J)',c='red')

print(f'E = {Etot} J')
```

---

[Lien vers Colab](https://colab.research.google.com/drive/1Spnaf9eOirMYTT5JxFcRUcGbLXnR0nuJ?usp=sharing) pour compléter les codes<br>(il faut vous connecter à un compte Google<br>pour pouvoir exécuter le code).

--->


{{% /section %}}



---


[Retour site](https://coursphychi.github.io/tsti2d/egiepuiss/)