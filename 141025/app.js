let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(`Opciones dispobibles
1. Agregar producto
2. Mostrar todos los productos
3. Buscar productos por nombre
4. Salir 
Elige una opción 
`
));
}

function agregarProducto(){
    let nombre = prompt("Ingrsar el nombre del producto");
    let precio = parseFloat(prompt("Ingresar el precio del producto"));
    let cantidad = parseInt(prompt("Ingresar la cantidad del producto"));

    if(cantidad > 0 && precio > 0){
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        }
        inventario.push(producto)
        alert("PRODUCTO AGREGADO EXITOSAMENTE")
    }else{
        alert("La cantidad y precio deben de ser los esperados")
    }
}

function mostrarProducto(){
    if(inventario.lengthn === 0){
        alert("INENTARIO VACÍO")
    }else{
        let mensaje = "Productos del inventario \n";
        for(let i = 0; i< inventario.length; i++){
            mensaje= `Producto: ${i+i}\n`+
            `Nombre: ${inventario[i].nombre}\n`+
            `Precio; ${inventario[i].precio}\n`+
            `Cantidad: ${inventario[i].cantidad}\n`+
            "-.-.-.-.-.-.-.-.-.-.-.-.-.-.-..-.-.-.-"
        }
            alert(mensaje)
    }
}

function buscarProducto() {
    let nombreBuscado = prompt("Ingresa el nombre del producto a buscar:");
    let encontrados = inventario.includes(nombreBuscado.toLowerCase())

    if (encontrados.length === 0) {
        alert("No se encontraron productos con ese nombre.");
    } else {
        let mensaje = "Productos encontrados:\n";
        for(let i = 0; i< inventario.length; i++){
            mensaje= `Producto: ${i+i}\n`+
            `Nombre: ${inventario[i].nombre}\n`+
            `Precio; ${inventario[i].precio}\n`+
            `Cantidad: ${inventario[i].cantidad}\n`+
            "-.-.-.-.-.-.-.-.-.-.-.-.-.-.-..-.-.-.-"
        }
        alert(mensaje);
    }
}




console.log(document);