const prompt = require('prompt-sync')()
const Ajoutercandidat = require('./ajoutercandidat.js')
const lnght = require('../retulisable-fct/findcandidat.js')

function ajouterplusieurcnd(array) {
    console.log("====================================================================================================================")
    let num = NaN
    do {
        num = Number(prompt("entrer le nombre de candidat qui tu veux ajouter  "))
    } while (isNaN(num))
    for (let i = 0; i < num; i, i++) {
        console.log("\x1b[32m=============================candidat " + Number(i + 1) + " sur " + num + " ===========================================\x1b[0m");
        Ajoutercandidat(array)
    }
}
module.exports = ajouterplusieurcnd