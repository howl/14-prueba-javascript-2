/**
 * EJERCICIO 1
 *
 * Hacer un programa que:
 *   1. Solicite al usuario el ingreso por teclado de 3 notas
 *   2. Saque la media de las notas
 *   3. Muestre por pantalla
 *      · Si la nota es menor que 5 'SUSPENSO'
 *      · Si la nota es mayor o igual 5 y menor que 7 'APROBADO'
 *      · Si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
 * @returns {string}
 */
const calcularMediaYCalificar = () => {
  const notas = [];
  let numNumeros = 0;
  do {
    notas[numNumeros] = window.prompt(`Introduce nota ${numNumeros + 1} entre 0 y 10:`);
    if (notas[numNumeros].trim() !== '' && notas[numNumeros] >= 0 && notas[numNumeros] <= 10) {
      notas[numNumeros] = Number(notas[numNumeros]);
      numNumeros++;
    }
  } while (numNumeros < 3);
  const media = notas.reduce((acc, num, index, array) => {
    acc += num;
    if (index === array.length - 1)
      acc /= array.length;
    return acc;
  }, 0);
  if (media < 5)
    return 'Suspenso';
  else if (media >= 5 && media < 7)
    return 'Aprobado';
  else
    return 'Sobresaliente';
};

// Comentado para evitar que salte el prompt en siguientes ejercicios.
//console.log(calcularMediaYCalificar());

/**
 * EJERCICIO 2
 *
 * Hacer un programa que:
 *   1. Ingreso de un numero por teclado
 *   2. Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras
 * @returns {string}
 */
const numeroDeDosTresCuatroCifras = () => {
  let numero;
  do {
    numero = window.prompt('Introduce un número entre 0 y 999: ');
    if (numero.trim() === '' || numero < 0 || numero > 999)
      numero = null;
  } while (numero === null);
  /*
    Aunque número es ya un String, hago casting a Number y de nuevo a String para
    evitar que el valor -0 acabe como 0.
  */
  numero = String(Number(numero));
  return `El número ${numero} tiene ${numero.length} cifras`;
};

// Comentado para evitar que salte el prompt en siguientes ejercicios.
//console.log(numeroDeDosTresCuatroCifras());

/**
 * EJERCICIO 3
 *
 * Solicite al usuario que escriba un color. Si ese color existe que lo traduzca
 * al inglés, sino que muestre un mensaje de error
 * @returns {string}
 */
const traduceColor = () => {
  const color = window.prompt('Introduce el nombre de un color: ');
  let colorEnIngles;
  switch (color) {
    case 'rojo':
      colorEnIngles = 'red';
      break;
    case 'verde':
      colorEnIngles = 'green';
      break;
    case 'azul':
      colorEnIngles = 'blue';
      break;
    case 'amarillo':
      colorEnIngles = 'yellow';
      break;
    case 'morado':
      colorEnIngles = 'purple';
      break;
    case 'marrón':
      colorEnIngles = 'brown';
      break;
    case 'naranja':
      colorEnIngles = 'orange';
      break;
    case 'negro':
      colorEnIngles = 'black';
      break;
    case 'blanco':
      colorEnIngles = 'white';
      break;
    default:
      return `Error: El color ${color} no existe en nuestros datos`
  }
  return `El color ${color} es ${colorEnIngles} en inglés`;
};

// Comentado para evitar que salte el prompt en siguientes ejercicios.
//console.log(traduceColor());

/**
 * EJERCICIO 4
 *
 * Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
 *   Cuantos son positivos
 *   Cuantos son negativos
 *   Cuantos son pares
 * @returns {string}
 */
const positivosNegativosPares = () => {
  const cantidadDeCadaTipo = {
    positivos: 0,
    negativos: 0,
    pares: 0,
  };
  let numNumeros = 0;
  do {
    let numero = window.prompt(`Introduce número ${numNumeros + 1}:`);
    if (numero.trim() !== '' && !Number.isNaN(numero)) {
      numero = Number(numero);
      if (numero > 0)
        cantidadDeCadaTipo.positivos++;
      else
        cantidadDeCadaTipo.negativos++;
      if (!(numero % 2))
        cantidadDeCadaTipo.pares++;
      numNumeros++;
    }
  } while (numNumeros < 10);
  return `Hay ${cantidadDeCadaTipo.positivos} positivos, ${cantidadDeCadaTipo.negativos} negativos y ${cantidadDeCadaTipo.pares} pares`;
};


// Comentado para evitar que salte el prompt en siguientes ejercicios.
//console.log(positivosNegativosPares());

/**
 * EJERCICIO 5
 *
 * Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
 *   Almacenar todos los números en un array
 *   Almacenar en otro array los números comprendidos entre el 1 y 250
 *   Almacenar en otro array los números comprendidos entre el 251 y 500
 * @returns {number[][]}
 */
const almacenarNumerosEnArrays = () => {
  const numeros = [];
  numeros[0] = [];
  numeros[1] = [];
  numeros[2] = [];
  let numNumeros = 0;
  do {
    numeros[0][numNumeros] = window.prompt(`Introduce número ${numNumeros + 1} entre 1 y 500:`);
    if (numeros[0][numNumeros].trim() !== '' && numeros[0][numNumeros] >= 1 && numeros[0][numNumeros] <= 500) {
      numeros[0][numNumeros] = Number(numeros[0][numNumeros]);
      if (numeros[0][numNumeros] <= 250)
        numeros[1].push(numeros[0][numNumeros]);
      else
        numeros[2].push(numeros[0][numNumeros]);
      numNumeros++;
    }
  } while (numNumeros < 10);

  return numeros;
};

console.log(almacenarNumerosEnArrays());
