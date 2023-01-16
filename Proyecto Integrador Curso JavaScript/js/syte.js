
alert("Ingrese Sus Datos");
let nombre = prompt("ingrese su nombre completo");
console.log("El Nombre Del Cliente Es: " + nombre);
let dni = prompt("Igrese Su Numero de DNI");
console.log("El DNI Del Cliente Es: " + dni);
let telefono = prompt("Ingrese Su Numero De Telefono");
console.log("El Telefono Del Cliente Es: " + telefono);
let direccion = prompt("Ingrese su dirección para la entrega");
console.log("La Dirección Del Cliente Es: " + direccion);
var preciototal = 0;
var precioplato = 0;

function acumulador(vacumulador, vacumular, repeticiones){
    for(let i = 1 ; i <= repeticiones ; i++){
        vacumular = parseInt(prompt("ingrese el precio del " + i + " plato."));
        console.log(vacumular);
        vacumulador += vacumular;
        console.log(vacumulador);
    }
    return vacumulador
}

if(((nombre == "") || (nombre === null )) || ((dni == "") || (dni === null)) || ((telefono == "") || (telefono === null)) || ((direccion == "") || (direccion === null ))){

    alert("Puede Que Algun Dato Le haya Faltado, Intentelo Nuevamente.")
    console.log("incorrecto");
}

else{
    alert("bienvenido " + nombre + ".")
    console.log("correcto");
    let npedidos = prompt("Ingrese Cuantos Platos Va A Pedir, Si Su Total Es Mayor A 600$ Se Realizara Un Pequeño Descuento.")
    console.log("El numero de pedidos es: " + npedidos);
    preciototal=(acumulador(preciototal, precioplato, npedidos));
    if(preciototal <= 600){
        alert("Su precio total es: " + preciototal)
    }
    else{
        var descuento = (preciototal * 5)/100;
        var preciodescontado = preciototal - descuento;
        alert("Su precio total con descuento es: " + preciodescontado);
    }
    
}