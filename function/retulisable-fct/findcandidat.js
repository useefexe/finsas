const lnght=require('./lenght.js')
function findcondidat(arry,cin){
    let index=-1 
    for (let i = 0; i < lnght(arry); i++) {
        if(arry[i].cin===cin){
            index=i
            ;}
    }
    return index
}
module.exports=findcondidat
