const { sortAscending } = require("../Utility");

/**
 * Merge 2 SORTED integer array into one SORTED array
 */

let intArr1 = [1, 12, 16, 28, 34]
let intArr2 = [1, 13, 16, 27, 99]

let mergedArr = intArr1.concat(intArr2)
console.log(mergedArr.sort(sortAscending));