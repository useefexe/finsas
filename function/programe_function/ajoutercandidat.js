const prompt=require('prompt-sync')()
const findcincandidat=require('../retulisable-fct/findcandidat')
//=
function Ajoutercandidat(array){
    console.log("\x1b[33m===========================ajouter un candidat=============================== '\x1b[0m");
    let candidatcin=undefined
    do{
        candidatcin=prompt("entrer un cin qui n existe pas dans la base de donne ") 
    }while(findcincandidat(array,candidatcin)!==-1 && candidatcin!==undefined)
        let  nom=prompt("enter le nom de candidat  ")
        let  prennom=prompt("enter le nom de candidat  ")
        let   partiPolitique=prompt("enter la partie politique de candidat   ")
        if(partiPolitique===""){
            partiPolitique="Indépendant"
        }
        let age =prompt("enter l age de  candidat   ")
        const candidat={
            cin :candidatcin,
            nom :nom,
            prenom:prennom,
            partiPolitique:partiPolitique,
            age:Number(age),
            electeurs:[]

        }
       array.push(candidat)
}     

module.exports=Ajoutercandidat