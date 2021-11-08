/**
 * Snack 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 */

const numbs = [1, 2, 3, 4, 5];
console.log(numbs);

const squares = numbs.map( (element) => element*element);
console.log(squares);