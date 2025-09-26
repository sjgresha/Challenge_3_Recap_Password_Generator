// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';',':',',','.','<','>','?'];


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    const passwordLength = prompt("How long is your password?");
    if (passwordLength === null) {
      return;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
      return;
    }

    var lowerCaseYes = confirm("Do you want to include lowercase letters?");
    if (lowerCaseYes) {
      passwordCharacters = passwordCharacters.concat(lowerCase);
    } 
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
