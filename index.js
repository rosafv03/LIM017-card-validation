import validator from './validator.js';
const check = document.getElementById('check');
check.addEventListener('click', record) 
//document.getElementById('form-register').reset();

function record() {
    const digit = document.getElementById("digit").value;
    const maskedMessage=document.getElementById('message0');
    const checkedMessage=document.getElementById('message')
    const maskedNumber=validator.maskify(digit);
    const validNumber=validator.isValid(digit);    
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
               // maskedMessage.innerHTML= maskedNumber;
            } 
    }
    
    }
