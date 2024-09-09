// Variables declaradas con let
let num1 = 10;
let num2 = 5;
let resultado;
let nombre = "Juan";
let edad = 25;
let esMayorDeEdad;
let precioProducto = 120.50;
let descuento = 0.1; // 10% de descuento
let cantidadComprada = 3;
let totalPago;

// Variables declaradas con const
const PI = 3.1416;
const GRAVEDAD = 9.8;
const velocidadLuz = 299792458; // en metros por segundo
const autor = "Gabriel García Márquez";
const añoPublicación = 1967;

// Realizar operaciones con las variables
resultado = num1 + num2;
esMayorDeEdad = edad >= 18 ? true : false; // Operador ternario para determinar si es mayor de edad
totalPago = precioProducto * cantidadComprada * (1 - descuento);

// operaciones
let areaCirculo = PI * (num1 ** 2); // Calcular el área de un círculo
let fuerza = num1 * GRAVEDAD; // Calcular la fuerza
let velocidadMedia = num2 / (num1 / 2); // Calcular la velocidad media

// Uso de operador ternario para verificar si la cantidad comprada es mayor a 2
let mensaje = cantidadComprada > 2 ? "Has comprado más de 2 productos." : "Has comprado 2 o menos productos.";

//operador ternario
let tipoProducto = precioProducto > 100 ? "Producto caro" : "Producto barato"; // Determinar el tipo de producto según su precio
let esDescuentoAlto = descuento > 0.15 ? "Descuento alto" : "Descuento bajo"; // Determinar si el descuento es alto o bajo
let mensajeEdad = esMayorDeEdad ? "Eres mayor de edad." : "Eres menor de edad."; // Mensaje basado en la edad
let puedeConducir = edad >= 18 ? "Puedes conducir." : "No puedes conducir."; // Verificar si puede conducir
let resultadoOperacion = (num1 * num2) % 2 === 0 ? "El resultado es par." : "El resultado es impar."; // Determinar si el resultado de la operación es par o impar

// Imprimir resultados
console.log("Resultado de la suma:", resultado);
console.log("¿Es mayor de edad?:", esMayorDeEdad);
console.log("Total a pagar:", totalPago);
console.log("Área del círculo:", areaCirculo);
console.log("Fuerza calculada:", fuerza);
console.log("Velocidad media calculada:", velocidadMedia);
console.log(mensaje);
console.log("Tipo de producto:", tipoProducto);
console.log("Nivel de descuento:", esDescuentoAlto);
console.log(mensajeEdad);
console.log(puedeConducir);
console.log(resultadoOperacion);