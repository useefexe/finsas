const prompt =require('prompt-sync')()
const findcandidat=require('../retulisable-fct/findcandidat.js')
const lnght=require('../retulisable-fct/lenght.js')
let arr=[
  {
    cin: 'QR345678',
    nom: 'El Amrani',
    prenom: 'Omar',
    partiPolitique: 'Alliance Nationale',
    age: 52,
    electeurs: [ 'ST678901', 'UV123456', 'WX789012', 'YZ345678' ]
  },
  {
    cin: 'XY654321',
    nom: 'Alaoui',
    prenom: 'Yassine',
    partiPolitique: 'Parti du Progrès',
    age: 35,
    electeurs: [ 'GH123456', 'IJ789012', 'KL345678' ]
  },
  {
    cin: 'AB123456',
    nom: 'Boushaba',
    prenom: 'Soufiane',
    partiPolitique: 'Indépendant',
    age: 40,
    electeurs: [ 'CD987654', 'EF456789' ]
  }
]
function recherchercandidat(canarry){
    console.log("\n")
      console.log("\x1b[36m===========================modifier les info d un candidat=============================== '\x1b[0m");
    const nom=prompt(" enter le nom de candidat qui tu recherche  : ")
    let index=findcandidat(canarry,nom)
    if(index!==-1){
          console.log(`\x1b[37mCIN: ${canarry[index].cin} | Nom: ${canarry[index].nom} | Prénom: ${canarry[index].prenom} | \x1b[32mVote: ${lnght(canarry[index].electeurs)}\x1b[0m`);
    }else{
        console.log("\x1b[31m nom  de candidat non trouvable voir liste de candidat et ressayer    \x1b[0m");
    }

}
recherchercandidat(arr)