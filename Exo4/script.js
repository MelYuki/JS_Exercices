/*
Calcul de la TVA
Écrire un programme qui :
1. Demande à l’utilisateur un prix unitaire hors taxe d’un livre
2. Demande à l’utilisateur la quantité de livre
3. Calcule et affiche le prix total TTC de la commande, en utilisant une TVA de 21%
Pour interagir avec l’utilisateur, vous utiliserez les fonctions d’entrée/sortie prompt() et alert(). 
*/

// Questions
let unit_htva = parseFloat(prompt("Quelle est le prix unitaire (en €) d'un livre ?"))
let nbr_livre = parseInt(prompt("Quelle est la quantité de livre ?"))
console.log(unit_htva)
console.log(nbr_livre)

// Calculs et Résultats
const TVA_21 = 1.21
let prix_tot = unit_htva * nbr_livre
let prix_ttc = prix_tot * TVA_21
console.log(prix_tot)
console.log(prix_ttc)

// Affichage du résultat
alert(`Le prix total (TTC) est de : ${prix_ttc.toFixed(2)} €`)
