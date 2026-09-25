const lnght = require('./lenght.js')
// cin ou nom 
function findcondidat(arry, inp) {
    let index = -1
    for (let i = 0; i < lnght(arry); i++) {
        if (arry[i].cin === inp) {
            index = i
                ;
        }
    }
    for (let j = 0; j < lnght(arry); j++) {
        if (arry[j].nom === inp) {
            index = j
                ;
        }
        
    }
    return index
}
module.exports = findcondidat
