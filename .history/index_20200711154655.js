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

// function mapToNoChange(sourceArray) {
//   let newArray = []
//   for (let num of sourceArray){
//     newArray.push(sourceArray[num])
//   }
//   return newArray
// }

// function mapToDouble(sourceArray) {
//   let newestArray = []
//   for (let number of sourceArray) {
//     newestArray.push(sourceArray[number] * 2)
//   }
//   return newestArray
// }
