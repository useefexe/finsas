const prompt = require('prompt-sync')()

const findcandidat = require('../retulisable-fct/findcandidat.js')

function modiferinfocandidat(candidatarry) {

    console.log("\x1b[34m===========================modifier les info d un candidat=============================== \x1b[0m");
    const cincand = prompt(" entere  cin de candidat : ")

    let index = findcandidat(candidatarry, cincand) // cherche si candidat exist 

    if (index !== -1) {
        console.log("\n")
        console.log("\x1b[35m1. Modifier l'age du candidat\x1b[0m")
        console.log("\x1b[35m2. Modifier le parti politique\x1b[0m")
        console.log("\x1b[35m0. Skipper modification\x1b[0m")
        const choix = prompt("-----Choisir une modification : ")

        switch (choix) {
            case '1': {
                const age = prompt(" entere le neveau age de candidat |" + candidatarry[index].nom + "| : ")
                if (age !== '0' && isNaN(Number(age)) === false) {
                    candidatarry[index].age = Number(age)
                }
                else {
                    console.log("\x1b[31m modification d age non effectuer il faut entrer un age valide  \x1b[0m");
                }
               break;
            }

            case '2': {
                const partiPolitique = prompt("entere le neveau partie politique  |" + candidatarry[index].nom + '| :')
                if ( partiPolitique !== "") {
                    candidatarry[index].partiPolitique = partiPolitique
                }
                else {
                  console.log("\x1b[31m modification d partie politique  non effectuer il faut entrer partie politique non vide   \x1b[0m")
                }

                break;
            }
            case '0': {
                console.log("\x1b[35m modification skipper \x1b[0m")
                break;
            }
            default: {
                console.log("\x1b[31m choix invalide \x1b[0m")
                break;
            }
        }

    } else {

        console.log("\x1b[31m cin de candidat non trouvable voir liste de candidat et ressayer    \x1b[0m");

    }

    console.log("\n")

}

module.exports = modiferinfocandidat