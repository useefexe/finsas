const lnght=require('./lenght.js')
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
    partiPolitique: 'Alliance Nationale',
    age: 40,
    electeurs: [ 'CD987654', 'EF456789' ]
  }
]
function politiquesort(array){
     const res=[]

   const politiquefind=(res, pol)=> {
    let index = -1
    for (let i = 0; i < lnght(res); i++) {
        if (res[i].name === pol) {
            index = i
                ;
        }
    }
    return index
}
   
    for (let i = 0; i < lnght(array); i++) {
        let count=0
         if( politiquefind(res,array[i].partiPolitique)===-1){
        for (let j = 0; j < lnght(array); j++) {
           
           if(array[i].partiPolitique===array[j].partiPolitique ){
           count++
           }}
        
        let partipol={name:array[i].partiPolitique,count:count}
        res.push(partipol)}
        
    }
    return  res
}
module.exports=politiquesort