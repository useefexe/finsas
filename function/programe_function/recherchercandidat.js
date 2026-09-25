const prompt = require('prompt-sync')()
const findcandidat = require('../retulisable-fct/findcandidat.js')
const lnght = require('../retulisable-fct/lenght.js')

function recherchercandidat(canarry) {
    console.log("\n")
    console.log("\x1b[36m===========================modifier les info d un candidat=============================== '\x1b[0m");
    const nom = prompt(" enter le nom de candidat qui tu recherche  : ")
    let index = findcandidat(canarry, nom)
    if (index !== -1) {
        console.log("\n")
        console.log(`\x1b[37mCIN: ${canarry[index].cin} | Nom: ${canarry[index].nom} | Prénom: ${canarry[index].prenom} | \x1b[32mVote: ${lnght(canarry[index].electeurs)}\x1b[0m`);
    } else {
        console.log("\n")
        console.log("\x1b[31m nom  de candidat non trouvable voir liste de candidat et ressayer    \x1b[0m");
    }

}
module.exports=recherchercandidat