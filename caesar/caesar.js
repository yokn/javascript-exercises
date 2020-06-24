/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const caesar = function(string, shiftAmount) {
        const alphabetUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const alphabetLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
        let splitString = [];
        const output = '';
        let newArray = [];

        splitString = string.split('');
        console.log(`split string  = ${splitString}`);

        function checkUpperCase(char) {
                return char === char.toUpperCase();
        }

        function shifter(char, upperCase) {
                let j = 0;
                let charPos = 0;
                if (upperCase === true) {
                        while (charPos === 0) {
                                if (char === alphabetUpperCase[j]) {
                                        charPos = j + shiftAmount;
                                        console.log(charPos);
                                        return alphabetUpperCase[charPos];
                                }
                                j++;
                                console.log(j);
                        }
                }
                while (charPos === 0) {
                        if (char === alphabetLowerCase[j]) {
                                charPos = j + shiftAmount;
                                console.log(charPos);

                                return alphabetLowerCase[charPos];
                        }
                        j++;
                        console.log(j);
                }
        }
        function main() {
                for (let i = 0; i < string.length; i++) {
                        if (/[A-Za-z]/.test(splitString[i])) {
                                splitString[i] = shifter(splitString[i], checkUpperCase(splitString[i]));
                                console.log(typeof splitString);
                                newArray = Array.from(splitString);
                                newArray = newArray.join('', '');
                                console.log(`output = ${newArray}`);
                        }
                }
                return newArray;
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
