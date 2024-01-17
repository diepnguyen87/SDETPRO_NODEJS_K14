const MIN_NORMAL_BMI = 18.5
const MAX_NORMAL_BMI = 24.9

let height = 1.7
let weight = 45
let myBMI = (weight/(height*2)).toFixed(2)
console.log("Your BMI: ", myBMI);

if(myBMI < MIN_NORMAL_BMI){
    let increase = ((MIN_NORMAL_BMI - myBMI)*(height*2)).toFixed(2)
    console.log("You should increase " + increase + " kg");
}else{
    let decrease = ((myBMI - MAX_NORMAL_BMI)*(height*2)).toFixed(2)
    console.log("You should decrease " + decrease + " kg");
}


