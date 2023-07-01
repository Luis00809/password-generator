// Assignment Code
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
generateBtn.addEventListener("click", writePassword);

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

do {
  
if(low) {
let lowLettersIndex = Math.floor(Math.random() * lowCaseletters.length);
let lowLettersDisplay = lowCaseletters[lowLettersIndex];
console.log(lowLettersDisplay);
charBank = charBank + lowLettersDisplay;
} 

if(upper) {
  let upIndexLetters = Math.floor(Math.random() * upCaseletters.length);
  let upCaseDisplay = upCaseletters[upIndexLetters];
  console.log(upCaseDisplay); 
  charBank = charBank + upCaseDisplay;

} 

if(integer) {
  let intIndex = Math.floor( Math.random() * intOptions.length);
  let intDisplay = intOptions[intIndex];
  console.log(intDisplay);
  charBank = charBank + intDisplay;

} 

if(special) {
  let specialIndex = Math.floor(Math.random() * specialList.length);
  let specialDisplay = specialList[specialIndex];
  console.log(specialDisplay);
  charBank = charBank + specialDisplay;
}

if(charBank == '') {
  alert('Please select from the options provided.')
  return;
}
} while (charBank.length < passwordLength);

console.log(charBank);
// displays in sets of 4. Ex: input of 8 == 8, while input of 9 == 12 character set
return charBank;
}

writePassword();

