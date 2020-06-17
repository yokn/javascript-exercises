/* eslint-disable no-console */

// had to cheat after my previous solution didn't work for the last 4 tests
const removeFromArray = function(...input) {
        let array = [];
        array = input[0];
        const newArray = array.filter(element => !input.includes(element));
        return newArray;
};

module.exports = removeFromArray;
