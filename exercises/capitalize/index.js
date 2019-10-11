// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capString = "";
  let arrSentence = str.split(" ");
  let counter = 1;

  for (let word of arrSentence) {
    capString += word[0].toUpperCase();
    capString += word.slice(1);
    if (counter != arrSentence.length) {
      capString += " ";
    }
    counter++;
  }
  return capString;
}

module.exports = capitalize;
