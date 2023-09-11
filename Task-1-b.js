let toUpperCase = function (words) {
  let upperCaseWords = [];
    for (let word of words) {
        upperCaseWords.push(word.toUpperCase());
    }
    return upperCaseWords;
 }


let words = ['apple', 'microsoft'];

console.log(toUpperCase(words));