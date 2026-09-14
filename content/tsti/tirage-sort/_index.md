+++
title = "Tirage au sort"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"
+++





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

[Retour site](https://coursphychi.github.io/tsti2d/radioact/)