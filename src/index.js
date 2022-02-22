import validator from './validator.js';

let btnVerificar = document.getElementById('btnVerificar');
btnVerificar.addEventListener('click', grabarDigitos) 

/* let mostrarMensaje = document.getElementById('mensaje');
mostrarMensaje.addEventListener('click', mostrar) 
 */


function grabarDigitos() {
    var digito = document.getElementById("digito").value;
    // let convertirDigito=parseInt(digito);
    // console.log(convertirDigito);
    // console.log(validator);
   //validator.isValid(digito);
    if (validator.isValid(digito)) {
        // console.log("La tarjeta ingresada es valida"); 
        alert("La tarjeta ingresada es valida")
            }

    else {
        //console.log("invalido"); 
        alert("La tarjeta ingresada NO es valida")
            }
            

    let maskedNumber= validator.maskify(digito);
    console.log(maskedNumber);
}
