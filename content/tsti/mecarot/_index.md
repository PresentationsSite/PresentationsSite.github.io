+++
title = "Mécanique-Rotations"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
+++






# Forces et rotation

---

{{% section %}}

## Moment et couple

---

{{< slide  background-image="/rappelbateau.png" background-size="contain" background-transition="concave">}}

---

Dans quel sens cherche-t-elle<br>à faire pivoter le bateau ?

Pourquoi ?

---

Où appliquer la force pour faire pivoter<br>le plus facilement une porte ? 

{{%fragment%}}<span style="font-weight:normal;color:#1DB100">$\rightarrow$ le plus loin possible des gonds</span>{{%/fragment%}}
{{%fragment%}}<span style="font-weight:normal;">Et quelle direction doit-elle avoir ?</span>{{%/fragment%}}
{{%fragment%}}<span style="font-weight:normal;color:#1DB100">$\rightarrow$ normale à la porte</span>{{%/fragment%}}

---

{{< slide  background-image="/momentdist.png" background-size="contain" background-transition="concave">}}


---

Une <span style="font-weight:bold;color:#FF644E">force</span> mesure la capacité à **modifier<br>le mouvement de** <span style="font-weight:bold;color:#FF644E">translation</span> d'un objet.

<br>



{{%fragment%}}<span style="font-weight:normal;">Le</span> <span style="font-weight:bold;color:#1DB100">moment d'une force</span> <span style="font-weight:normal;">mesure la capacité à </span> modifier le mouvement de <span style="font-weight:bold;color:#1DB100">rotation</span> <span style="font-weight:normal;">de l'objet.</span>{{%/fragment%}}

---

{{< slide  background-image="/momentdef.png" background-size="contain" background-transition="concave">}}

Moment de la force $\vec{F}$<br>par rapport à l'axe de rotation $\Delta$ :

<div style="display: flex;justify-content: center;">
<div style = "border:solid #1DB100 5px;width:contain;padding: 0px 30px 0px 30px;">
$$\mathcal{M}_\Delta(\vec{F}) = F\cdot d$$
</div></div>


$d$ est le **<span style="color:#1DB100">bras de levier</span>**

<br>

<br>

<br>

<br>

---

{{< slide  background-image="/momentperp.png" background-size="contain" background-transition="concave">}}

Si la force est perpendiculaire à la planche,<br>le bras de levier $d$ et donc le moment<br>sont plus grands.


<br><br><br><br><br><br>
<br>
<br>
<br>

---


Unité du moment $\mathcal{M}$ ?

<br>

{{%fragment%}}<span style="font-weight:bold;color:#1DB100">le newton-mètre $\pu{N*m}$</span>{{%/fragment%}}

---

Souvent, un <span style="font-weight:bold;color:#1DB100">couple de forces</span> (deux forces opposées ayant le même bras de levier) est apliqué.

---

{{< slide  background-image="/demontepneu.png" background-size="contain" background-transition="concave">}}

---

Le moment $C$ du couple de forces vaut alors :

$C = \mathcal{M}(\vec{F_1})+\mathcal{M}(\vec{F_2})$

Et comme $||\vec{F_1}||=||\vec{F_2}||=F$<br>et que  $\mathcal{M}(\vec{F_1})=\mathcal{M}(\vec{F_2})=F\cdot \frac{d}{2}$

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid #1DB100 5px;width:contain;padding: 0px 30px 0px 30px;">
$$C = F\cdot d$$
</div></div>


---

**À l'équilibre** :<br><br>
<ul>
<li>On sait déjà qu'il faut que<br> <span style="color:#FF644E">la somme des forces soit nulle</span>.</li>
<br>
<li>Mais il faut aussi que<br> <span style="color:#1DB100">la somme des moments soit nulle</span> !</li>
</ul>


{{% /section %}}

---

{{% section %}}

## Exercices

---

{{< slide  background-image="/bobjack.png" background-size="contain" background-transition="concave">}}

#### Exercice 1



Qui porte le plus, Bob ou Jack ?<br>
Quelle force chacun exerce ?


<br><br><br><br><br><br><br><br>



---

