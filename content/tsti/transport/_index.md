+++
title = "Transport électricité"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
span {font-weight:bold;color:#00A2FF;}
</style>




{{% section %}}
## Transport de l'électricité



---


{{< slide  background-image="/reselec.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/transpdistr.png" background-size="contain" background-transition="concave">}}

---

Le réseau de transport et de distribution<br>de l'électricité est organisé à la manière d'un réseau routier avec ses grands axes, ses axes secondaires<br>et ses échangeurs&nbsp;:
- le **réseau de transport** joue le rôle du réseau des autoroutes et des routes nationales&nbsp;;
- le **réseau de distribution** joue celui du réseau des routes départementales&nbsp;;
- pour passer d'un réseau à un autre, les **postes de transformation** jouent le rôle d'échangeurs.

---


<iframe width="100%" height="500" frameborder="0" scrolling="no" allowfullscreen src="https://arcg.is/9TuTP"></iframe>

---



Pourquoi des hautes tensions<br>pour les grandes distances ?

Et comment modifie-t-on la tension ?

{{%/section%}}

---

{{%section%}}

### Pertes par effet Joule

---

La puissance perdue par effet joule (sous forme de chaleur) par un dipole de résistance $R$ vaut :

<div class="fragment" style="background-color:#0076BA;padding:20px 10px 30px 10px;;width:70%;margin:15%;color:white">
$P_J = RI^2$
</div>

<p class="fragment">
$P_J$ en W, $R$ en $\Omega$ et $I$ en A
</p>
{{%/section%}}

---

{{%section%}}


### Transformateurs

---

{{< slide  background-image="/transfopuissance.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/transfoligne.png" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/transfolycee.png" background-size="contain" background-transition="concave">}}

---

[Expérience lycée](https://vimeopro.com/user36345481/enseignement-scientifique-terminale-videos-dexperiences/video/420615225)

---

{{< slide  background-image="/transfoschema.png" background-size="contain" background-transition="concave">}}

---

Le transformateur permet d'élever (ou d'abaisser)<br>une <span>tension alternative</span>.

<div style="background-color:#0076BA;padding:20px 10px 30px 10px;;width:70%;margin:15%;color:white">
$U_2=U_1\times\frac{N_2}{N_1}$
</div>

---

À l'inverse, l'intensité est divisée par le même rapport.

En effet, pour un transformateur idéal (rendement de 100%), la puissance $P=UI$ doit être intégralement transmise du primaire au secondaire.

---

On appelle $m$ le rapport de transformation :

<div style="background-color:#0076BA;padding:20px 10px 30px 10px;;width:70%;margin:15%;color:white">
$m=\frac{N_2}{N_1}=\frac{U_2}{U_1}=\frac{I_1}{I_2}$
</div>

---

Autre utilitié d'un transformateur :

isoler électriquement deux parties d'un circuit<br>(les parties ne communiquent pas par un conducteur). On parle d'<span>isolation galvanique</span>.


---

On utilise alors souvent<br>un rapport de transformation de 1:1.<br>

C'est le cas par exemple dans les prises dites "rasoir" qu'on trouve parfois dans les salles de bain. Si le rasoir électrique tombe dans l'eau, pas de problème.

---

{{< slide  background-image="/giftransfoisolement.gif" background-size="50%" background-transition="concave">}}


---

{{%youtube D8EQPx-ptKk%}}

{{% /section %}}

---


{{% section %}}


<div style="background-color:#0076BA;padding:20px 10px 30px 10px;;width:70%;margin:15%;color:white">
Élever la tension permet de diminuer les pertes en lignes par effet Joule.
</div>


Pourquoi ?

---

<span>Pour la même puissance transportée, si $U \nearrow$ , $I \searrow$  et donc les pertes par effet Joule ($RI^2$) $ \searrow \searrow$ ! </span>


---

D'autre part, un facteur de puissance faible pour une installation électrique entraîne lui aussi<br>des pertes en lignes plus grande. 

Pourquoi ?

---

Rappel :

on fournit à l'utilisateur une puissance utile $P$ mais on transporte pour cela une puissance apparente $S=P/k$.

{{%fragment%}}Pour une tension donnée, il faut donc transporter une plus forte intensité pour fournir une même puissance si $k$ est faible.{{%/fragment%}}

{{% /section %}}


---

{{% section %}}

### Protection des individus contre les risques du courant électrique

---

- isolation
- mise à la terre
- alimentation en très basse tension
- disjoncteur différentiel

---

- Tension de sécurité en alternatif<br>dans un environnement sec : 50 V
- Tension de sécurité en alternatif<br>dans un environnement humide : 25 V


{{% /section %}}


---

{{% section %}}

### Protection des matériels contre les risques du courant électrique


---

- disjoncteur
- fusible


{{% /section %}}

---
{{%youtube paTSnR25r2Q%}}

---

{{%youtube 9GeXkussHfw%}}

---

[Retour site](https://coursphychi.github.io/tsti2d/transport/)