const repeatString = function(string, repeatCount) {
    if (string!=""&&repeatCount!=0){
        if(repeatCount<0){
            return "ERROR"
        }
        let newString = string
        for(i=1;i<repeatCount;i++){
            
            newString = newString + string 
        }
        return newString
    }
    else{
        return ""
    }
    
}

module.exports = repeatString
