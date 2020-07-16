// Your code here
function mapToNegativize(arr) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    tmp.push(arr[i] * -1);
  }
  return tmp;
}
function mapToNoChange(arr) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    tmp.push(arr[i]);
  }
  return tmp;
}
function mapToDouble(arr) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    tmp.push(arr[i] * 2);
  }
  return tmp;
}
function mapToSquare(arr) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    tmp.push(arr[i] ** 2);
  }
  return tmp;
}

function reduceToTotal(arr, start = 0) {
  let total = start;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
function reduceToAllTrue(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (!!!arr[i]) {
      result = false;
      break;
    }
  }
  return result;
}
function reduceToAnyTrue(arr) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      result = true;
      break;
    }
  }
  return result;
}

