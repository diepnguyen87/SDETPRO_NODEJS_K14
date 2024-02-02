const { mergeSort,
        insertionSort, 
        generateArray } = require("../Utility");

/**
 * Merge 2 SORTED integer array into one SORTED array
 */

let intArr1 = generateArray();
insertionSort(intArr1)
console.log("Array 1: ", intArr1);

let intArr2 = generateArray();
insertionSort(intArr2)
console.log("Array 2: ", intArr2);

let intArr3 = mergeSort(intArr1, intArr2)
console.log("Final array after merge sort: ", intArr3);