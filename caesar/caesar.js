/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const caesar = function(string, shiftAmount) {
        const alphabetUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const alphabetLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
        const alphabetUpperCaseReverse = Array.from('ZYXWVUTSRQPONMLKJIHGFEDCBA');
        const alphabetLowerCaseReverse = Array.from('zyxwvutsrqponmlkjihgfedcba');
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
                                if (j + shiftAmount >= 26) {
                                        over26++;
                                        console.log(`over26 count: ${over26}`);
                                        shiftAmount -= 26;
                                }
                                if (char === alphabetUpperCase[j]) {
                                        if (over26 > 0) {
                                                console.log('Triggered me!!');
                                        }
                                        charPos += j + shiftAmount;
                                        console.log(`charPos is ${charPos}`);
                                        if (charPos >= 0) {
                                                return alphabetUpperCase[charPos];
                                        }

                                        return alphabetUpperCaseReverse[Math.abs(charPos) - 1];
                                }

                                j++;
                                console.log(`j is: ${j}`);
                        }
                }
                while (charPos === 0) {
                        if (j + shiftAmount >= 26) {
                                over26++;
                                console.log(`over26 count: ${over26}`);
                                shiftAmount -= 26;
                        }
                        if (char === alphabetLowerCase[j]) {
                                if (over26 > 0) {
                                        console.log('Triggered me!!');
                                }
                                charPos += j + shiftAmount;
                                console.log(`charPos is ${charPos}`);
                                if (charPos >= 0) {
                                        return alphabetLowerCase[charPos];
                                }

                                return alphabetLowerCaseReverse[Math.abs(charPos) - 1];
                        }

                        j++;
                        console.log(`j is: ${j}`);
                }
        }

        function main() {
                for (let i = 0; i < string.length; i++) {
                        if (/[A-Za-z]/.test(splitString[i])) {
                                splitString[i] = shifter(splitString[i], checkUpperCase(splitString[i]));
                                // console.log(typeof splitString);
                                // Apparently splitString is not a "real" array anymore so I have to do this
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
