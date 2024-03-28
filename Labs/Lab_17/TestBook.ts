import BookController from "./BookController";
import readline from "readline-sync"
import Book from "./Book";

function _openUI() {
    console.log(
        `
        ======= Book Management Program (CRUD)=======
        1. New book
        2. Find a book(ISBN)
        3. Update a book
        4. Delete a book
        5. Print the book list
        0. Exit
    `);
}

function _inputBookInfo(bookProperty: string): string {
    return readline.question(`Please input ${bookProperty}: `)
}

function _isValidYear(year: number): boolean {
    return !isNaN(year) && year >= 1000 && year <= new Date().getFullYear();
}

function _createBook() {
    let newBookTitle = _inputBookInfo("Title")
    let newBookAuthor = _inputBookInfo("Author")
    let newPublishingYear

    while (true) {
        newPublishingYear = Number(_inputBookInfo("Publishing year"))
        if (_isValidYear(newPublishingYear)) {
            break;
        }
    }

    return new Book(newBookTitle, newBookAuthor, newPublishingYear)
}

async function startProgram() {
    await BookController.loadBookList()

    let isContinuing = true
    while (isContinuing) {
        _openUI()
        let yourOption = Number(readline.question("Enter your option: "))
        switch (yourOption) {
            case 1:
                let newBook = _createBook()
                await BookController.addBook(newBook)
                break;
            case 2:
                let findingISBN = _inputBookInfo("ISBN")
                let book = BookController.findABook(findingISBN)
                if (book) {
                    console.log(book);
                } else {
                    console.log(`Book with <${findingISBN}> is not found`);
                }
                break;
            case 3:
                while (true) {
                    let updateISBN = _inputBookInfo("ISBN need to updated")
                    let updateBook = BookController.findABook(updateISBN)
                    if (updateBook) {
                        let newTitle = _inputBookInfo("new title (to bypass, press Enter)")
                        let newAuthor = _inputBookInfo("new author (to bypass, press Enter)")
                        let newPublishingYear

                        while (true) {
                            newPublishingYear = Number(_inputBookInfo("publishing year (to bypass, press Enter)"))

                            if (newPublishingYear === 0) {
                                break;
                            }
                            if (_isValidYear(newPublishingYear)) {
                                break;
                            }
                            console.log(`Publishing year <${newPublishingYear}> is invalid`);
                        }

                        let updateStatus = await BookController.updateBook(updateBook, newTitle, newAuthor, newPublishingYear)
                        if (updateStatus === true) {
                            console.log("===> Update succeed");
                        } else if (updateStatus === false) {
                            console.log("===> Update failed");
                        }
                        break;
                    }
                    console.log(`The entered ISBN <${updateISBN}> is incorrect`);
                }
                break;
            case 4:
                let deletedISBN = _inputBookInfo("ISBN need to delete")
                let deleteStatus = await BookController.deleteBook(deletedISBN)
                if (deleteStatus) {
                    console.log("Delete succeed");
                    break;
                } else {
                    console.log(`The entered ISBN <${deletedISBN}> is incorrect`);
                }
                break;
            case 5:
                for (const book of BookController.bookList) {
                    console.log(book.toString());
                }
                break;
            case 0:
                isContinuing = false
                break;
            default:
                console.log("Incorrect option. Please enter digit only from 0->5");
        }
    }
}
startProgram()
