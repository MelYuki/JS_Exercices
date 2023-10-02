/*
Améliorer année bissextile pour avoir une année valide
*/

// Gestion de la limite du user
while(true){
    let year = new Date()
    let thisYear = year.getFullYear()
    console.log(thisYear)

    // Question au user
    let user = parseInt(prompt("Entrez une année à 4 chiffres cohérente !"))

    // fourchette cohérente
    if (user <= thisYear && user >= 1000){
        // Condition bissextile
        if (user % 400 == 0){
            alert("C'est bien une année bissextile!")
        }
        // Condition bissextile (2 autres critères)
        else if(user % 4 == 0 && user % 100 != 100){
            alert("C'est aussi une année bissextile!")
        }
        // Condition non-bissextile
        else{
            alert("Ce n'est pas une année bissextile!")
        }
        break
    }
    else if(user < 1000 || user > thisYear){
        alert("Veuillez rester cohérent et entrer une année entre l'an 1000 et celle-ci!")
    }
    else{
        alert("Veuiller entrer un nombre!")
    }
}