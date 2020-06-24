/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const caesar = function(string, shiftAmount) {
        const alphabetUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const alphabetLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
        let output = [];
        let charPos;
        function checkUpperCase(char) {
                return char === char.toUpperCase();
        }
        output = string.split('');
        console.log(`split string  = ${output}`);
        for (let i = 0; i < string.length; i++) {
                if (/[A-Za-z]/.test(output[i])) {
                        if (checkUpperCase(output[i]) === true) {
                                for (let j = 0; j < 27; j++) {
                                        if (output[i] === alphabetUpperCase[j]) {
                                                charPos = j + shiftAmount;
                                                console.log(charPos);
                                        }
                                }
                                output[i] = alphabetUpperCase[charPos];
                                console.log(`shifted string ${i}  = ${output}`);
                        } else {
                                for (let j = 0; j < 27; j++) {
                                        if (output[i] === alphabetLowerCase[j]) {
                                                charPos = j + shiftAmount;
                                                console.log(charPos);
                                        }
                                        output[i] = alphabetLowerCase[charPos];
                                        console.log(`shifted string ${i}  = ${output}`);
                                }
                        }
                }
        }
        output = output.join('', '');
        console.log(`joined string  = ${output}`);
        return output;
};

/*
Take the string and the shift amount as input
Shift the string */

module.exports = caesar;
