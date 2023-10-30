let identificar = true;
let intentos = 1;
const productosDisponibles = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 20 },
    { nombre: "Producto 3", precio: 30 },
];

let carrito = [];

do {
    let productoElegido = prompt("Selecciona un producto por su número (solo 3 intentos):\n1. Producto 1 ($10)\n2. Producto 2 ($20)\n3. Producto 3 ($30)");

    if (productoElegido === null) {
        break;
    }

    productoElegido = parseInt(productoElegido);

    if (productoElegido >= 1 && productoElegido <= productosDisponibles.length && intentos <= 3) {
        let producto = productosDisponibles[productoElegido - 1];
        carrito.push(producto);
        alert(`Has añadido ${producto.nombre} a tu carrito por $${producto.precio}.`);
    } else {
        alert("Producto no válido o has superado los 3 intentos.");
        intentos++;

        if (intentos > 3) {
            alert("Has superado los 3 intentos, vuelva más tarde.");
            console.error("Usuario no ha podido completar la compra");
            break;
        }
    }
} while (identificar);

if (carrito.length > 0) {
    let total = carrito.reduce((sum, product) => sum + product.precio, 0);
    alert(`Has comprado los siguientes productos:\n${carrito.map(product => `${product.nombre} ($${product.precio})`).join('\n')}\nTotal: $${total}`);
} else {
    alert("No has realizado ninguna compra.");
}