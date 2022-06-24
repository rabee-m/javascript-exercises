const fibonacci = function(n) {
    if (n == 1 || n == 2) { return 1;}
    let prev = 1;
    let curr = 1;
    let count = 2;
    while (count < n) {
        temp = curr;
        curr = prev + curr;
        prev = curr;
        count++;
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
