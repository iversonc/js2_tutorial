let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

/*
// put url string in specific form for exercise 6.1.1
function functionalSpecialUrls(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}

// exercise 6.1.1
console.log(functionalSpecialUrls(states));
[
  'https://example.com/kansas',
  'https://example.com/nebraska',
  'https://example.com/north-dakota',
  'https://example.com/south-dakota'
]
*/

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// doubles: Imperative version
function imperativeDoubles(elements) {
  let doubles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 2) {
      doubles.push(element);
    }
  });
  return doubles;
}
console.log(imperativeDoubles(states));

// doubles: Functional version
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));

// dakota: Imperative version
function imperativeDakota(elements) {
  let dakota = [];
  elements.forEach(function(element) {
    if (element.toLowerCase().includes("dakota")) {
      dakota.push(element);
    }
  });
  return dakota;
}
console.log(imperativeDakota(states));

// dakota: Functional version
function functionalDakota(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(functionalDakota(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

//   return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});

// product: Functional solution
function functionalProduct(elements) {
  return elements.reduce((product, n) => { return product *= n; }, 1);
}
console.log(functionalProduct(numbers));
