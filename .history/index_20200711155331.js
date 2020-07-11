function mapToNegativize(sourceArray){
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] > 0) {
      newArr.push(-Math.abs(sourceArray[i]))
    }
    else {
      newArr.push(Math.abs(sourceArray[i]))
    }
  }
  return newArr
}

function mapToNoChange(sourceArray) {
  let newArray = []
  sourceArray.forEach(num => newArray.push(num))
  return newArray
}

function mapToDouble(sourceArray) {
  let newestArray = []
  sourceArray.forEach(number => newestArray.push(number * 2))
  return newestArray
}
function mapToSquare(sourceArray) {
  let newArr = []
  sourceArray.forEach(number => newArr.push(number * number))
  return newArr
}

function reduceToTotal(arr, total = 0) {

}