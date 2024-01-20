/**
 * Get input from user about height(m) and weight(kg) then calculate BMI
 */

let height = 1.7
let weight = 175
let myBMI = weight/(height*2)
console.log("Your BMI: ", myBMI);

if(myBMI < 18.5){
    console.log("You are under weight");
}else if(myBMI <= 24.9){
    console.log("Normal weight");
}else if(myBMI <= 29.9){
    console.log("Over weight");
}else{
    console.log("Obesity");
}