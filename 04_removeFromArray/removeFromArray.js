const removeFromArray = function(arr, ...elems) {
    return arr.filter(element => !elems.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
