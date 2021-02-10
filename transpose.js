const transpose = function(matrix) {
  // Put your solution here
  let arr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      arr[col][row] = matrix[row][col];
    }
  }
  return arr;
};


// Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write('\n');
//   }
// };

module.exports = transpose;