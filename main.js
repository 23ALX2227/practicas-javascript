// "hola"
// 9
// true

// const pi = 3.14

// pi

// pi = "pizza"

// constantes con arrays-----------------------------------------
// ---------------Forma de agregar con asignación:

//   posiciones:    0         1          2

// let frutas = ["manzana","frutilla"]
// let frutas2 = ["mandarina","tomate"]

//   length/cantidad:    2
// console.log(frutas.length) 

// ---------------Forma de agregar a una posición:

// frutas[2] = "banana"
// console.log("ejemplo frutas: ",frutas)

// ---------------Forma de agregar con unshift y push:

// frutas.unshift("pera")
// console.log(frutas)

// const algo = [1,2,3]
// algo.push(4)
// console.log(algo)

// ---------------Forma de quitar con shift y pop:

//  frutas.shift()
//  console.log(frutas)

//  frutas.pop()
//  console.log(frutas)

// Spread operator:

// frutas = [...frutas,"pera",...frutas]
// console.log(frutas)

// Ahora, como va a aparecer el proximo console.log?

// frutas.push(frutas2)
// console.log(frutas)

// Ahora vemos la diferencia:

// frutas.push(...frutas2)
// console.log(frutas)


// Con spread operator estoy creando un nuevo array, de las otras formas estoy respetando el array base.

// let miArray = [1,2,3]

// let nuevoArray = miArray;
// nuevoArray[0] = 4
// console.log(nuevoArray)

// console.log(miArray)

//-----

// let miArray = [1,2,3]
// let nuevoArray = [...miArray]
// nuevoArray[0] = 9
// console.log(nuevoArray)

// console.log(miArray)


// Constantes con objetos-----------------------------------------------------
// ---------------Forma de agregar con punto y acceder a valores de propiedades de un objeto:

// const miObjeto = {
//   nombre:"ada",
//   altura:1.89
// }

// console.log(miObjeto.altura)
// miObjeto.peso = 68


// console.log(miObjeto)

// ---------------Forma de agregar con corchetes:

// const miObjeto = {
//   nombre:"ada",
//   altura:1.89
// }
// miObjeto["peso"] = 68
// console.log(miObjeto)

// ---------------Referencias con corchetes:

// let nombreProp = "altura"

// const miObjeto = {
//   nombre:"ada",
//   altura:1.89
// }
// miObjeto[nombreProp] = 1.90
// console.log(miObjeto)

// ---------------Forma de agregar con spread operator

// let miObjeto = {
//   nombre: "Juan",
//   edad: 30
// };

// miObjeto = {...miObjeto,ciudad: "Madrid",profesion: "Programador"};
// console.log(miObjeto);

// ----------------------------------FIN DE CONSTANTES Y VARIABLES-----------------------------

// --------------------------------------BIENVENIDOS OPERADORES ARITMÉTICOS:

// Ej sin variables:

// console.log(5 + 6)

// Ej con variables1 (concatenando texto):

// let nombre = "Pedro"
// let apellido = "Gomez"
// let espacio =  " "
// let nombreCompleto =  nombre + espacio + apellido 
// console.log(nombreCompleto)

// let resultado = 5 + 6
// console.log(resultado)

// Ej con variables2:

// let primerNumero = 5
// let segundoNumero = 6
// console.log(primerNumero + segundoNumero)

// ---------------------Explicar Módulo % y su resto:

// let primerNumero = 10
// let segundoNumero = 2
// let resultado = primerNumero % segundoNumero

// Que creen que devuelva?

// console.log(resultado)

// --------------------------------------BIENVENIDOS OPERADORES DE COMPARACIÓN:

// let primerNumero = 10
// let segundoNumero = 5
// let verdaderoONo = primerNumero > segundoNumero
// console.log(verdaderoONo)
// console.log(10 > 5)
// console.log(5 > 10)
// console.log(5 > 5)
// console.log(5 >= 5)
// console.log(!(5>5))
// console.log(5!=5)
// console.log( 5 == "5")
// console.log(5 ==="5")

//--------------------------------------BIENVENIDOS OPERADORES LÓGICOS:

// let nombre = "pedro"
// let edad = 20

// Afirmo/Sentencias:

// console.log(nombre === "pedro" && edad === 20)
// console.log(nombre !== "pedro" && edad === 20)
// console.log(nombre === "pedro" && edad === "20")

// console.log(nombre === "pedro" || edad === 20)
// console.log(nombre === "juan" || edad === 20)
// console.log(nombre === "pedro" || edad === "20")

// ----------------------------------FIN DE OPERADORES-------------------------------------------

// --------------------------------------BIENVENIDOS A IF/ELSE ( EXPLICAR EL CONCEPTO ):

// Bifurcar el camino a ser tomado segun una condición:

// let nombre = "Julio"
// let edad = 1
// let altura = 1.80
// let primerMetodoDePago = "papel"
// let segundoMetodoDePago = "tarjeta"

// Ej1:---(identificación)

// if(nombre === "Carlos"){
//   console.log("es carlos")
// }else{
//   console.log("no es carlos")
// }

// -------------------------

// Ej2:-(puerta de boliche):

// if(edad >= 18){
//   console.log("puede entrar")
// }else{
//   console.log("no puede entrar")
// }

// -------------------------

// Ej3:------(selección de tripulantes):

// if(edad >= 18 && altura >= 1.70){
//   console.log("puede ser tripulante")
// }else{
//   console.log("no puede ser tripulante")
// }

// -------------------------

// Ej4:------(método de pago)-(modificar para ejemplificar varios casos):

// if(primerMetodoDePago === "dinero" || segundoMetodoDePago === "tarjeta"){
//   console.log("puede pagar")
// }else{
//   console.log("no puede pagar")
// }

// -------------------------


// Ej5:------(if else if y else):

// let colorElegido = "verde";

// if (colorElegido === "rojo") {
//   console.log("La luz es de color rojo");
// } else if (colorElegido === "verde") {
//   console.log("La luz es de color verde");
// } else if (colorElegido === "azul") {
//   console.log("La luz es de color azul");
// } else {
//   console.log("la luz no machea...");
// }

// -------------------------

// (RECORDEMOS QUE LO QUE EL IF EVALUA ES LA VERACIDAD DENTRO DE SUS PARÉNTESIS)


// Abrir html hello y mostrar ejemplo de prompt y alert seteando la edad:
// https://github.com/4GeeksAcademy/html-hello

// 1 - Inicializamos el server con el comando
// 2 - Creamos el index.html
// 3 - Lo conectamos con el script
// <script src="./index.js"></script>
// 4 - Creamos el index.js:

// let edad = prompt("ingresa tu edad")

// if(edad >= 18){
//   alert("sos mayor y podés entrar")
// }else{
//   alert("sos menor y no podés entrar")
// }