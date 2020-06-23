// this is terrible
const palindromes = function(input) {
        const string = input.toLowerCase().replace(/[^A-Za-z]/g, ''); // yeah I copied this
        const reversed = string
                .split('')
                .reverse()
                .join('');

        if (string === reversed) {
                return true;
        }

        return false;
};
module.exports = palindromes;
