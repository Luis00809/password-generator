var generateBtn = document.querySelector("#generate");
let length;
const lowCaseletters = 'abcdefghijklmnopqrstuvwxyz'
const upCaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const intOptions = '0123456789';
const specialList = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let charBank = '';
  
let passwordLength = prompt("How many characters do you want to contain in your password?\nChose a number between 8 and 128");
if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
  alert("Try Again.")
  return;
}
console.log(passwordLength);



let low = confirm('Inclue lowercase letters?');
let upper = confirm('Include uppercase letters?');
let integer = confirm('include a numeric value?');
let special = confirm('Include special characters?');


if(low) {
charBank = charBank + lowCaseletters;
} 

if(upper) {
  charBank = charBank + upCaseletters;
} 

if(integer) {
  charBank = charBank + intOptions;
} 

if(special) {
  charBank = charBank + specialList;
}

if(charBank == '') {
  alert('Please select from the options provided.')
  return;
}

let charDisplay = "";
for(let i = 0; i < passwordLength; i++) {
    let charIndex = Math.floor(Math.random() * charBank.length);
    charDisplay += charBank[charIndex];
    console.log(charDisplay);
}

console.log(charDisplay);
return charDisplay;
}


generateBtn.addEventListener("click", writePassword);
