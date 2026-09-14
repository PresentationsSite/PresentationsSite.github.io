+++
title = "Gauss"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



# Pivot de Gauss

---

On se restreint ici à la résolution de systèmes d'équations où le nombre d'inconnues<br>est ≤ au nombre d'équations.

---

On transforme la matrice augmentée du système en matrice échelonnée grâce à la méthode du pivot de Gauss, puis on substitue successivement de bas en haut pour obtenir la solution.


---


{{% section %}}

## Algo de base


---

Déroulons sur un exemple l'implémentation du TP de l'algorithme de Gauss en utilisant la recherche naïve du pivot (pivot toujours à la ligne suivante).

---

<div style="position:relative; width:80%; margin-left: auto;margin-right: auto;">
<video autoplay controls style="width:100% !important;height:auto !important;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/gaussnaif.mp4" type="video/mp4">
</video>
</div>


{{% /section %}}

---

{{% section %}}

## Avec pivot partiel

---

Déroulons maintenant l'algo<br>en utilisant la méthode du **pivot partiel** <br>(la ligne du pivot est choisie pour que le pivot ait<br>la plus grande valeur absolue possible).

---

<div style="position:relative; width:80%; margin-left: auto;margin-right: auto;">
<video autoplay controls style="width:100% !important;height:auto !important;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/gausspartiel.mp4" type="video/mp4">
</video>
</div>

{{% /section %}}

---

{{% section %}}

```python{|2,6-7}
def Gauss(M,recherchePivot) :
    tol = 1e-9
    while h < m and k < n :                       
        ipivot = recherchePivot(M,h,k)            
        pivot = M[ipivot][k]
        if abs(pivot) < tol :                     
            k += 1
        else :       
            h +=1
```

---

```python{5}
def Gauss(M,recherchePivot) :
    while h < m and k < n :                       
        ipivot = recherchePivot(M,h,k)            
        pivot = M[ipivot][k]
        if abs(pivot) == 0 :                     
            k += 1
        else :       
            h +=1
```
<br>

Pourquoi ne pas avoir écrit ça à la place ? 

---

```python
>>> 0.1**2-0.01 == 0
False
```

---

Cette partie du code prouve que cette implémentation de l'algorithme est en fait seulement adaptée au pivot partiel.

<br>

Trouvez une situation simple (matrice $2\times 3$)<br>où l'algo n'aboutit pas à une matrice échelonnée<br>en ligne prouvant qu'il n'est pas correct<br>(*correction partielle*).

{{% /section %}}

---

{{% section %}}

## Intérêt du pivot partiel

---

Cherchons à résoudre le système suivant<br>en supposant que l'on soit limité<br>à 3 chiffres significatifs

$$
\begin{cases}
10^{-4}x &+ &y&=&1 \\\\ 
\hphantom{10^{-4}}x &+ &y &=&2 \\\\ 
\end{cases}
$$

{{% /section %}}

---

{{% section %}}

### Sans pivot partiel

---

$$
\begin{cases}
10^{-4}x &+ &y&=&1 \\\\ 
\hphantom{10^{-4}}x &+ &y &=&2 \\\\ 
\end{cases}
$$

---

$$
\begin{pmatrix}
10^{-4} & 1 & 1 \\\\
1 & 1 & 2
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
\color{red}{10^{-4}} & 1 & 1 \\\\
1 & 1 & 2
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
\color{red}{1} & 10^4 & 10^4 \\\\
1 & 1 & 2
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
\color{red}{1} & 10^4 & 10^4 \\\\
1-1 & 1-10^4 & 2-10^4
\end{pmatrix}
$$

---


$$
\begin{pmatrix}
\color{red}{1} & 10^4 & 10^4 \\\\
0 & -10^4 & -10^4
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
1 & 10^4 & 10^4 \\\\
0 & \color{red}{-10^4} & -10^4
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
1 & 10^4 & 10^4 \\\\
0 & \color{red}{1} & 1
\end{pmatrix}
$$

---

$$
\begin{cases}
1 &x &+ &10^4&y&=&10^4 \\\\ 
&&&1&y &=&1 \\\\ 
\end{cases}
$$

---

$$
\begin{cases}
&x &= &0 \\\\ 
&y &= &1 \\\\ 
\end{cases}
$$



