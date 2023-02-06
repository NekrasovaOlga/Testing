/* 
Затрачено 8 минут
*/

const task6 = (count) => {
  const degreeTable = [];
  for (let i = 1; i <= count; i++) {
    degreeTable[i] = [];
    for (let j = 1; j <= count; j++) {
      degreeTable[i][j] = i * j;
    }
  }
  return degreeTable;
};

console.table(task6(9));
