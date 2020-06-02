//modulo vamos a construir
//objeto literal
let calculadora = {
    //quiero sumar y restar

    sumar : function (numeroA, numeroB) {
       return numeroA + numeroB;
    },
    restar : function (numeroA, numeroB) {
        return numeroA - numeroB;
    },
    multiplicar : function (numeroA, numeroB){
        if (numeroA == 0 ||  numeroB ==0){
            return ("Segui participando, no podes multiplicar por cero.");
        } //podemos ponerlo dentro de un else tambien
            return numeroA * numeroB;
        
    },
    dividir : function (){

    }
    
}
//cuanto mas agregue, mas va a crecer su funcionalidad.

//manera de exportar algo desde un archivo para usar en otro
//en un objeto literal podemos usarlas en otros archivos. La dejamos disponible para exportar. Agrupar un monton de funcionalidad
module.exports = calculadora;