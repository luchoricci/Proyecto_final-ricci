Swal.fire({
    icon: 'warning',
    title: 'Para comprar debes ser mayor de 18 años',
    text: '¡puedes confirmarlo por favor?',
    footer:'<span class="rojo">Informacion importante</span>'
    
  });

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
// carrito

let productoscarrito = localStorage.getItem("productos-en-el-carrito");
productoscarrito = JSON.parse(productoscarrito);

const vaciarcarrito = document.querySelector(".vaciarcarrito");


function cargarproductoscarrito() {
    if (productoscarrito) {
        
        contenedorcarrito.innerHTML = "";

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
            contenedorcarrito.append(div);

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