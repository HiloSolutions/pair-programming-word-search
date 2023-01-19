const transpose = function(matrix) {

  const arr = [];
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < col; i++) {
    arr[i] = Array(row);
  }

  for (let j = 0; j < row; j++) {
    for (let i = 0; i < col; i++) {
      arr[i][j] = matrix[j][i];
    }
  }
  return arr;
};


const wordSearch = (letters, word) => {
  
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) { //iterate through each string
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(horizontalJoin).map(ls => ls.join(''));

  for (const l of verticalJoin) { //iterate through each string
    console.log(l);
    if (l.includes(word)) return true;
  }

  return false;
};



module.exports = wordSearch;

//test code to delete after
// const letters = [
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];
// const word = 'LARRY';

// wordSearch(letters, word, transpose);
