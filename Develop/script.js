// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//psuedocode
// addEventListener for id buttons

// create arrays for all random values upper,lower,special

//function to prompt user for password option PasswordOptions
//--include a prompt for how many characters for password to contain

//conditional statements 
//if password is smaller than 8 
//alert

//create 4 different variables depending on what the user wants their password to have

//compare edge case whether password is valid

//generatePasswordFunction;
//store new password in a array

// Pseudocode
  // Gather user input on password requirements
    // input for # of characters
    // input for special characters
    // input for lowercase
    //inputt for uppercase
    // input for numbers 

  // Validate user input
    // num of characters between 8 and 128
    // what they answered true to include 
    
  // Decide how to choose what characters to include 
  // Randomly grab values from eachincludedd category 
  // Assemble password stringtot be returned

  // return "password string";