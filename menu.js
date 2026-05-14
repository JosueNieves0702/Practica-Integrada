// ═══════════════════════════════════════════════════════════════
//         MENÚ INTERACTIVO - CAFETERÍA
// ═══════════════════════════════════════════════════════════════

// COLORES ANSI para la consola
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
  white: '\x1b[37m',
  bgBlue: '\x1b[44m',
  bgGreen: '\x1b[42m',
  bgRed: '\x1b[41m',
  bgYellow: '\x1b[43m'
};

// CATÁLOGO DE PRODUCTOS
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

// CARRITO DE COMPRAS
let carrito = [];

// ════════════════════════════════════════════════════════════════
//                        FUNCIONES
// ════════════════════════════════════════════════════════════════

function limpiarPantalla() {
  console.clear();
}

function titulo(texto) {
  console.log(`\n${colores.bgBlue}${colores.bright}${colores.white} ${texto.padEnd(60)} ${colores.reset}\n`);
}

function subtitulo(texto) {
  console.log(`${colores.cyan}${colores.bright}▶ ${texto}${colores.reset}\n`);
}

function separador() {
  console.log(`${colores.dim}${colores.blue}${'═'.repeat(65)}${colores.reset}\n`);
}

function mostrarBienvenida() {
  limpiarPantalla();
  console.log(`
${colores.bright}${colores.magenta}
    ☕ ╔═══════════════════════════════════════════════╗ ☕
       ║      BIENVENIDO A CAFÉ & DELICIAS            ║
       ║      Menú Interactivo de Cafetería           ║
       ╚═══════════════════════════════════════════════╝
${colores.reset}`);
  separador();
}

function mostrarCatalogo() {
  titulo("CATÁLOGO DE PRODUCTOS");
  
  catalogoProductos.productos.forEach((producto, index) => {
    const numero = `${colores.yellow}[${producto.id}]${colores.reset}`;
    const nombre = `${colores.bright}${producto.nombre}${colores.reset}`;
    const precio = `${colores.green}$${producto.precio}${colores.reset}`;
    const stock = `${colores.dim}Stock: ${producto.stock}${colores.reset}`;
    
    console.log(`${numero} ${nombre}`);
    console.log(`   ${producto.descripcion}`);
    console.log(`   ${precio} | ${stock}`);
    console.log();
  });
}

function buscarProducto(nombreOId) {
  const busqueda = String(nombreOId).toLowerCase();
  const resultado = catalogoProductos.productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda) || String(p.id).includes(busqueda)
  );
  
  if (resultado.length === 0) {
    console.log(`${colores.red}✗ No se encontraron productos${colores.reset}\n`);
    return;
  }
  
  console.log(`${colores.green}✓ Encontrados ${resultado.length} producto(s):${colores.reset}\n`);
  resultado.forEach(p => {
    console.log(`  [${colores.yellow}${p.id}${colores.reset}] ${p.nombre} - ${colores.green}$${p.precio}${colores.reset}`);
  });
  console.log();
}

function agregarAlCarrito(idProducto, cantidad = 1) {
  const producto = catalogoProductos.productos.find(p => p.id === parseInt(idProducto));
  
  if (!producto) {
    console.log(`${colores.red}✗ Producto no encontrado${colores.reset}\n`);
    return;
  }
  
  if (cantidad > producto.stock) {
    console.log(`${colores.red}✗ Stock insuficiente. Disponibles: ${producto.stock}${colores.reset}\n`);
    return;
  }
  
  const itemEnCarrito = carrito.find(item => item.id === producto.id);
  
  if (itemEnCarrito) {
    itemEnCarrito.cantidad += cantidad;
  } else {
    carrito.push({
      ...producto,
      cantidad: cantidad
    });
  }
  
  console.log(`${colores.green}✓ ${producto.nombre} agregado al carrito${colores.reset}\n`);
}

function mostrarCarrito() {
  titulo("CARRITO DE COMPRAS");
  
  if (carrito.length === 0) {
    console.log(`${colores.dim}El carrito está vacío${colores.reset}\n`);
    return;
  }
  
  console.log(`${colores.bright}Artículos en el carrito:${colores.reset}\n`);
  
  let total = 0;
  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    
    console.log(`${index + 1}. ${colores.bright}${item.nombre}${colores.reset}`);
    console.log(`   Cantidad: ${colores.yellow}${item.cantidad}${colores.reset} | Precio unitario: ${colores.green}$${item.precio}${colores.reset}`);
    console.log(`   Subtotal: ${colores.green}$${subtotal.toFixed(2)}${colores.reset}`);
    console.log();
  });
  
  separador();
  console.log(`${colores.bright}${colores.green}TOTAL A PAGAR: $${total.toFixed(2)}${colores.reset}\n`);
}

function mostrarMenuPrincipal() {
  limpiarPantalla();
  mostrarBienvenida();
  
  console.log(`${colores.bright}Selecciona una opción:${colores.reset}\n`);
  console.log(`  ${colores.cyan}1${colores.reset} - Ver catálogo completo`);
  console.log(`  ${colores.cyan}2${colores.reset} - Buscar producto`);
  console.log(`  ${colores.cyan}3${colores.reset} - Agregar al carrito`);
  console.log(`  ${colores.cyan}4${colores.reset} - Ver carrito`);
  console.log(`  ${colores.cyan}5${colores.reset} - Procesar compra`);
  console.log(`  ${colores.cyan}6${colores.reset} - Vaciar carrito`);
  console.log(`  ${colores.cyan}0${colores.reset} - Salir\n`);
}

