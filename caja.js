const catalogoProductos = {
  productos: [
    {id: 1, nombre: "Frappé de Chocolate", precio: 5.99},
    {id: 2, nombre: "Malteada de Fresa", precio: 6.50},
    {id: 3, nombre: "Café Espresso", precio: 3.75},
    {id: 4, nombre: "Cappuccino Artesanal", precio: 4.99},
    {id: 5, nombre: "Brownie de Chocolate", precio: 4.50},
    {id: 6, nombre: "Cheesecake de Arándanos", precio: 5.75},
    {id: 7, nombre: "Croissant de Almendra", precio: 3.99},
    {id: 8, nombre: "Frappé de Vainilla", precio: 5.50}
  ]
};

let pedidos = [];

function agregarPedido(producto){

  pedidos.push(producto);

}

    agregarPedido(catalogoProductos.productos[0]);
    agregarPedido(catalogoProductos.productos[3]);
agregarPedido(catalogoProductos.productos[7]);

console.log("Pedidos");
console.table(pedidos);

let total = 0;

for(let i = 0; i < pedidos.length; i++){

  total = total + pedidos[i].precio;

}

console.log("Total: $" + total);