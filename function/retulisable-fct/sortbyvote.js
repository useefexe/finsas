const lnght = require('./lenght')

function sortbyvote(arry) {
    let sortedarry = arry
    for (let i = 0; i < lnght(arry); i++) {
        for (let j = 0; j < lnght(sortedarry) - 1; j++) {

            if (lnght(sortedarry[j].electeurs) < lnght(sortedarry[j + 1].electeurs)) {
                let swp = sortedarry[j]
                sortedarry[j] = sortedarry[j + 1]
                sortedarry[j + 1] = swp
            }

        }
    }
    return sortedarry
}

module.exports = sortbyvote