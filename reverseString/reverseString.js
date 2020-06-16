const reverseString = function(string) {

    beforeSort = Array.from(string)
    const length = beforeSort.length
    afterSort = []
    
    /*
    console.log(beforeSort[0])
    console.log(beforeSort[1])
    console.log(beforeSort[2])
    */
  
    //                           vvv can't get the last element with this
    for ( i = 0 ; i <= length /*beforeSort.length*/; i++ ) {
        afterSort[i] = beforeSort.pop()
    }
  
    /*
    console.log(afterSort[0])
    console.log(afterSort[1])
    console.log(afterSort[2])
    */

    return afterSort.join("")
}

module.exports = reverseString
