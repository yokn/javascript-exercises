/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const caesar = function(string, shiftAmount) {
        const alphabetUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const alphabetLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
        let splitString = [];
        let output = '';
        let charPos = 0;
        splitString = string.split('');
        console.log(`split string  = ${splitString}`);

        function checkUpperCase(char) {
                return char === char.toUpperCase();
        }

        function shifter(char, upperCase) {
                if (upperCase === true) {
                        for (let j = 0; j < 27; j++) {
                                if (char === alphabetUpperCase[j]) {
                                        charPos = j + shiftAmount;
                                        console.log(charPos);
                                }
                        }
                        return alphabetUpperCase[charPos];
                }
                for (let j = 0; j < 27; j++) {
                        if (char === alphabetLowerCase[j]) {
                                charPos = j + shiftAmount;
                                console.log(charPos);
                        }
                        return alphabetLowerCase[charPos];
                }
        }
        function main() {
                for (let i = 0; i < string.length; i++) {
                        if (/[A-Za-z]/.test(splitString[i])) {
                                output += shifter(splitString[i], checkUpperCase(splitString[i]));

                                // output = output.join('', '');
                                console.log(`output = ${output}`);
                        }
                }
                return output;
        }
        return main();
};

/*
0 Take the string and the shift amount as input
1 
2 Shift the string 
3 
9 Return the string
*/

module.exports = caesar;
