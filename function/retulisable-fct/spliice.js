
const lnght=require('../retulisable-fct/lenght.js')

function spliice(array, start) {
  for (let i = start; i < lnght(array) - 1; i++) {
    array[i] = array[i + deleteCount];
  }

  array.length = array.length - 1;
}

module.exports=spliice