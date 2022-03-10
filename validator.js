const validator = {
  isValid: function (card) {
      //Declarando variables con las que se trabajará el algoritmo de luhn
    let arrayNumber = Array.from(card);
    let sumNumber = 0;
    let result = ""
    arrayNumber.reverse();
     console.log("Los number son: " + arrayNumber.join(''));
     console.log("Los number invertidos son: " + arrayNumber); 
      //recorrido de array
      for (let i = 0; i < arrayNumber.length; i++) {
      let number= parseInt(arrayNumber[i]);
      if ((i + 1) % 2 == 0) {  //si es par
        number *= 2; // number = number*2
          if (number >= 10) { //si la multiplicación es mayor o igual que 10
          number -= 9;
        }
      }
      sumNumber = sumNumber + number;
     // console.log("aplicando lunh los digitos quedan ordenados asi " + number) 
      }
    
   // console.log("la suma de cifras del arreglo queda asi: " + sumNumber); 
      if (sumNumber % 10 == 0) {
      result = true; //siginifica que si cumple la condición y si es valida
      }
      else {
      result = false;
      }
    // console.log(result); 
      return result;
     
  },

    maskify: function(card){
      let arrayNumber = Array.from(card);
      let noMask=[];
      let mask=[];
      for (let i = 0; i < arrayNumber.length-4; i++) { //recorrer el arreglo hasta la longitud -4
        mask.push('#');
      }
      //console.log(mask)
      for (let i = arrayNumber.length-4; i <arrayNumber.length ; i++) { //empieza en la longitud -4 hasta el final, que muestre los digitos
        noMask.push(arrayNumber[i]);
    }
      let arrayEnmascarado=[...mask,...noMask].join('')
      return arrayEnmascarado;
      }
}
export default validator;