function add(x, y) {
        return x + y;
}

function subtract(x, y) {
        return x - y;
}

function sum(input) {
        let totalSum = 0;
        for (let i = 0; i < input.length; i++) {
                totalSum += input[i];
        }
        return totalSum;
}

function multiply(inputMultiply) {
        function reducer(accumulator, currentValue) {
                return accumulator * currentValue;
        }
        return inputMultiply.reduce(reducer);
}

function power() {}

function factorial() {}

module.exports = {
        add,
        subtract,
        sum,
        multiply,
        power,
        factorial,
};
