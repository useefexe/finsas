const lnght=require('./lenght.js')

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
        let candidat=[]
         if( politiquefind(res,array[i].partiPolitique)===-1){
        for (let j = 0; j < lnght(array); j++) {
           
           if(array[i].partiPolitique===array[j].partiPolitique ){
            candidat.push(array[i].cin)
           count++
           }}
        
         let partipol={
            name:array[i].partiPolitique,
            count:count,
            candidat:candidat
        }
        res.push(partipol)}
        
    }
    return  res
}

module.exports=politiquesort