{{% /section %}}

---

{{% section %}}

### Avec pivot partiel

---

$$
\begin{cases}
10^{-4}x &+ &y&=&1 \\\\ 
\hphantom{10^{-4}}x &+ &y &=&2 \\\\ 
\end{cases}
$$

---

$$
\begin{pmatrix}
10^{-4} & 1 & 1 \\\\
1 & 1 & 2
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
10^{-4} & 1 & 1 \\\\
\color{red}{1} & 1 & 2
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
\color{red}{1} & 1 & 2 \\\\
10^{-4} & 1 & 1
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
\color{red}{1} & 1 & 2 \\\\
10^{-4}-1\times 10^{-4} & 1-1\times 10^{-4} & 1-2\times 10^{-4}
\end{pmatrix}
$$

---

$$
\begin{pmatrix}
\color{red}{1} & 1 & 2 \\\\
0 & 1 & 1
\end{pmatrix}
$$


---

$$
\begin{cases}
1 &x &+ &1&y&=&2 \\\\ 
&&&1&y &=&1 \\\\ 
\end{cases}
$$

---

$$
\begin{cases}
&x &= &1 \\\\ 
&y &= &1 \\\\ 
\end{cases}
$$

{{% /section %}}

---


[WolframAlpha](https://www.wolframalpha.com/input?i=1e-4+x+%2B+y+%3D1%2C+x+%2B+y+%3D+2)

En cliquant sur `step-by-step solution`,<br>que peut-on dire de la méthode utilisée ?

---


{{% section %}}

### Un peu de théorie

---

On cherche à résoudre :

$$A\textbf{x}=\color{green}{\textbf{b}}$$

---

On passe à la matrice augmentée :

$$
\tilde{A}=\begin{bmatrix}A|\textbf{b}\end{bmatrix}=\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} &|& \color{green}b_1 \\\\
a_{21} & a_{22} & \cdots & a_{2n} &|& \color{green}b_2 \\\\
\vdots &        &        & \vdots &|& \color{green}\vdots \\\\
a_{n1} & a_{n2} & \cdots & a_{nn} &|& \color{green}b_n 
\end{bmatrix}
$$


---

On utilise "***Gaussian elimination***"<br>pour transformer $\tilde{A}$ en matrice échelonnée.

---

```python
def Gauss(M,recherchePivot) :
    m = len(M)                                    
    n = len(M[0])                                 
    h = k = 0
    tol = 1e-9                        
    while h < m and k < n :                       
        ipivot = recherchePivot(M,h,k)            
        pivot = M[ipivot][k]
        if abs(pivot) < tol :                     
            k += 1
        else :
            if h != ipivot :
                M[h],M[ipivot] = M[ipivot],M[h]   
            for j in range(k,n) :
                M[h][j] /= pivot                  
            for i in range(h+1,m) :
                f = M[i][k]
                for j in range(k,n) :
                    M[i][j] -= M[h][j] * f
            h +=1
            k += 1
```

---


$$
\tilde{A}\rightarrow\begin{bmatrix}
\color{red}{\rule{0.5em}{0.5em}}& * & * & * & * & * & \color{green}*   \\\\
\color{blue}0&\color{blue}0&\color{red}\rule{0.5em}{0.5em} & *  & * & * & \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{red}\rule{0.5em}{0.5em}& *  & * & \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0& \color{red}\rule{0.5em}{0.5em}& * & \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{red}\rule{0.5em}{0.5em}& \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0& \color{green}0 \\\\
\end{bmatrix}
$$

---


Puis on utilise "**back substitution**"<br>pour obtenir la solution $\textbf{x}$.
<br><br>
{{%fragment%}}<span style="font-weight:normal">Que vaut $x_2$ dans l'exemple précédent ?</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">Quel objet géométrique $\textbf{x}$ représente-t-il ?</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">Que vaut le rang de la matrice ?</span>{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">Solution générale pour calculer<br>le rang d'une matrice ?</span>{{%/fragment%}}


---

Pour **réduire** $\tilde{A}$,<br>on utilise "***Gauss-Jordan elimination***"

---
On obtient alors :

