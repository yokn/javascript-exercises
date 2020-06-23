// this is terrible
const palindromes = function(input) {
        const string = input.toString().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        let substring;
        let reversed;
        let reversedSubstring;
        if (string.length % 2 === 0) {
                substring = string.substring(0, input.length / 2);
                console.log(substring);
                reversed = string
                        .split('')
                        .reverse()
                        .join('');
                reversedSubstring = reversed.substring(0, input.length / 2);
                console.log(`${reversedSubstring}1`);
                if (substring.toLowerCase() === reversedSubstring.toLowerCase()) {
                        return true;
                }

                return false;
        }

        substring = input.substring(0, input.length / 2 + 1); // not sure about this
        console.log(substring);
        reversed = string
                .split('')
                .reverse()
                .join('');
        reversedSubstring = reversed.substring(0, input.length / 2 + 1);
        console.log(reversedSubstring);
        if (substring.toLowerCase() === reversedSubstring.toLowerCase()) {
                return true;
        }
        return false;
};

module.exports = palindromes;
