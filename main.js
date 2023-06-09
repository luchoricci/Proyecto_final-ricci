

// intento responsive

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


let productos = [];

fetch("productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    cargarproductos(productos);
})

const contenedorproductos = document.querySelector("#produc-list");
const botonmenu = document.querySelectorAll(".boton-menu");
let productoagregar = document.querySelectorAll(".producto-agregar");

// cargar productos en tienda

function cargarproductos(productos) {

    contenedorproductos.innerHTML = "";



    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">
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
            <button class="producto-agregar" id="${producto.nombre}"><i class="bi bi-cart-fill" ></i></button>
    
            `;
        contenedorproductos.append(div);

    })

    actualizarproductoagregar();
}


cargarproductos(productos);

botonmenu.forEach(boton => {
    boton.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todos") {


            const productosboton = productos.filter(producto => producto.tipo === e.currentTarget.id);
            cargarproductos(productosboton);
        } else (cargarproductos(productos))
    })
})
    ;

// carrito intento 54
function actualizarproductoagregar() {
    productoagregar = document.querySelectorAll(".producto-agregar");

    productoagregar.forEach(boton => {
        boton.addEventListener("click", agregarcarrito)


    });
};
let productoscarrito;
const productoscarritos = localStorage.getItem("productos-en-el-carrito");
if (productoscarritos) {
    productoscarrito = JSON.parse(productoscarritos);
} else {
 productoscarrito =[];
}
function agregarcarrito(e) {
    const idboton = e.currentTarget.id;
    const productoagregado = productos.find(producto => producto.nombre === idboton);

    if (productoscarrito.some(producto => producto.nombre === idboton)) {
        const index = productoscarrito.findIndex(producto => producto.nombre === idboton);
        productoscarrito[index].cantidad++;
    }

    else {
        productoagregado.cantidad = 1;
        productoscarrito.push(productoagregado);
    }
   
    localStorage.setItem("productos-en-el-carrito", JSON.stringify(productoscarrito))


}
















































