/* Затрачено примерно 10 минут */

const task5 = (arrA, arrB) => {
  const result = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] == arrB[j] && result.indexOf(arrB[j]) == -1) {
        result.push(arrB[j]);
        break;
      }
    }
  }

  return result;
};

console.log(
  task5([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1])
);
