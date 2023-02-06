/* Затрачено 6 минут */

const task3 = (int) => {
  const text = ['компьютера', 'компьютеров', 'компьютер'];
  const count = int % 10;
  if (count === 1) {
    return `${int} ${text[2]}`;
  }
  if (count > 1 && count < 5) {
    return `${int} ${text[0]}`;
  }
  if (count >= 5) {
    return `${int} ${text[1]}`;
  }
};

console.log(task3(21));
console.log(task3(22));
console.log(task3(41));
console.log(task3(53));
console.log(task3(1048));
console.log(task3(25));
