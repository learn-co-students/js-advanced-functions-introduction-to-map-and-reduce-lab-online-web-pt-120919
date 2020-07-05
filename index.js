// Your code here

function mapToNegativize(arr) {
    let result = []
    arr.forEach(element => {
        result.push(element * (-1))
    });
    return result 
}

function mapToNoChange(arr) {
    let result = []
    arr.forEach(element => {
        result.push(element)
    })
    return result 
}

function mapToDouble(arr) {
    let result = []
    arr.forEach(element => {
        result.push(element * 2)
    });
    return result 
}

function mapToSquare(arr) {
    let result = []
    arr.forEach(element => {
        result.push(element ** 2)
    });
    return result 
}

function reduceToTotal(arr, stPoint = 0) {
    let result = stPoint
    arr.forEach(element => {
        result += element
    });
    return result 
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }