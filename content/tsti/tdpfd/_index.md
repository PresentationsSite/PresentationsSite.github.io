+++
title = "PFD"
outputs = ["Reveal"]
+++






## Exercices PFD

---

{{%section%}}

{{< slide  background-image="/parachutiste.png" background-size="100%" background-transition="concave">}}

<br><br><br><br><br><br><br><br><br>

### Parachutiste

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
{{%fragment%}}<span style="font-weight:normal;color:green">On a au départ : $a\approx\pu{10 m*s-2}$<br>Donc d'après le PFD : <br> $F=ma\Rightarrow F \approx 80\times 10 \approx \pu{800 N}$<br><br>On retrouve qu'au départ,<br>l'unique force subie est le poids $mg$.</span>{{%/fragment%}}

---

6. Que vaut la résultante des forces au moment de l'ouverture du parachute ?
<br><br>
{{%fragment%}}<span style="font-weight:normal;color:green">On a maintenant $a\approx\pu{60 m*s-2}$ (soit environ $6g$)<br> L'utilisation du PFD nous donne alors :<br>$F \approx 80\times 60 \approx \pu{5,4 kN}$</span>{{%/fragment%}}

---

{{< runpython lang="vpython" mode="output" width="970" file="parachuteforces.py" >}}
{{< /runpython >}}

---

{{< slide  background-image="/paraforces.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

{{< slide  background-image="/poing.png" background-size="100%" background-transition="concave">}}

<br><br><br><br><br><br><br><br><br>

### Coup de poing

---


On tient fermement son téléphone dans la main pendant qu'on envoie un coup de poing<br>dans le vide.

---

L'accéléromètre du smartphone<br>a enregistré le graphe suivant :

<div style="text-align:center">                           
<iframe src="/plotacc.html" width="100%" height="500"></iframe>                                             
</div>

---

- À quel instant le smartphone va-t-il le plus vite (sachant qu'il est initialement immobile) ?


- Que vaut au maximum la force reçue par le smartphone vers l'avant (masse du smartphone : 200 g) ?


- Et vers l'arrière ?

{{%/section%}}

---

{{%section%}}

{{< slide  background-image="/skieur.png" background-size="60%" background-transition="concave">}}

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skieur

<br><br><br><br>

---

- Bilan des forces sur le skieur ?

- Valeur de ces forces ?

- Accélération du skieur ?

---

{{< slide  background-video="/skieur.mp4" background-size="contain" background-transition="concave">}}


{{%/section%}}


---


[Retour site](https://coursphychi.github.io/tsti2d/mecanique/)