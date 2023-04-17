
alert("elegi las bebidas que quieras llevar, para salir ingrese 0")
let elegirproductos = Number(prompt("1-vinos $10000 2-gin $30000 3-vodka $10000 4-ron $15000 5-licor $5000"))
let seleccionarcantidad;
let total = 0;

const cantidad = (cant, precio) => {return cant* precio}

while (elegirproductos != 0) {
    switch (elegirproductos) {
        case 1:
            seleccionarcantidad = Number(prompt("el producto seleccionado es vinos, selecionar la cantidad"))
          total += cantidad(seleccionarcantidad, 10000)
            break;
        case 2:
            seleccionarcantidad =Number(prompt("el producto seleccionado es gin, selecionar la cantidad"))
           total += cantidad(seleccionarcantidad, 30000)
            break;
        case 3:
            seleccionarcantidad = Number(prompt("el producto seleccionado es vodka, selecionar la cantidad"))
            total += cantidad(seleccionarcantidad, 10000)
            break;
        case 4:
            seleccionarcantidad = Number(prompt("el producto seleccionado es ron, selecionar la cantidad"))
            total += cantidad(seleccionarcantidad, 15000)
            break;

        case 5:
            seleccionarcantidad = Number(prompt("el producto seleccionado es licor, selecionar la cantidad"))
             total += cantidad(seleccionarcantidad, 5000)
            break;

        default:
            break;

    }
    elegirproductos = Number(prompt("1-vinos $10000 2-gin $30000 3-vodka $10000 4-ron $15000 5-licor"))

}

alert("el total de tu compra es igual a: " + total)


    if (total >= 50000) {
        alert( "el envio es gratuito")
    }
    else{alert(" el costo del envio es de 4000, el total es: "+ total)}





