const Utility = require('../Utility.js')

//Lab 2.1
let myBMI = Utility.calculateBMI(80, 1.7);

if (myBMI < 18.5) {
    console.log("You are under weight");
} else if (myBMI <= 24.9) {
    console.log("Normal weight");
} else if (myBMI <= 29.9) {
    console.log("Over weight");
} else {
    console.log("Obesity");
}

//Lab 2.2
let num = 185
if (Utility.isEvenNumber(num)) {
    console.log(num + " is an even number");
} else {
    console.log(num + " is an odd number");
}

//Lab 2.3
let deltaWeight = Utility.calculateDeltaWeight(70, 1.6)
if(deltaWeight === 0){
    console.log("Your BMI is normal. Keep current weight");
}else if(deltaWeight > 0){
    console.log("You should increase " + deltaWeight + " kg");
}else{
    console.log("You should decrease " + Math.abs(deltaWeight) + " kg");
}