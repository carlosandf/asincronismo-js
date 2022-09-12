// Ejercicio 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 5, sum));

// Ejercicio 2
setTimeout(() => {
  console.log('Hola JavaScript');
}, 2000);

// Ejercicio 3
function gretting(name) {
  console.log(`Hello ${name}`);
}

setTimeout(gretting, 2000, 'Carlos');