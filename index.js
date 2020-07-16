// Your code here
let mapToNegativize = function(sourceArray) {
    let newArray = []
    sourceArray.forEach(number => {
        number *= -1
        newArray.push(number)
        
    });
    return newArray
}

let mapToNoChange = function(sourceArray) {
    let newArray = []
        sourceArray.forEach(a => {
            newArray.push(a)
        })
        return newArray
}

let mapToDouble = function(sourceArray) {
    let newArray = []
        sourceArray.forEach(a => {
            newArray.push(a * 2)
        })
        return newArray
}

let mapToSquare = function(sourceArray) {
    let newArray = []
        sourceArray.forEach(a => {
            newArray.push(a**2)
        })
        return newArray
    
}