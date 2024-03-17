const readline = require("../../node_modules/readline-sync");
const BookManagement = require("./BookManagement");
const Book = require("./Book");
const Reader = require("./Reader");
const Utilities = require("./Utilities");

class Library {

    static bookList
    //static availableBookList = []
    static bookNo = 0
    static readerList

    constructor() {
    }

    static async loadBookData() {
        let bookJsonString = await Utilities.readJsonFile("./Labs/Lab_12/bookData.json")
        try {
            Library.bookList = Utilities.parseJSONToObject(bookJsonString, Book)
            return Library.bookList
        } catch (error) {
            console.error(error.message)
            return
        }
    }

    static async loadReaderData() {
        let readerJsonString = await Utilities.readJsonFile("./Labs/Lab_12/readerData.json")
        console.log(readerJsonString);
        try {
            Library.readerList = Utilities.parseJSONToObject(readerJsonString, Reader)
            return Library.readerList
        } catch (error) {
            console.error(error.message)
            return
        }
    }

    //Nhap sach
    static importBooks(books) {
        this.bookList.push(books);
        console.log(`Current book list: ${this.bookList}`);
    }

    static selectBooks() {
        let availableBookList = Library.getAvailableBooks()

        if (availableBookList.length > 0) {
            console.log("List of available books: ");
            Library.showBookList(availableBookList);

            let selectedBooksStrByNo = readline.question("Enter your selected books: ")
            let selectedBooksArrByNo = selectedBooksStrByNo.trim().split(/\s+/)

            return Library.getSelectedBooksArr(selectedBooksArrByNo, availableBookList)
        } 
        return
    }

    static getSelectedBooksArr(selectedBooksArrByNo, availableBookList) {
        let selectedBooks = []
        let availableTotalBooks = availableBookList.length

        for (const option of selectedBooksArrByNo) {
            if (option > availableTotalBooks) {
                console.log(`Book No. ${option} does not exist`);
            } else {
                selectedBooks.push(availableBookList[option - 1])
                console.log(`Book No. ${option} is selected`);
            }
        }
        return selectedBooks
    }

    static getAvailableBooks() {
        let availableBookList = []
        Library.bookList.forEach(book => {
            if (book.status) {
                availableBookList.push(book)
            }
        })
        return availableBookList;
    }

    static showBookList(booksArray) {
        Library.bookNo = 0
        booksArray.forEach(book => {
            console.log(Utilities.padString(++Library.bookNo + '', 5) + book.toString());
        })
    }

    static async borrowBooks(selectedBooks) {
        let isContinueBorrow = true;
        let reader;
        while (isContinueBorrow) {
            let isMember = readline.question("Have you registered member yet? (Y/N): ").toUpperCase()
            switch (isMember) {
                case "Y":
                    reader = Library._getReaderMembership()
                    isContinueBorrow = false;
                    break;
                case "N":
                    reader = await Library._createNewReader()
                    isContinueBorrow = false;
                    break;
                default:
                    console.log("Incorrect option. Enter only Y/N");
            }
        }
        Library._borrowBooks(selectedBooks, reader)
    }

    static returnBooks(returnBooks, returnPerson) {
        returnBooks.forEach(returnBook => {
            if (isBookExisted(returnBook) && returnBook.status === false) {
                let reader = BookManagement.getReaderByBookManagementID(returnBook.BookManagementID)

            } else {
                console.log(`The ${returnBook} is not our library books`);
            }
        });
    }

    static _getReaderMembership() {
        let isReaderExist = false
        let reader;
        while (!isReaderExist) {
            let readerID = Number(readline.question("Please give your memberID: "))
            reader = Library._getReader(readerID)
            if (reader) {
                isReaderExist = true
            } else {
                console.log(`The readerID ${readerID} does not exist. `);
                Library._processReaderNotExist()
            }
        }
        return reader
    }

    static _processReaderNotExist() {
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

    static _borrowBooks(selectedBooks, reader) {
        let borrowBooks = []

        selectedBooks.map(function (book) {
            if (book.status) {
                book.status = false
                borrowBooks.push(book)
                console.log(`${Utilities.padString(book.title, 47)} ==> borrow succeed`);
            } else {
                console.log(`${book.title} is not vailable now`);
            }
        })

        if (borrowBooks.length > 0) {
            let record = BookManagement.createRecord(borrowBooks, reader)
            borrowBooks.forEach(book => {
                book.bookManagementID = record.id
            })
        }
    }

    static async _createNewReader() {
        let fullName = readline.question("Please enter your full name: ")
        let isDOBCorrect = false
        while (!isDOBCorrect) {
            let dob = readline.question(`Please enter your date of birth (${Utilities.getCurrentDateFormatFromOS()}): `)
            try {
                let newReader = new Reader(fullName, dob)
                Library.readerList.push(newReader)
                await Utilities.writeJsonFile(Library.readerList, "./Labs/Lab_12/readerData.json")
                        // .then((message) => console.log(message))
                        // .catch((error) => console.error('Error writing JSON file:', error));
                isDOBCorrect = true
                console.log(`Create new reader success. Your readerID: ${newReader.id}`);
                return newReader
            } catch (error) {
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