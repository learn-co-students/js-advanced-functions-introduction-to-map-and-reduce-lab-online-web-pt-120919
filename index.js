function mapToNegativize(src) {
  let arr = []
  for (let i = 0; i < src.length; i++) {
    arr.push(-1 * src[i])
  }
  return arr
}
function mapToNoChange(src) {
  let arr = []
  for (let i = 0; i < src.length; i++) {
    arr.push(src[i])
  }
  return arr
}

function mapToDouble(src) {
  let arr = []
  for (let i=0; i<src.length; i++) {
    arr.push(2 * src[i])
  }
  return arr
}

function mapToSquare(src) {
  let arr = []
  for (let i=0; i<src.length; i++) {
    arr.push(src[i] * src[i])
  }
  return arr
}

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i=0; i<src.length; i++) {
    total = src[i] + total
  }
  return total
}
function reduceToAllTrue(src) {
  for (let i=0; i<src.length; i++) {
    if (!src[i]) return false
  }
  return true
}
function reduceToAnyTrue(src) {
  for (let i=0; i<src.length; i++) {
    if (src[i]) return true
  }
  return false
}
