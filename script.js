function calcularOperacion(a, b, operacion) {
  switch (operacion) {
    case "sumar":
      return a + b;
    case "restar":
      return a - b;
    case "multiplicar":
      return a * b;
    case "dividir":
      return a / b;
    default:
      "Operacion no valida";
  }
}

console.log("Suma", calcularOperacion(10, 5, "sumar"));
console.log("Resta", calcularOperacion(10, 5, "restar"));
console.log("Multiplicacion", calcularOperacion(10, 5, "multiplicar"));
console.log("Division", calcularOperacion(10, 5, "dividir"));

function paresArreglo(a, b) {
  let pares = [];

  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }

  return pares;
}

console.log(paresArreglo(1, 10));

function tablaMulti(a, x) {
  let result;
  for (let i = 0; i <= x; i++) {
    if (i !== 5) {
      result = i * a;
      console.log(i, "x", x, "=", result);
    }
  }

  return;
}

console.log(tablaMulti(5, 10));

function multiploTres() {
  let multiplo = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      multiplo.push(i);
    }
  }

  return multiplo;
}

console.log(multiploTres());

function diasCumple(fechaCumple) {
  let fechaActual = new Date();

  let cumpleaños = new Date(fechaCumple);

  let añoActual = fechaActual.getFullYear();
  let añoCumple = fechaActual.getFullYear();

  if (
    cumpleaños.getMonth() < fechaActual.getMonth() ||
    (cumpleaños.getMonth() === fechaActual.getMonth() &&
      cumpleaños.getDate() < fechaActual.getDate())
  ) {
    añoCumple++;
  }

  cumpleaños.getFullYear(añoCumple);

  let diferencia = cumpleaños.getTime() - fechaActual.getTime();

  let diasFaltantes = Math.ceil(diferencia / (1000 * 3600 * 24));

  return diasFaltantes;
}

let fechaDeCumpleaños = "2024-07-01";
let diaFalt = diasCumple(fechaDeCumpleaños);
console.log("Faltan ", diaFalt, " dias para tu cumpleaños");

function obtenerPalabras(oracion) {
  let palabras = oracion.split(" ");

  return palabras;
}

let oracion = "Hola, ¿cómo estás hoy?";
let arregloDePalabras = obtenerPalabras(oracion);
console.log(arregloDePalabras);
