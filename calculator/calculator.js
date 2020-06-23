function add(x, y) {
        return x + y;
}

function subtract(x, y) {
        return x - y;
}

function sum(inputSum) {
        let total = 0;
        for (let i = 0; i < inputSum.length; i++) {
                total += inputSum[i];
        }
        return total;
}

function multiply() {}

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
