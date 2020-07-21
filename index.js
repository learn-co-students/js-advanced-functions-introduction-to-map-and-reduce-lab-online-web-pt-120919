// Map-like Methods

function mapToNegativize(array){
    const newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(-1 * array[i])
    };
    return newArray
};

function mapToNoChange(array){
    return array;
}

function mapToDouble(array){
    const newArray = []
    for (let i = 0; i < array.length; i++){
       newArray.push(array[i] * 2)
    }
    return newArray;
}

function mapToSquare(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] * array[i])
    };
    return newArray;
};

//Reduce-like Methods

function reduceToTotal(bill, start = 0){
    let total = start
    for(let i = 0; i < bill.length; i++ ){
        total = total + bill[i]
    }
    return total
}

function reduceToAllTrue(values){
    for (let i = 0; i < values.length; i++){
        if (!values[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i= 0; array.length; i++ ){
        if (array[i]) return true
    }
    return false
}
