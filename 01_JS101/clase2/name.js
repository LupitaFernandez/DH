let unosDatosEnJSON = '{ "name": "John", "age":30, "city": "New York"}' ; //esto es un json
let datosParseados = JSON.parse (unosDatosEnJSON); //objeto literal


let volverAJson = JSON.stringify (datosParseados);
//volver a json, stringuificarlo, convertirlo en un string.


console.log (unosDatosEnJSON); //un objeto literal, no lo podemos poner .name, nos da undefined.
console.log (datosParseados); //propiedades objetto literal

//metodos de string nativas por ser un string y js la tiene disponible

let unString = "Ad lorem ipsum dolor sit amet";
console.log (unString.length); //caracteres de un string
console.log (unString.indexOf("x")); //chequea de alguna manera si este valor(x) existe en este string. no hay entonces, me retorna una -1

console.log (unString.slice (3, 10)) //recorta la frase

console.log (unString.trim ())//trim= ingreso espacios innecesarios

let unSegundoString = "Kill Bill, Pulp Fiction, Jackie Brown";
console.log (unSegundoString.split(","));// consigo un array de diferentes posiciones, tener cuidado de que todos esten bien}

let unTercerString = "Aguante PHP !";
console.log (unTercerString.replace( "PHP", "JavaScript")) //reemplazar palabras

//conversion de tipos de datos
console.log (typeOf [1,2,3]);//object
//convertir algo en un nro
console.log ("19" + 20); //1920, el 19 no es operable como un nro

parseFloat ('12.6')// 12.6
parseFloat ('9,57')// 9 no reconoce las comas 