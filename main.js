
alert("elegi las bebidas que quieras llevar, para salir ingrese 0")
let elegirproductos = Number(prompt("1-vinos $10000 2-gin $30000 3-vodka $10000 4-ron $15000 5-licor $5000"))
let seleccionarcantidad;
let total = 0;

const cantidad = (cant, precio) => { return cant * precio }

while (elegirproductos != 0) {
    switch (elegirproductos) {
        case 1:
            seleccionarcantidad = Number(prompt("el producto seleccionado es vinos, selecionar la cantidad"))
            total += cantidad(seleccionarcantidad, 10000)
            break;
        case 2:
            seleccionarcantidad = Number(prompt("el producto seleccionado es gin, selecionar la cantidad"))
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
    alert("el envio es gratuito")
}
else { alert(" el costo del envio es de 4000, el total es: " + total) }

const productosarray = [{ nombre: "Budweiser", tipo: "Cerveza", precio: "600" },
{ nombre: "Heineken", tipo: "Cerveza", precio: "500" },
{ nombre: "Stella Artois", tipo: "Cerveza", precio: "500" },
{ nombre: "Corona", tipo: "Cerveza", precio: "600" },
{ nombre: "Ginness", tipo: "Cerveza", precio: "500" },
{ nombre: "Snow", tipo: "Cerveza", precio: "500" },
{ nombre: "Jägermeister", tipo: "Licor", precio: "1500" },
{ nombre: "Baileys", tipo: "Licor", precio: "1500" },
{ nombre: "Khlibniy", tipo: "Vodka", precio: "2500" },
{ nombre: "Jack Daniels", tipo: "Whiskey", precio: "2500" },
{ nombre: "Absolut", tipo: "Vodka", precio: "1500" },
{ nombre: "Captain Morgan ", tipo: "Ron", precio: "3500" },
{ nombre: "Red Star Er Guo", tipo: "Vodka", precio: "2500" },
{ nombre: "Bagpiper United Spirits", tipo: "Whisky", precio: "3500" },
{ nombre: "McDowell ‘s", tipo: "Whisky", precio: "2500" },
{ nombre: "Officer ‘s ", tipo: "Whisky", precio: "4500" },
{ nombre: "Johnnie Walker", tipo: "Whisky", precio: "5500" },
{ nombre: "Pirassunga 51 ", tipo: "Cachaça", precio: "3500" },
{ nombre: "Tanduay ", tipo: "Ron", precio: "5500" },
{ nombre: "Bacardi", tipo: "Ron", precio: "2500" },
{ nombre: "Emperador ", tipo: "Brandy", precio: "5500" },
{ nombre: "San Miguel ", tipo: "Ginebra", precio: "4500" },
{ nombre: "Soju Chum Churum ", tipo: "Soju", precio: "3500" },
{ nombre: "Smirnoff", tipo: "Vodka", precio: "1500" },
{ nombre: "Jinro", tipo: "Soju", precio: "5500" }
]


for (let i = 0; i < productosarray.length; i++){
    console.log("=======================")
    console.log("nombre: "+ productosarray[i].nombre);
console.log("tipo: "+ productosarray[i].tipo);
console.log("precio: "+ productosarray[i].precio);

}

const cerveza = productosarray.slice(0,6)

for (let i=0; i < cerveza.length; i++){
    console.log("=======================")
console.log("nombre: "+ cerveza[i].nombre);
console.log("tipo: "+ cerveza[i].tipo);
console.log("precio: "+ cerveza[i].precio);
}





