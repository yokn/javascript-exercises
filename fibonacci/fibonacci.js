const fibonacci = function(input) {
        let n = 0;
        let nPrev = 1;
        let nOld = 1;
        for (let i = 0; i < input - 2; i++) {
                n = nPrev + nOld;
                nOld = nPrev;
                nPrev = n;
        }
        return n;
};

module.exports = fibonacci;
