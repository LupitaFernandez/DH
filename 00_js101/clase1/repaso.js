console.log ("Hola a todos");

const IVA 
//constante va con mayuscula


//Objeto literal
let auto = ["Fiat", 1990, "Rojo"]


let otroAuto = {
    marca : "Fiat",
    anio: 1990,
    color: "Rojo",
    //funcion llamada metodo
    tocarBocina: function (){
        return "Dale maestro";
    },
    //prueba con this, es hacer referencia hacia ese objeto. A este objeto, le corresponde este "color"
    //objeto literal, no se puede hacer en otros proyectos.
    colorDelAuto: function (){
        return "El color del auto es " + this.color;
    }
};

console.log (otroAuto.colorDelAuto());

//function constructora empiezan con mayuscula. Mas de tres propiedades. Objeto con unas propiedades. Para este molde (alumno)

function Alumno (nombre, curso, turno){
    this.nombre = nombre,
    this.curso = curso,
    this.turno = turno;
}

let unNuevoAlumno = new Alumno ("Monica", "FullStack", "Noche");
let otroAlumno = new Alumno ("Guada", "Full Stack", "Tarde");
//se puede agregar la cantidad que queramos de alumnos

console.log (otroAlumno) //instancia de alumno, me sale un array.


// condicionales
//if (condicion) {
    //pasa esto
//} else {
    //lo que pasa si la condicion de arriba no se cumple
//}


//If ternario let (variable), si es viernes, es esto
let dia = "Viernes";
let esViernes = (dia == "Sabado") ? "Hay pizza" : "Hay pastas";

console.log (esViernes);

//cuidado con los bucles infinitos
//aunque no se cumpla la condicion una vez, sucede con el do while. Repetidas cosas que podemos hacer dentro de un limite. 
//el for tambien es un bucle pero este es mas robusto y mas seguro. El while ahorra lineas. 