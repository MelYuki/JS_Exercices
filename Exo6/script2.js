/*
Améliorer le distributeur de boisson pour qu'on puisse avoir des boissons tant qu'on appuie pas sur Q pour quitter et qu'il y a du stock partout
*/

// Distributeur et stocks
let drink = [`
1: fanta,
2: sprite,
3: eau,
4: redbull,
5: coca`]
let quant = [1, 0, 1, 0, 0]
console.log(drink)
console.log(quant)

// Déstockage
function destock(aDestock){
    quant[aDestock]--
    console.log(quant)
}

// Distributeur vide
function vide(){
    for (let i=0;i<quant.length;i++){
        let end = quant.length - 1
        if(quant[i] > 0){
            break
        }
        else if(quant[i] == 0 && i == end){
            alert(`Le distributeur est maintenant vide.
            Merci de patienter pendant son remplissage...`)
            return true
        }
    }
}

// Affichage et sélection du choix
while(true){
    let user = prompt(`Choisissez votre boisson parmis ce que propose le distributeur : ${drink}
    Ou appuyer sur "Q" pour quitter !`)
    let choix = parseInt(user) - 1
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
        if (vide()) {break}
    }
    // Condition de quantité nulle
    else if (quant[choix] == 0) {
        alert(`Désolé, il n'en reste plus!
        Choisissez autre chose...`)
    }
    // Condition hors-limites
    else if (choix > drink.length || choix < 0){
        alert(`Il n'y a pas de boissons cachées dans le distributeur.
        Faites donc votre choix parmis les propositions!`)
    }
    // Condition de sortie
    else if (user === "q" || user === "Q"){
        break
    }
    // Condition non-chiffre
    else {
        alert("!!! Veuillez entrer un chiffre !!!")
    }
}
