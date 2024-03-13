const fs = require('fs');
const { error } = require('console');


//return dd/mm/yyyy based on OS
function getCurrentDateFormatFromOS() {
    let date = new Date(2024, 0, 31).toLocaleDateString()
    let templateDateFormat = date.replace(/\d+/g, function (match) {
        switch (match.length) {
            case 4: return 'yyyy';
            case 2: return 'dd';
            case 1: return 'mm'
        }
    })
    return templateDateFormat
}

function padString(str, width) {
    return str.padEnd(width, ' ');
}

function parseJSONToObject(jsonString, ConstructorFunction) {
    let parsedObject;
    try {
        parsedObject = JSON.parse(jsonString);
    } catch (error) {
        throw new Error('Json string syntax error')
    }

    if (Array.isArray(parsedObject)) {
        return parsedObject.map(obj => ConstructorFunction.parseObject(obj));
    } else {
        return ConstructorFunction.parseObject(obj);
    }

    // try {
    //     const parsedObject = JSON.parse(jsonString);
    //     if (Array.isArray(parsedObject)) {
    //         //return parsedObject.map(obj => new ConstructorFunction(obj.title, obj.author));
    //         return parsedObject.map(obj => new ConstructorFunction(ConstructorFunction.fromObject(obj)));
    //     } else {
    //         return new ConstructorFunction(parsedObject);
    //     }
    // } catch (error) {
    //     console.error('Error parsing JSON:', error.message);
    //     return null;
    // }
}

function readJsonFile(jsonDataFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonDataFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

module.exports = {
    getCurrentDateFormatFromOS,
    readJsonFile,
    parseJSONToObject,
    padString,
}