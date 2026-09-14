+++
title = "Expérience radioactivité"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"
+++





{{% section %}}
# Désintégration radioactive<br>de la classe

---

### Expérience

Tout le monde commence debout<br>et à chaque tour, on a 1 chance sur 4 de s'assoir.<br>

Quelle sera l'allure de la courbe donnant<br>l'évolution du nombre d'élèves debouts<br>en fonction du nombre de tours ?

---

{{< slide  background-image="/pileface.png" background-size="30%" background-transition="concave">}}


---

<style>
.bouton {
background-color: #56C1FF;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 0px 0px 20px 0px;
border-radius: 8px;
cursor: pointer;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
transition-duration: 0.4s;
}

.bouton:hover {
background-color: #0076BA;
color: white;
}

.bouton:active {
box-shadow: none;
</style>

<div>
<div id="resultat" name="resultat" style="border-radius:50%;font-size:80px;background-color:gray;width:200px;height:200px;margin:auto;display:flex;justify-content:center;align-items:center;"></div><br><button class="bouton" onclick="pileface()" style="margin:auto;display:flex;justify-content:center;">Jouer son sort</button>
</div>

<script>
function pileface() {
    var res = document.getElementById("resultat");
		if (Math.random() < 0.25){
    res.textContent = "💀";
    res.style.backgroundColor = "red";}
    else{
    res.textContent = "😃";
    res.style.backgroundColor = "green";
    }
    setTimeout(() => {res.textContent = "";res.style.backgroundColor = "gray"; }, 1000); 
    }
</script>

---


<iframe src="https://www.desmos.com/calculator/titas84izy?embed" width="500" height="500" style="border: 5px solid #ccc" frameborder=0></iframe>

---

Si on répète l'expérience<br>avec toutes les terminales,<br>puis avec tout La Rochelle,<br>combien faudra-t-il de tours<br>pour diviser la population par 2 ?

---

{{< runpython lang="python" height="600" mode="toggle" >}}
from random import random

N0 = 2000
N = N0
t = 0

f = open('out.csv', 'w')

print("\n|{:^10}|{:^15}|{:^15}|".format("tour","survivants","proportion"))
print("-"*44)

while N :
    f.write("{}\t{:.4f}\n".format(t,N/N0*100))
    print("|{:^10}|{:^15}|{:^15.1f}|".format(t,N,N/N0*100))
    for i in range(N) :
        if random() < 0.5 and random() < 0.5 :
            N -= 1
    t += 1

f.write("{}\t{:.2f}\n".format(t,0))
print("|{:^10}|{:^15}|{:^15.1f}|".format(t,0,0))  
f.close()
{{< /runpython >}}

---

```python{3-6|8|9|10|11|12|}
from random import random

# initialisation des variables
N0 = 2000
N = N0
t = 0

while N != 0 :            # Tant qu'il y a des survivants
    for i in range(N) :   # pour chaque survivant
        if random() < 0.5 and random() < 0.5 :
            N = N - 1     # le survivant meurt
    t = t + 1             # on ajoute un tour
```

---

Que peut-on conclure des 3 graphes ?

<iframe src="https://www.desmos.com/calculator/2uaww5ek4k?embed" width="500" height="500" style="border: 5px solid #ccc" frameborder=0></iframe>

---

<div style="display: flex;justify-content: center;">
<div style="background-color:rgb(0,0,255,0.2);border:solid blue 20px;padding:20px 50px 30px 50px;width:contain">
L'évolution de la population<br>ne dépend pas de la<br>population de départ.
</div>

---

Et que peut-on conclure de ce graphe ?

<iframe src="https://www.desmos.com/calculator/f425jmrshz?embed" width="500" height="500" style="border: 5px solid #ccc" frameborder=0></iframe>

---

<div style="display: flex;justify-content: center;">
<div style="background-color:rgb(0,0,255,0.2);border:solid blue 20px;padding:20px 50px 30px 50px;width:contain">
L'écart en tours (= en temps)<br>entre chaque division<br>par 2 de la population<br>est le même.
</div></div>
{{% /section %}}



---


[Retour site](https://coursphychi.github.io/tsti2d/radioact/)