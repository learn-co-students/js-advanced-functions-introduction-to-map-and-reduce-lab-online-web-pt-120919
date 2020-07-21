// Your code here
function mapToNegativize(sourceArray) {
    let newSourceArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newSourceArray.push(sourceArray[i] * -1)
    }
    return newSourceArray
}

function mapToNoChange(sourceArray) {
    let newSourceArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newSourceArray.push(sourceArray[i])
    }
    return newSourceArray
}

function mapToDouble(sourceArray) {
    let newSourceArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newSourceArray.push(sourceArray[i] * 2)
    }
    return newSourceArray
}

function mapToSquare(sourceArray)   {
    let newSourceArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newSourceArray.push(sourceArray[i] * sourceArray[i])
    }
    return newSourceArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total 
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false 
    }
    return true 
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false 
}


