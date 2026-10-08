let carrito = [];

const carritoBtn = document.getElementById("carritoBtn");

const carritoVentana =
    document.getElementById("carrito");

const cerrarCarrito =
    document.getElementById("cerrarCarrito");

const productosCarrito =
    document.getElementById("productosCarrito");

const contador =
    document.getElementById("contador");

const total =
    document.getElementById("total");


/* ABRIR CARRITO */

carritoBtn.addEventListener("click", function () {

    carritoVentana.classList.add("abierto");

});


/* CERRAR CARRITO */

cerrarCarrito.addEventListener("click", function () {

    carritoVentana.classList.remove("abierto");

});


/* AÑADIR PRODUCTO */

function añadirCarrito(nombre, precio) {

    carrito.push({

        nombre: nombre,

        precio: precio

    });

    actualizarCarrito();

    carritoVentana.classList.add("abierto");
}


/* ACTUALIZAR CARRITO */

function actualizarCarrito() {

    productosCarrito.innerHTML = "";

    let precioTotal = 0;


    carrito.forEach(function (producto, indice) {

        precioTotal += producto.precio;


        const elemento =
            document.createElement("div");

        elemento.className =
            "item-carrito";


        elemento.innerHTML = `

            <span>
                ${producto.nombre}
                <br>
                ${producto.precio.toFixed(2).replace(".", ",")} €
            </span>

            <button
                class="eliminar"
                onclick="eliminarProducto(${indice})">

                Eliminar

            </button>

        `;


        productosCarrito.appendChild(elemento);

    });


    contador.textContent = carrito.length;


    total.textContent =
        precioTotal.toFixed(2).replace(".", ",")
        + " €";
}


/* ELIMINAR PRODUCTO */

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    actualizarCarrito();

}


/* COMPRAR */

function comprar() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    alert(
        "La tienda todavía no tiene conectado un sistema de pago real."
    );

}