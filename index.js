const mapToNegativize = function(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

const mapToNoChange = function(sourceArray) {
    return sourceArray
}

const mapToDouble = function(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

const mapToSquare = function(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i]
    }
    return total
}

const reduceToAllTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false 
    }
    return true 
}

const reduceToAnyTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true 
    }
    return false
}