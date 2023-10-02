/*
Afficher la table de multiplication de 2
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
*/

function table_de_mutliplication(table){
    let i = 1
    while (i<=10){
        console.log(`${i} x ${table} = ${i*table}`)
        i++
    }
}

table_de_mutliplication(2)