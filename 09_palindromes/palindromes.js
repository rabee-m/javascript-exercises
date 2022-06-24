const palindromes = function (string) {
    const stringList = string.toLowerCase().split('');
    const filteredList = stringList.filter(letter => (/[a-zA-Z]/).test(letter))
    let start = 0;
    let end = filteredList.length - 1;
    while (start < end) {
        if (filteredList[start] != filteredList[end]) {return false;};
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
