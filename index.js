// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
};

function mapToNoChange(array){
    return array.map(x => x)
};

function mapToDouble(array) {
    return array.map(x => x * 2)
};

function mapToSquare(array) {
   return array.map(x => x * x);
}
// Explain to me this code below
function reduceToTotal(array, startingPoint = 0) {
    const reducer = function(accumulator, currentValue){return accumulator + currentValue }
    return array.reduce(reducer, startingPoint)
}

function reduceToAllTrue(array){
    const reducer = (accumulator, currentValue) =>
    !!accumulator == true && !!currentValue == true ? true : false
    return array.reduce(reducer, true)
}

function reduceToAnyTrue(array){
    const reducer = (accumlator, currentValue) =>
    accumlator == true ? true : !!currentValue
    return array.reduce(reducer, false)
};