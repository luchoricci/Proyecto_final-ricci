Swal.fire({
    icon: 'warning',
    title: 'Para comprar debes ser mayor de 18 años',
    text: '¡puedes confirmarlo por favor?',
    footer: '<span class="rojo">Informacion importante</span>'
});

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
const botoncarrito = document.querySelector(".boton-carrito");
const contenedorcarrito = document.querySelector(".contenedorcarrito");
let elimp = document.querySelectorAll("#elimp");
const botoncomprar = document.querySelector(".comprar");



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
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
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

botoncarrito.addEventListener("click", () => {
    contenedorcarrito.classList.toggle("ocultarcarrito")
});
// parte 1
function actualizarproductoagregar() {
    productoagregar = document.querySelectorAll(".producto-agregar");

    productoagregar.forEach(boton => {
        boton.addEventListener("click", agregarcarrito)


    });
};

let productoscarrito;
let productoscarritos = localStorage.getItem("productos-en-el-carrito");
if (productoscarritos) {
    productoscarrito = JSON.parse(productoscarritos);
} else {
    productoscarrito = [];
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
    cargarproductoscarrito();

}





function cargarproductoscarrito() {
    if (productoscarrito) {

        contenedorcarrito1.innerHTML = "";

        productoscarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("pcompra");
            div.innerHTML = `
    
    <ul id="pproducto" class="pproducto">
    
            <li><button class="elimp" id="${producto.nombre}"><i class="bi bi-x-circle-fill"></i></button></li>
            <li><img src="${producto.imagen}" alt="${producto.nombre}"></li>
            <li>${producto.nombre}</li>
            <li>${producto.tipo}</li>
            <li>${producto.precio}</li>
            <li>${producto.cantidad}</li>
            <li>${producto.cantidad * producto.precio}</li>

    </ul>
    

        `;
            contenedorcarrito1.append(div);


        })

    } else { }

    actualizarelimp();

};

cargarproductoscarrito();

actualizarelimp();

function actualizarelimp() {
    botonelimp = document.querySelectorAll(".elimp");

    botonelimp.forEach(boton => {
        boton.addEventListener("click", eliminarp);


    });

}


function eliminarp(e) {
    const idBoton = e.currentTarget.id;
    const index = productoscarrito.findIndex(producto => producto.nombre === idBoton);
    productoscarrito.splice(index, 1);
    cargarproductoscarrito();
    console.log(productoscarrito)
    localStorage.setItem("productos-en-el-carrito", JSON.stringify(productoscarrito))
}
cargarproductoscarrito();

botoncomprar.addEventListener (
    "click", comprarproductos,);

    function comprarproductos() {



        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Compra exitosa',
            showConfirmButton: false,
            timer: 1500
          }); 
             


    }

    

   
    
   
   
   
   





























