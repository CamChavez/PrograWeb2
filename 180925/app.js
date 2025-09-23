var productos = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = [];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". Agregar " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Eliminar producto del carrito\n";
    menu += (productos.length + 3) + ". Administrador: Agregar producto nuevo\n";
    menu += (productos.length + 4) + ". Salir\n";

    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío, no hay nada que eliminar.");
        return;
    }

    var menuEliminar = "Seleccione el número del producto a eliminar:\n";
    for (var i = 0; i < carrito.length; i++) {
        menuEliminar += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }

    var opcionEliminar = Number(prompt(menuEliminar));

    if (!isNaN(opcionEliminar) && opcionEliminar >= 1 && opcionEliminar <= carrito.length) {
        var productoEliminado = carrito.splice(opcionEliminar - 1, 1)[0];
        console.log('Producto "' + productoEliminado.nombre + '" eliminado del carrito.');
    } else {
        console.log("Opción no válida.");
    }
}

// Función para que el administrador agregue un producto
function agregarProductoNuevo() {
    var nombreNuevo = prompt("Ingrese el nombre del nuevo producto:");
    var precioNuevo = Number(prompt("Ingrese el precio del nuevo producto:"));

    if (nombreNuevo && !isNaN(precioNuevo) && precioNuevo > 0) {
        productos.push({ nombre: nombreNuevo, precio: precioNuevo });
        console.log('Producto "' + nombreNuevo + '" agregado a la lista de venta.');
    } else {
        console.log("Datos inválidos, el producto no se agregó.");
    }
}

// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 4) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        mostrarCarritoYTotal();
    } else if (opcion === productos.length + 2) {
        eliminarDelCarrito();
    } else if (opcion === productos.length + 3) {
        agregarProductoNuevo();
    }
} while (opcion !== productos.length + 4);

console.log("Gracias por visitar la tienda.");