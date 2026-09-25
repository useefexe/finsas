
const lnght=require('./lenght.js')

function remove(array, start) {
  for (let i = start; i < lnght(array) - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
}

module.exports=remove