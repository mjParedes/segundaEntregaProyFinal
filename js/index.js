        //ALGORITMO SIMULADOR DE TAREAS Y FUNCIONES

// - Validar mayoria de edad 
// - Pedir nombre y apellido de usuario
// - Pedir DNI de usuario
// - Elegir productos (opciones)
// - Seleccionar cantidad de productos comprados
// - Calcular y mostrar importe total de la compra
// - Consultar y calcular monto en cuotas s/interes
// - Mostrar lista de redes sociales donde contactarse

let edad;
let nombreCompleto;
let dni;
let producto;
let total = 0;
let cuotas; 

function validarEdad() {
    edad = parseInt(prompt("Ingrese su edad"));

    while (edad <18) {
        alert("Eres menor de edad no puedes ingresar al sitio")
        edad = parseInt(prompt("Ingrese su edad"))
    }
}

function nombreUser() {
    nombreCompleto = prompt("Ingrese su nombre completo")
    while (nombreCompleto === "" || !isNaN(nombreCompleto)) {
        nombre = prompt("Ingrese su nombre nuevamente")
    }
}

function pedirDNI() {
    dni = prompt("ingrese su DNI");
    while (isNaN(parseInt(dni)) || dni.length < 7 || dni.length > 8) {
        dni = prompt("ingrese su DNI. Recuerde que debe ser un número de 7 u 8 caracteres");
    }
    return dni
}

const elegirProducto = () => {
    producto = prompt("Que producto desea adquirir: collar, correa, alimento balanceado, juguete")

    let precio;
    switch (producto) {
      case "collar":
          precio = 650;
        break;
      case "correa":
          precio = 540;
        break;
      case "alimento balanceado":
          precio = 1000;
        break;
      case "juguete":
          precio = 320;
        break;
      default:
          alert("Ingrese un producto de la lista")
          producto = prompt("Que producto desea adquirir: collar, correa, alimento balanceado, juguete")
        break;
    }
    return precio;
}

const elegirCantidad = () => {
    let cantidad = parseInt(prompt("Ingrese cantidad deseada"));
    while (isNaN(cantidad) || cantidad === "") {
        cantidad = parseInt(prompt("Ingrese cantidad deseada"))
    }
    return cantidad
}

const calculoTotal = (precioProducto, cantidadProducto) => {
    total += precioProducto * cantidadProducto;
}
const pagarCuotas = () => {
    let formaDePago = prompt("Abonaras en cuotas: SI/NO");

    if ((formaDePago === "si") || (formaDePago === "SI")) {
        cuotas = parseInt(prompt("Ingresa cantidad de cuotas: 3/6/12"))
        switch (cuotas) {
            case 3:
                montoCuotas = console.log("Abonaras 3 cuotas de " + total / 3 + " pesos");
                break;
            case 6:
                montoCuotas = console.log("Abonaras 6 cuotas de " + total / 6 + " pesos");
                break;
            case 12:
                montoCuotas = console.log("Abonaras 12 cuotas de " + total / 12 + " pesos");
                break;
            default:
                montoCuotas = parseInt(prompt("Ingresa cantidad de cuotas : 3/6/12"))
                break;
        }
        return montoCuotas

    }else if((formaDePago === "no") || (formaDePago === "NO")) {
        console.log("Gracias por su compra")
    }
}

const mostrarRedes = () => {
    let arrayR = ["facebook", "instagram", "tweeter","telegram"];
    alert("por consola podras conocer nuestras redes sociales")
    for (let i = 0; i < arrayR.length; i++) {
        console.log("Seguinos por " + arrayR[i]);
    }
}

function inicio() {
    validarEdad();
    console.log("Tienes " + edad + " años")

    nombreUser();
    console.log("Tu nombre es: " + nombreCompleto)

    pedirDNI();
    console.log("Tu numero de documento es " + dni)

    calculoTotal(elegirProducto() , elegirCantidad());
    console.log("Tu importe total es de  "+ total+ " pesos")

    pagarCuotas();
    
    mostrarRedes();
}

        /* ALGORITMO INCORPORA ARRAY, CLASES, OBJETOS */ 
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProducto(){
        return this.nombre
    }
}
const producto1 = new Producto("Cadena anti-ahorque", 4020);
const producto2 = new Producto("Collar cuero sintetico", 3210);
const producto3 = new Producto("Buzo polar con fantasia", 2390);
const producto4 = new Producto("Cama extra grande", 7500);

class DetallePedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcSubtotal() {
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal
    }
    mostrarDetalle() {
        return " • " + this.cantidad + " x " + this.producto.mostrarProducto()+ " ($" + this.calcSubtotal() + ")" 
    }
}
const detallePedido1 = new DetallePedido(producto1, 2);
const detallePedido2 = new DetallePedido(producto2, 3);
const detallePedido3 = new DetallePedido(producto3, 1);
const detallePedido4 = new DetallePedido(producto4, 1);

class Pedido {
    constructor(fecha, detalles) {
        this.fecha = fecha;
        this. detalles = detalles;
    }
    calcTotal() {
        let total= 0;
        for(const dt of this.detalles) {
            total = total + dt.calcSubtotal();
        }
        return total;
    }
    mostrarPedido() {
        let txt = "PEDIDO DE LA JORNADA: " + this.fecha + "\n";
        for(const dt of this.detalles) {
            txt += dt.mostrarDetalle() + "\n"
        }
        txt += "---- IMPORTE TOTAL: $" + this.calcTotal() + " ----"
        return txt
    }
}
const arrayPedidos = [];
arrayPedidos.push(detallePedido1)
arrayPedidos.push(detallePedido2)
arrayPedidos.push(detallePedido3)
arrayPedidos.push(detallePedido4)

const pedido1 = new Pedido(new Date(), arrayPedidos);

const iniciarPedido = () => {
    console.log(pedido1.mostrarPedido())
}

const clientes = [{
    nombre: "Tomas",
    apellido: "Galindo",
    edad: 32,
    direccion:"Moriatti 3411",
    deudas: true
},{
    nombre: "Santino",
    apellido: "Bellotti",
    edad: 31,
    direccion: "Rossetti 980",
    deudas: false,
},{
    nombre: "Ariadna",
    apellido: "Greco",
    edad: 29,
    direccion:"Peron 767",
    deudas: true
},{
    nombre:"Benicio",
    apellido: "Juarez",
    edad:40,
    direccion: "Italia 3221",
    deudas: false
},{
    nombre: "Dario",
    apellido:"Gronstein",
    edad:45,
    direccion: "Thames 4534",
    deudas: false
},{
    nombre: "Micaela",
    apellido: "Aguero",
    edad: 25,
    direccion: "Solis 565",
    deudas: false
}]

const deudores = clientes.filter(cliente => cliente.deudas === true);
// console.log("Clientes con deudas vigentes: " + "\n")
// console.log(deudores)

const noDeudores = clientes.filter(cliente => cliente.deudas === false)
// console.log("Clientes sin deudas vigentes: " + "\n")
// console.log(noDeudores)

const arrayEmpleados= ["Marcos", "Tadeo", "Uriel", "Esteban","Nahuel", "Cintia", "Romina", "Nahiara", "Martina", "Kiara", "Luna"];

// console.log("Lista completa empleados de PET CARE: " + "\n"+ arrayEmpleados.join(" / "))

// console.log("Cantidad de empleados a la fecha: "+ "\n" + arrayEmpleados.length)

// console.log("Empleados masculinos: " + "\n" + arrayEmpleados.slice(0,5))
// console.log("Empleados femeninos: " + "\n" + arrayEmpleados.slice(5))

const insumosMedicos= [];
const addInsumo = (insumo) => {
    insumosMedicos.push(insumo)
}

addInsumo("Vacuna sextuple felina")
addInsumo("Vacuna sextuple canina")
addInsumo("Suero fisiologico")
addInsumo("Anestecia general hasta 5kg")

// console.log("Lista de insumos recibidos: " + "\n")
// console.log(insumosMedicos);


            /*ALGORITMOS INTERACCION CON HTML*/
let container = document.getElementById("contenedorServ");

//  MOSTRAR SERVICIOS //
function mostrarServicios() {
    servicios.forEach((servicio) => {  
        let card = document.createElement("div")
        card.className ="cardService"
        container.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", servicio.imagen)
        let nombre = document.createElement("h3")
        nombre.innerText = (servicio.nombre)
        let precio = document.createElement("p")
        precio.innerText = ("$ " + servicio.precio)
        let buyButton = document.createElement("button")
        buyButton.setAttribute("class", "btnServicios")
        buyButton.innerText = ("Agregar")
        card.append(img, nombre, precio, buyButton)
    });
}
mostrarServicios();














