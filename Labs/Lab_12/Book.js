const { padString } = require("./Utilities")

class Book {

    static bookID = 0;
    static index = 0;

    constructor(title, author){
        this._id = `LIB_${this.generateBookID()}`
        this._title = title
        this._author = author
        this._status = true
        this._bookManagementID = null
    }

    
    generateBookID(){
        ++Book.bookID
        return Book.bookID.toString().padStart(3, '0');
    }
    
    static parseObject(obj) {
        return new Book(obj.title, obj.author);
    }

    toString(){
        ++Book.index;
        return `title: ${padString(this.title, 48)}   author: ${this.author}`;
    }
  
    get id(){
        return this._id
    }

    set id(id){
        this.id = id
    }

    get title(){
        return this._title
    }

    set title(title){
        this._title = title
    }

    get author(){
        return this._author
    }

    set author(author){
        this._author = author
    }

    get status(){
        return this._status
    }

    set status(status){
        this._status = status
    }

    get bookManagementID(){
        return this._bookManagementID
    }

    set bookManagementID(bookManagementID){
        this._bookManagementID = bookManagementID
    }
}

module.exports = Book