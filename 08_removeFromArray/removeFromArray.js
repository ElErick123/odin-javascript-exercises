const removeFromArray = function(arr, ...numsToDelete) {
    return arr.filter(item => !numsToDelete.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
