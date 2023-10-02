/*
Afficher les tables de multiplication de 2 à 9
*/

function table_de_mutliplication(table){
    let i = 1
    while (i<=10){
        console.log(`${i} x ${table} = ${i*table}`)
        i++
    }
}

let a = 2
let b = 9
while (a <= b){
    table_de_mutliplication(a)
    console.log(" ")
    a++
}
