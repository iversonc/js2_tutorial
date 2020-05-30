const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// hash to store word as key and count as value
let uniques = {};
// array to hold individual words from sonnet
let words = sonnet.match(/\w+'?\w*/g);
// for each word in array, see if its key exists, if so increment it, else set to 1
for (let i = 0; i < words.length; ++i) {
  let word = words[i];
  if (uniques[word]) {
    uniques[word] += 1;
  } else {
    uniques[word] = 1;
  }
}
// display unique words and their count
console.log(uniques);
