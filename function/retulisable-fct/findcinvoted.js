const lnght = require('./lenght.js')
function findcinvoted(arry, cin) {
    let index = -1
    for (let i = 0; i < lnght(arry); i++) {
        if (arry[i] === cin) {
            index = i
                ;
        }
    }
    return index
}
module.exports = findcinvoted
