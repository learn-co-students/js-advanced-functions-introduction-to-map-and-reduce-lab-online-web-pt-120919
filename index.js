// Your code here
function mapToNegativize(numbers) {
  let new_array = []
  for (let i = 0; i < numbers.length; i++) {
    let newValue = numbers[i] * -1;
    new_array.push(newValue);
  }
  return new_array;
}

function mapToNoChange(numbers) {
  return numbers;
}

function mapToDouble(numbers) {
  let new_array = [];
  for (let i = 0; i < numbers.length; i++) {
    let newValue = numbers[i] * 2;
    new_array.push(newValue);
  }
  return new_array;
}

function mapToSquare(numbers) {
  let new_array = []
  for (let i = 0; i < numbers.length; i++) {
    let newValue = numbers[i] * numbers[i];
    new_array.push(newValue);
  }
  return new_array;
}

function reduceToTotal(array, counter=0) {
  for (let i = 0; i < array.length; i++) {
    counter += array[i];
  }
  return counter;
}

function reduceToAllTrue(array) {
  let truthiness = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) {
      truthiness = false;
    }
  }
  return truthiness;
}

function reduceToAnyTrue(array) {
  let truthiness = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      truthiness = true;
    }
  }
  return truthiness;
}
