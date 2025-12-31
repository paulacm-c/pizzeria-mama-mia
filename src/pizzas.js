/**
 * Datos de pizzas de Pizzería Mamma Mia
 * 
 * Este archivo contiene el catálogo de pizzas disponibles
 * con sus respectivos detalles: nombre, descripción, precio, ingredientes e imagen
 */

/**
 * Catálogo de pizzas disponibles
 * @type {Array<{id: string, name: string, desc: string, price: number, ingredients: string[], img: string}>}
 */
export const pizzas = [
  {
    id: "P001",
    name: "Napolitana",
    desc: "La pizza napolitana auténtica, considerada la verdadera pizza italiana. Masa tierna y delgada con bordes altos, cubierta con salsa de tomate San Marzano, mozzarella di bufala y albahaca fresca.",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "P002",
    name: "Española",
    desc: "Una combinación perfecta de sabores españoles. Pizza generosamente cubierta con jamón serrano, chorizo español y olives negras, sobre una base de mozzarella fundida.",
    price: 7250,
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    id: "P003",
    name: "Salame",
    desc: "Para los amantes del sabor intenso. Salame italiano de primera calidad sobre una base de tomate fresco y mozzarella, con un toque de orégano para realzar los sabores.",
    price: 5990,
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
  {
    id: "P004",
    name: "Cuatro Estaciones",
    desc: "Una pizza dividida en cuatro secciones, cada una representando una temporada del año. Combina champiñones, aceitunas, alcachofas y tomates cherry en una explosión de sabores.",
    price: 9590,
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
  },
  {
    id: "P005",
    name: "Bacon",
    desc: "Una pizza reconfortante con tocino crujiente, tomates cherry jugosos y un toque especial de oregáno. Ideal para quienes disfrutan de sabores ahumados.",
    price: 6450,
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
  },
  {
    id: "P006",
    name: "Pollo Picante",
    desc: "Una pizza con actitud. Pollo a la parrilla sazonado con especias picantes, pimientos verdes y rojos, topped con mozzarella y un toque de jalapeño para los amantes del picante.",
    price: 8500,
    ingredients: ["mozzarella", "pimientos", "pollo a la parrilla", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
  },
];

/**
 * Ejemplo de estructura de carrito de compras
 * En una versión completa, esto se manejaría con estado global (Context API o Redux)
 * @type {Array<{id: string, name: string, price: number, count: number, img: string}>}
 */
export const pizzaCartExample = [
  {
    id: "P001",
    name: "Napolitana",
    price: 5950,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
];