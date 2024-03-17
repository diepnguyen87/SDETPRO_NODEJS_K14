const Reader = require("./Reader");
const Utilities = require("./Utilities");

let reader = new Reader("Nguyen Khang", "1/1/2024")
Utilities.writeJsonFile(reader, "./Labs/Lab_12/readerData.json")
.then((message) => console.log(message))
.catch((error) => console.error('Error writing JSON file:', error));
