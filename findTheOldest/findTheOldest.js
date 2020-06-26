const findTheOldest = function(input) {
        let result;
        // console.log(people);
        function reducer(accumulator, currentValue, currentIndex, arr) {
                while (currentIndex < arr.length) {
                        console.log('==================');
                        console.log(`currentIndex: ${currentIndex}`);
                        console.log(`accumulator: ${accumulator}`);
                        console.log(currentValue);
                        const currentValueAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
                        console.log(`currentValueAge: ${currentValueAge}`);
                        if (currentValueAge > accumulator) {
                                accumulator = currentValueAge;
                                result = currentValue.name;
                                console.log(`New result = ${result}`);
                        }

                        if (currentIndex == arr.length - 1) {
                                console.log(result);
                                console.log('triggered me');
                                accumulator = result;
                                console.log(accumulator);
                                console.log('test');
                                return accumulator;
                        }
                        console.log('here');
                        return accumulator;
                }
        }
        const people = {};
        people.name = input.reduce(reducer, 0);
        console.log(people);
        return people;
};
module.exports = findTheOldest;
