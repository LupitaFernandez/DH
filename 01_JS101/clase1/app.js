//agrupar que tenga estos poderes, calculadora


function sumar (numeroA, numeroB){
    return numeroA + numeroB;
}



//function restar (numeroA, numeroB){
//   return numeroA - numeroB;
//}

//funcionalidad de un modulo que hayamos creado
//esta emtidad calculadora, quitarla
//variable como se llama el archivo 
//require (archivo)
//./ en el mismo archivo que tenes 
//misma altura, es estar en la misma carpeta, quiere decir que conviven en el mismo lugar, misma carpeta

let calculadora = require ("./calculadora");
console.log (calculadora);


//console.log (calculadora.sumar(1,5))
//console.log (calculadora.restar (100,5))