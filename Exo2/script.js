// EXO2
/*
(SANS CONDITIONS ET SANS BOUCLES)
Demander à l'utilisateur d'entrer son prénom
Demander à l'utilisateur d'entrer son nom
Demander à l'utilisateur d'entrer son année de naissance
Faire un tableau et :
(plein de façons pour le stockage)
Demander à l'utilisateur son hobby préféré n°1 et le stocker dans le tableau
Demander à l'utilisateur son hobby préféré n°2 et le stocker dans le tableau
Demander à l'utilisateur son hobby préféré n°3 et le stocker dans le tableau
Former à partir du tableau une chaine avec les trois hobbies séparés par " et " (plein de façons de le faire)

Afficher à la fin : 
"Vous vous appelez [prénom] [NOM]. Cette année vous avez [X] ans. Vos passions dans la vie sont [hobby1] et [hobby2] et [hobby3]."
*/

let firstName = prompt("Entrez votre prénom!")
let lastName = prompt("Entrez votre nom!")
let birthYear = prompt("Entrez votre année de naissance!")
let age = 2023 - parseInt(birthYear)
console.log(firstName)
console.log(lastName)
console.log(birthYear)

let hobs = []
let hob1 = prompt("Votre hobby n°1?")
//hobs.push(hob1)
let hob2 = prompt("Votre hobby n°2?")
//hobs.push(hob2)
let hob3 = prompt("Votre hobby n°3?")
hobs.push(hob1, hob2, hob3)
console.log(hobs)

let hobsString = hobs.join(" et ")
console.log(hobsString)

let message = (`Vous vous appelez ${firstName} ${lastName.toUpperCase()}.
Cette année vous avez ${age} ans.
Vos passions sont ${hobsString}.`)

alert(message)
console.log(message)
