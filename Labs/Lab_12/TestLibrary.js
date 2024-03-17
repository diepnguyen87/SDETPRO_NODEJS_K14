const readline = require("../../node_modules/readline-sync");
const Library = require("./Library");

async function showLibraryUI() {
    let isContinue = true
    while (isContinue) {
        console.log("=== WELCOME TO PENNSYLVANIA LIBRARY ===");
        console.log(`
        1. Borrow Books
        2. Return Books
        3. Import Books
        4. Search book by author
        5. Search book by title
        0. Exit
        `);

        let yourOption = Number(readline.question("Please select what function you wanna do: "))
        switch (yourOption) {
            case 1:
                let isContinueSelecting = true
                let selectedBooks = []
                while (isContinueSelecting) {
                    selectedBooks = Library.selectBooks()
                    if (selectedBooks) {
                        if (selectedBooks.length >= 1) {
                            isContinueSelecting = false
                            await Library.borrowBooks(selectedBooks)
                        } else {
                            console.log("All books you have selected are not existed. Please try again!!!");
                        }
                    } else {
                        console.log("No books are loaded on shelf");
                        isContinueSelecting = false
                    }
                }
                break;
            case 2:
                Library.returnBooks()
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 0:
                isContinue = false
                break;
            default:
                console.log("Incorrect option. Please enter digit only from 1 - 5");
                break;
        }
    }
}

function showLibraryUIBasedOnLibrian() {
    console.log("Book List/ Read List/ aboth are not loaded successfully.");
    console.log("Do you wanna continue?");
    console.log(`
    1. Continue
    2. Exit
    `);
    let isContinue = true;
    while (isContinue) {
        let yourOption = Number(readline.question("Enter your option: "))
        switch (yourOption) {
            case 1:
                isContinue = false
                break;
            case 2:
                process.exit()
            default:
                console.log("Incorrect option. Enter only digit 1 or 2");
                break;
        }
    }
    showLibraryUI()
}

async function startLibrary() {
    let booksArr = await Library.loadBookData()
    if (booksArr) {
        console.log("Book List are loaded successfully");
    } else {
        console.log("Book List can not loaded");
    }

    let readersArr = await Library.loadReaderData()
    if (readersArr) {
        console.log("Reader List are loaded successfully");
    } else {
        console.log("Reader List can not loaded");
    }

    if (Library.bookList && Library.readerList) {
        await showLibraryUI()
    } else {
        showLibraryUIBasedOnLibrian()
    }
}

startLibrary()