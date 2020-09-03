// .map

// const mapToNegativize = function(array) {
//     let negativeNum = array.map(x => x * -1)
//     return negativeNum
// }

const mapToNegativize = function(array) {
    let newArray = [];
    array.forEach(num => {
        let negativeNum = num * -1
        newArray.push(negativeNum);
    });
    return newArray;
} 



// const mapToNoChange = function(array) {
//     let originalNum = array.map(x => x)
//     return originalNum
// }

const mapToNoChange = function(array) {
    let newArray = [];
    array.forEach(num => {
        newArray.push(num);
    });
    return newArray;
}



// const mapToDouble = function(array) {
//     let doubleNum = array.map(x => x * 2)
//     return doubleNum
// }

const mapToDouble = function(array) {
    let newArray = [];
    array.forEach(num => {
        let doubleNum = num * 2;
        newArray.push(doubleNum);
    });
    return newArray;
}



// const mapToSquare = function(array) {
//     let squaredNum = array.map(x => x ** 2)
//     return squaredNum
// }

const mapToSquare = function(array) {
    let newArray = [];
    array.forEach(num => {
        let squaredNum = num ** 2;
        newArray.push(squaredNum);
    });
    return newArray;
}




// .reduce

// const reduceToTotal = function(array, start=0) {
//     let reducedTotal = array.reduce((a, b) => a += b, start);
//     return reducedTotal;
// }

const reduceToTotal = function(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++ ) {
      total = total + array[i]
    }
    return total
}




const reduceToAllTrue = function(array) {
    for (let i = 0; i < array.length; i++ ) {
        // !array[i] will give me a boolean: true/false

        // comparison operator is optional when you want true
        if (!array[i]) {
            return false;
        }
      };
      return true;
};




const reduceToAnyTrue = function(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i]) {
            return true;
        };
      };
      return false;
};