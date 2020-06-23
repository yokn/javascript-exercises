const palindromes = function(input) {
        let split;
        if (input.length % 2 === 0) {
                split = input.split('', input.length / 2);
                console.log(split);
                if (split === input.reverse()) {
                        return true;
                }
        } else {
                split = input.split('', input.length / 2 + 1); // not sure about this
                console.log(split);
                if (split === input.reverse()) {
                        return true;
                }
        }
};

module.exports = palindromes;
