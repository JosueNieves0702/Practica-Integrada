// ═══════════════════════════════════════════════════════════════
//         CRUD DE PRODUCTOS DE CAFETERÍA
//    (Create, Read, Update, Delete - Gestión de Inventario)
// ═══════════════════════════════════════════════════════════════

// COLORES ANSI
const colores = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bgBlue: '\x1b[44m',
  bgGreen: '\x1b[42m',
  bgRed: '\x1b[41m'
};

// OBJETO PRINCIPAL - BASE DE DATOS
const catalogoProductos = {
  productos: [
    {
      id: 1,
      nombre: "Frappé de Chocolate",
      descripcion: "Delicioso frappé de chocolate con leche condensada y hielo",
      precio: 5.99,
      stock: 45
    },
    {
      id: 2,
      nombre: "Malteada de Fresa",
      descripcion: "Malteada fresca de fresa con crema batida y cerezas",
      precio: 6.50,
      stock: 35
    },
    {
      id: 3,
      nombre: "Café Espresso",
      descripcion: "Café espresso puro 100% arábica de alta calidad",
      precio: 3.75,
      stock: 60
    },
    {
      id: 4,
      nombre: "Cappuccino Artesanal",
      descripcion: "Cappuccino con espuma de leche vaporizada y canela",
      precio: 4.99,
      stock: 40
    },
    {
      id: 5,
      nombre: "Brownie de Chocolate",
      descripcion: "Brownie casero de chocolate oscuro con nueces",
      precio: 4.50,
      stock: 28
    },
    {
      id: 6,
      nombre: "Cheesecake de Arándanos",
      descripcion: "Cheesecake cremoso con cobertura de arándanos frescos",
      precio: 5.75,
      stock: 18
    },
    {
      id: 7,
      nombre: "Croissant de Almendra",
      descripcion: "Croissant crujiente relleno de crema de almendra",
      precio: 3.99,
      stock: 50
    },
    {
      id: 8,
      nombre: "Frappé de Vainilla",
      descripcion: "Frappé cremoso de vainilla con topping de chocolate",
      precio: 5.50,
      stock: 40
    }
  ]
};

// ════════════════════════════════════════════════════════════════
//                    FUNCIONES CRUD
// ════════════════════════════════════════════════════════════════

// ─── READ ───────────────────────────────────────────────────────
// Leer todos los productos
function leerTodosProductos() {
  console.log(`\n${colores.bgBlue}${colores.cyan}${colores.bright} LEER - Todos los Productos ${colores.reset}\n`);
  
  if (catalogoProductos.productos.length === 0) {
    console.log(`${colores.dim}No hay productos en el catálogo${colores.reset}\n`);
    return;
  }
  
  catalogoProductos.productos.forEach((producto, index) => {
    console.log(`${colores.yellow}[${producto.id}]${colores.reset} ${colores.bright}${producto.nombre}${colores.reset}`);
    console.log(`    ${producto.descripcion}`);
    console.log(`    ${colores.green}Precio: $${producto.precio}${colores.reset} | ${colores.cyan}Stock: ${producto.stock}${colores.reset}\n`);
  });
}

// Leer un producto por ID
function leerProductoPorId(id) {
  const producto = catalogoProductos.productos.find(p => p.id === id);
  
  console.log(`\n${colores.bgBlue}${colores.cyan}${colores.bright} LEER - Producto ID ${id} ${colores.reset}\n`);
  
  if (!producto) {
    console.log(`${colores.red}✗ Producto no encontrado${colores.reset}\n`);
    return null;
  }
  
  console.log(`${colores.yellow}ID:${colores.reset} ${producto.id}`);
  console.log(`${colores.yellow}Nombre:${colores.reset} ${colores.bright}${producto.nombre}${colores.reset}`);
  console.log(`${colores.yellow}Descripción:${colores.reset} ${producto.descripcion}`);
  console.log(`${colores.yellow}Precio:${colores.reset} ${colores.green}$${producto.precio}${colores.reset}`);
  console.log(`${colores.yellow}Stock:${colores.reset} ${colores.cyan}${producto.stock} unidades${colores.reset}\n`);
  
  return producto;
}

// ─── CREATE ─────────────────────────────────────────────────────
// Crear un nuevo producto
function crearProducto(nombre, descripcion, precio, stock) {
  console.log(`\n${colores.bgGreen}${colores.cyan}${colores.bright} CREATE - Crear Nuevo Producto ${colores.reset}\n`);
  
  // Validaciones
  if (!nombre || nombre.trim() === '') {
    console.log(`${colores.red}✗ El nombre es requerido${colores.reset}\n`);
    return null;
  }
  
  if (precio < 0 || isNaN(precio)) {
    console.log(`${colores.red}✗ El precio debe ser válido${colores.reset}\n`);
    return null;
  }
  
  if (stock < 0 || !Number.isInteger(stock)) {
    console.log(`${colores.red}✗ El stock debe ser un número entero${colores.reset}\n`);
    return null;
  }
  
  // Generar ID automáticamente
  const nuevoId = Math.max(...catalogoProductos.productos.map(p => p.id), 0) + 1;
  
  // Crear objeto del producto
  const nuevoProducto = {
    id: nuevoId,
    nombre: nombre,
    descripcion: descripcion || "Sin descripción",
    precio: parseFloat(precio),
    stock: parseInt(stock)
  };
  
  // Agregar al array
  catalogoProductos.productos.push(nuevoProducto);
  
  console.log(`${colores.green}✓ Producto creado exitosamente${colores.reset}`);
  console.log(`${colores.yellow}ID asignado:${colores.reset} ${nuevoId}`);
  console.log(`${colores.yellow}Nombre:${colores.reset} ${colores.bright}${nuevoProducto.nombre}${colores.reset}\n`);
  
  return nuevoProducto;
}

