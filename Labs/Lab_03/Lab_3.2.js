const { sortAscending, insertionSort } = require("../Utility");

/**
 * Finding maximum value/minimum value from an integer array
 */

let intArr = [121, 2, 700, 4, 1, 823];
insertionSort(intArr)

console.log("Minimum value: ", intArr[0]);
console.log("Maximum value: ", intArr[intArr.length-1]);