const findTheOldest = function(arr) {
    for(let person of arr) {
        if (!person.yearOfDeath) {
            const date = new Date();
            person["yearOfDeath"] = date.getFullYear();
        }
    }
    let newArr = arr.sort((a, b) => {
        const firstAge = (a.yearOfDeath - a.yearOfBirth);
        const secondAge = (b.yearOfDeath - b.yearOfBirth);
        return firstAge - secondAge;
    });
    return newArr[newArr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
