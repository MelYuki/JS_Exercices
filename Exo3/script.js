// Exo page 77 du PDF

let maChaine = "ma formation javascript"

// Retourner la position de « ma »
console.log(maChaine.indexOf("ma"))

// Indiquer l’indice de la lettre « p »
console.log(maChaine.indexOf("p"))

// Retrouver la lettre située à l’indice 21
console.log(maChaine[21])

// Remplacer « javascript » par « Java »
console.log(maChaine.replace("javascript", "java"))

// Découper la chaîne avec le délimiteur «  » (espace)
let maChaine2 = maChaine.split(" ")
console.log(maChaine2)

// Inverser la chaîne de caractères (+ difficile) :
// « ma formation javascript » → « tpircsavaj noitamrof am »
let maChaineTab = maChaine.split("")
console.log(maChaineTab)
let maChaineRev = maChaineTab.reverse()
console.log(maChaineRev)
//console.log(maChaineRev.toString())
console.log(maChaineRev.join(""))
//-> tout ça sur une seul ligne
console.log(maChaine.split("").reverse().join(""))