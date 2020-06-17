/* eslint-disable no-console */

const removeFromArray = function(inputArray, ...inputRemove) {
        const array = Array.from(inputArray);
        const toRemove = inputRemove;
        let j = 0;

        // console.log(array);
        // console.log(toRemove);

        // function remover(element) {
        //        return element != inputRemove;
        // }
        for (let i = 0; i < array.length; i++) {
                if (array[i] === toRemove[j]) {
                        const newArray = array.splice(i, 1);
                        i = 0;
                        j++;
                        // console.log(newArray);
                        // console.log(array);
                }
        }
        /*  this leaves undefined values inside the slots instead of removing them
        let result = replace(array,toRemove)
        function replace(array,toRemove){
            let newArray
            newArray=array.join(" ")
            console.log(newArray)
            newArray=newArray.replace(toRemove,"")
            return newArray
        }
        */

        // const filteredArray = array.filter(remover);
        // return filteredArray;
        return array;
};

module.exports = removeFromArray;
