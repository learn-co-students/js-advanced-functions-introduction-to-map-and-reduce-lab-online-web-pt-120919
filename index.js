// Your code here
const mapToNegativize = function (array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * -1)
  }
  return newArray
}

const mapToNoChange = function(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i])
  }
  return newArray
}

const mapToDouble = function(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2)
  }
  return newArray
}

const mapToSquare = function(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] ** 2)
  }
  return newArray
}

const reduceToTotal = function(array, startPoint=0) {
  let total = startPoint
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

const reduceToAllTrue = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false
  }
  return true
}

const reduceToAnyTrue = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) return true
  }
  return false
}
