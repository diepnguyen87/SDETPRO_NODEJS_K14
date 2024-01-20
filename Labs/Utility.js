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

module.exports = {
    calculateBMI:calculateBMI,
    calculateDeltaWeight:calculateDeltaWeight,
    isEvenNumber:isEvenNumber,
    sortAscending:sortAscending
}