const lnght=require('./lenght')
let arr = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: ["CD987654", "EF456789"]
    },
    {
        cin: "XY654321",
        nom: "Alaoui",
        prenom: "Yassine",
        partiPolitique: "Parti du Progrès",
        age: 35,
        electeurs: ["GH123456", "IJ789012", "KL345678"]
    },
    {
        cin: "MN789012",
        nom: "Benali",
        prenom: "Salma",
        partiPolitique: "Indépendante",
        age: 29,
        electeurs: ["OP234567"]
    },
    {
        cin: "QR345678",
        nom: "El Amrani",
        prenom: "Omar",
        partiPolitique: "Alliance Nationale",
        age: 52,
        electeurs: ["ST678901", "UV123456", "WX789012", "YZ345678"]
    }
];

function sortbyvote(arry){
    for (let i = 0; i < lnght(arry); i++) {
        for (let j = 0; j < lnght(arry)-1; j++) {
            
            if(lnght(arry[j].electeurs)<lnght(arry[j+1].electeurs)){
                let swp=arry[j]
                arry[j]=arry[j+1]
                arry[j+1]=swp
            }
            
        }
        
    }
}
module.exports=sortbyvote