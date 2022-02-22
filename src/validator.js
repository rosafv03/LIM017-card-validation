const validator = {
  isValid: function (digito) {
      //let convertirDigito = parseInt(digito);
    //console.log(convertirDigito);
    let arrayNumber = Array.from(digito);
    let arrayNumberInver = [];
    let sumaNumber = 0;
    let resultadoFinal = ""
    for (let i = 0; i < arrayNumber.length; i++) {
      arrayNumberInver.push(arrayNumber[i]);
    }
    arrayNumberInver.reverse();
     console.log("Los numero son: " + arrayNumber.join(''));
    //console.log("Los numero invertidos son: " + arrayNumberInver); 

    for (let i = 0; i < arrayNumberInver.length; i++) {
      let numero= parseInt(arrayNumberInver[i]);
      if ((i + 1) % 2 == 0) {
        numero *= 2;
          if (numero >= 10) {
          numero -= 9;
        }
      }
      sumaNumber = sumaNumber + numero;

     // console.log("aplicando lunh los digitos quedan ordenados asi " + numero) 
        }
    
   // console.log("la suma de cifras del arreglo queda asi: " + sumaNumber); 
    if (sumaNumber % 10 == 0) {
      resultadoFinal = true;
    }
    else {
      resultadoFinal = false;
    }
    // console.log(resultadoFinal); 
    return resultadoFinal;

     

  },

  /* function maskify(resultadoFinal){
    let cantidad =validator.length-4;
    let mascara='';
    for (let i=0;i<cantidad;i++){
      mascara=mascara+"*";
    }
return mascara + validator.substring((resultadoFinal.length-4),(resultadoFinal.length));
    return cardNumber;
  } */


  maskify: function(digito){
    let arrayNumber = Array.from(digito);
    console.log(digito);
    let arrayNumberInver = [];
    console.log(arrayNumberInver);
    for (let i = 0; i < arrayNumber.length; i++) {
     arrayNumberInver.push(arrayNumber[i]);
    }
    console.log(arrayNumberInver);
    arrayNumber.splice(0,arrayNumber.length-4,"*","*","*","*","*","*","*","*","*","*","*","*");
    let arrayEnmascarado=arrayNumber.join('');
    console.log(arrayEnmascarado);
    return arrayEnmascarado;
    }
}


export default validator;