function procesarCompra() {
  if (carrito.length === 0) {
    console.log(`${colores.red}✗ El carrito está vacío${colores.reset}\n`);
    return;
  }
  
  let total = 0;
  carrito.forEach(item => {
    total += item.precio * item.cantidad;
  });
  
  titulo("PROCESANDO COMPRA");
  
  console.log(`${colores.bright}Resumen de la compra:${colores.reset}\n`);
  
  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    console.log(`  • ${item.nombre} x${item.cantidad} = ${colores.green}$${subtotal.toFixed(2)}${colores.reset}`);
  });
  
  separador();
  console.log(`${colores.bright}${colores.green}TOTAL: $${total.toFixed(2)}${colores.reset}`);
  console.log(`${colores.bright}${colores.bgGreen}${colores.white} ✓ ¡Compra realizada exitosamente! ${colores.reset}\n`);
  
  carrito = [];
}

function vaciarCarrito() {
  if (carrito.length === 0) {
    console.log(`${colores.dim}El carrito ya está vacío${colores.reset}\n`);
    return;
  }
  carrito = [];
  console.log(`${colores.green}✓ Carrito vaciado${colores.reset}\n`);
}

function mostrarEstadisticas() {
  titulo("ESTADÍSTICAS");
  
  console.log(`${colores.bright}Información del Catálogo:${colores.reset}\n`);
  console.log(`  Total de productos: ${colores.yellow}${catalogoProductos.productos.length}${colores.reset}`);
  
  const precioMinimo = Math.min(...catalogoProductos.productos.map(p => p.precio));
  const precioMaximo = Math.max(...catalogoProductos.productos.map(p => p.precio));
  const promedio = (catalogoProductos.productos.reduce((sum, p) => sum + p.precio, 0) / catalogoProductos.productos.length).toFixed(2);
  
  console.log(`  Precio mínimo: ${colores.green}$${precioMinimo}${colores.reset}`);
  console.log(`  Precio máximo: ${colores.green}$${precioMaximo}${colores.reset}`);
  console.log(`  Precio promedio: ${colores.green}$${promedio}${colores.reset}`);
  
  if (carrito.length > 0) {
    let totalCarrito = 0;
    carrito.forEach(item => {
      totalCarrito += item.precio * item.cantidad;
    });
    console.log(`\n  ${colores.bright}Carrito:${colores.reset}`);
    console.log(`  Productos en carrito: ${colores.yellow}${carrito.length}${colores.reset}`);
    console.log(`  Total en carrito: ${colores.green}$${totalCarrito.toFixed(2)}${colores.reset}`);
  }
  
  console.log();
}

// ════════════════════════════════════════════════════════════════
//                    DEMOSTRACIÓN INICIAL
// ════════════════════════════════════════════════════════════════

limpiarPantalla();

console.log(`
${colores.bright}${colores.cyan}
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║          ☕ CATÁLOGO DE CAFETERÍA - EJERCICIO ☕           ║
║                                                            ║
║   Este programa integra funcionalidades de catálogo y     ║
║   carrito de compras en una consola interactiva.          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
${colores.reset}
`);

// Mostrar catálogo
mostrarCatalogo();

// Buscar ejemplo
console.log(`${colores.bright}${colores.yellow}--- Ejemplo de búsqueda: "Frappé" ---${colores.reset}\n`);
buscarProducto("Frappé");

// Agregar al carrito ejemplo
console.log(`${colores.bright}${colores.yellow}--- Agregando productos al carrito ---${colores.reset}\n`);
agregarAlCarrito(1, 2);
agregarAlCarrito(5, 1);
agregarAlCarrito(7, 1);

// Mostrar carrito
mostrarCarrito();

// Mostrar estadísticas
mostrarEstadisticas();

// Información de las funciones disponibles
titulo("FUNCIONES DISPONIBLES");

console.log(`${colores.bright}Puedes usar las siguientes funciones:${colores.reset}\n`);

console.log(`${colores.cyan}mostrarCatalogo()${colores.reset}`);
console.log(`  └─ Muestra todos los productos disponibles\n`);

console.log(`${colores.cyan}buscarProducto(nombreOId)${colores.reset}`);
console.log(`  └─ Busca un producto por nombre o ID\n`);

console.log(`${colores.cyan}agregarAlCarrito(idProducto, cantidad)${colores.reset}`);
console.log(`  └─ Agrega un producto al carrito\n`);

console.log(`${colores.cyan}mostrarCarrito()${colores.reset}`);
console.log(`  └─ Muestra el contenido del carrito\n`);

console.log(`${colores.cyan}procesar Compra()${colores.reset}`);
console.log(`  └─ Procesa la compra y calcula el total\n`);

console.log(`${colores.cyan}vaciarCarrito()${colores.reset}`);
console.log(`  └─ Vacía todos los items del carrito\n`);

console.log(`${colores.cyan}mostrarEstadisticas()${colores.reset}`);
console.log(`  └─ Muestra estadísticas del catálogo\n`);

separador();

console.log(`${colores.green}✓ ¡Programa ejecutado correctamente!${colores.reset}\n`);
console.log(`${colores.bright}Puedes copiar y pegar las funciones en la consola para usarlas.${colores.reset}\n`);
