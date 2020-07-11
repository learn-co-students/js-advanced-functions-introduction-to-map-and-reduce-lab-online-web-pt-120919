function mapToNegativize(sourceArray){
  let newArr = []
  for (let num in sourceArray) {
    newArr.push(Math.abs(sourceArray[num]))
  }
  return newArr
}
