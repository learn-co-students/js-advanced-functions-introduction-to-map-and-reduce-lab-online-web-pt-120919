function mapToNegativize(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * -1)
    }
    return newArray
}


function mapToNoChange(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}


function mapToDouble(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] ** 2)
    }
    return newArray
}

function reduceToTotal(array, start=0){
    for (let i = 0; i < array.length; i++){
        start = start + array[i]
    }
    return start
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true 
}

function reduceToAnyTrue(array){
    for (let i = 0; i < array.length; i++){
        if (array[i]) return true
    }
    return false
}