const productos = [];
class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo,
            this.nombre = nombre,
            this.precio = precio
    }

    mostrarDatos() {
        console.log(`Producto: Codigo: ${this.codigo}, Descripcion: ${this.nombre}, Precio: ${this.precio}`)
    }
}

let cantItem = 0;
function Menu() {
    let salirMenu = false
    do {
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - Agregar un item al carrito
   2 - Elimitar un item del carrito
   3 - Mostrar total 
   0 - Salir del menu`))
        switch (opcionIngresada) {
            case 1:
                console.log("Agregar un item al carrito")
                AgregarItemAlCarrito();
                cantItem = cantItem + 1;
                break
            case 2:
                console.log("Elimitar un item del carrito")
                ElimitarItemDelCarrito();
                break
            case 3:
                console.log("Mostrar Carrito")
                MostrarCarrito();
                break
            case 0:
                console.log(`Gracias por utilizar nuestra app. Saludos!`)
                salirMenu = true
                break
            default:
                console.log("Opción no válida, ingrese alguna presente en el menu")
                break
        }
    } while (!salirMenu)
}
Menu()

function AgregarItemAlCarrito() {
    // Declara tres variables para almacenar los items
    let codigo, nombre, precio;

    for (let i = 0; i < 3; i++) {
        // Pide al usuario que ingrese el item
        switch (i) {
            case 0:
                codigo = IngresarValidarTexto("código de producto");
                break;
            case 1:
                nombre = IngresarValidarTexto("nombre del producto:");
                break;
            case 2:
                precio = IngresarValidarPrecio("precio del producto:");
                break;
        }
    }

    let newProducto = new Producto(codigo, nombre, precio);
    newProducto.mostrarDatos();
    productos.push(newProducto);
}

function ElimitarItemDelCarrito() {
    let codigo;
    codigo = IngresarValidarTexto("código de producto");
    for (let i = 0; i < productos.length; i++) {
        // Compara el código del producto actual con el código ingresado
        if (productos[i].codigo == codigo) {
            productos[i].mostrarDatos();
            // Borra el producto del array
            productos.splice(i, 1);
            break;
        }
    }
}

function MostrarCarrito() {
    for (let i = 0; i < productos.length; i++) {
        productos[i].mostrarDatos();
    }
}

function IngresarValidarTexto(mensaje) {
    let textoValido = false;
    let texto = "";
    do {
        texto = prompt(`Ingrese ${mensaje}`);
        if (texto.trim() === "") {
            alert(mensaje + " no puede ser vacio.");
            textoValido = false;
            continue;
        }
        textoValido = true;
    } while (!textoValido)
    return texto;
}

function IngresarValidarPrecio(mensaje) {
    let precioValido = false;
    let precio = 0;
    do {
        precio = prompt(`Ingrese ${mensaje}`);
        if (isNaN(precio) || precio <= 0) {
            alert(mensaje + " debe ser un numero y mayor que cero.");
            precioValido = false;
            continue;
        }
        precioValido = true;
    } while (!precioValido)
    return precio;
}