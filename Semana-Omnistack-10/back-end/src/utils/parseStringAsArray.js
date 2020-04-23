module.exports =  
    //Auxiliary function to parse an string into an array, splitting around commas and deleting blank spaces.
    function ParseArrayAsString(ArrayAsString){ 
        return ArrayAsString.split(',').map(str => str.trim());
    }
