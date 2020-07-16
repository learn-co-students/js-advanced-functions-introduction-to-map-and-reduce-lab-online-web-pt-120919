// Your code here
function mapToNegativize(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] *= -1
    }
    return sourceArray
}

function mapToNoChange(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] *= 1
    }
    return sourceArray
}

function mapToDouble(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] *= 2
    }
    return sourceArray
}

function mapToSquare(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] = Math.pow(sourceArray[i],2)
    }
    return sourceArray
}

function reduceToTotal(sourceArray, startingPoint){
    if (!startingPoint){
        let answer = 0;
        for(let i = 0; i < sourceArray.length; i++){
            answer += sourceArray[i]   
        }
    return answer
    }

    for(let i = 0; i < sourceArray.length; i++){
        startingPoint += sourceArray[i] 
    }
    return startingPoint
}


function reduceToAllTrue(sourceArray) {
    for(let i of sourceArray){
        if (i == false) return false
    }
    return true
}


function reduceToAnyTrue(sourceArray) {
    for(let i of sourceArray){
        if (i == true) return true
    }
    return false
}