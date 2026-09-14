+++
title = "Maths"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#00A2FF;}

span {font-weight:normal;color:white;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

td {
text-align: center !important;
}

th:not(:last-child), td:not(:last-child) { border-right: 1px solid #00A2FF; }
</style>



{{% section %}}

## Ordre de grandeur<br>et puissances de 10

---

<span class="imp">Ordre de grandeur ?</span>

C'est une mesure arrondie<br>à la puissance de 10 la plus proche.

- $\pu{3E5}$ $\\,\\,$ ${\longrightarrow}$  <span class="fragment">$10^5$</span>
- $\pu{5E5}$ $\\,\\,$ ${\longrightarrow}$ <span class="fragment">$10^6$</span>
- $\pu{8E-5}$ ${\longrightarrow}$ <span class="fragment">$10^{-4}$</span>
- $\pu{2E-5}$ ${\longrightarrow}$ <span class="fragment">$10^{-5}$</span>
- $\pu{3,5}$ $\qquad \\;$ ${\longrightarrow}$ <span class="fragment">$10^0$ ou $1$</span>

---

Rappels des règles avec les puissances de 10 :

- $10^a\times10^b=$ <span class="fragment"> $10^{a\color{#FF644E}+\color{white}b}$ </span>
- $10^a/10^b=\frac{10^a}{10^b}=$ <span class="fragment"> $10^{a\color{#FF644E}-\color{white}b}$ </span>
- $\left(10^a\right)^b=$ <span class="fragment"> $10^{a\color{#FF644E}\times\color{white}b}$ </span>

---

D'autres ordres de grandeur à trouver :


- $\pu{632E5}$  ${\longrightarrow}$  <span class="fragment">$10^8$</span>
- $\pu{632E-4}$  ${\longrightarrow}$ <span class="fragment">$10^{-1}$</span>
- $\left(\pu{2E1}\right)^3$ ${\longrightarrow}$ <span class="fragment">$10^4$</span>
- $\pu{5,0E-4}/1000$ ${\longrightarrow}$ <span class="fragment">$10^{-6}$</span>
- $\frac{9800}{\pu{1060000}}$  ${\longrightarrow}$ <span class="fragment">$10^{-2}$</span>

{{% /section %}}

---

{{% section %}}


### les multiples :

---

<table style="color:#00A2FF">
<thead>
<tr>
<th>multiple</th><th>abréviation</th><th>puissance de 10</th>
</tr>
</thead>
<tbody>
<tr>
<td>kilo</td>
<td>k</td>
<td ><span class="fragment">$10^3$</span></td>
</tr>
<td ><span class="fragment">méga</span></td>
<td ><span class="fragment">M</span></td>
<td>$10^6$</td>
</tr>
<td ><span class="fragment">giga</span></td>
<td ><span class="fragment">G</span></td>
<td>$10^9$</td>
</tr>
<td><span class="fragment">téra</span></td>
<td ><span class="fragment">T</span></td>
<td>$10^{12}$</td>
</tr>
<td><span class="fragment">péta</span></td>
<td ><span class="fragment">P</span></td>
<td>$10^{15}$</td>
</tbody>
</table>


---

### les sous-multiples :


---

<table style="color:#00A2FF">
<thead>
<tr>
<th>sous-multiple</th><th>abréviation</th><th>puissance de 10</th>
</tr>
</thead>
<tbody>
<tr>
<td>milli</td>
<td>m</td>
<td ><span class="fragment">$10^{-3}$</span></td>
</tr>
<td ><span class="fragment">micro</span></td>
<td ><span class="fragment">$\mu$</span></td>
<td>$10^{-6}$</td>
</tr>
<td ><span class="fragment">nano</span></td>
<td ><span class="fragment">n</span></td>
<td>$10^{-9}$</td>
</tr>
<td><span class="fragment">pico</span></td>
<td ><span class="fragment">p</span></td>
<td>$10^{-12}$</td>
</tr>
<td><span class="fragment">femto</span></td>
<td ><span class="fragment">f</span></td>
<td>$10^{-15}$</td>
</tbody>
</table>

{{% /section %}}

---

{{% section %}}

## Conversions :

---

Convertir 34 pm en km

<div class="fragment">

$$
\begin{aligned}
\pu{34 pm} &= \pu{34E-12 m}\\\\
&= \pu{34E-12} \times \pu{10^{-3} km}\\\\
&= \pu{34E-15 km}
\end{aligned}
$$

</div>

---

Convertir 34 μg en fg (femtogramme)

<div class="fragment">

$$
\begin{aligned}
\pu{34 μg} &= \pu{34E-6 g}\\\\
&= \pu{34E-6} \times \pu{10^{15} fg}\\\\
&= \pu{34E9 fg}
\end{aligned}
$$

</div>

---

Convertir 34 m$^3$ en nm$^3$

<div class="fragment">

$$
\begin{aligned}
\pu{34 m^3} &= 34 \times \left(10^9 \\,\pu{nm}\right)^3\\\\
&= 34 \times \pu{10^{9\times 3} nm^3}\\\\
&= 34\times\pu{10^{27} nm^3}
\end{aligned}
$$

</div>

---


Convertir 34 nm$^2$ en μm$^2$

<div class="fragment">

$$
\begin{aligned}
\pu{34 nm^2} &= 34 \times \left(10^{-9} \\,\pu{m}\right)^2\\\\
&= 34 \times \pu{10^{(-9)\times 2} m^2}\\\\
&= 34\times\pu{10^{-18} m^2}\\\\
&= 34\times\pu{10^{-18}\times\left(\pu{10^6 μm}\right)^2}\\\\
&= 34\times 10^{-18} \times \pu{10^{12} μm2}\\\\
&= \pu{34E-6  μm2}
\end{aligned}
$$

</div>

{{% /section %}}

---

{{% section %}}

## Notation scientifique

---

<iframe width="560" height="420" src="https://www.youtube.com/embed/bBT1hOYQPnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>



---


<iframe width="800" height="450" src="https://www.youtube.com/embed/PtftD6sU-Sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{% /section %}}

---

{{% section %}}

## Chiffres significatifs

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/KOvHirpl7vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{% /section %}}

---

[Retour](https://coursphychi.github.io/2nde/atome/)

