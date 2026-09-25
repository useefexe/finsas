const prompt=require('prompt-sync')()
const remove=require('../retulisable-fct/remove.js')
const findcandidat=require('../retulisable-fct/findcandidat.js')

function suprimerCandidat(candidatarry){
    console.log("\n")
      console.log("\x1b[33m=========================== suprimer  un candidat =============================== '\x1b[0m");
     const cin = prompt(" enter le cin de candidat qui tu veux suprimer ")
     let index = findcandidat(candidatarry,cin)
     if (index===-1){
             console.log("\x1b[31m cin de candidat non trouvable voir liste de candidat et ressayer    \x1b[0m");
     }
     else{
       remove(candidatarry,cin)
        console.log("\x1b[32m  candidat suprimer avec succses    \x1b[0m");
     }
}
module.exports=suprimerCandidat
