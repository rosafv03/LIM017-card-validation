const validator = {
  isValid: function (card) {
      
    let arrayNumber = Array.from(card);
    let sumNumber = 0;
    let result = ""
    arrayNumber.reverse();
     console.log("Los number son: " + arrayNumber.join(''));
     console.log("Los number invertidos son: " + arrayNumber); 

      for (let i = 0; i < arrayNumber.length; i++) {
      let number= parseInt(arrayNumber[i]);
      if ((i + 1) % 2 == 0) {  //si es par
        number *= 2; // number = number*2
          if (number >= 10) {
          number -= 9;
        }
      }
      sumNumber = sumNumber + number;

     // console.log("aplicando lunh los digitos quedan ordenados asi " + number) 
      }
    
   // console.log("la suma de cifras del arreglo queda asi: " + sumNumber); 
      if (sumNumber % 10 == 0) {
      result = true;
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
      for (let i = 0; i < arrayNumber.length-4; i++) {
        mask.push('#');
      }
      //console.log(mask)
      for (let i = arrayNumber.length-4; i <arrayNumber.length ; i++) {
        noMask.push(arrayNumber[i]);
    }
      let arrayEnmascarado=[...mask,...noMask].join('')
      return arrayEnmascarado;
      }


}


export default validator;