function mapToNegativize(sourceArray){
  let newArr = []
  for (let num in sourceArray) {
    let sourceNum = sourceArray[num]
    if (sourceNum > 0) {
      newArr.push(-Math.abs(sourceNum))
    }
    else {
      newArr.push(Math.abs(sourceNum))
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
