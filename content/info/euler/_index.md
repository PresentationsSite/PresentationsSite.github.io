+++
title = "Euler"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



# Méthode d'Euler

---

{{%section%}}

On cherche à résoudre numériquement<br>une **équation différentielle**.



Plus précisément, on cherche la solution<br>au problème de Cauchy suivant :

<div style="text-align:left;width:max-content;border: solid black 5px; margin: auto; padding:30px">

$
\left\\{
\begin{aligned}
&y'(t) = f(t,y(t)) \\\\ 
&y(t_0) = y_0 
\end{aligned}
\right.
$

</div>


---

L'idée générale est de **discrétiser le temps**<br>par un pas $h$ tel que $t_{i+1}=t_i + h$<br>et d'utiliser $f(t,y)$ pour approximer<br>$y(t_{i+1})$ à partir de $y(t_i)$.  

{{%/section%}}

---

## Explicite / Implicite

---

Dans les exemples qui suivent, on utilise : 
<div style="text-align:left;width:max-content;border: solid black 5px; margin: auto; padding:30px">
$\displaystyle f(t,y) =  \frac{y_\infty -y}{\tau}$
</div>
<br>
avec :
<div style="padding:0 370px">
<ul>
<li> $y_\infty = 10$</li>
<li> $\tau = 2$</li>
</ul>
</div>

---
{{%section%}}

### Méthode d'Euler explicite

---

<div style="position:relative; width:80%; margin-left: auto;margin-right: auto;">
<video autoplay controls style="width:100% !important;height:auto !important;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/animeulerexpl.mp4" type="video/mp4">
</video>
</div>

---

Dans cette méthode, on utilise la pente au point de départ pour obtenir le point d'arrivée :

<img src="/forwardeuler.png" style="border:solid 0px;width:450px">

<div style="text-align:left;width:max-content;border: solid red 5px; margin: auto; padding:30px">
$y_{i+1}=y_i+h\times f(t_i,y_i)$
</div>

<br>




{{%/section%}}

---
{{%section%}}

### Méthode d'Euler implicite

---

<div style="display:flex;justify-content:center;">
<div style="overflow: hidden;width:800px;">
<video autoplay controls style="width:100% !important;height:auto !important;">
  <source src="/animeulerimpl.mp4" type="video/mp4">
</video>
</div>
</div>

---

Dans cette méthode, on utilise la pente au point d'arrivée pour obtenir le point d'arrivée :

<img src="/backwardeuler.png" style="border:solid 0px;width:450px">

<div style="text-align:left;width:max-content;border: solid red 5px; margin: auto; padding:30px">
$y_{i+1}=y_i+h\times f(t_{i+1},y_{i+1})$
</div>


---

La méthode implicite demande plus de calculs puisqu'on souhaite utiliser $y_{i+1}$<br>pour déterminer $y_{i+1}$.

<br>

$\Rightarrow$ on se retrouve avec une équation à résoudre...

---

Dans notre exemple :

$$
\begin{aligned}
y_{i+1} &= y_i + h\times f(t_{i+1},y_{i+1})\\\\
&= y_i + h\times \frac{y_\infty-y_{i+1}}{\tau}
\end{aligned}
$$
D'où 

$$
\displaystyle
y_{i+1}= \frac{y_i +  \frac{hy_\infty}{\tau}}{1+\frac{h}{\tau} }
$$

{{%/section%}}

---
{{< slide  background-image="/impletexpl.png" background-size="contain" background-transition="concave">}}

---

{{%section%}}

### Equa diff d'ordre > 1

---

Pour gérer une équa diff d'ordre $n$,<br>on la transforme en un système de $n$ équa diff d'ordre 1 en définissant une nouvelle variable<br>pour chaque $y^{(i)}$ pour $i\in\\{1\ldots n-1\\}$

---

Exemple :

l'équation d'un oscillateur amorti

$$
\ddot{x}(t) = -\frac{k}{m}(x(t)-l_0)-\frac{\alpha}{m} \dot{x}(t)
$$

devient :

$$
\begin{cases}
\dot{x}(t) = v(t) \\\\ 
\dot{v}(t) = -\frac{k}{m}(x(t)-l_0)-\frac{\alpha}{m} v(t)
\end{cases}
$$



{{%/section%}}

---

{{%section%}}

### Erreur de troncature locale

---

C'est la **petite erreur faite à chaque étape**.

De $(t_0,y_0)$ à $(t_1,y_1)$ avec $t_1 = t_0+h$,<br>la solution numérique donne :

$y_1 = y_0 + hf(t_0,y_0)$

Et la solution exacte (développement de Taylor) :

$y(t_1) = y(t_0) + hy'(t_0) + \frac{1}{2}h^2 y''(t_0)+O(h^3)$

D'où une erreur $|y_1-y(t_1)|$ en $\color{red}O(h^2)$.

{{%/section%}}

---



{{%section%}}

### Erreur de troncature globale

---

C'est l'**accumulation des erreurs locales** de $t_0$ à $t$.

Nombre d'étapes : $\lfloor \frac{t-t_0}{h}\rfloor$ $\Rightarrow$ en $O(1/h)$.<br>D'où une erreur de troncature globale en $O(h)$.

C'est pour cette erreur linéaire en $h$<br>que la méthode d'Euler (explicite ou implicite)<br>est dite d'**ordre 1**.

{{%/section%}}

---


{{%section%}}

### Erreur d'arrondi

---

Explique pourquoi diminuer $h$ finit par ne plus apporter de précision supplémentaire.

---

```python
x = 1.0
p = 0
while x != x+1 :
	x *= 2
	p += 1
print(x)
print(p)
```

{{%fragment%}}<span style="font-weight:normal">Le code ci-dessous trouve la première puissance de 2, $x$, pour laquelle $x+1$ est arrondi à $x$ (**absorption**), provoquant une erreur relative<br>(la plus grande possible) de $1/x$.</span>{{%/fragment%}}

---

**l'epsilon machine** ou **précision machine**<br>est la limite supérieure de l'**erreur relative** d'approximation causée par l'arrondi.

<br>

En python, comme la mantisse d'un flottant correspond à 53 bits, l'errreur relative se fait sur le dernier bit et vaut donc $2^{-53}$ ($\varepsilon=2^{-52}$  au pire entre deux arrondis consécutifs).

---

Par conséquent, l'erreur d'arrondi sur chaque valeur $y_n$ obtenue par la méthode d'Euler<br>est de l'ordre de $\varepsilon y_n$. 

Et en considérant ces erreurs d'arrondi<br>comme des variables aléatoires indépendantes,<br>l'erreur relative d'arrondi totale va être de l'ordre de $\varepsilon\sqrt{n}$ où $n$, le nombre de valeurs calculées,<br>est inversement proportionnel au pas.

---

Finalement, l'erreur d'arrondi globale<br>est proportionnelle à $\frac{\varepsilon}{\sqrt{h}}$<br>et donc diverge lorsque $h$ tend vers 0 !

**Réduire l'erreur de troncature se fait<br>au détriment de l'erreur d'arrondi**. 

Néanmoins, on peut se prémunir en bonne part des erreurs d'arrondi grâce à une sommation compensée (algorithme de Kahan).


{{%/section%}}

---

{{%section%}}

### Stabilité numérique

---

Partons de l'équation différentielle linéaire $y'=ky$ La méthode explicite donne alors :

$y\_{n+1}= y_n(1+hk)$

$\Rightarrow y_n = y_0(1+hk)^n$

la solution numérique ne sera stable que si<br>
$|1+z| ≤ 1$ avec $z \equiv hk \in\mathbb{C}$

---

En généralisant à un système différentiel linéaire de la forme&nbsp;: $y'(t)=My(t)$<br>
(où $M$ est une matrice carrée)

il faudra, pour obtenir une solution stable,<br>que chaque valeur propre de $M$<br>soit dans le disque précédent.

---

Pour l'exemple de l'oscillateur amorti :
$$\begin{pmatrix}\dot{z}\_1\\\\ \dot{z}_2\end{pmatrix}=\begin{pmatrix}0&1\\\\ -{\omega_0}^2 & -\frac{\omega_0}{Q}\end{pmatrix}\begin{pmatrix}z_1\\\\ z_2\end{pmatrix}$$

On obtient deux valeurs propres complexes<br>si $Q>1/2$ :
$$\lambda_{\genfrac{}{}{0pt}{}{1}{2}} = \omega_0\left(\frac{1}{2Q} \pm i\sqrt{\left(1-\frac{1}{2Q}\right)^2}\right)$$  

---

et donc pour que $hk=h\lambda_{\genfrac{}{}{0pt}{}{1}{2}}$ soit à l'intérieur<br>du domaîne de stabilité, il faut que 

$\left(-\frac{h\omega_0}{2Q}+1\right)^2 + \left(\frac{h\omega_0}{2Q}\right)^2(4Q^2-1) ≤ 1$.

---

<iframe scrolling="no" title="stableuler" src="https://www.geogebra.org/material/iframe/id/edcaephz/width/673/height/649/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="673px" height="649px" style="border:0px;"> </iframe>


---

{{< runpython lang="vpython" mode="toggle" default="code" width="600" height="600" file="eulerexplicite.py" >}}
{{< /runpython >}}

---

La **domaîne de stabilité**<br>de la méthode d'Euler implicite est<br>beaucoup plus grand que celui de l'explicite :

il correspond au complément du<br>disque de rayon 1 centré sur $(1;0)$.


Donc dans le cas de l'oscillateur amorti, toutes les solutions sont stables, quel que soit le pas !

---

<iframe scrolling="no" title="stableulerimpl" src="https://www.geogebra.org/material/iframe/id/brxgaygr/width/673/height/649/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="673px" height="649px" style="border:0px;"> </iframe>


---

{{< runpython lang="vpython" mode="toggle" default="code" width="600" height="600" file="eulerimplicite.py" >}}
{{< /runpython >}}


{{%/section%}}

---

{{%section%}}

### Conservation de l'énergie

---

Comme on peut le voir sur l'exemple précédent, aucune des deux méthodes ne sait gérer de manière satisfaisante l'oscillateur harmonique !

On dit que ces méthodes ne sont pas symplectiques (elles ne conservent pas l'énergie).

---

Une solution simple existe :

la métode d'Euler **semi-implicite** !

C'est aussi une méthode d'ordre 1, mais l'erreur n'est plus maintenant concentrée sur l'amplitude, mais sur la phase.

---

principe :

on mixe méthode explicite et implicite en utilisant le vieux ${z_2}\_i$ pour obtenir ${z\_1}\_{i+1}$ :

${z_1}\_{i+1} = {z_1}\_i + h{z_2}\_i$

et le nouveau ${z_1}\_{i+1}$ pour obtenir ${z_2}\_{i+1}$ :

${z_2}\_{i+1} = {z_2}\_i + hf({z_1}\_{i+1},{z_2}\_i,t_i)$

---

Son implémentation est souvent très simple (plus simple même que l'explicite) puisqu'on n' a même plus besoin des variables `z1_old` et `z2_old` :

<br>

```python
z1 += h*z2
z2 += h*alpha/m*z2 + h*k/m*(z1-l0)
```


---

{{< runpython lang="vpython" mode="toggle" default="code" width="600" height="600" file="eulersemiexplicite.py" >}}
{{< /runpython >}}

---

La méthode semi-implicite peut s'avérer instable (contrairement à l'implicite).

{{%/section%}}

---
{{%section%}}
### Méthodes d'ordre supérieur

---

Ces méthodes permettent d'obtenir une erreur<br>de troncature globale en $O(h^\text{ordre})$.

Les plus simples à implémenter sont les méthodes de type Runge-Kutta qui consiste à moyenner<br>les tangentes en différentes positions.

---

![](/methodeHeun.gif)

---

En pratique, les physiciens utilisent le plus fréquement la méthode **Runge-Kutta d'ordre 4** (RK4) qui offre un bon compromis entre précision et vitesse (le pas n'a pas besoin d'être très faible pour obtenir des résultats convenables).

{{%/section%}}

---

[Retour site](https://info-tsi-vieljeux.github.io/semestre_3/tp11/#méthode-deuler)