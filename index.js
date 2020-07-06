// Your code here
const mapToNegativize = function(arry){
    const empty = []
    for(let i = 0; i < arry.length; i ++){
        empty.push(arry[i] * -1)
        
    }
    return empty
}

function mapToNoChange(arr){
  return arr
}

function mapToDouble(arr){
   const empty = []
    for(let i = 0; i < arr.length; i++){
        empty.push(arr[i] * 2)
    }
    return empty
}

function mapToSquare(arr){
    const empty = []
    for(let i = 0; i < arr.length; i++){
        empty.push(arr[i]* arr[i])
    }
    return empty
}

function reduceToTotal(arr, startPoint=0){
    let total = startPoint
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    return total
}

function reduceToAllTrue(arr){
    for(let i = 0; i < arr.length; i++){
        if (!arr[i]) return false
        }
        return true
}

function reduceToAnyTrue(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i]) return true
    }
    return false
}