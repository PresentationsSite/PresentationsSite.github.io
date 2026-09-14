+++
title = "bases de données"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++



# Bases de données

---

{{%section%}}

{{< slide  background-image="/tabfruits.png" background-size="80%" background-transition="concave">}}

---

- `production` correspond à la porduction mondiale annuelle du fruit (en tonnes),
- `departement` correspond au département français ayant la plus forte production<br>du fruit,
- `paysUE` correspond au plus grand pays producteur de l'UE,
- `paysMonde` au plus grand pays producteur mondial du fruit.

---

{{< slide  background-image="/tabvoc.png" background-size="60%" background-transition="concave">}}

---

Schéma de tables :

Donne les relation entre les différentes tables.
Précise en particulier les **clés primaires**, les **clés étrangères** et les liens entre clés primaires et clés étrangères (une clé étrangère référence toujours une clé primaire d'une autre table).

---

{{< slide  background-image="/tabschema.png" background-size="60%" background-transition="concave">}}

---

Le **domaine** correspond à l'ensemble des valeurs possibles pour un champ de l'attribut.

Par exemple, les attributs `emoji` et `drapeau` attendent des chaînes de caractères<br>d'un seul caractère.

---

Remarque : une clé primaire n'est pas nécessairement associée à un unique attribut.

---
{{< slide  background-image="/tabnompren.png" background-size="60%" background-transition="concave">}}

{{%/section%}}


---

## Requêtes SQL

---

{{%section%}}

### Projection + sélection

---

Vocabulaire :

- **projection** : filtrage des colonnes/attributs (via `SELECT`)
- **sélection** : filtrage des lignes/enregistrements (via `WHERE`)

---

Requête pour afficher toute une table :

```sql
SELECT * 
FROM prodfruits;
```

<br>

`*` joue le rôle d'un joker

---
{{< slide  background-image="/tabtout.png" background-size="60%" background-transition="concave">}}

---

Requête pour afficher seulement<br>une sélection d'attributs (= projection) :

<br>

```sql
SELECT nom, departement 
FROM prodfruits;
```

---

{{< slide  background-image="/tabproj.png" background-size="30%" background-transition="concave">}}

---

Requête pour filtrer les enregistrements<br>(= selection) :

<br>

```sql
SELECT * 
FROM prodfruits
WHERE production > 100000;
```

<br>

Le `WHERE` est suivi d'une condition.


---

{{< slide  background-image="/tabselec.png" background-size="50%" background-transition="concave">}}

---

Opérateurs utilisables dans les conditions :

`=`, `<>`, `<`, `<=`, `>`, `>=`, `AND`, `OR`, `NOT`, `IN`

Exemple, pour un encadrement :

```sql
SELECT * 
FROM prodfruits
WHERE production > 50000 AND production < 100000 ;
```

---

{{< slide  background-image="/tabencadr.png" background-size="50%" background-transition="concave">}}

---

On peut aussi réaliser des opérations mathématiques sur les attributs grâce à : `+`, `-`, `*`, `/`.

On obtient par exemple le même résultat<br>que précédemment en écrivant :

```sql
SELECT * 
FROM prodfruits
WHERE production*2+50000 > 150000 AND production*2+50000 < 250000 ;
```

---

🤨🤨🤨

Écrire une requête pemettant d'afficher uniquement les enregistrements où la chine<br>n'est pas le premier producteur mondial.

---

```sql
SELECT * 
FROM prodfruits
WHERE paysMonde <> "Chine" ;
```

---

On peut bien sûr combiner projection et sélection :

<br>

```sql
SELECT nom,Departement
FROM prodfruits
WHERE paysUE = "Italie" ;
```

---

{{< slide  background-image="/tabselproj.png" background-size="80%" background-transition="concave">}}


---

Pour se limiter aux n premiers résultats,<br>on utilise `LIMIT n`,  et grâce à `OFFSET m`,<br>on peut sauter les m premiers.

<br>

```sql
SELECT *
FROM drapeaux
LIMIT 3
OFFSET 2 ;
```

---


{{< slide  background-image="/tablimit.png" background-size="50%" background-transition="concave">}}


---

On peut aussi combiner des projections/sélections à partir de différentes tables. 

Lorsque des attributs de tables différentes<br>ont le même nom, il faut préciser leur table d'origine via un point (`table.attribut`) :

<br>


```sql
SELECT departement, emoji
FROM prodfruits, emojifruits
WHERE prodfruits.nom = emojifruits.nom AND paysUE = "Espagne" ;
```

---

{{< slide  background-image="/tabdeuxtab.png" background-size="30%" background-transition="concave">}}


---

Sans la condition<br>`prodfruits.nom = emojifruits.nom`,<br>on aurait obtenu le **produit cartésien**<br>des deux sous-tables...

<br>

```sql
SELECT departement, emoji
FROM prodfruits, emojifruits
WHERE paysUE = "Espagne" ;
```

---

{{< slide  background-image="/tabdeuxtabsans.png" background-size="40%" background-transition="concave">}}


---

`WHERE prodfruits.nom = emojifruits.nom`<br>a donc permi d'opérer une **jointure interne**<br>entre les tables. 

On verra plus loin une méthode plus naturelle.

---

Le mot clé `DISTINCT` permet d'éliminer les doublons dans les enregistrements.

Montrons-le sur l'exemple précédent :

```
SELECT DISTINCT departement
FROM prodfruits, emojifruits
WHERE paysUE = "Espagne" ;
```

---

{{< slide  background-image="/tabdistinct.png" background-size="20%" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

### Tri des résultats

---

Pour trier suivant un attribut, on utilise<br>`ORDER BY attribut` (et pour que le tri<br>soit descendant, on ajoute `DESC`)


<br>


```sql
SELECT nom,production
FROM prodfruits
ORDER BY production DESC
LIMIT 3 ;
```

---

{{< slide  background-image="/taborder.png" background-size="30%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

### Utilisation d'un alias

---

Un alias, introduit par `AS` permet<br>de renommer un attribut dans l'affichage :

<br>

```sql
SELECT nom AS "fruits espagnols", production
FROM prodfruits
WHERE paysUE = "Espagne" ;
```

--- 

{{< slide  background-image="/tabalias.png" background-size="30%" background-transition="concave">}}

---

Un alias permet aussi de donner un nom à une table obtenue par une requête, ce qui rend possible l'enchassement des requêtes<br>les unes dans les autres.



---

La requête suivante réalise par exemple le produit cartésien des deux premiers départements<br>avec les 3 premiers emojis.

<br>

```sql
SELECT tab1.departement, tab2.emoji
FROM (SELECT *
      FROM prodfruits
      LIMIT 2) AS tab1,
     (SELECT *
      FROM emojifruits
      LIMIT 3) AS tab2 ;
```

---

{{< slide  background-image="/tabprodcart.png" background-size="40%" background-transition="concave">}}

{{%/section%}}

---

## Opérateurs ensemblistes

---

{{%section%}}

### Produit cartésien

---

On l'a déjà croisé par deux fois.

On obtient un produit cartésient en combinant<br>des `SELECT` de tables différentes<br>sans condition de jointure.



{{%/section%}}

---

{{%section%}}

### Union

---

Permet de réunir deux tables ou deux sous-tables.

<br>

```sql
SELECT *
FROM emojifruits
UNION
SELECT *
FROM flags ;
```

<br>

Rq : il faut que les deux tables<br>aient le même nombre de colonnes.

---
{{< slide  background-image="/tabunion.png" background-size="60%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

### INTERSECT

---

Ne garde que les colonnes communes.

Dans cet exemple, on obtient les noms de fruits<br>de la table `prodfruits` ayant un emoji<br>dans la table `emojifruits`.

```sql
SELECT nom
FROM prodfruits
INTERSECT
SELECT nom
FROM emojifruits ;
```

<br>

Rq : il faut que les deux tables<br>aient le même nombre de colonnes.



---
{{< slide  background-image="/tabinters.png" background-size="70%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

### EXCEPT

---

Revient à retirer ce qu'il y a en commun<br>entre deux tables.

<br>

```sql
SELECT nom
FROM prodfruits
EXCEPT
SELECT nom
FROM emojifruits ;
```

<br>

Rq : il faut que les deux tables<br>aient le même nombre de colonnes.



---
{{< slide  background-image="/tabexcept1.png" background-size="70%" background-transition="concave">}}

---

Attention, l'ordre compte :

<br>

```sql
SELECT nom
FROM emojifruits
EXCEPT
SELECT nom
FROM prodfruits ;
```

---
{{< slide  background-image="/tabexcept2.png" background-size="70%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Agrégation

---

On peut utiliser les fonctions suivantes pour réaliser des calculs sur des attributs<br>(et ainsi agréger ses valeurs) :
- `MIN` : donne la valeur minimale
-  `MAX` : donne la valeur maximale 
-  `SUM` : donne la somme des valeurs
-   `AVG` : donne la moyenne des valeurs
- `COUNT` : donne le nombre de valeurs 

---

```sql
SELECT AVG(production) AS "production moyenne"
FROM prodfruits ;
```

---

{{< slide  background-image="/tabagreg.png" background-size="20%" background-transition="concave">}}


---

🤨🤨🤨

Écrire une requête donnant le nombre de pays différents, autre que la Chine, plus gros producteurs mondiaux pour au moins un fruit.

---

```sql
SELECT COUNT(paysMonde)
FROM (SELECT DISTINCT paysMonde
      FROM prodfruits
      WHERE paysMonde <> "Chine") ;
```

---

{{< slide  background-image="/tabagregexo.png" background-size="20%" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## GROUP BY

---

Grâce à la clause `GROUP BY`, on peut grouper ensemble (partitionner) des lignes qui ont les mêmes valeurs dans une ou plusieurs colonne.

Mais c’est l’application d’une fonction sur chaque agregat obtenu qui en fait tout son intérêt.


---

Cela va permettre par exemple de compter<br>le nombre de positions dominantes<br>d'un département dans la production d'un fruit :

<br>

```sql
SELECT departement,COUNT(departement)
FROM prodfruits
GROUP BY departement ;
```

---

{{< slide  background-image="/tabgpby.png" background-size="80%" background-transition="concave">}}

---

Demandons maintenant la production totale par département (production totale mondiale pour<br>les fruits où le département arrive en tête) :

```sql
SELECT departement, SUM(production) AS "production totale"
FROM prodfruits
GROUP BY departement
```

---

{{< slide  background-image="/tabgpby2.png" background-size="80%" background-transition="concave">}}

---

On peut filtrer (sélection) l'agrégat obtenu par un `GROUP BY` à l'aide du mot clé `HAVING`.

Cela permet par exemple de ne conserver que les départements dominant la production française pour au moins deux fruits.

<br>

```sql
SELECT departement,COUNT(departement) AS "nombre de fruits"
FROM prodfruits
GROUP BY departement
HAVING "nombre de fruits" > 1 ;
```

---

{{< slide  background-image="/tabhaving.png" background-size="50%" background-transition="concave">}}


---

`HAVING` fonctionne comme `WHERE`<br>en demandant une condition. 

Les deux opèrent une sélection<br>(un filtrage sur les lignes).

La différence réside dans leur ordre d'utilisation : `WHERE` filtre une projection (après une `SELECT`)<br>et `HAVING` filtre un agrégat (après un `GROUP BY`).

---

{{< slide  background-image="/tabgen.png" background-size="90%" background-transition="concave">}}

---

La requête suivante sélectionne parmi les départements ayant une production mondiale supérieure à 10000 tonnes, ceux qui dominent<br>le marché avec au moins deux fruits.

<br>


```sql
SELECT departement,COUNT(departement) AS "nombre de fruits"
FROM prodfruits
WHERE production > 100000
GROUP BY departement
HAVING "nombre de fruits" > 1 ;
```


{{%/section%}}

---

{{%section%}}

## JOINTURE

---

Nous n'étudierons que les *équi*-jointures *internes*.

- *interne* signifie qu'on ne garde que<br>ce qu'il y a en commun entre deux tables.
- *equi* signifie que la jointure se fait<br>là où il y a *égalité*. 

---

{{< slide  background-image="/opjoint.png" background-size="50%" background-transition="concave">}}

---

On utilise la structure<br>
`table1 JOIN table2`<br>`ON condition d'égalité`.

Lorsqu'on joint deux tables, le plus souvent<br>la jointure se fait entre une clé primaire<br>et la clé étrangère référant cette clé primaire.

---

Exemple :

Supposons que l'on veuille remplacer les noms des fruits par leur emoji dans la table `prodfruits`.

<br>


```sql
SELECT emoji AS fruit, production, departement, paysUE, paysMonde
FROM prodfruits
JOIN emojifruits
ON prodfruits.nom = emojifruits.nom ;
```

---

{{< slide  background-image="/tabjoin1.png" background-size="50%" background-transition="concave">}}

---

Remarque : les fruits sans emoji sont éliminés.

----

Remplaçons maintenant aussi<br>les noms des pays par leurs drapeaux.

Commençons par les pays européens :

<br>

```sql
SELECT emoji AS fruit, production, departement, drapeau AS paysUE, paysMonde 
FROM prodfruits
JOIN emojifruits
ON prodfruits.nom = emojifruits.nom
JOIN flags
ON prodfruits.paysUE = flags.pays ;
```

---

{{< slide  background-image="/tabjoin2.png" background-size="50%" background-transition="concave">}}

---

Si on veut aussi remplacer les champions mondiaux par leurs drapeaux, on se heurte à un problème : l'attribut `drapeau` devient ambigü...

On peut s'en sortir en créant<br>des sous-tables intermédiaires :

```sql
SELECT emoji AS fruit, production, departement, drapUE AS paysUE, drapMonde AS paysMonde 
FROM prodfruits
JOIN emojifruits
ON prodfruits.nom = emojifruits.nom
JOIN (SELECT pays, drapeau AS drapUE 
      FROM flags) AS tabdrapmonde
ON prodfruits.paysUE = tabdrapmonde.pays
JOIN (SELECT pays, drapeau AS drapMonde 
      FROM flags) AS tabdrapue
ON prodfruits.paysMonde = tabdrapue.pays ;
```

---


{{< slide  background-image="/tabjoin3.png" background-size="50%" background-transition="concave">}}


{{%/section%}}


---

[Retour site](https://info-tsi-vieljeux.github.io/semestre_3/tp12/)