{{< slide  background-image="/bobjackcorr.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/bobjackpenche.png" background-size="contain" background-transition="concave">}}

Et maintenant qui porte plus ?

<br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/bobjackpenchecorr.png" background-size="contain" background-transition="concave">}}

---

Mêmes bras de levier et mêmes moments<br>$\Rightarrow$ mêmes forces !

---

{{< slide  background-image="/chatplanche.png" background-size="contain" background-transition="concave">}}

#### Exercice 2



Si le chat avance encore d'un poil, la planche bascule.<br>
Quelle est la masse de la planche ?


<br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/pbechelle.png" background-size="contain" background-transition="concave">}}




#### Exercice 3


Que peut-il se passer ?

<br><br><br><br><br><br><br><br>

----

{{< slide  background-image="https://i.imgur.com/B5UNLuv.gif" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/pbechellesuite.png" background-size="contain" background-transition="concave">}}


---

- Quelles relations existent-ils entre les forces ?

Plaçons l'axe de rotation au point de contact de l'échelle avec le sol (on a le choix).

- Que vallent les moments par rapport à cet axe ?
- Quelle relation existe-t-il entre eux ?

En déduire le barreau le plus haut sur lequel peut monter Bob sans que l'échelle ne glisse.



---

{{< slide  background-image="/exobalance.png" background-size="contain" background-transition="concave">}}

#### Exercice 4 : déterminer son centre de masse

<br><br><br><br><br><br><br><br><br>

Trouver sa masse et à quelle distance de ses pieds<br>se situe son centre de masse.



---

#### Défi

Qui est capable de toucher ses pieds<br>en ayant ses jambes contre un mur ?

---

{{< slide  background-image="/defipiedmur.png" background-size="80%" background-transition="concave">}}

---

{{%youtube 2VpzHJ_R55I%}}

---

Et lorsqu'il y a **accélération** ?

---

#### Exercice 6 : que provoque<br>l'accélération d'une voiture ?

<ul style="margin: 0;
  list-style: none;
  float: left;">
<li><input type="checkbox" style=" float: left;width: 50px;height: 50px;">une force verticale plus importante sur les roues avant (la voiture pique du nez)</li>
<li><input type="checkbox"  style=" float: left;width: 50px;height: 50px;"> une force verticale plus importante sur les roues arrière (la voiture se cabre)</li>
<li><input type="checkbox"  style=" float: left;width: 50px;height: 50px;"> ni l'un ni l'autre</li>
</ul>


---

Même chose pour une traction<br>que pour une propulsion ?

<br><br>

Et lorsqu'on freine ?


---


{{< slide  background-image="/voitacc.png" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/camionbasc.png" background-size="contain" background-transition="concave">}}

#### Exercice 7 : Pour quelle accélération<br>du camion la boite bascule-t-elle ?

<br><br><br><br><br><br><br><br><br>


---

{{< slide  background-image="/exocamion.png" background-size="contain" background-transition="concave">}}

---

On trouve :

$$a_{max}=\frac{gD}{2H}$$

Si la caisse fait 1 m de large et 2 m de haut ?

---

Dans le référentiel du camion, tout se passe comme si la caisse ressentait un poids apparent<br>pointant vers l'arrière.

La composante horizontale de ce poids apparent<br>vaut $ma$ où $a$ est l'accélération du camion. 

Et lorsque sa direction dépasse la coin,<br>la caisse bascule.

---

{{< slide  background-image="/camionpoidsapp.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/camionpente.png" background-size="contain" background-transition="concave">}}


---

Application aux tonneaux

---

{{< slide  background-image="https://i.gifer.com/Gw9x.gif" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/accelvirage.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/voitonneau.png" background-size="contain" background-transition="concave">}}

---

Une moto se penche dans les virages pour que son poids apparent pointe vers la zone d'appui<br>(contact entre la route et les pneus).

---

{{< slide  background-image="/motopoidsapp.png" background-size="contain" background-transition="concave">}}

---

On retrouve la même chose avec les moments.

---


{{< slide  background-image="/motocouple.png" background-size="contain" background-transition="concave">}}


{{%/section%}}




---


[Retour site](https://coursphychi.github.io/tsti2d/mecanique/)