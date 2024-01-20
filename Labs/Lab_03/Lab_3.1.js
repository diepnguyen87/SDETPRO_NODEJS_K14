const {isEvenNumber} = require('../Utility.js')

/**
 * Count how many odd, even number(s) in an integer array
 */
let intArr = [1, 2, 3, 4, 5];
let evenNumbers = 0;

intArr.forEach(element => {
   if(isEvenNumber(element)){
        ++evenNumbers;
   }
});

console.log("Even numbers: ", evenNumbers);
console.log("Odd numbers: ", intArr.length - evenNumbers);