//for ex:
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
//   console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
//   console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
//   console.log(alphabet[k]);
}

//soluttion
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i <= len-1; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();