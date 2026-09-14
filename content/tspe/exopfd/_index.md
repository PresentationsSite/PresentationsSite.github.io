+++
title = "Exercices pfd"
outputs = ["Reveal"]
[reveal_hugo]
theme = "sky"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>

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

## Trois exercices sur<br>la deuxième loi<br>de Newton

---

{{%section%}}

## Parachutiste

<div style="position:relative;margin-left:auto;margin-right:auto;width:350px;max-width:100%;margin-bottom:-1em;margin-top:1em;">
<img src="/newtonparachute.png" style="box-shadow:none;background:none;border:none;">
</div>

---

{{< runpython lang="vpython" mode="output" width="970" file="parachute.py" >}}
{{< /runpython >}}

---

{{< slide  background-image="/pospara.png" background-size="contain" background-transition="concave">}}

---

1. Tracer l'évolution de la vitesse

2. Tracer l'évolution de l'accélération

---


{{< runpython lang="vpython" mode="output" width="960" height="650" file="parachutegraphes.py" >}}
{{< /runpython >}}

---

{{< slide  background-image="/vitpara.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/accpara.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/superpyva.png" background-size="contain" background-transition="concave">}}

---

3. Décomposer le mouvement en 4 phases.

---

4. Représenter les forces qui s'appliquent<br>sur le parachutiste lors de chaque phase.

---


5. Que vaut la résultante des forces<br>au moment du saut ?<br>
<small style="color:gray">La masse du parachutiste avec son parachute est de 80 kg.</small>
<p class="fragment fade-up"><span style="font-weight:normal;color:green">On a au départ : $a_y\approx\pu{-10 m*s-2}$<br>Donc d'après la 2<sup>e</sup> loi de Newton,<br>en appelant $\vec{F}$ la résultante des forces :<br> 
$\vec{F}=m\,\vec{a}\Rightarrow F \approx 80\times 10 \approx \pu{800 N}$
</p>

<p class="fragment fade-up" span style="font-weight:normal;color:green"><u>Rq</u> : on retrouve qu'au départ,<br>l'unique force subie est le poids <br>(puisque $m\times g=\pu{800 N}$).</span></p>

---

6. Que vaut la force de frottement $f$ au moment de l'ouverture du parachute ?
<br><br>
<p class="fragment fade-up"><span style="font-weight:normal;color:green">d'après le graphique, $a_y \approx\pu{+60 m*s-2}$<br>(soit environ $6g$).</p>

<p class="fragment fade-up" style="font-weight:normal;color:green">
L'utilisation du PFD nous donne alors :<br>(en appelant $\vec{f}$ la force de frottement et $\vec{u}_y$<br>le vecteur unitaire vertical dirigé vers le haut) :</p>

---

<div span style="font-weight:normal;color:green">
$$
\begin{aligned}
\vec{P}+\vec{f} &=m\,\vec{a}\\
-m\,g\,\vec{u}_y+f\,\vec{u}_y &=m \, a_y\,\vec{u}_y\\
f\,\vec{u}_y &= (m \,a_y + m\, g)\vec{u}_y\\
\Rightarrow f &\approx  80\times 60  + 80\times 10\\
f &\approx  \pu{5,6E3 N}
\end{aligned}
$$
</div>

<p class="fragment fade-up" style="font-weight:normal;color:green">
Au moment de l'ouverture du parachute,<br>les frottements produisent une force<br>d'environ 5,6 kN vers le haut (7 fois<br>plus importante que le poids).
</p>

---

{{< runpython lang="vpython" mode="output" width="970" file="parachuteforces.py" >}}
{{< /runpython >}}

---

{{< slide  background-image="/paraforces.png" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

### Coup de poing

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:1em;">
<img src="/newtonpoing.png" style="box-shadow:none;background:none;border-radius:10px;border:none;">
</div>


---


On tient fermement son téléphone dans la main pendant qu'on envoie un coup de poing<br>dans le vide.

---

L'accéléromètre du smartphone<br>a enregistré le graphe suivant :

<div style="border-radius:15px;">                           
<iframe src="/plotacc.html" width="100%" height="500"></iframe>                                             
</div>

---

- À quel instant le smartphone va-t-il le plus vite (sachant qu'il est initialement immobile) ?


- Que vaut au maximum la force reçue par le smartphone vers l'avant (masse du smartphone : 200 g) ?


- Et vers l'arrière ?

{{%/section%}}

---

{{%section%}}

### Skieur

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:1em;">
<img src="/newtonski.png" style="box-shadow:none;background:none;border-radius:10px;border:none;">
</div>

---


Un skieur de $m=\pu{80 kg}$<br>dévale une pente de $\alpha = 30°$.

---

- Faire le bilan des forces s'exerçant<br>sur le skieur.
- Déterminer la valeur de ces forces.
- Déterminer l'accélération du skieur.

{{%note%}}
On est dans la situation d'un plan incliné.
Galilée les utilisait beaucoup.
Permet de contrôler g.
Au final on a un mouvement uniformément accéléré d'accélération g sin α
{{%/note%}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/1svxk26qvtY?si=V8h1TzA2vYIMp1OM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/newton/)