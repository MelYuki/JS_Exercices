/*
Jeu du plus ou moins :
Générer un nombre aléatoire entre 1 et 10 (indice => aller voir comment Math.rand() fonctionne)
Tant que le joueur n'a pas perdu ou utilisé ses 5 essais, il peut proposer un nombre. Si c'est moins, on lui indique que c'est plus, si c'est plus, on lui indique que c'est moins, si c'est gagné, bah il a gagné
-> attention à gérer qu'il entre bien un nombre et entre 1 et 10 sans lui compter d'essai
(Bonus : proposer 3 niveaux de difficultés 1-10  1-100  1-1000)
*/
/*
BONUS PERSO :
- REJOUER OU NON!                               -> OK
- ADAPTER LA LIMITE AU NIVEAU CHOISI            -> OK
- COMPTE ET AFFICHAGE DU SCORE D'UNE PARTIE     -> OK
- ADDITION DES SCORES TANT QU'ON JOUE           -> OK
=> Soit j'arrive à faire le score permanent, soit pas mais à utiliser la limit comme points.
... Je voudrais utiliser le reste de la limit comme points permanents!
!!!! J'AI RÉUSSI !!!!
- SCORES PERMANENTS EN TABLEAU (nom et score)   ->
*/

// Constantes de niveaux de difficulté
const LVL1 = 10
const LVL2 = 100
const LVL3 = 1000

const LIMIT1 = 5
const LIMIT2 = 10
const LIMIT3 = 15

// Permanence du score
let pts = 0
function perm(score){
    if(score>1){
        pts += score
    }
    else{
        pts += 0
    }
    return pts
}

// GAME
function game(lvl, limit){
    // Numéro Random
    let cpu = Math.round(Math.random()*lvl)
    if (cpu==0){cpu++}
    console.log(cpu)

    // Initialiseur de coups
    let attempt = 1

    // Compteur d'essais et de limite de coups
    function count(){
        attempt += 1
        limit -= 1
    }

    // Boucle du jeu
    while(true){
        let user = parseInt(prompt(`Proposez un chiffre entre 1 et ${lvl} \nEt trouvez le numéro mystère!`))

        if (user>=1 && user<=lvl){
            if (user == cpu){
                alert(`BRAVO! Vous avez trouvé en ${attempt} tentative${(attempt>1)?"s":""}!`)
                return false
            }
            else if(limit == 1){
                alert(`VOUS AVEZ PERDU! \nLe numéro mystère était le ${cpu}`)
                return false
            }
            else if (user < cpu){
                count()
                alert(`Le numéro mystère est plus grand! \nIl vous reste ${limit} essai${(limit>1)?"s":""}!`)
            }
            else{
                count()
                alert(`Le numéro mystère est plus petit! \nIl vous reste ${limit} essai${(limit>1)?"s":""}!`)
            }
        }
        else{
            alert(`!!! VEUILLEZ ENTRER UN NOMBRE ENTRE 1 ET ${lvl} !!!`)
        }
    }

    // Affichage du score
    alert(`FÉLICITATION! Vous avez obtenu ${perm(limit)} points`)
}

// Rejouer ou non?
function repaly(){
    let again = prompt("Voulez-vous rejouer? (y/n)")

    if (again == "y"){
        welcome()
    }
    else if(again != "y" && again != "n"){
        alert(`!!! VEUILLEZ REPONDRE PAR "y" OU "n" !!!`)
        repaly()
    }
    else{
        alert(`!!! MERCI D'AVOIR JOUÉ !!! \n         !! À BIENTOT !!`)
    }
}

// Choix du niveau de difficulté
function welcome(){
    let level = ["1) de 1 à 10", "2) de 1 à 100", "3) de 1 à 1000"]
    let choix = parseInt(prompt(`Bienvenue dans le jeu du numéro mystère! \nVeuillez choisir un niveau de difficulté: \n${level.join("\n")}`))

    if (choix >= 1 && choix <= 3){
        switch (choix){
            // Game de 1 à 10
            case 1 :
                alert(`Vous avez choisi le niveau: \n${level[0]} \n${LIMIT1} essais sont à disposition...`)
                game(LVL1, LIMIT1)
                break
            // Game de 1 à 100
            case 2 :
                alert(`Vous avez choisi le niveau: \n${level[1]} \n${LIMIT2} essais sont à disposition...`)
                game(LVL2, LIMIT2)
                break
            // Game de 1 à 1000
            case 3 :
                alert(`Vous avez choisi le niveau: \n${level[2]} \n${LIMIT3} essais sont à disposition...`)
                game(LVL3, LIMIT3)
                break
        }
        repaly()
    }
    else{
        alert("!!! VEUILLEZ ENTREZ UN CHIFFRE ENTRE 1 ET 3 !!!")
        welcome()
    }
}

// LAUNCHER
welcome()
