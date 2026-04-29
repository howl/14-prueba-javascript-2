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

console.log(numeroDeDosTresCuatroCifras());
