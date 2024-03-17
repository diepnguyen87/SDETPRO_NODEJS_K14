const fs = require('fs');

class Utilities {

    //return dd/mm/yyyy based on OS
    static getCurrentDateFormatFromOS() {
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

    static padString(str, width) {
        return str.padEnd(width, ' ');
    }

    static parseJSONToObject(jsonString, ConstructorFunction) {
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
    }

    static readJsonFile(jsonDataFile) {
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

    // static writeJsonFile(data, jsonDataFile) {
    //     return new Promise((resolve, reject) => {
    //         // Convert data to JSON string
    //         const jsonData = JSON.stringify(data, null, 2);
        
    //         // Write JSON string to file
    //         fs.writeFile(jsonDataFile, jsonData, (err) => {
    //             if (err) {
    //             reject(err); // Reject the promise if an error occurs
    //             return;
    //             }
    //             resolve('Data has been written to ' + jsonDataFile); // Resolve the promise if successful
    //         });
    //     });
    //   }

    static async writeJsonFile(data, jsonDataFile) {
        // Convert JavaScript object to JSON string
        const jsonData = JSON.stringify(data);
        //jsonData = '{"dob":"1/1/2000","fullName":"Duy Khanh","id":3}'
        console.log(jsonData);
        // Write JSON string to a file
        await fs.writeFile(jsonDataFile, jsonData, (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
            console.log('Data has been written to ${jsonDataFile}');
        });
    }
}

module.exports = Utilities