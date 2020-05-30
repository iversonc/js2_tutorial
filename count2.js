const sonnet = `Let me not to the marriage of true minds Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken. Love's not time's fool, though rosy lips and cheeks Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = new Map();
// matches one or more word chars, 0 or 1 ' and 0 or more word chars, multiple times
let words =  sonnet.match(/\w+'?\w*/g);

for (let i = 0; i < words.length; ++i) {
  let word = words[i];
  if (uniques.get(word)) {                  // if word is an existing key
    let currentValue = uniques.get(word);   //   get its value
    uniques.set(word, currentValue + 1);    //   and increment it
  } else {                                  // else
    uniques.set(word, 1);                   //   set word as key and count to 1
  }
}

console.log(uniques);

// this part didn't work for some reason?
// let values = Object.values(uniques);
// console.log(values);
//
// let total = 0;
// for (let i = 0; i < values.length; ++i) {
//   total += values[i];
// }
//
// console.log(`total = ${total}`);
// console.log(`words = ${words.length}`);
