const findTheOldest = function(input) {
        let result;
        function reducer(accumulator, currentValue, currentIndex, arr) {
                while (currentIndex < arr.length) {
                        let currentValueAge;

                        if (currentValue.yearOfDeath === undefined) {
                                const date = new Date();
                                currentValueAge = date.getFullYear() - currentValue.yearOfBirth;
                        } else if (!(currentValue.yearOfDeath === undefined)) {
                                currentValueAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
                        }

                        if (currentValueAge > accumulator) {
                                accumulator = currentValueAge;
                                result = arr[currentIndex];
                        }

                        if (currentIndex === arr.length - 1) {
                                return result;
                        }
                        return accumulator;
                }
        }
        const people = input.reduce(reducer, 0);
        return people;
};
module.exports = findTheOldest;
