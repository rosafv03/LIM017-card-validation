import validator from './validator.js';
let check = document.getElementById('check');
check.addEventListener('click', grabarDigitos) 

function grabarDigitos() {
    let digit = document.getElementById("digit").value;
    let maskedMessage=document.getElementById('message0');
    let checkedMessage=document.getElementById('message')
    let maskedNumber=validator.maskify(digit);
    let validNumber=validator.isValid(digit);    
    if (digit=="") {
     document.getElementById('message').innerHTML = " Por favor ingresa un número de tarjeta";
    }
    else{
            if  (validNumber==true) {
                checkedMessage.innerHTML = " ✔  La tarjeta ingresada es valida";
                maskedMessage.innerHTML= maskedNumber;
            }
            else {
                checkedMessage.innerHTML = " ✘ La tarjeta ingresada NO es valida";
                masked.innerHTML= maskedNumber;
            } 
    }
    }
