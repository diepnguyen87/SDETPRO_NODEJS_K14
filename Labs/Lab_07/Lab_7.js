const readline = require("../../node_modules/readline-sync")
const {countWords} = require("./StringService")

let str = readline.question("Please enter your string: ")
let fortmatStr = str.replace(/[,.!?]/g, "").toLowerCase()

console.log(countWords(fortmatStr));
