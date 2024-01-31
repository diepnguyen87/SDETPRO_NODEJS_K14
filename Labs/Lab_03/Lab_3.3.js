const Utility = require("../Utility");
const { selectionSort, 
        bubbleSort, 
        insertionSort, 
        generateArray} = require("../Utility")

/**
 * Sort an integer array from min to max
 * Way 1: Selection Sort
 */
let intArr1 = generateArray();
console.log("Before selection sort: ", intArr1);
selectionSort(intArr1)
console.log("After selection sort: ", intArr1);

/**
 * Sort an integer array from min to max
 * Way 2: Bubble Sort
 */

let intArr2 = generateArray();
console.log("Before bubble sort: ", intArr2);
bubbleSort(intArr2)
console.log("After bubble sort: ", intArr2);

/**
 * Sort an integer array from min to max
 * Way 3: Insertion Sort
 */

let intArr3 = generateArray();
console.log("Before insertion sort: ", intArr3);
insertionSort(intArr3)
console.log("After insertion sort: ", intArr3);