const add = function(a, b) { return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((accum, num) => {return accum + num;}, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum , num) => {return accum * num;}, 1);
};

const power = function(n, pow) {
  let i = 1
  product = 1
  while(i <= pow) { 
    product *= n;
    i++;
  };
  return product;
};

const factorial = function(n) {
  fact = 1;
  while (n != 0) {
    fact *= n;
    n--;
  };
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
