
/* funciones ,constructores y clases*/

class Usuario {
    constructor (nombre, dni, telefono, dirección){
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.dirección = dirección;
    }

}

class pedido{
    constructor(nombrePlato, precio){
        this.nombrePlato = nombrePlato;
        this.precio = precio;
    }

}

function pedidoCompleto(vacumulador, vacumular, repeticiones){
    for(let i = 1 ; i <= repeticiones ; i++){
        console.log(vacumular);
        vacumulador += vacumular;
        console.log(vacumulador);
    }
    return vacumulador
}

function validarFormulario(e){
    e.preventDefault();

    let formulario = e.target;
    localStorage.setItem("nombreCompleto", formulario.children[0].value);
    localStorage.setItem("documento", formulario.children[1].value);
    localStorage.setItem("contacto", formulario.children[2].value);
    localStorage.setItem("domicilio", formulario.children[3].value);
    nombre = localStorage.getItem("nombreCompleto");
    dni = localStorage.getItem("documento");
    telefono = localStorage.getItem("contacto");
    direccion = localStorage.getItem("domicilio");
    let introduccion = document.getElementById("formularioP")
    if(((nombre == "") || (nombre === null )) || ((dni == "") || (dni === null)) || ((telefono == "") || (telefono === null)) || ((direccion == "") || (direccion === null ))){
        introduccion.innerText = "Le falta algun dato, intentelo nuevamente";
    }
    else{
        introduccion.innerText = "Hola " + nombre + " |dni " + dni + " |telefono " + telefono + ".";
    }
}

function pedidoCQ(){
    let NP = 0
    pedidos.push(new pedido("pizza cinco quesos", 300));
    let cambio = document.getElementById("pedirCQ");
    preciototal = preciototal + 300;
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza cinco quesos"){
            NP++
        }
    }
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + NP + " veces";
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoI(){
    let NP = 0;
    pedidos.push(new pedido("pizza italiana", 400));
    let cambio = document.getElementById("pedirI");
    preciototal = preciototal + 400;
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza italiana"){
            NP++
        }
    }
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + NP + " veces";
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoP(){
    let NP = 0;
    pedidos.push(new pedido("pizza pepperoni", 400));
    let cambio = document.getElementById("pedirP");
    preciototal = preciototal + 400;
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza pepperoni"){
            NP++
        }
    }
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + NP + " veces";
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoC(){
    let NP = 0;
    pedidos.push(new pedido("pizza carbonara", 500));
    let cambio = document.getElementById("pedirC");
    preciototal = preciototal + 500;
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza carbonara"){
            NP++
        }
    }
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + NP + " veces";
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoH(){
    let NP = 0;
    pedidos.push(new pedido("pizza hawaiana", 700));
    let cambio = document.getElementById("pedirH");
    preciototal = preciototal + 700;
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza hawaiana"){
            NP++
        }
    }
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + NP + " veces";
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function calculo(){
    if(preciototal >= 600){
        let descuento = (preciototal * 5)/100
        let cambio = document.getElementById("total");
        cambio.innerText = "Su total a pagar con descuento es: " + (preciototal - descuento);
    }
    else{
        let cambio = document.getElementById("total");
        cambio.innerText = "Su total a pagar es: " + preciototal;
    }
}
/*

Mi objetivo era crear un botos que al precionarlo mostraria una lista de todods los pedidos realiados, pero solo muestra el ultimo pedido realizado en lugar de todos, entonces me gustaria pedir ayuda por una solucion para un futuro

function Rpedidos(){
    let cambio = document.getElementById("revision")
    for(const revisar of pedidos){
        cambio.innerHTML = revisar.nombrePlato + revisar.precio;
    }
}
*/

/* codigo y el resto*/

let nombre;
let dni;
let telefono;
let direccion;
let preciototal = 0;
const pedidos = [];

let miformulario = document.getElementById("formulario");
miformulario.addEventListener("submit", validarFormulario);

let eleccionCQ = document.getElementById("pedirCQ")
eleccionCQ.addEventListener("click", pedidoCQ)

let eleccionI = document.getElementById("pedirI")
eleccionI.addEventListener("click", pedidoI)

let eleccionP = document.getElementById("pedirP")
eleccionP.addEventListener("click", pedidoP)

let eleccionC = document.getElementById("pedirC")
eleccionC.addEventListener("click", pedidoC)

let eleccionH = document.getElementById("pedirH")
eleccionH.addEventListener("click", pedidoH)

let pagar = document.getElementById("pago")
pagar.addEventListener("click",calculo)

/*
let revision = document.getElementById("revisor")
revision.addEventListener("click",Rpedidos)
*/











/*
    if(preciototal <= 600){
        alert("sus pedidos individuales son: ");
        for(const pedido of pedidos) {
            alert( "pedido N: " + pedido.id + " || nombre: "  + pedido.nombrePlato +  " ||  precio: " + pedido.precio);
        }
        let revisar = prompt("Desea revisar algun pedido en particular (responder con si o no).")
        if(revisar == "si"){
            let eleccion = parseInt(prompt("que pedido desea revisar (seleccione por numero de pedido)"))
            const resultado = pedidos.find( numero => numero.id === eleccion);
            console.log(resultado);
            alert("pedido N: " + resultado.id + " || nombre: " + resultado.nombrePlato + " || precio: " +resultado.precio);
        }
        const mayorA300 = pedidos.filter( el => el.precio > 300);
        console.log("los platos con un precio mayor a 300 son: ");
        console.log(mayorA300);
        alert("Su precio total es: " + preciototal)
    }
    else{
        alert("sus pedidos individuales son: ");
        for(const pedido of pedidos) {
            alert( "pedido N: " + pedido.id + " || nombre: "  + pedido.nombrePlato +  " ||  precio: " + pedido.precio);
        }
        let descuento = (preciototal * 5)/100;
        let preciodescontado = preciototal - descuento;
        let revisar = prompt("Desea revisar algun pedido en particular (responder con si o no).")
        if(revisar == "si"){
            let eleccion = parseInt(prompt("que pedido desea revisar (seleccione por numero de pedido)"))
            const resultado = pedidos.find( numero => numero.id === eleccion);
            console.log(resultado);
            alert("pedido N: " + resultado.id + " || nombre: " + resultado.nombrePlato + " || precio: " +resultado.precio);
        }
        const mayorA300 = pedidos.filter( el => el.precio > 300);
        console.log("los platos con un precio mayor a 300 son: ");
        console.log(mayorA300);
        alert("Su precio total con descuento es: " + preciodescontado);
    }
*/
