const sumAll = function(x, y) {
        let total = 0;
        for (; x <= y; x++) {
                total += x;
        }
        return total;
};

module.exports = sumAll;