// ─── UPDATE ─────────────────────────────────────────────────────
// Actualizar un producto
function actualizarProducto(id, actualizaciones) {
  console.log(`\n${colores.bgBlue}${colores.bright} UPDATE - Actualizar Producto ID ${id} ${colores.reset}\n`);
  
  const producto = catalogoProductos.productos.find(p => p.id === id);
  
  if (!producto) {
    console.log(`${colores.red}✗ Producto no encontrado${colores.reset}\n`);
    return null;
  }
  
  // Guardar valores anteriores
  const valoresAnteriores = { ...producto };
  
  // Actualizar solo los campos proporcionados
  if (actualizaciones.nombre !== undefined) {
    producto.nombre = actualizaciones.nombre;
  }
  if (actualizaciones.descripcion !== undefined) {
    producto.descripcion = actualizaciones.descripcion;
  }
  if (actualizaciones.precio !== undefined) {
    if (actualizaciones.precio < 0) {
      console.log(`${colores.red}✗ El precio no puede ser negativo${colores.reset}\n`);
      return null;
    }
    producto.precio = parseFloat(actualizaciones.precio);
  }
  if (actualizaciones.stock !== undefined) {
    if (actualizaciones.stock < 0 || !Number.isInteger(actualizaciones.stock)) {
      console.log(`${colores.red}✗ El stock debe ser un número entero no negativo${colores.reset}\n`);
      return null;
    }
    producto.stock = parseInt(actualizaciones.stock);
  }
  
  console.log(`${colores.green}✓ Producto actualizado${colores.reset}\n`);
  console.log(`${colores.yellow}Cambios realizados:${colores.reset}`);
  
  if (actualizaciones.nombre !== undefined) {
    console.log(`  • Nombre: ${colores.dim}${valoresAnteriores.nombre}${colores.reset} → ${colores.bright}${producto.nombre}${colores.reset}`);
  }
  if (actualizaciones.precio !== undefined) {
    console.log(`  • Precio: ${colores.dim}$${valoresAnteriores.precio}${colores.reset} → ${colores.green}$${producto.precio}${colores.reset}`);
  }
  if (actualizaciones.stock !== undefined) {
    console.log(`  • Stock: ${colores.dim}${valoresAnteriores.stock}${colores.reset} → ${colores.cyan}${producto.stock}${colores.reset}`);
  }
  console.log();
  
  return producto;
}

// ─── DELETE ─────────────────────────────────────────────────────
// Eliminar un producto
function eliminarProducto(id) {
  console.log(`\n${colores.bgRed}${colores.bright} DELETE - Eliminar Producto ID ${id} ${colores.reset}\n`);
  
  const indice = catalogoProductos.productos.findIndex(p => p.id === id);
  
  if (indice === -1) {
    console.log(`${colores.red}✗ Producto no encontrado${colores.reset}\n`);
    return null;
  }
  
  const productoEliminado = catalogoProductos.productos.splice(indice, 1)[0];
  
  console.log(`${colores.green}✓ Producto eliminado${colores.reset}`);
  console.log(`${colores.yellow}Producto:${colores.reset} ${colores.bright}${productoEliminado.nombre}${colores.reset}`);
  console.log(`${colores.yellow}ID:${colores.reset} ${productoEliminado.id}\n`);
  
  return productoEliminado;
}

// ─── FUNCIONES AUXILIARES ───────────────────────────────────────
// Obtener cantidad de productos
function contarProductos() {
  return catalogoProductos.productos.length;
}

// Obtener valor total del inventario
function calcularValorTotalInventario() {
  return catalogoProductos.productos.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);
  }, 0);
}

// Mostrar productos con stock bajo
function productosConStockBajo(minimo = 20) {
  console.log(`\n${colores.bgBlue}${colores.cyan}${colores.bright} PRODUCTOS CON STOCK BAJO (< ${minimo}) ${colores.reset}\n`);
  
  const stockBajo = catalogoProductos.productos.filter(p => p.stock < minimo);
  
  if (stockBajo.length === 0) {
    console.log(`${colores.green}✓ Todos los productos tienen stock suficiente${colores.reset}\n`);
    return;
  }
  
  stockBajo.forEach(producto => {
    console.log(`${colores.red}⚠${colores.reset} ${colores.bright}${producto.nombre}${colores.reset}`);
    console.log(`   Stock actual: ${colores.yellow}${producto.stock}${colores.reset} unidades\n`);
  });
}

