const readline = require("../../node_modules/readline-sync");
const BookManagement = require("./BookManagement");
const Book = require("./Book");
const Reader = require("./Reader");
const { getCurrentDateFormatFromOS,
        readJsonFile,
        parseJSONToObject,
        padString} = require("./Utilities");

class Library {

    static bookList
    static availableBookList = []
    static bookNo = 0
    static readerList

    constructor(){
    }

    static async loadBookData(){
        let bookJsonString = await readJsonFile("./Labs/Lab_12/bookData.json")
        try{
            Library.bookList = parseJSONToObject(bookJsonString, Book)
            return Library.bookList
        }catch(error){
            console.error(error.message)
            return
        }
    }
    
    static async loadReaderData(){
        let readerJsonString = await readJsonFile("./Labs/Lab_12/readerData.json")
        try{
            Library.readerList = parseJSONToObject(readerJsonString, Reader)
            return Library.readerList
        }catch(error){
            console.error(error.message)
            return
        }
    }

    //Nhap sach
    static importBooks(books){
        this.bookList.push(books);
        console.log(`Current book list: ${this.bookList}`);
    }

    static selectBooks(){
        Library.bookNo = 0
        Library.availableBookList = []
        if(Library.bookList){
            console.log("List of available books: ");
            Library.bookList.forEach((book) => {
                if(book.status){
                    Library.availableBookList.push(book)
                    console.log(padString(++Library.bookNo + '', 5) + book.toString());
                }
            })
            let selectedBooksStrByNo = readline.question("Enter selected books: ")
            let selectedBooksArrByNo = selectedBooksStrByNo.trim().split(' ')
            let selectedBooks = []
            Library.availableTotalBooks = Library.availableBookList.length
            for (const option of selectedBooksArrByNo) {
                if(option > Library.availableTotalBooks){
                    console.log(`Book No. ${option} does not exist`);
                }else{
                    selectedBooks.push(Library.availableBookList[option - 1])
                }
            }
            return selectedBooks
        }else{
            console.log("No books are loaded on shelf");
        }
    }
   
    static borrowBooks(selectedBooks){
        let isContinue = true;
        while(isContinue){
            let isMember = readline.question("Have you registered member yet? (Y/N): ").toUpperCase()
            switch (isMember) {
                case "Y":
                    let reader = Library._getReaderMembership()
                    Library._borrowBooks(selectedBooks, reader)
                    isContinue = false;
                    break;
                case "N":
                    Library._createReader()
                    break;
                default:
                    console.log("Incorrect option. Enter only Y/N");
            }
        }
    }

    static returnBooks(returnBooks, returnPerson){
        returnBooks.forEach(returnBook => {
            if(isBookExisted(returnBook) && returnBook.status === false){
              let reader = BookManagement.getReaderByBookManagementID(returnBook.BookManagementID)
              
            }else{
                console.log(`The ${returnBook} is not our library books`);
            }
        });
    }

    static _getReaderMembership(){
        let isReaderExist = false
        let reader;
        while(!isReaderExist){
            let readerID = Number(readline.question("Please give your memberID: "))
            reader = Library._getReader(readerID)
            if(reader){
                isReaderExist = true
            }else{
                console.log(`The readerID ${readerID} does not exist. `);
                Library._processReaderNotExist()
            }
        }
        return reader
    }

    static _processReaderNotExist(){
        console.log(`
            1. Re-enter memberID
            0. Exit
            `);
        let yourOption = Number(readline.question("Enter your option: "))
        switch (yourOption) {
            case 0:
                process.exit()
            case 1:
            default:
                break;
        }
    }

    static _borrowBooks(selectedBooks, reader){
        let borrowBooks = []

        selectedBooks.map(function(book){
            if(book.status){
                book.status = false
                borrowBooks.push(book)
                console.log(`${padString(book.title, 47)} ==> borrow succeed`);
            }else{
                console.log(`${book.title} is not vailable now`);
            }
        })

        if(borrowBooks.length > 0){
            let record = BookManagement.createRecord(borrowBooks, reader)
            borrowBooks.forEach(book => {
                book.bookManagementID = record.id
            })
        }
    }

    static _createReader(){
        let fullName = readline.question("Please enter your full name: ")
        let isDOBCorrect = false
        while(!isDOBCorrect){
            let dob = readline.question(`Please enter your date of birth (${getCurrentDateFormatFromOS()}): `)
            try{
                let newReader = new Reader(fullName, dob)
                Library.readerList.push(newReader)
                isDOBCorrect = true
                console.log(`Create new reader success. Your readerID: ${newReader.id}`);
            }catch(error){
                console.log("[ERROR] Incorrect DOB format");    
            }
        }
    }

    static _getReader(readerID) {
        for (const reader of Library.readerList) {
            if (reader.id === readerID) {
                return reader
            }
        }
        return null
    }
}

module.exports = Library