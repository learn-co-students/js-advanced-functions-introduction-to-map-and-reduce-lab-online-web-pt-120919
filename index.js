// Your code here
const mapToNegativize = (sourceArray) => {
    return sourceArray.map(element =>
        element * -1
    )
    
}

const mapToNoChange = (sourceArray) => {
    return sourceArray.map(element => element)
}

const mapToDouble = (sourceArray) => {
    return sourceArray.map(element => element * 2)
}

const mapToSquare = (sourceArray) => {
    return sourceArray.map(element => element ** 2)
}



const reduceToTotal = function(sourceArray, startingPoint = 0){
    const reducer = function(accumulator, currentValue){ 
        return accumulator + currentValue
    }
    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
}

