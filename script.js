// Assignment Code
var generateBtn = document.querySelector("#generate");
let length;
const upCaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let word = 'adklfhsdkghghghghgh';
console.log(word[0]);

let wordUpper = word.toUpperCase();
console.log(wordUpper);

let charBank = '';

// here I will define generatePassword function
function generatePassword() {


// use a do-while loop, in a nested function, to prompt for a number and reject a value less than min and greater than max

function promptLength(min, max) {
  length;
  do {
    length = prompt('How many characters do you want to contain in your password?\nChose a number between 8 and 128');
  
  } while (isNaN(length) || parseInt(length, 10) < 8 || parseInt(length, 10) > 128);
  return parseInt(length, 10);
  
}

 let passwordLength = promptLength(8, 128)
 console.log(passwordLength);

// now we have the desired length
// works in the console


// at the end do I math.floor ... * all varibles to randomize all?






let low = confirm('Inclue lowercase letters?');
// found code snippet online, don't know arow functions, rather than typing aplphabet from a-z
const lowCaseletters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.map(letter => letter.toLowerCase());
})();

if(low) {

console.log('before: ' + charBank);
charBank = charBank + word;
console.log('after', charBank );
console.log('after ' + charBank );
// let lowLettersIndex = Math.floor(Math.random() * lowCaseletters.length);
// let lowLettersDisplay = lowCaseletters[lowLettersIndex];
// console.log(lowLettersDisplay);
// works in the console 
}





let upper = confirm('Include uppercase letters?');

if(upper) {
  let upIndexLetters = Math.floor(Math.random() * upCaseletters.length);
  let upCaseDisplay = upCaseletters[upIndexLetters];
  console.log(upCaseDisplay); 
  // works
}




let integer = confirm('include a numeric value?');
const intOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
if(integer) {
  console.log('before: ' + charBank);
  charBank = charBank + intOptions;
  console.log('after: ' + charBank);
  // let intIndex = Math.floor( Math.random() * intOptions.length);
  // let intDisplay = intOptions[intIndex];
  // console.log(intDisplay);
}
for(let i = 0; i < passwordLength; i++) {
  console.log(charBank[i]);
}


// let special = confirm('Include special characters?');
// const specialList = ['!', '”', '#', '$', '%', '&', "'", '(', ')',
//  '*', '+', ',', '-', '.', '/', ';', ':', '<', '=', '>', '?', '@', 
//  '[', '\ fix?', ']', '^', '_', '`', '{', '|', '}', '~'];

// if(special) {
//   let specialIndex = Math.floor(math.random() * specialList.length);
//   let specialDisplay = specialList[specialIndex];
//   console.log(specialDisplay);
// // function runs when i comment out snippet for special characters
// }

}



// Write password to the #password input
// generatePassword is undefined so I have to define it
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();