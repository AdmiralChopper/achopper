module.exports =  
    function ParseArrayAsString(ArrayAsString){ 
        return ArrayAsString.split(',').map(str => str.trim());
    }
