        /* ALGORITMO: INCOPORAR EVENTOS */
const empleados=[{
    img: "img/med1.jpg",
    nombre: "David Fellini",
    cargo: "Director general",
    matricula: "Matricula N° 5412"
},{
    img: "img/med2.jpg",
    nombre: "Jeremias Gallo",
    cargo: "Medico clinico",
    matricula: "Matricula N° 7422"

},{
    img: "img/med3.jpg",
    nombre: "Marielys Zapata",
    cargo: "Cirujano alta complejidad",
    matricula: "Matricula N° 3578"
},{
    img: "img/med4.jpg",
    nombre: "Uma Hughes",
    cargo: "Cardiologo/ Gastroenterologo",
    matricula: "Matricula N° 5412"
}]

const empresas=[{
    nombre: "DOG CHOW SA",
    pais: "Argentina",
    contacto: "www.dog-chow.com.ar"
},{
    nombre: "PURINA AL",
    pais: "EEUU",
    contacto: "www.latam-purina.us"
},{
    nombre: "EUKANUBA LATAM",
    pais: "Francia",
    contacto: "www.eukanubalatam.fr"
},{
    nombre: "VETMEX CO",
    pais: "Mexico",
    contacto : "www.vetmex.mx"
}]

const sucursales = [{
    nombre: "Sucursal Caballito",
    direccion: "Cochabamba 5444",
    contacto: "sedeCabPC@gmail.com"
},{
    nombre: "Sucursal Retiro",
    direccion: "9 de julio 3200",
    contacto: "sedeRetPC@gmail.com"
},{
    nombre: "Sucursal Balvanera",
    direccion: "San Lorenzo 1380",
    contacto: "sedeBvPC@gmail.com"
}]

const bio= "Somos una organizacion de avanzada en el cuidado de mascotas y animales en general, podemos decir con orgullo que contamos con los mas altos standares en medicina zoologica, nutricional y con profesionales sobresalientes en su rubro.Combinamos el aspecto medico con el comercial de la manera mas armonica posible, fundamos PETCARE para facilitarte todo en el cuidado de tus mascotas, estas solo a un click de distancia. Podemos decirte muchas cosas mas sobre nosotros pero queremos que vos mismo las descubras y te beneficies, ese es nuestro mayor logro y objetivo. ¡¡Gracias por elegirnos!!"

const bioString = JSON.stringify(bio)

const contenedor = document.getElementById("aboutContainer")

const mostrarSedes= (ID) => {
    let boton1 = document.getElementById(ID)
    boton1.addEventListener("click", () => {
        contenedor.innerHTML= ""
        sucursales.forEach((sucursales) => {
            let card= document.createElement("div")
            card.className= "cardSedes"
            contenedor.append(card)
            let nombre= document.createElement("h1")
            nombre.innerText= (sucursales.nombre)
            let direccion= document.createElement("h3")
            direccion.innerText= (sucursales.direccion)
            let contacto = document.createElement("h5")
            contacto.innerText= (sucursales.contacto)
            card.append(nombre,direccion,contacto)
        });
    });
}
const mostrarStaff= (ID) => {
    let boton2 = document.getElementById(ID)
    boton2.addEventListener("click", () => {
    contenedor.innerHTML= ""
    empleados.forEach((empleados) => {
        let card= document.createElement("div")
        card.className= "cardStaff"
        contenedor.append(card)
        let img= document.createElement("img")
        img.setAttribute("src", empleados.img)
        let nombre= document.createElement("h1")
        nombre.innerText= (empleados.nombre)
        let cargo= document.createElement("h3")
        cargo.innerText= (empleados.cargo)
        let matricula= document.createElement("h5")
        matricula.innerText= (empleados.matricula)
        card.append(img, nombre, cargo, matricula)
        });
    });
}
const mostrarEmpresas= (ID) => {
    let boton3 = document.getElementById(ID)
    boton3.addEventListener("click", () => {
    contenedor.innerHTML= ""
    empresas.forEach((empresas) => {
        let card= document.createElement("div")
        card.className= "cardEmp"
        contenedor.append(card)
        let nombre = document.createElement("h1")
        nombre.innerText= (empresas.nombre)
        let pais = document.createElement("h3")
        pais.innerText= (empresas.pais)
        let contacto= document.createElement("h5")
        contacto.innerText= (empresas.contacto)
        card.append(nombre, pais, contacto)
        });
    });
}

const mostrarBio = (ID) => {
    let boton4= document.getElementById(ID)
    boton4.addEventListener("click", () =>{
        contenedor.innerHTML= ""
        let card= document.createElement("div")
        card.className= "cardBio"
        contenedor.append(card)
        let bio= document.createElement("h2")
        bio.innerText= (bioString)
        card.append(bio)
    })
}

mostrarSedes("btn1")
mostrarStaff("btn2")
mostrarEmpresas("btn3")
mostrarBio("btn4")
