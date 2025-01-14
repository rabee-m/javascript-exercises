const sumAll = function(num1, num2) {
    let start = num1 < num2 ? num1 : num2;
    let end = num1 < num2 ? num2 : num1;
    let sum = 0;
    //check for valid inputs
    if (typeof(num1) != 'number' || typeof(num2) != 'number') return 'ERROR'
    if (num1 < 0 || num2 < 0) return 'ERROR';
    for (let i = start; i <= end; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
