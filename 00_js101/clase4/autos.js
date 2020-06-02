let autos = {
    lista: [
            {
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2016,
                color: "black",
            },
            {
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2020,
                color: "red",
            },
            {
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2015,
                color: "white",
            },
            {
                marca: "volkswagen",
                modelo: "golf",
                anio: 2016,
                color: "white",
            },
            {
                marca: "volkswagen",
                modelo: "golf",
                anio: 2020,
                color: "gray",
            },
            {
                marca: "volkswagen",
                modelo: "golf",
                anio: 2019,
                color: "black",
            },
            {
                marca: "volkswagen",
                modelo: "vento",
                anio: 2019,
                color: "black",
            },
            {
                marca: "volkswagen",
                modelo: "vento",
                anio: 2014,
                color: "blue",
            },
            {
                marca: "volkswagen",
                modelo: "vento",
                anio: 2010,
                color: "white",
            },
            {
                marca: "volkswagen",
                modelo: "amarok",
                anio: 2020,
                color: "black",
            },
            {
                marca: "volkswagen",
                modelo: "amarok",
                anio: 2019,
                color: "white",
            },
            {
                marca: "volkswagen",
                modelo: "amarok",
                anio: 2010,
                color: "gray",
            },
            {
                marca: "audi",
                modelo: "tt",
                anio: 2019,
                color: "white",
            },
            {
                marca: "audi",
                modelo: "tt",
                anio: 2012,
                color: "black",
            },
            {
                marca: "audi",
                modelo: "a6",
                anio: 2020,
                color: "black",
            },
            {
                marca: "audi",
                modelo: "a6",
                anio: 2016,
                color: "red",
            },
            {
                marca: "audi",
                modelo: "a3",
                anio: 2016,
                color: "black",
            },
            {
                marca: "audi",
                modelo: "a3",
                anio: 2020,
                color: "black",
            },
            {
                marca: "audi",
                modelo: "q5",
                anio: 2018,
                color: "black",
            },
            {
                marca: "audi",
                modelo: "q5",
                anio: 2015,
                color: "blue",
            },
            {
                marca: "chevrolet",
                modelo: "camaro",
                anio: 2015,
                color: "red"
            },
            {
                marca: "chevrolet",
                modelo: "camaro",
                anio: 20120,
                color: "black"
            },
            {
                marca: "chevrolet",
                modelo: "camaro",
                anio: 2018,
                color: "white"
            },
            {
                marca: "chevrolet",
                modelo: "onix",
                anio: 2016,
                color: "gray"
            },
            {
                marca: "chevrolet",
                modelo: "onix",
                anio: 2017,
                color: "white"
            },
            {
                marca: "chevrolet",
                modelo: "onix",
                anio: 2019,
                color: "red"
            },
            {
                marca: "chevrolet",
                modelo: "cruze",
                anio: 2018,
                color: "black"
            },
            {
                marca: "chevrolet",
                modelo: "cruze",
                anio: 2020,
                color: "white"
            },
            {
                marca: "nissan",
                modelo: "sentra",
                anio: 2017,
                color: "black"
            },
            {
                marca: "nissan",
                modelo: "sentra",
                anio: 2020,
                color: "gray"
            },
            {
                marca: "nissan",
                modelo: "note",
                anio: 2018,
                color: "red"
            },
            {
                marca: "nissan",
                modelo: "note",
                anio: 2020,
                color: "white"
            },
            {
                marca: "nissan",
                modelo: "x-trail",
                anio: 2020,
                color: "brown"
            },
            {
                marca: "nissan",
                modelo: "x-trail",
                anio: 2016,
                color: "gray"
            },
        ],
        porColor: function(color) {
            let arrayFiltrado = [];
            for (let i = 0; i< this.lista.length; i++) {
                 if (this.lista [i].color.toLowerCase () == color.toLowerCase()) {
                     //va i porque incrementa
                 //quiero que me traigas los autos de color negro
                 arrayFiltrado.push (this.lista[i]);//pusheame el auto
            }  
        }
            return arrayFiltrado;   
          },
        porMarca: function(marca, unArray = this.lista) {//hago referencia al objeto que quiero ver, this
​           let arrayFiltrado = unArray.filter (function (elemento){
                return elemento.marca.toLowerCase () == marca.toLowerCase();//transformar minuscula o mayuscula.
});
let resultado = (arrayFiltrado.lenght ==0) ? "No hay autos": arrayFiltrado;
return resultado
return arrayFiltrado;
        },
        porAnio: function() {
            let arrayFiltrado = [];
​             this.lista.forEach (function (elemento){
    if (elemento.anio == anio){
        arrayFiltrado.push(elemento);

    }

})   
        return arrayFiltrado;        
        }
}

//inicio el repositorio git init
// git add app.js
//git autos.js
//para ignorar gitignore, que archivos no queres que reciba seguimiento.  *.pdf escribir en el archivo git ignore, para que no reciba seguimiento​
​// git status para chusmear, creamos el proyectobase, git commit -m para comentario
module.exports = autos;