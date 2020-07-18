function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let num = sourceArray[i] * -1
        newArray.push(num)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let num = sourceArray[i] 
        newArray.push(num)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let num = sourceArray[i] * 2
        newArray.push(num)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let num = sourceArray[i] ** 2
        newArray.push(num)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let total;
    startingPoint ? total = startingPoint : total = 0
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i]
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



