/* Затрачено примерно 10 минут */
const task4 = (int) => {
  if (int === 2) return 'Число простое';

  let status = true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(int)); i++) {
    if (int % i == 0) {
      status = false;
      break;
    }
  }

  return status ? 'Число простое' : 'Число составное';
};

// Простые числа
console.log(task4(673));
console.log(task4(557));
console.log(task4(983));
console.log(task4(317));
console.log(task4(59));
console.log(task4(23));
// Составные числа
console.log(task4(674));
console.log(task4(550));
console.log(task4(980));
console.log(task4(310));
console.log(task4(49));
console.log(task4(21));
