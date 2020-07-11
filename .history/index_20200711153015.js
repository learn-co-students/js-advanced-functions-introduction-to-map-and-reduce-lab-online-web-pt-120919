function mapToNegativize(sourceArray){
  let newArr = []
  for (let num in sourceArray) {
    newArr.push(num.abs())
  }
  return newArr
}
