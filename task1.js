/* Затрачено примерно 3 минуты */

const task1 = (arr) => {
  return `${arr.join(', ')}.`;
};

console.log(task1(['Москва', 'Санкт-Петербург', 'Воронеж']));

const res = (count = 1, result = 0, newResult = 0) => {
  if (result > 5000) return newResult;
  if (newResult <= 5000) {
    newResult = result;
    return res(count + 1, count + result, newResult);
  }
};

console.log(res());
