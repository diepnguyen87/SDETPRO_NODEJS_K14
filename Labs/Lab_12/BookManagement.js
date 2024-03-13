const Book = require("./Book");
const Reader = require("./Reader");


class BookManagement {
    static bookManagementID = 0
    static bookManagementList = []

    static createRecord(borrowBooks, borrowReader){
        let bookManagementRow = {   id : ++BookManagement.bookManagementID,
                            books : borrowBooks,
                            reader : borrowReader,
                            startDate : new Date(),
                            dueDate : undefined
                        }
        bookManagementRow.dueDate = new Date(bookManagementRow.startDate)
        bookManagementRow.dueDate.setDate(bookManagementRow.dueDate.getDate() + 7)
        BookManagement.bookManagementList.push(bookManagementRow)
        return bookManagementRow;
    }

    static getReaderByBookManagementID(id){
        BookManagement.bookManagementList.forEach(row => {
            if(row.Book.bookManagementID === id){
                return row.reader
            }
        })
        return null
    }
}

module.exports = BookManagement