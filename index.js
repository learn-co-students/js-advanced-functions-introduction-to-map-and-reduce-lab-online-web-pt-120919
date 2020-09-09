// Your code here
function mapToNegativize(sourceArray) {
    let answer = [];
    for(let i = 0; i < sourceArray.length; i++){
        answer.push(sourceArray[i] *= -1)
    }
    return answer

    // for (let element of sourceArray){
    //     answer.push(element *= -1 )
    // }

    // return sourceArray.map(a => a * -1)
}

function mapToNoChange(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] *= 1
    }
    return sourceArray

    // return sourceArray.map(a => a)
}

function mapToDouble(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] *= 2
    }
    return sourceArray

    // return sourceArray.map(a => a * 2)
}

function mapToSquare(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++){
        sourceArray[i] = Math.pow(sourceArray[i],2)
    }
    return sourceArray

    //return sourceArray.map(a => Math.pow(a,2))
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
// return answer.reduce((accumulator, wage) => {
//     return wage + accumulator
// }, 0)

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