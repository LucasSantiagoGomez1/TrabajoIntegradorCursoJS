
/* funciones ,constructores y clases*/

class Usuario {
    constructor (nombre, dni, telefono, dirección){
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.dirección = dirección;
    }
    
    darBienvenida() {
        alert("bienvenido " + this.nombre + ".")
    }
}

class pedido{
    constructor(id, nombrePlato, precio){
        this.id = id;
        this.nombrePlato = nombrePlato;
        this.precio = precio;
    }

}

function pedidoCompleto(vacumulador, vacumular, repeticiones){
    for(let i = 1 ; i <= repeticiones ; i++){
        let nombreP = prompt("ingrese el nombre del " + i + " plato.");
        vacumular = parseInt(prompt("ingrese el precio del " + i + " plato."));
        pedidos.push(new pedido(i, nombreP, vacumular));
        console.log(vacumular);
        vacumulador += vacumular;
        console.log(vacumulador);
    }
    return vacumulador
}

/* codigo y el resto*/

alert("Ingrese Sus Datos");
let nombre = prompt("ingrese su nombre completo");
let dni = prompt("Igrese Su Numero de DNI");
let telefono = prompt("Ingrese Su Numero De Telefono");
let direccion = prompt("Ingrese su dirección para la entrega");
let preciototal = 0;
let precioplato = 0;
const pedidos = [];


if(((nombre == "") || (nombre === null )) || ((dni == "") || (dni === null)) || ((telefono == "") || (telefono === null)) || ((direccion == "") || (direccion === null ))){

    alert("Puede Que Algun Dato Le haya Faltado, Intentelo Nuevamente.")
    console.log("incorrecto");
}

else{

    const usuario1 = new Usuario(nombre, dni, telefono, direccion);
    console.log(usuario1);
    usuario1.darBienvenida();
    console.log("correcto");
    let npedidos = prompt("Ingrese Cuantos Platos Va A Pedir, Si Su Total Es Mayor A 600$ Se Realizara Un Pequeño Descuento.")
    console.log("El numero de pedidos es: " + npedidos);
    preciototal=(pedidoCompleto(preciototal, precioplato, npedidos));
    console.log(pedidos);
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
    
}
