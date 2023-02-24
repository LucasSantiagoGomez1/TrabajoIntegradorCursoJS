
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
        introduccion.innerText = "Le falta algun dato.";
        Swal.fire(
            'Incorercto',
            'Le falta agregar algun dato',
            'error'
        )
    }
    else{
        introduccion.innerText = "Hola " + nombre + " |dni " + dni + " |telefono " + telefono + ".";
        Swal.fire(
            'Bien',
            'Los datos fueron recibidos correctamente',
            'success'
        )
    }
}

function pedidoCQ(){
    let NP = 0;
    let CQ;
    preciototal = 0;
    pedidos.push(new pedido("pizza cinco quesos", 300));
    let cambio = document.getElementById("pedirCQ");
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza cinco quesos"){
            NP++
            guardarLocal("almacenamientoNPCQ",parseInt(NP))
        }
    }
    CQ = localStorage.getItem("almacenamientoNPCQ")
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + CQ + " veces";
    }
    guardarLocal("almacenamiento",JSON.stringify(pedidos))
    const prueba = JSON.parse(localStorage.getItem("almacenamiento"))
    for(const objeto of prueba){
        preciototal = preciototal + objeto.precio ;
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoI(){
    let NP = 0;
    let I;
    preciototal = 0;
    pedidos.push(new pedido("pizza italiana", 400));
    let cambio = document.getElementById("pedirI");
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza italiana"){
            NP++
            guardarLocal("almacenamientoNPI",parseInt(NP))
        }
    }
    I = localStorage.getItem("almacenamientoNPI")
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + I + " veces";
    }
    guardarLocal("almacenamiento",JSON.stringify(pedidos))
    const prueba = JSON.parse(localStorage.getItem("almacenamiento"))
    for(const objeto of prueba){
        preciototal = preciototal + objeto.precio ;
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoP(){
    let NP = 0;
    let P;
    preciototal = 0;
    pedidos.push(new pedido("pizza pepperoni", 400));
    let cambio = document.getElementById("pedirP");
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza pepperoni"){
            NP++
            guardarLocal("almacenamientoNPP",parseInt(NP))
        }
    }
    P = localStorage.getItem("almacenamientoNPP")
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + P + " veces";
    }
    guardarLocal("almacenamiento",JSON.stringify(pedidos))
    const prueba = JSON.parse(localStorage.getItem("almacenamiento"))
    for(const objeto of prueba){
        preciototal = preciototal + objeto.precio ;
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoC(){
    let NP = 0;
    let C;
    preciototal = 0;
    pedidos.push(new pedido("pizza carbonara", 500));
    let cambio = document.getElementById("pedirC");
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza carbonara"){
            NP++
            guardarLocal("almacenamientoNPC",parseInt(NP))
        }
    }
    C = localStorage.getItem("almacenamientoNPC")
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + C + " veces";
    }
    guardarLocal("almacenamiento",JSON.stringify(pedidos))
    const prueba = JSON.parse(localStorage.getItem("almacenamiento"))
    for(const objeto of prueba){
        preciototal = preciototal + objeto.precio ;
    }
    let Total = document.getElementById("ValorTotal");
    Total.innerText = "Su total actualmente es: " + preciototal;
}

function pedidoH(){
    let NP = 0;
    let H;
    preciototal = 0;
    pedidos.push(new pedido("pizza hawaiana", 700));
    let cambio = document.getElementById("pedirH");
    for(const pedido of pedidos){
        if(pedido.nombrePlato == "pizza hawaiana"){
            NP++
            guardarLocal("almacenamientoNPH",parseInt(NP))
        }
    }
    H = localStorage.getItem("almacenamientoNPH")
    if(NP >= 1){
        cambio.innerText = "Pediste este plato " + H + " veces";
    }
    guardarLocal("almacenamiento",JSON.stringify(pedidos))
    const prueba = JSON.parse(localStorage.getItem("almacenamiento"))
    for(const objeto of prueba){
        preciototal = preciototal + objeto.precio ;
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

const guardarLocal = (clave, valor) => { localStorage.setItem(clave,valor)}

/* codigo y el resto*/

let nombre;
let dni;
let telefono;
let direccion;
let preciototal;
const pedidos = [] ;

nombre = localStorage.getItem("nombreCompleto");
dni = localStorage.getItem("documento");
telefono = localStorage.getItem("contacto");
direccion = localStorage.getItem("domicilio");
let introduccion = document.getElementById("formularioP")
if(((nombre == "") || (nombre === null )) || ((dni == "") || (dni === null)) || ((telefono == "") || (telefono === null)) || ((direccion == "") || (direccion === null ))){
}
else{
    introduccion.innerText = "Hola " + nombre + " |dni " + dni + " |telefono " + telefono + ".";
}

const prueba = JSON.parse(localStorage.getItem("almacenamiento"))

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



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data => {

        const lista = document.querySelector('#listado')

        data.forEach((Usuario) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${Usuario.username}</h4>
                <p>${Usuario.name}</p>
                <p>${Usuario.email}</p>
                <hr/>`
            lista.append(li)
        })
    })
