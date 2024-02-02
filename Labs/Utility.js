const readline = require('../node_modules/readline-sync')

function calculateBMI(weight, height) {
    let myBMI = (weight / (height * 2)).toFixed(2)
    console.log("Your BMI: ", myBMI);
    return myBMI
}

function calculateDeltaWeight(weight, height){
    const MIN_NORMAL_BMI = 18.5
    const MAX_NORMAL_BMI = 24.9
    
    let myBMI = calculateBMI(weight, height)
    
    if(myBMI < MIN_NORMAL_BMI){
        return ((MIN_NORMAL_BMI - myBMI)*(height*2)).toFixed(2)
    }else if (myBMI > MAX_NORMAL_BMI){
       return ((MAX_NORMAL_BMI - myBMI)*(height*2)).toFixed(2)
    }
    return 0;
}

function isEvenNumber(num){
    if(num % 2 === 0){
        return true
    }
    return false;
}

function sortAscending (num1, num2){
    return num1 - num2
}

function sortDescending (num1, num2){
    return num2 - num1
}

function selectionSort(numberArray){
    for (let outer = 0; outer < numberArray.length-1; outer++) {
        for (let inner = outer+1; inner < numberArray.length; inner++) {
            if(numberArray[outer] > numberArray[inner]){
                swapNumbersByIndex(numberArray, outer, inner)
            }
        }
    }
}

function bubbleSort(numberArray){
    for (let loop = 0; loop < numberArray.length-1; loop++) {
        for(let index=0; index < numberArray.length-loop-1; index++){
            if(numberArray[index] > numberArray[index+1]){
                swapNumbersByIndex(numberArray, index, index+1)
            }
        }
    }
}

function insertionSort(numberArray){
    for(let unsortedIndex=1; unsortedIndex < numberArray.length; unsortedIndex++){
        for(let sortedIndex = 0; sortedIndex < unsortedIndex; sortedIndex++){
            if(numberArray[unsortedIndex] < numberArray[sortedIndex]){
                let temp = numberArray[unsortedIndex]
                numberArray.splice(unsortedIndex, 1)
                numberArray.splice(sortedIndex, 0, temp)
                break;
            }
        }
    }
}

function mergeSort(nArray1, nArray2){
    nArray3 = []
    currentK = 0;
    let i = 0;
    let k = currentK;
    
    for(i; i < nArray1.length; ++i){
        for(k; k < nArray2.length; ++k){
            if(nArray1[i] < nArray2[k]){
                nArray3.push(nArray1[i])
                break
            }else{
                nArray3.push(nArray2[k])
                currentK = k+1
            }
        }
    }

    while(i < nArray1.length){
        nArray3.push(nArray1[i])
        ++i;
    }

    while(k < nArray2.length){
        nArray3.push(nArray2[k])
        ++k;
    }

    return nArray3
}

function swapNumbersByIndex(array, outer, inner){
    let temp = array[inner]
    array[inner] = array[outer]
    array[outer] = temp
}

function generateRandomNumber(){
    return Math.floor(Math.random()*100) + 1
}

function generateArray(){
    let array = []
    let arrayLength = readline.question("Please enter array length: ")
    for (let index = 0; index < arrayLength; index++) {
        array.push(generateRandomNumber())
    }
    return array
}

module.exports = {
    calculateBMI:calculateBMI,
    calculateDeltaWeight:calculateDeltaWeight,
    isEvenNumber:isEvenNumber,
    sortAscending:sortAscending,
    sortDescending:sortDescending,
    selectionSort: selectionSort,
    bubbleSort: bubbleSort,
    insertionSort: insertionSort,
    mergeSort: mergeSort,
    generateArray: generateArray
}