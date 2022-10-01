// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for password characters
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var uppercase = alphabet.toUpperCase();
var num = "1234567890"
var special = "!@#$%^&*()+=-_\"\'<>.:;[]{}|~`"

//converts to arrays
var lower = alphabet.split("");
var upper = uppercase.split("");
var numArr = num.split("");
var specArr = special.split("");



console.log(lower);
console.log(upper);
console.log(specArr);
console.log(numArr);




function generatePassword(){
  var password = "";
  var arr = [];
  var charNum = window.prompt("Enter a number between 8 and 128");
  if(charNum >=8 && charNum <= 128){
    var lowerBool = confirm("do you want lowercase letters in your password?");
    var upperBool = confirm("do you want uppercase letters in your password?");
    var numBool = confirm("do you want numbers in your password?");
    var specBool = confirm("do you want special characters in your password?");

    if(lowerBool && upperBool && numBool &&specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*4);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else if(random ===1){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }else if(random === 2){ 
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }else {
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);  
        }
      }
      password = arr.toString();
      password = password.replace(/,/g,'');
      
    }else if(lowerBool && upperBool && numBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*3);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else if(random ===1){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }else{
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(lowerBool && upperBool && specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*3);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else if(random ===1){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }else{
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(lowerBool && numBool && specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*3);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else if(random ===1){
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);
        }else{
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');


    }else if(upperBool && numBool && specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*3);
        if(random === 0){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }else if(random ===1){
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);
        }else{
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(lowerBool && upperBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*2);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else {
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(lowerBool && numBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*2);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else {
        arr.push(numArr[Math.floor(Math.random()*num.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(lowerBool && specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*2);
        if(random === 0){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
        }else {
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');
    }else if(upperBool && numBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*2);
        if(random === 0){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }else {
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);1
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(upperBool && specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*2);
        if(random === 0){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
        }else {
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(numBool && specBool){
      for(var i =0 ; i<charNum;i++){
        var random = Math.floor(Math.random()*2);
        if(random === 0){
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);
        }else {
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
        }

      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(lowerBool){
      for(var i =0 ; i<charNum;i++){
        arr.push(lower[Math.floor(Math.random()*lower.length)]);
      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(upperBool){
      for(var i =0 ; i<charNum;i++){
        arr.push(upper[Math.floor(Math.random()*upper.length)]);
      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else if(numBool){
      for(var i =0 ; i<charNum;i++){
        arr.push(numArr[Math.floor(Math.random()*numArr.length)]);
      }
      password = arr.toString();
      password = password.replace(/,/g,'');
    }else if(specBool){
      for(var i =0 ; i<charNum;i++){
        arr.push(specArr[Math.floor(Math.random()*specArr.length)]);
      }
      password = arr.toString();
      password = password.replace(/,/g,'');

    }else{
      password = "no characters selected";
    }




  }else{
    alert("invalid input try again");
    }



return password;
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


