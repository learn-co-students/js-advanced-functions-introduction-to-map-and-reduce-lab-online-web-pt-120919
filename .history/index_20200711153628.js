function mapToNegativize(sourceArray){
  let newArr = []
  for (let num of sourceArray) {
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
  for (let num of sourceArray){
    newArray.push(sourceArray[num])
  }
  return newArray
}

function mapToDouble(sourceArray) {
  for ()
}
