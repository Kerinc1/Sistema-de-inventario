const productos = [];

// Función para renderizar la lista de productos
function renderizarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = ''; // Limpiar la tabla antes de volver a renderizar

    productos.forEach((producto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;
        listaProductos.appendChild(fila);
    });
}

// Agregar producto
document.getElementById('formAgregar').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreProducto').value;
    const cantidad = parseInt(document.getElementById('cantidadProducto').value);

    productos.push({ nombre, cantidad });
    renderizarProductos();

    // Limpiar campos del formulario
    document.getElementById('nombreProducto').value = '';
    document.getElementById('cantidadProducto').value = '';
});

// Actualizar producto
document.getElementById('formActualizar').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreActualizar = document.getElementById('nombreActualizar').value;
    const nuevaCantidad = parseInt(document.getElementById('nuevaCantidad').value);

    const producto = productos.find(p => p.nombre === nombreActualizar);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        renderizarProductos();
    } else {
        alert('Producto no encontrado');
    }

    // Limpiar campos del formulario
    document.getElementById('nombreActualizar').value = '';
    document.getElementById('nuevaCantidad').value = '';
});


// Eliminar producto específico
function eliminarProducto(index) {
    productos.splice(index, 1);
    renderizarProductos();
}