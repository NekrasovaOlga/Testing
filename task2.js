/* Затрачено 5 минут */

const task2 = (int) => {
  const count = int % 5;
  if (count === 0) {
    return int;
  } else if (count >= 2.5) {
    return int - count + 5;
  } else {
    return int - count;
  }
  console.log(count);
};

console.log(task2(33));
console.log(task2(27));
console.log(task2(27, 7));
console.log(task2(41, 3));
console.log(task2(-23, 444));
console.log(task2(-0.6));
