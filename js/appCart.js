const contenedorShop = document.getElementById("shopContainer")
const contenedorCarrito= document.getElementById("contenedorCarrito")
const contadorCarrito = document.getElementById("cartCounter")
const precioTotal= document.getElementById("precioTotal")

let carrito= [];

document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("carrito")){
        carrito= JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

productos.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("cardProductos")
    div.innerHTML= `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>Precio: $ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="botonAgregar">Agregar <i class="fas fa-shoping-cart"></i></button>`
    contenedorShop.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    } )
});

const agregarAlCarrito= (prodID) => {
    const item = productos.find((prod) => prod.id===prodID)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito= (prodID) =>{
    const item= carrito.find((prod) => prod.id === prodID)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito= () => {
    contenedorCarrito.innerHTML= "";
    const cartTitle= document.createElement("h2");
    cartTitle.innerHTML = `<h2 class="tituloCart">Carrito de compras- PETCARE</h2>`
    contenedorCarrito.append(cartTitle)

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML= `
        <h3>${prod.nombre}</h3>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="botonEliminar">Remover<i class="fas fa-trash-alt></i></button>`
        contenedorCarrito.appendChild(div)

        localStorage.setItem("carrito", JSON.stringify(carrito))
    })
    contadorCarrito.innerText= carrito.length
    precioTotal.innerText= carrito.reduce((acc, prod) => acc + prod.precio, 0)
}






