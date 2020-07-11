function mapToNegativize(sourceArray){
  let newArr = []
  for (let num in sourceArray) {
    newArr.push(Math.abs(num))
  }
  return newArr
}
