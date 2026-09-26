const lnght = require('../retulisable-fct/lenght')
const sortbyvote = require('../retulisable-fct/sortbyvote.js')
const prompt=require('prompt-sync')()
const sortbypartpol=require('../retulisable-fct/politiquecount.js')
const aficherparpol=require('../retulisable-fct/afficherparparpol.js')

function affichercandidat(array) {
    array = sortbyvote(array)
    console.log("\x1b[33m===========================liste de candidats =============================== \x1b[0m");
    // checker si il ya des candidat
    if (lnght(array) === 0) {
        console.log("\x1b[31m il ya pas des candidats enregistree \x1b[0m")
        console.log("\n")

    } else {
            console.log("\x1b[35m-----------------------------------choisie le mode d affichage:  \x1b[0m");
            console.log("\x1b[33m-1---------------Trier les candidats par nombre de votes:  \x1b[0m");
             console.log("\x1b[33m-2---------------candidat d un partie politue specifier :  \x1b[0m");
             const choix=prompt('---enter votre choix : ')
        if(choix==='1'){
        for (let i = 0; i < lnght(array); i++) {
            console.log(`\x1b[37mCIN: ${array[i].cin} | Nom: ${array[i].nom} | Prénom: ${array[i].prenom} | \x1b[32mVote: ${lnght(array[i].electeurs)}\x1b[0m`);
            console.log("\n")
        }}else if(choix==='2'){
             aficherparpol(array)
            
        }
    }

}

module.exports = affichercandidat