const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Productos ya existentes
let productos = [
    { nombre: "Café", precio: 45 },
    { nombre: "Pan", precio: 30 },
    { nombre: "Frappé", precio: 65 }
];

// AGREGAR
function agregarProducto() {

    rl.question("Nombre: ", function(nombre) {

        rl.question("Precio: ", function(precio) {

            productos.push({
                nombre: nombre,
                precio: Number(precio)
            });

            console.log("Producto agregado");

            menu();
        });
    });
}

// LISTAR
function listarProductos() {

    console.log("\nPRODUCTOS:");

    for(let i = 0; i < productos.length; i++) {

        console.log(
            i + " - " +
            productos[i].nombre +
            " $" +
            productos[i].precio
        );
    }
}

// ELIMINAR
function eliminarProducto() {

    listarProductos();

    rl.question("\nÍndice a eliminar: ", function(indice) {

        productos.splice(indice, 1);

        console.log("Producto eliminado");

        menu();
    });
}

// MENÚ
function menu() {

    console.log("\n LISTA DE PRODUCTOS");

    // Mostrar productos existentes
    console.log("\nProductos actuales:");

    for(let i = 0; i < productos.length; i++) {

        console.log(
            i + " - " +
            productos[i].nombre +
            " $" +
            productos[i].precio
        );
    }

    console.log("\n1. Agregar");
    console.log("2. Listar");
    console.log("3. Eliminar");
    console.log("4. Salir");

    rl.question("\nOpción: ", function(opcion) {

        if(opcion == 1) {
            agregarProducto();
        }

        else if(opcion == 2) {

            listarProductos();

            menu();
        }

        else if(opcion == 3) {
            eliminarProducto();
        }

        else if(opcion == 4) {
            rl.close();
        }

        else {
            console.log("Opción inválida");
            menu();
        }
    });
}

menu();
