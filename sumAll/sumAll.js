/* eslint-disable no-bitwise */

const sumAll = function(x, y) {
        let total = 0;
        const biggerNumber = Math.max(x, y);
        const lowerNumber = Math.min(x, y);
        // eslint-disable-next-line prettier/prettier
        if (!(x & y > 0)) {
                return 'ERROR';
        }

        for (let i = lowerNumber; i <= biggerNumber; i++) {
                total += i;
        }
        return total;
};

module.exports = sumAll;
