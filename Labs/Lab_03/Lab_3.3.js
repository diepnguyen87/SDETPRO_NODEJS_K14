const {sortAscending} = require("../Utility")

/**
 * Sort an integer array from min to max
 */

let intArr = [12, 34, 1, 16, 28]
console.log("Before sort: ", intArr);

intArr.sort(sortAscending)
console.log("After sort: ", intArr);