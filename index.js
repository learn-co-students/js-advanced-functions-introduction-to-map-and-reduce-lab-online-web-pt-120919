// Your code here
function mapToNegativize(source) {
    let newArray = []
    for (let i=0; i < source.length; i++ ) {
        newArray.push(-1 * source[i])
    }
    return newArray
}

function mapToNoChange(source) {
    let newArray = []
    for (let i=0; i < source.length; i++ ) {
        newArray.push(source[i])
    }
    return newArray
}

function mapToDouble(source) {
    let newArray = []
    for (let i=0; i < source.length; i++ ) {
        newArray.push(2 * source[i])
    }
    return newArray
}

function mapToSquare(source) {
    let newArray = []
    for (let i=0; i < source.length; i++ ) {
        newArray.push(source[i] ** 2)
    }
    return newArray
}

function reduceToTotal(source, start=0) {
    let total = start;
   for (let i = 0;i < source.length; i++ ){
   total = total + source[i]
}
return total
}

function reduceToAllTrue(source) {
    for (let i = 0;i < source.length; i++ ){
        if (!source[i]) return false
     }
     return true
}

function reduceToAnyTrue(source) {
    
    for (let i = 0;i < source.length; i++ ){
        if (source[i]) return true
     }
     return false
}