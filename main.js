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
const candidat=[{
        cin: "GH456789",
        nom: "El Idrissi",
        prenom: "Omar",
        partiPolitique: "Parti A",
        age: 38,
        electeurs: [
            "EL400001",
            "EL400002",
            "EL400003",
            "EL400004",
            "EL400005",
            "EL400006",
            "EL400007",
            "EL400008"
        ]
    },


    {
        cin: "KL678901",
        nom: "Fassi",
        prenom: "Karim",
        partiPolitique: "Parti C",
        age: 52,
        electeurs: [
            "EL600001",
            "EL600002",
            "EL600003",
            "EL600004",
            "EL600005",
            "EL600006",
            "EL600007",
            "EL600008",
            "EL600009"
        ]
    },

    {
        cin: "MN789012",
        nom: "Tazi",
        prenom: "Mehdi",
        partiPolitique: "Parti B",
        age: 41,
        electeurs: [
            "EL700001",
            "EL700002",
            "EL700003",
            "EL700004",
            "EL700005",
            "EL700006"
        ]
    },

    {
        cin: "QR901234",
        nom: "Berrada",
        prenom: "Anas",
        partiPolitique: "Parti C",
        age: 47,
        electeurs: [
            "EL900001",
            "EL900002",
            "EL900003",
            "EL900004"
        ]
    },

    {
        cin: "ST012345",
        nom: "Naciri",
        prenom: "Reda",
        partiPolitique: "Parti c",
        age: 36,
        electeurs: [
            "EL1000011",
            "EL1000012",
            "EL1000013",
            "EL1000014",
            "EL1000015",
            "EL1000016",
            "EL1000017"
        ]
    },

    {
        cin: "UV123789",
        nom: "Tahiri",
        prenom: "Ismail",
        partiPolitique: "Parti B",
        age: 44,
        electeurs: [
            "EL110001",
            "EL110002",
            "EL110003",
            "EL110004",
            "EL110005",
            "EL110006",
            "EL110007",
            "EL110008",
            "EL110009",
            "EL110010"
        ]
    },

    {
        cin: "WX234890",
        nom: "Mansouri",
        prenom: "Zakaria",
        partiPolitique: "Parti C",
        age: 31,
        electeurs: [
            "EL120001"
        ]
    }
];


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