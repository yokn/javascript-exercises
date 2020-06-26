const findTheOldest = function(input) {
        let result;
        // console.log(people);
        function reducer(accumulator, currentValue, currentIndex, arr) {
                while (currentIndex < arr.length) {
                        console.log('==================');
                        console.log(`currentIndex: ${currentIndex}`);
                        console.log(`accumulator: ${accumulator}`);
                        console.log(currentValue);
                        let currentValueAge;
                        if (currentValue.yearOfDeath == undefined) {
                                const date = new Date();
                                currentValueAge = date.getFullYear() - currentValue.yearOfBirth;
                        } else if (!(currentValue.yearOfDeath == undefined)) {
                                currentValueAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
                        }
                        console.log(`currentValueAge: ${currentValueAge}`);
                        if (currentValueAge > accumulator) {
                                accumulator = currentValueAge;
                                result = arr[currentIndex];
                                console.log(`New result = ${result}`);
                        }

                        if (currentIndex == arr.length - 1) {
                                // console.log(result);
                                // console.log('triggered me');
                                // accumulator = result;
                                // console.log(accumulator);
                                // console.log('test');
                                // return accumulator;
                                return result;
                        }
                        console.log('here');
                        return accumulator;
                }
        }
        const people = input.reduce(reducer, 0);
        console.log(people);
        return people;
};
module.exports = findTheOldest;