$$
\tilde{A}\rightarrow\begin{bmatrix}
\color{red}{\boxed{1}}& * & \color{blue}0 & \color{blue}0 & \color{blue}0 & \color{blue}0 & \color{green}*   \\\\
\color{blue}0&\color{blue}0&\color{red}{\boxed{1}} & \color{blue}0   & \color{blue}0  & \color{blue}0  & \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{red}{\boxed{1}}& \color{blue}0   & \color{blue}0  & \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0& \color{red}{\boxed{1}}& \color{blue}0  & \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{red}{\boxed{1}}& \color{green}*  \\\\
\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0&\color{blue}0& \color{green}0 \\\\
\end{bmatrix}
$$


---

Seule une toute petite modification est nécessaire pour passer de Gauss à Gauss-Jordan :

```python{|16}
def Gauss(M,recherchePivot) :
    m = len(M)                                    
    n = len(M[0])                                 
    h = k = 0
    tol = 1e-9                        
    while h < m and k < n :                       
        ipivot = recherchePivot(M,h,k)            
        pivot = M[ipivot][k]
        if abs(pivot) < tol :                     
            k += 1
        else :
            if h != ipivot :
                M[h],M[ipivot] = M[ipivot],M[h]   
            for j in range(k,n) :
                M[h][j] /= pivot                  
            for i in range(h+1,m) :
                f = M[i][k]
                for j in range(k,n) :
                    M[i][j] -= M[h][j] * f
            h +=1
            k += 1
```

---

```python{|16}
def GaussJordan(M,recherchePivot) :
    m = len(M)                                    
    n = len(M[0])                                 
    h = k = 0
    tol = 1e-9                        
    while h < m and k < n :                       
        ipivot = recherchePivot(M,h,k)            
        pivot = M[ipivot][k]
        if abs(pivot) < tol :                    
            k += 1
        else :
            if h != ipivot :
                M[h],M[ipivot] = M[ipivot],M[h]   
            for j in range(k,n) :
                M[h][j] /= pivot                  
            for i in range(m) :
                if i != h :
                    f = M[i][k]
                    for j in range(k,n) :
                        M[i][j] -= M[h][j] * f      
            h +=1
            k += 1
```

---

{{< slide  background-image="/complgauss1.png" background-size="contain" background-transition="concave">}}

En terme de calculs, Gauss-Jordan revient à ça :


---

Gauss-Jordan ajoute la phase retour à Gauss.<br>C'est elle qu'on doit comparer à  back substitution.

---

Qui est le plus rapide pour résoudre un système ?

<br>

- ***Gaussian elimination*** + ***back substitution***<br><br>
- ***Gauss-Jordan elimination***


---

```python
from random import randint
n = 10
A = [[randint(-20,20) for j in range(n+1)] for i in range(n)]
```

```python
%%timeit
Gauss(A,recherchePivotPartiel)
V = substitution(A)
```

`115 µs ± 755 ns per loop`<br>
`(mean ± std. dev. of 7 runs,`<br>
`10000 loops each)`


---

```python
%%timeit
GaussJordan(A,recherchePivotPartiel)
Vp = [A[i][n] for i in range(n)]
```

`155 µs ± 1.07 µs ns per loop`<br>
`(mean ± std. dev. of 7 runs,`<br>
`10000 loops each)`


---

Pour finir, le one-liner permettant d'obtenir la **rref** (row-reduced  echelon form) :

```python
import sympy as sym
sym.Matrix(A).rref()
```

---

```python
A = [[4,4,0,3,1,9,3],
     [8,8,4,2,8,6,4],
     [4,4,1,5,1,4,2],
     [4,4,2,1,4,3,2],
     [4,4,9,8,4,3,2],
     [4,4,0,2,2,6,8]]
     
sym.Matrix(A).rref()
```

```nohighlight
(Matrix([
 [1, 1, 0, 0, 0, 0, -135/2],
 [0, 0, 1, 0, 0, 0,  -83/2],
 [0, 0, 0, 1, 0, 0,   83/2],
 [0, 0, 0, 0, 1, 0,     72],
 [0, 0, 0, 0, 0, 1,   17/2],
 [0, 0, 0, 0, 0, 0,      0]]), (0, 2, 3, 4, 5))
```


{{% /section %}}

---

[Retour site](https://info-tsi-vieljeux.github.io/semestre_3/tp11/#pivot-de-gauss)