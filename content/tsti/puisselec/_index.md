+++
title = "Puissance électrique"
outputs = ["Reveal"]
+++



# Puissance<br>en régime sinusoïdal




---

{{%section%}}

Une **bobine** et un **condensateur** sont deux dipôles ayant la particularité de **déphaser** l'intensité par rapport à la tension.

---

{{< slide  background-image="/bobines.png" background-size="50%" background-transition="concave">}}

---

{{< slide  background-image="/condensateurs.png" background-size="80%" background-transition="concave">}}

---

{{< slide  background-image="/symbolecl.png" background-size="80%" background-transition="concave">}}

{{%/section%}}

---


{{%section%}}
C'est quoi le déphasage ?

---

<iframe scrolling="no" title="déphasage" src="https://www.geogebra.org/material/iframe/id/peckc7yr/width/933/height/446/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="933px" height="436px" style="border:0px;"> </iframe>




---

- Lorsque le déphasage est positif on dit que $u_2$ est **en avance** de phase par rapport à $u_1$.
- Lorsque le déphasage est négatif on dit que $u_2$ est **en retard** de phase par rapport à $u_1$.


---

[déphasage par une bobine](https://www.geogebra.org/m/tm5cx5qh)

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid black 5px;width:max-content;padding: 10px 10px 10px 10px;">
La bobine retarde le courant<br>par rapport à la tension du générateur.
</div></div>

---

[déphasage par un condensateur](https://www.geogebra.org/m/dbkh3amr)

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid black 5px;width:max-content;padding: 10px 10px 10px 10px;">
Le condensateur retarde la tension<br>par rapport au courant du générateur.
</div></div>


{{%/section%}}

---

{{%section%}}

La **puissance électrique instantanée** est<br>le produit de la tension par l'intensité : 

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min-content;padding: 0px 10px 0px 10px;">
$$p(t)=u(t)\times i(t)$$
</div></div>

---

La **puissance électrique moyenne**<br>est la moyenne de la puissance instantanée<br>sur une période.

---

Mathématiquement, on l'obtient<br>grâce à l'intégrale suivante :

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min-content;padding: 0px 10px 0px 10px;">
$$P=\frac{1}{T}\int_{t}^{t+T}\!\!\!\!\!p(t)dt$$
</div></div>

Aire (algébrique) sous la courbe pendant<br>une période, divisée par la période.

---

Mais en pratique, le petit calcul suivant suffit :<br><br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:min-content;padding: 0px 10px 0px 10px;">
$$\textcolor{Fuchsia}{P}=\frac{\textcolor{green}{p_{max}}+\textcolor{orange}{p_{min}}}{2}$$
</div></div>

---
{{< slide  background-image="/pmoy.png" background-size="70%" background-transition="concave">}}



{{%/section%}}

---

{{%section%}}

Le <span style="font-weight:bold;color:red">facteur de puissance</span><br>caractérise un récepteur électrique. 

Il rend compte de son efficacité<br>
pour consommer de la puissance<br>lorsqu'il est traversé par un courant.

---

La pédale d'embrayage est une bonne analogie<br>pour comprendre le facteur de puissance :

- lorsque la pédale est relâchée, toute la puissance du moteur est délivrée aux roues. Le facteur de puissance vaut 1.

---

- Lorsque la pédale est enfoncée, la puissance du moteur n'est plus du tout transmise aux roues. Le facteur de puissance vaut 0.

---

- Pour les positions intermédiaires de la pédale, seule une fraction de la puissance est transmise, le facteur varie alors entre 0 et 1.

---

C'est le **déphasage entre la tension et l'intensité** dans un dipôle qui fait varier<br>le facteur de puissance.

---

<iframe scrolling="no" title="puissance et déphasage" src="https://www.geogebra.org/material/iframe/id/qrgcnkcm/width/964/height/446/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="964px" height="422px" style="border:0px;"> </iframe>

---

- Si le déphasage est nul ($u(t)$ et $i(t)$ sont en phase), le facteur de puissance vaut 1 ;<br>toute la puissance délivrée est consommée. C'est le cas si le dipôle récepteur est purement résistif. La puissance est alors entièrement perdue par effet Joule.

---

- Si le déphasage vaut $\pi/2$ ($u(t)$ et $i(t)$ sont en quadrature de phase), le facteur de puissance vaut 0.<br>C'est le cas si le dipôle récepteur est purement réactif (une bobine ou un condensateur parfait).<br>La puissance n'est alors pas consommée<br>mais renvoyée au générateur.

{{%/section%}}

---

{{%section%}}

## Puissance active et puissance apparente 

---

La **puissance active** est le nom qu'on donne<br>à la  moyenne $P$ de la puissance instantanée.

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:max-content;padding: 10px 30px 10px 30px;">
$$P = k\cdot U\cdot I$$
</div></div>

<br>

- $P$ : puissance active (en W)
- $U$ : tension efficace (en V), 
- $I$ : intensité efficace (en A),
- $k$ : facteur de puissance (sans unité, $\in[0;1]$)

---

La puissance active est la puissance servant réellement à produire de la chaleur ou du travail.

---

La **puissance apparente** $S$ est la puissance qui serait dépensée si le dipôle était purement résistif (lorsque $u(t)$ et $i(t)$ sont en phase) :

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:max-content;padding: 10px 30px 10px 30px;">
$$S = U\cdot I$$
</div></div>

<br>

- $S$ : en voltampères (**V.A.**)
- $U$ : tension efficace (en V), 
- $I$ : intensité efficace (en A)

---

Le **facteur de puissance** s'obtient donc comme<br>le rapport de la puissance active<br>sur la puissance apparente :

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:max-content;padding: 10px 30px 10px 30px;">
$$k = \frac{P}{S}$$
</div></div>

---

Vu autrement, la <span style="color:red">puissance active</span> est la <span style="color:red">*puissance réellement consommée*</span> et elle vaut la <span style="color:blue">*puissance maximale théorique*</span> (<span style="color:blue">puissance apparente</span>) multipliée par le facteur de puissance :

<br>

<div style="display: flex;justify-content: center;">
<div style = "border:solid red 5px;width:max-content;padding: 10px 30px 10px 30px;">
$$\color{red}{P}\color{black} = k\cdot \color{blue}{S}$$
</div></div>


{{%/section%}}

---

{{%section%}}

{{< slide  background-image="/consoedf.png" background-size="50%" background-transition="concave">}}

---

À quelle type de puissance correspond le contrat souscrit avec le fournisseur d'électricité ?

---

Quelle puissance est-elle utilisée pour facturer l'énergie consommée ?

---

Pourquoi un trop faible<br>facteur de puissance peut-il s'avérer problématique pour le transporteur d'électricité ?

---

Les pertes dans les lignes (pertes par **effet Joule** dues à l'intensité qui y circule) dépendent<br>de la **puissance apparente** appelée<br>par les consommateurs. 

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid black 5px;width:max-content;padding: 10px 30px 15px 30px;">
Si le facteur de puissance d'une installation<br>est faible, l'intensité appelée est grande<br>mais la puissance consommée est faible !
</div></div>

---

<u>Exemple :</u>  

Supposons qu'une installation consiste uniquement en un dipôle purement réactif (un condensateur par exemple) traversé par<br>un courant alternatif sinusoïdal<br>d'intensité 1 A sous 230 V. 


---

Ce dipôle introduit un déphasage<br>de $\pi/2$  entre la tension et le courant

Le facteur de puissance vaut alors ... 

---

Que vaut la **puissance active**,<br>facturée par le distributeur ? 

{{%fragment%}}<span style="font-weight:normal">0 W</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">Pourtant, la</span>puissance apparente<span style="font-weight:normal"> vaut ...</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">230 VA</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">Et il passe réellement 1A dans la ligne, ce qui implique des pertes par effet joule et oblige le distributeur à </span>dimensionner son matériel<span style="font-weight:normal"> (transformateurs, lignes, etc.) en conséquence.</span>{{%/fragment%}}


---

Pour le consommateur, la puissance active ainsi «&nbsp;consommée&nbsp;» n'est qu'un échange de charges électriques entre le générateur et le dipôle,<br>de puissance moyenne nulle sur la période.

Ici, le condensateur agit comme une sorte de ressort à électricité qui n'est donc pas utilisée<br>(pour chauffer ou faire un travail)...

---

C'est pourquoi, pour les gros consommateurs,<br>la facturation ne tient pas uniquement compte<br>de la puissance active consommée.

Une entreprise devra avoir un facteur de puissance **supérieur à 0,93** si elle ne veut pas<br>que sa facture augmente.

---

L'industrie utilise majoritairement des machines inductives (des moteurs contenant des bobines) impliquant un déphasage positif de l'intensité<br>par rapport à la tension.

Comment l'entreprise pourrait faire en sorte de redresser son facteur de puissance ?

{{%fragment%}}<span style="font-weight:normal">Elle peut utiliser des batteries de condensateurs pour compenser le déphasage des bobines !</span>{{%/fragment%}}

{{%/section%}}

---

{{%section%}}

## Exercice

---

{{< slide  background-image="/exopuiss.png" background-size="80%" background-transition="concave">}}

---


1. Que vaut la puissance active ?

2. Que vaut la puissance apparente ?

3. Que vaut le facteur de puissance ? 

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tsti2d/puisselec/)