/* eslint-disable no-console */
const removeFromArray = function(inputArray, inputRemove) {
        const array = Array.from(inputArray);
        const toRemove = inputRemove;
        console.log(array);
        console.log(toRemove);

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
        function remover(element) {
                return element != inputRemove;
        }

        const filteredArray = array.filter(remover);

        return filteredArray;
};

module.exports = removeFromArray;
