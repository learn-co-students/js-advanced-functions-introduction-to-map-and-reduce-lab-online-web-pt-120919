// Your code here

function mapToNegativize(arr){
    let myMap = []
    for (let number of arr){
        myMap.push(0 - number)
    }
    return myMap
}

function mapToNoChange(arr){
    const myMap = []
    for (let number of arr){
        myMap.push(number)
    }
    return myMap
}

function mapToDouble(arr){
    let myMap = []
    for (let number of arr){
        myMap.push(number * 2)
    }
    return myMap
}

function mapToSquare(arr){
    let myMap = []
    for (let number of arr){
        myMap.push(number * number)
    }
    return myMap
}


function reduceToTotal(arr, init = 0){
    let myReduced = init
    for (let number of arr){
        myReduced += number 
    }
    return myReduced
}

function reduceToAllTrue(arr){
    let myReduced = true
    for (let value of arr){
        if (!!value == false){
            myReduced = false
        }
    }
    return myReduced
}

function reduceToAnyTrue(arr){
    let myReduced = false
    for (let value of arr){
        if (!!value == true){
            myReduced = true
        }
    }
    return myReduced
}