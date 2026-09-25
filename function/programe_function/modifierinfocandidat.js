const prompt = require('prompt-sync')()
const findcandidat=require('../retulisable-fct/findcandidat.js')

function modiferinfocandidat(candidatarry) {
  console.log("\n")
  console.log("\x1b[34m===========================modifier les info d un candidat=============================== '\x1b[0m");
  const cincand = prompt(" entere  cin de candidat : ")
  let index = findcandidat(candidatarry, cincand)
  if (index !== -1) {
    const age = prompt("entere le neveau age de candidat |" + candidatarry[index].nom + "| pour skipper modification d age cliquer sur " + "\x1b[35m 0  '\x1b[0m" + ":")
    if (age !== '0' && isNaN(Number(age)) === false) {
      candidatarry[index].age = Number(age)
    }
    if (isNaN(Number(age))) {
      console.log("\x1b[31m modification d age non effectuer il faut entrer un age valide  \x1b[0m");
    }
    const partiPolitique = prompt("entere le neveau partie politique  |" + candidatarry[index].nom + " |pour skipper modification d age cliquer sur " + "\x1b[35m 0  '\x1b[0m" + ":")
    if ( partiPolitique !== "") {
      candidatarry[index].partiPolitique = partiPolitique
    }
    if (partiPolitique === "") {
      console.log("\x1b[31m modification d partie politique  non effectuer il faut entrer partie politique non vide   \x1b[0m");
    }

  } else {
    console.log("\x1b[31m cin de candidat non trouvable voir liste de candidat et ressayer    \x1b[0m");
  }
  console.log("\n")
}  


module.exports=modiferinfocandidat