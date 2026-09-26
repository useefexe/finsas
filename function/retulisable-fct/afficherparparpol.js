
const lnght = require('../retulisable-fct/lenght.js')
const prompt=require('prompt-sync')()
function afiicheerparpol(array){
    const partiepol=prompt(" entrer le nom de partie politique qui tu cherche :")
    let result=[]
    for (let i = 0; i < lnght(array); i++) {
        if(array[i].partiPolitique===partiepol){
           result.push(array[i])
        }  
    }
    
    if (lnght(result)>0) {
        console.log(`\x1b[34m========== Liste des candidats adherant en ${partiepol} ==========\x1b[0m`)

        for (let i = 0; i < lnght(result); i++) {
            console.log(
                `----mNom : ${result[i].nom} | Prénom : ${result[i].prenom}`
            )
        }
    }else{
         console.log("\x1b[31m se partie politique introuvable    '\x1b[0m");
    }


    }
    module.exports=afiicheerparpol