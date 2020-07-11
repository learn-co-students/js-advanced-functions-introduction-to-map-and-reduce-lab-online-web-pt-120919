function mapToNegativize(sourceArray){
  let newArr = []
  for (let num in sourceArray) {
    if (sourceArray[num] > 0) {
      newArr.push(-Math.abs(sourceArray[num]))
    }
    else {
      newArr.push(Math.abs(sourceArray[num]))
    }
  }
  return newArr
}

function mapToNoChange(sourceArray) {
  let newArray = []
  for (let num in sourceArray){
    newArray.push(sourceArray[num])
  }
  return newArray
}
