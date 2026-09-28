const prompt = require('prompt-sync')()
const findcandidat = require('../retulisable-fct/findcandidat.js')
const findcinvoted = require('../retulisable-fct/findcinvoted.js')


function ajouterVote(votearry, candidatrry) {
    console.log("\x1b[33m===========================efectuer un vote  =============================== '\x1b[0m");

    const votecin = prompt('  entrer votre cin :  ')
    const index = findcinvoted(votearry, votecin)  // check si user est deja vote 
    if (index !== -1) {
        console.log("\x1b[31m  Vous avez déjà voté etvous n’avez pas le droit de modifier votre vote ni de voter à nouveau  '\x1b[0m");
        console.log('\n')
    }
     else {
            const candidatcin = prompt('  entrer le cin de candidat  : ')
            let cnindex = findcandidat(candidatrry, candidatcin)
            if (cnindex === -1) {
            console.log("\x1b[31m aucun candidat avec se cin voir list de candidat et ressayer   '\x1b[0m");
            console.log('\n')
            } 
            else {
            votearry.push(votecin)  // ajouter cin d user au tableau des user qui an deja vote
            candidatrry[cnindex].electeurs.push(votecin)    // ajouter le vote au candidat  
            console.log("\x1b[32m vote effectuer , Merci   '\x1b[0m");
            }
    }


}

module.exports = ajouterVote


