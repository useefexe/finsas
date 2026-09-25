const lnght = require('../retulisable-fct/lenght')
const sortbyvote = require('../retulisable-fct/sortbyvote.js')

function affichercandidat(array) {
    array = sortbyvote(array)
    console.log("\x1b[33m===========================liste de candidats =============================== '\x1b[0m");
    if (lnght(array) === 0) {
        console.log("\x1b[31m il ya pas des candidats enregistree \x1b[0m")
        console.log("\n")

    } else {
        for (let i = 0; i < lnght(array); i++) {
            console.log(`\x1b[37mCIN: ${array[i].cin} | Nom: ${array[i].nom} | Prénom: ${array[i].prenom} | \x1b[32mVote: ${lnght(array[i].electeurs)}\x1b[0m`);
            console.log("\n")
        }
    }

}

module.exports = affichercandidat