// Mostrar resumen del catálogo
function mostrarResumen() {
  console.log(`\n${colores.bgBlue}${colores.cyan}${colores.bright} RESUMEN DEL CATÁLOGO ${colores.reset}\n`);
  
  console.log(`${colores.yellow}Total de productos:${colores.reset} ${contarProductos()}`);
  console.log(`${colores.yellow}Valor total inventario:${colores.reset} ${colores.green}$${calcularValorTotalInventario().toFixed(2)}${colores.reset}`);
  
  const stockTotal = catalogoProductos.productos.reduce((sum, p) => sum + p.stock, 0);
  console.log(`${colores.yellow}Total de unidades:${colores.reset} ${colores.cyan}${stockTotal}${colores.reset}`);
  
  const precioPromedio = (catalogoProductos.productos.reduce((sum, p) => sum + p.precio, 0) / contarProductos()).toFixed(2);
  console.log(`${colores.yellow}Precio promedio:${colores.reset} ${colores.green}$${precioPromedio}${colores.reset}\n`);
}

// ════════════════════════════════════════════════════════════════
//                    DEMOSTRACIÓN DEL CRUD
// ════════════════════════════════════════════════════════════════

console.clear();

console.log(`
${colores.bright}${colores.cyan}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║        ☕ CRUD - GESTIÓN DE CAFETERÍA ☕                 ║
║                                                           ║
║     Create, Read, Update, Delete de Productos            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
${colores.reset}`);

// ─────────────────────────────────────────────────────────────────
// 1. READ - LEER PRODUCTOS
// ─────────────────────────────────────────────────────────────────

leerTodosProductos();

console.log(`${colores.dim}${colores.blue}${'─'.repeat(65)}${colores.reset}\n`);

// Leer un producto específico
leerProductoPorId(5);

// ─────────────────────────────────────────────────────────────────
// 2. CREATE - CREAR NUEVOS PRODUCTOS
// ─────────────────────────────────────────────────────────────────

crearProducto("Té Chai Latte", "Té chai especiado con leche vaporizada", 4.75, 30);
crearProducto("Sándwich de Jamón", "Sándwich fresco con jamón y queso", 6.99, 25);

// ─────────────────────────────────────────────────────────────────
// 3. UPDATE - ACTUALIZAR PRODUCTOS
// ─────────────────────────────────────────────────────────────────

actualizarProducto(3, { 
  precio: 4.25,
  stock: 55
});

actualizarProducto(1, { 
  nombre: "Frappé de Chocolate Premium",
  descripcion: "Frappé de chocolate con leche de almendra y hielo",
  precio: 6.49
});

// ─────────────────────────────────────────────────────────────────
// 4. DELETE - ELIMINAR PRODUCTOS
// ─────────────────────────────────────────────────────────────────

// Supongamos que queremos eliminar un producto con bajo rendimiento
// (eliminaremos el ID 7 como ejemplo)
eliminarProducto(7);

// ─────────────────────────────────────────────────────────────────
// MOSTRAR ESTADO FINAL
// ─────────────────────────────────────────────────────────────────

console.log(`${colores.blue}${'═'.repeat(65)}${colores.reset}\n`);

leerTodosProductos();

mostrarResumen();

productosConStockBajo(30);

console.log(`${colores.blue}${'═'.repeat(65)}${colores.reset}\n`);

console.log(`${colores.green}${colores.bright}✓ Demostración de CRUD completada${colores.reset}\n`);
console.log(`${colores.bright}Funciones disponibles:${colores.reset}\n`);

console.log(`${colores.cyan}leerTodosProductos()${colores.reset} - Muestra todos los productos`);
console.log(`${colores.cyan}leerProductoPorId(id)${colores.reset} - Muestra un producto específico\n`);

console.log(`${colores.cyan}crearProducto(nombre, descripcion, precio, stock)${colores.reset}`);
console.log(`  └─ Crea un nuevo producto\n`);

console.log(`${colores.cyan}actualizarProducto(id, {nombre, descripcion, precio, stock})${colores.reset}`);
console.log(`  └─ Actualiza los datos de un producto\n`);

console.log(`${colores.cyan}eliminarProducto(id)${colores.reset} - Elimina un producto\n`);

console.log(`${colores.cyan}mostrarResumen()${colores.reset} - Muestra estadísticas del catálogo`);
console.log(`${colores.cyan}productosConStockBajo(minimo)${colores.reset} - Muestra productos con bajo stock`);
console.log(`${colores.cyan}contarProductos()${colores.reset} - Retorna la cantidad total de productos`);
console.log(`${colores.cyan}calcularValorTotalInventario()${colores.reset} - Calcula el valor del inventario\n`);

// Exportar para usar como módulo (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    catalogoProductos,
    leerTodosProductos,
    leerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    mostrarResumen,
    productosConStockBajo,
    contarProductos,
    calcularValorTotalInventario
  };
}

