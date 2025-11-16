const palindromes = function (str) {
    str = str.replace(/[!,.?:;'" ]/g, "");

    str = str
        .split("")
        .map((letter) => letter.toLowerCase())
        .join("");

    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
