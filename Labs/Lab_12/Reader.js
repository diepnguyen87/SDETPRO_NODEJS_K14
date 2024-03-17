const Utilities = require("./Utilities");

class Reader {

    static readerID = 0
    static index = 0;

    constructor(fullName, dob){
        if(this._isValidDate(dob)){
            this._dob = dob
        }else{
            throw new Error("[ERROR] Incorrect DOB format");
        }
        this._fullName = fullName
        this._id = ++Reader.readerID
    }
    
    static parseObject(obj) {
        return new Reader(obj.fullName, obj.dob);
    }

    toString(){
        ++Reader.index;
        return `Full name: ${Utilities.padString(this.fullName, 48)}   dob: ${this.dob}`;
    }

    _isValidDate(dateString) {
        let dateTemplate = Utilities.getCurrentDateFormatFromOS();
        let dateTemplateArr = dateTemplate.split('/')
        let dateStringArr = dateString.split('/')

        let dateStringObj = {}
        dateStringObj[dateTemplateArr[0]] = dateStringArr[0]
        dateStringObj[dateTemplateArr[1]] = dateStringArr[1]        
        dateStringObj[dateTemplateArr[2]] = dateStringArr[2]

        let date = dateStringObj['dd']
        let month = dateStringObj['mm']
        let year = dateStringObj['yyyy']
        let parsedDate = new Date(year, month - 1, date); 
        return parsedDate.getMonth() + 1 === parseInt(month) &&
               parsedDate.getDate() === parseInt(date) &&
               parsedDate.getFullYear() === parseInt(year);
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get fullName(){
        return this._fullName
    }

    set fullName(fullName){
        this._fullName = fullName
    }

    get dob(){
        return this._dob
    }

    set dob(dob){
        this._dob = dob
    }
}

module.exports = Reader