// Your code here
function mapToNegativize(array){
    return array.map(x => x * -1)
}

function mapToNoChange(array){
    return array.map(x => x)
}

function mapToDouble(array){
    return array.map(x => x * 2)
}

function mapToSquare(array){
    return array.map(x => x * x)
}

function reduceToTotal(array, start = 0){
    const reducer = function(accumulator, value){
        return accumulator + value}
 return array.reduce(reducer,start)
}
//reduce reduces an array to 1 value
//it's called on an array with .reduce() with a function



function reduceToAllTrue(array){
const reducer = function(accumulator, value){
    if(!!accumulator === true && !!value === true){
        return true}
        else
        {
            return false
        }
    }
    return array.reduce(reducer, true)
}

function reduceToAnyTrue(array){
const reducer = function(accumulator, value){
    if(accumulator === true){
        return true
    }
    else 
    {return !!value 
    }
}
return array.reduce(reducer, false)
}