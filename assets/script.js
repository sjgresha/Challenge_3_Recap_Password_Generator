// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?'];
let passwordLength;


// Write password to the #password input
function writePassword() {
  //added passwordCharacters and made it empty so it was clear before generatePassword is ran
  let passwordCharacters = [];
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    passwordLength = prompt("How long will you password be?");
    //Checking if password length is captured
    console.log(passwordLength);
    if (passwordLength === null) {
      return;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
      return;
    }

    const lowerCaseYes = confirm("Do you want to include lowercase letters?");
    if (lowerCaseYes) {
      passwordCharacters = passwordCharacters.concat(lowerCase);
    }

    const upperCaseYes = confirm("Do you want to incliude uppercase letter?");
    if (upperCaseYes) {
      passwordCharacters = passwordCharacters.concat(upperCase);
    }

    const numbersYes = confirm("Do you want to include numbers?");
    if (numbersYes) {
      passwordCharacters = passwordCharacters.concat(numbers);
    }

    const specialYes = confirm("Do you want to include special characters?");
    if (specialYes) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    //checking to see if all selected characters are captured
    console.log(passwordCharacters);

    let randomPassword = '';

    for (var i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      let randomCharacter = passwordCharacters[randomIndex];
      randomPassword += randomCharacter;
      //checking if randomPassword is captured
      console.log(randomPassword);
    }

    return randomPassword;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
