const caesar = function(string, shiftAmount) {
        const alphabetUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const alphabetLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
        let output = [];
        function checkUpperCase(char) {
                return char === char.toUpperCase(); // this felt good
        }
        output = string.split('');
        console.log(`split string  = ${output}`);
        for (let i = 0; i < string.length; i++) {
                if (checkUpperCase(output[i]) === true) {
                        output[i] = alphabetUpperCase[shiftAmount];
                        console.log(`shifted string ${i}  = ${output}`);
                } else {
                        output[i] = alphabetLowerCase[shiftAmount];
                        console.log(`shifted string ${i}  = ${output}`);
                }
        }
        output = output.join('', '');
        console.log(`joined string  = ${output}`);
        return output;
};

module.exports = caesar;

/*
Take the string and the shift amount as input
Shift the string */
