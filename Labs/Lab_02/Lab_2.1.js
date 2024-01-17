let height = 1.7
let weight = 175
let BMI = weight/(height*2)
console.log("Your BMI: ", BMI);

if(BMI < 18.5){
    console.log("You are under weight");
}else if(BMI <= 24.9){
    console.log("Normal weight");
}else if(BMI <= 29.9){
    console.log("Over weight");
}else{
    console.log("Obesity");
}