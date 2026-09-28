const lnght = require('../retulisable-fct/lenght.js')
const sortbyvote = require('../retulisable-fct/sortbyvote.js')
const politiquesort = require('../retulisable-fct/politiquecount.js')

function afiicherstat(array,voteqarr) {
    let lengtharr = lnght(array)
    if (lengtharr > 0) {
        const sortedarr = sortbyvote(array)
        const nbrtotalcan = lnght(array)
        const nbrtotalvote=lnght(voteqarr)
        const top1 = sortedarr[0]
        const top2 = sortedarr[1]
        const top3 = sortedarr[2]
        const politiquecount = politiquesort(array)

        console.log("\n")
        console.log("===========================  Statistiques de l'élection :  =============================== ");
         console.log("\n")
        //afficher nombre total de candidat 
        console.log(" ---------nombre total de candidat est --------------------" + `\x1b[33m ${nbrtotalcan}\x1b[0m`);
        console.log("\n")
        //affiachage de top 3 s il existe 
        if (lengtharr > 1) {
            console.log(" ---------le candidat top 1 de vote est " + `\x1b[34m-------- ${top1.nom}  \x1b[0m` + `\x1b[33m  ${lnght(top1.electeurs)}\x1b[0m` + " votes  ");
        }
        if (lengtharr > 1) { 
            console.log(" ---------le candidat top 2 de vote est " + `\x1b[34m-------- ${top2.nom}  \x1b[0m` + `\x1b[33m  ${lnght(top2.electeurs)}\x1b[0m` + " votes  "); 
        }
        if (lengtharr > 2) { 
            console.log(" ---------le candidat top 3 de vote est " + `\x1b[34m-------- ${top3.nom}  \x1b[0m` + `\x1b[33m  ${lnght(top3.electeurs)}\x1b[0m` + " votes  "); 
        }

        console.log("\n")
      //affichage nombre de candidat pour partie politique 
        console.log("\x1b[35m---------------nombre de candidat par partiPolitique------------------\x1b[0m")
        for (let i = 0; i < lnght(politiquecount); i++) {
            console.log(`\x1b[34m-------- ${politiquecount[i].name}  \x1b[0m` + `\x1b[33m  ${politiquecount[i].count}\x1b[0m` + " ---candidats  ");

        }
          console.log("\n")
        //  affichage de nombre total de vote
        console.log(" ------nombre total de vote  --------------------" + `\x1b[33m ${nbrtotalvote}\x1b[0m`)
    } //si le tableau est vide 
    else {
        console.log("\n")
        console.log("\x1b[31m la base de donne est vide    \x1b[0m");
    }
}
module.exports = afiicherstat