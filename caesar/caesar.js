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

                while (charPos === 0) {
                        if (j + shiftAmount >= 26) {
                                shiftAmount -= 26;
                        }
                        if (upperCase === true) {
                                if (char === alphabetUpperCase[j]) {
                                        charPos += j + shiftAmount;
                                        console.log(`charPos is ${charPos}`);
                                        if (charPos >= 0) {
                                                return alphabetUpperCase[charPos];
                                        }

                                        return alphabetUpperCaseReverse[Math.abs(charPos) - 1];
                                }
                        }
                        if (char === alphabetLowerCase[j]) {
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

        for (let i = 0; i < string.length; i++) {
                if (/[A-Za-z]/.test(splitString[i])) {
                        splitString[i] = shifter(splitString[i], checkUpperCase(splitString[i]));
                        newArray = Array.from(splitString);
                        newArray = newArray.join('', '');
                        console.log(`output = ${newArray}`);
                }
        }
        return newArray;
};

module.exports = caesar;
