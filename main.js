const prompt = require('prompt-sync')()
const ajoutercandidat=require('./function/programe_function/ajoutercandidat.js')
const ajouterplusieurcnd=require('./function/programe_function/ajouterplusieurcnd.js')
const affichercandidat=require('./function/programe_function/affichercandidat.js')
const ajouterVote=require('./function/programe_function/ajoutervote.js')
const modiferinfocandidat=require('./function/programe_function/modifierinfocandidat.js')
const suprimerCandidat=require('./function/programe_function/suprimercandidat.js')
const recherchercandidat=require('./function/programe_function/recherchercandidat.js')
const afiicherstat=require('./function/programe_function/statistique.js')
const votearr=[]
const candidat=[]

let choix;

do {
    console.log("\n\x1b[36m=============== MENU PRINCIPAL=================\x1b[0m");
    console.log("\x1b[37m1. Ajouter un nouveau candidat\x1b[0m");
    console.log("\x1b[37m2. Ajouter plusieurs candidats\x1b[0m");
    console.log("\x1b[37m3. Afficher la liste des candidats\x1b[0m");
    console.log("\x1b[37m4. Voter pour un candidat\x1b[0m");
    console.log("\x1b[37m5. Modifier les informations d'un candidat\x1b[0m");
    console.log("\x1b[37m6. Supprimer un candidat\x1b[0m");
    console.log("\x1b[37m7. Rechercher un candidat\x1b[0m");
    console.log("\x1b[37m8. Statistiques de l'élection\x1b[0m");
    console.log("\x1b[33m0. Quitter\x1b[0m");
    console.log("\x1b[36m======================================================\x1b[0m");

    choix = Number(prompt("Choisissez une option : "));
    console.log("\n4")

    switch (choix) {
        case 1:
            ajoutercandidat(candidat);
            break;

        case 2:
            ajouterplusieurcnd(candidat);
            break;

        case 3:
            affichercandidat(candidat);
            break;

        case 4:
            ajouterVote(votearr,candidat);
            break;

        case 5:
            modiferinfocandidat(candidat);
            break;

        case 6:
            suprimerCandidat(candidat);
            break;

        case 7:
            recherchercandidat(candidat);
            break;

        case 8:
            afiicherstat(candidat);
            break;

        case 0:
            console.log("\x1b[33mAu revoir !\x1b[0m");
            break;

        default:
            console.log("\x1b[31mChoix invalide ! Réessayez.\x1b[0m");
    }

} while (choix !== 0);