/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const caesar = function(string, shiftAmount) {
        const alphabetUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const alphabetLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
        let splitString = [];
        let newArray = [];

        splitString = string.split('');
        console.log(`split string  = ${splitString}`);

        function checkUpperCase(char) {
                return char === char.toUpperCase();
        }

        function shifter(char, upperCase) {
                let j = 0;
                let charPos = 0;
                let over26 = 0;
                if (upperCase === true) {
                        while (charPos === 0) {
                                if (j + shiftAmount > 26) {
                                        over26++;
                                        console.log(`over26 count:${over26}`);
                                }
                                if (char === alphabetUpperCase[j]) {
                                        if (j + shiftAmount > 26) {
                                                console.log('Triggered me!!');
                                                charPos -= 26 * over26;
                                        }
                                        charPos += j + shiftAmount;
                                        console.log(charPos);
                                        return alphabetUpperCase[charPos];
                                }

                                j++;
                                console.log(j);
                        }
                }
                while (charPos === 0) {
                        if (j + shiftAmount > 26) {
                                over26++;
                                console.log(`over26 count:${over26}`);
                        }
                        if (char === alphabetLowerCase[j]) {
                                if (j + shiftAmount > 26) {
                                        console.log('Triggered me!!');
                                        console.log(`over26 count:${over26}`);
                                        charPos -= 26 * over26;
                                }
                                charPos += j + shiftAmount;
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
                                // Apparently splitString is not a "real" string anymore so I have to do this
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
