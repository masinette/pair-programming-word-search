const transpose = require('../transpose');


// const findWord = (letters, word) => {
//   const verticalJoin = letters.map(ls => ls.join(''));
//   for (l of verticalJoin) {
//     if (l.includes(word)) {
//       return true;
//     }
//   }
// };


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if ( l.includes(word)) {
      return true;
    }
  }
  return false;
};

const findWord = (letters, word) => {
  const verticalArr = transpose(letters);
    console.log(wordSearch(letters, word));
    return wordSearch(letters, word) || wordSearch(verticalArr, word);
};

// findWord();
//should find words vertically
//should return false if the word is not present

module.exports = wordSearch;
module.exports = findWord;