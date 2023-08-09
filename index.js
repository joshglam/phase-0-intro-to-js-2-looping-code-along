


function writeCards(names, event) {
  let newArray = []
  for (let i = 0; i < names.length; i++) {
  newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return newArray
}
 
function countDown(i) {
  while (i >= 0) {
    console.log(i--);
  }
  return i
}


console.log(countDown(5))