/iintento de nav responsive/


const bar = document.getElementById("barra");
const cerrar = document.getElementById("cerrar");
const nav = document.getElementById("nav");

if (barra) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")

    })


}
if (cerrar) {
    cerrar.addEventListener("click", () => {
        nav.classList.remove("active")

    })


}

/array de productos/

const productos =
    [
        {
            nombre: "Budweiser",
            tipo: "Cerveza",
            imagen :"./imagen/budweiser.jpeg",
            precio: 600
        },

        {
            nombre: "Heineken",
            tipo: "Cerveza",
            imagen :"./imagen/heineken.jpeg",
            precio: 500
        },

        {
            nombre: "Stella Artois",
            imagen :"./imagen/stella-artois.webp",
            tipo: "Cerveza",
            precio: 500
        },

        {
            nombre: "Corona",
            tipo: "Cerveza",
            imagen :"./imagen/corona.jpeg",
            precio: 600
        },

        {
            nombre: "Ginness",
            tipo: "Cerveza",
            imagen :"./imagen/ginness.jpeg",
            precio: 500
        },

        {
            nombre: "Snow",
            tipo: "Cerveza",
            imagen :"./imagen/SNOW.webp",
            precio: 500

        },

        {
            nombre: "Jägermeister",
            tipo: "Licor",
            imagen :"./imagen/JAGERMEISTER.webp",
            precio: 1500
        },

        {
            nombre: "Baileys",
            tipo: "Licor",
            imagen :"./imagen/BAILEYS.webp",
            precio: 1500
        },
        {
            nombre: "Khlibniy",
            tipo: "Vodka",
            imagen :"./imagen/KHLIBNIY.webp",
            precio: 2500
        },

        {
            nombre: "Jack Daniels",
            tipo: "Whisky",
            imagen :"./imagen/JACK-DANIELS.webp",
            precio: 2500
        },

        {
            nombre: "Absolut",
            tipo: "Vodka",
            imagen :"./imagen/ABSOLUT.webp",
            precio: 1500
        },

        {
            nombre: "Captain Morgan ",
            tipo: "Ron",
            imagen :"./imagen/CAPTAIN-MORGAN.webp",
            precio: 3500
        },

        {
            nombre: "Red Star Er Guo",
            tipo: "Vodka",
            imagen :"./imagen/RED-STAR.webp",
            precio: 2500
        },

        {
            nombre: "Bagpiper United Spirits",
            tipo: "Whisky",
            imagen :"./imagen/BAGPIPER.webp",
            precio: 3500
        },

        {
            nombre: "McDowell ‘s",
            tipo: "Whisky",
            imagen :"./imagen/MCDOWELLS.webp",
            precio: 2500
        },

        {
            nombre: "Officer ‘s ",
            tipo: "Whisky",
            imagen :"./imagen/OFFICER.webp",
            precio: 4500
        },

        {
            nombre: "Johnnie Walker",
            tipo: "Whisky",
            imagen :"./imagen/johnnie-walker.jpg",
            precio: 5500
        },

        {
            nombre: "Pirassunga 51 ",
            tipo: "Cachaça",
            imagen :"./imagen/PIRASSUGA-51.webp",
            precio: 3500
        },

        {
            nombre: "Tanduay ",
            tipo: "Ron",
            imagen :"./imagen/TANDUAY.webp",
            precio: 5500
        },

        {
            nombre: "Bacardi",
            tipo: "Ron",
            imagen :"./imagen/BACARDI.webp",
            precio: 2500
        },


        {
            nombre: "Emperador ",
            tipo: "Brandy",
            imagen :"./imagen/EMPERADOR.webp",
            precio: 5500
        },

        {
            nombre: "San Miguel ",
            tipo: "Ginebra",
            imagen :"./imagen/SAN-MIGUEL.webp",
            precio: 4500
        },
        {
            nombre: "Soju Chum Churum ",
            tipo: "Soju",
            imagen :"./imagen/CHUM-CHURUM.webp",
            precio: 3500
        },

        {
            nombre: "Smirnoff",
            tipo: "Vodka",
            imagen :"./imagen/SMIRNOFF.webp",
            precio: 1500
        },


        {
            nombre: "Jinro",
            tipo: "Soju",
            imagen :"./imagen/JINRO.webp",
            precio: 5500
        }
    ]

    const contenedorproductos = document.querySelector("#produc-list");
const botonmenu = document.querySelectorAll(".boton-menu")



    function cargarproductos(productos) {

        contenedorproductos.innerHTML="";

     

        productos.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML =`<img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="tipo-producto">
                <span>${producto.nombre}</span>
                <h5>${producto.tipo}</h5>
                <div class="estrellas">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>
                ${producto.precio}
                </h4>
            </div>
            <button class="producto-agregar"><i class="fas fa-cart-shopping carrito-produc"></i></button>
    
            `;
            contenedorproductos.append(div)
            
        })

    }
    

    cargarproductos(productos);

botonmenu.forEach(boton => {   
    boton.addEventListener("click",(e) => {
       
        if (e.currentTarget.id !="todos") {

      
        const productosboton = productos.filter(producto => producto.tipo === e.currentTarget.id);
        cargarproductos(productosboton);
    } else(cargarproductos(productos))
      })
})


















































    
