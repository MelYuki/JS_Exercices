/*
Exo année bissextile :
- Demander à l'utilisateur d'entrée une année.
- Lui indiquer si cette année est bissextile ou non.

Tips :
Une année est bissextile si =>
- Elle est divisible par 4.
- Mais NON divisible par 100.
- Ou si elle est divisible par 400.

Pour vos tests...
Année bissextile : 2000, 1996
Pas bissextile : 1900, 1997

let user = parseInt(prompt("Entrez une année à 4 chiffres !"))
if (user % 400 == 0){
    alert("C'est bien une année bissextile!")
}
else if(user % 4 == 0 && user % 100 != 100){
    alert("C'est aussi une année bissextile!")
}
// if((user % 4 == 0 && user % 100 != 100) || user % 400 == 0){
//        alert("C'est bien une année bissextile!")}
else{
    alert("Ce n'est pas une année bissextile!")
}
*/

/*
Exo distributeur de boissons :
Affichez un choix de boissons à l'utilisateur et l’utilisateur choisit celle qu’il désire en entrant le numéro correspondant.
En fonction de ce que l'utilsateur a tapé, lui servir la boisson.
N'oubliez pas de vérifier s’il y a encore des boissons en stock et d'enlever un au stock en distribuant la boisson.
*/

// Distributeur et stocks
let drink = [`
1: fanta,
2: sprite,
3: eau,
4: redbull,
5: coca`]
let quant = [10, 20, 15, 25, 0]
console.log(drink)
console.log(quant)
// Déstockage
function destock(aDestock){
    quant[aDestock]--
    console.log(quant)
}
// Affichage et sélection du choix
while (true){
    let user = parseInt(prompt(`Choisissez votre boisson parmis ce que propose le distributeur : ${drink}`))
    let choix = user - 1
    // Vérif quantités et Service de la boisson
    if (quant[choix] > 0){
        switch(choix){
            case 0 :
            alert("Voici votre fanta")
            break
            case 1 :
            alert("Voici votre sprite")
            break
            case 2 :
            alert("Voici votre eau")
            break
            case 3 :
            alert("Voici votre redbull")
            break
            case 4 :
            alert("Voici votre coca")
            break
        }
        destock(choix)
        break
    }
    else if (quant[choix] == 0) {
        alert(`Désolé, il n'en reste plus!
        Choisissez autre chose...`)
    }
    else if (choix > drink.length || choix < 0){
        alert(`Il n'y a pas de boissons cachées dans le distributeur.
        Faites donc votre choix parmis les porpositions!`)
    }
    else {
        alert("!!! Veuillez entrer un chiffre !!!")
    }
}
