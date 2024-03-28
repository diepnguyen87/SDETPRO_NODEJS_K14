import Book from "./Book";
import * as fs from 'fs';

export default class BookController {

    public static bookList: Book[]
    private static jsonDataFileName = "./Labs/Lab_17/BookStorage.json"

    public static async addBook(book: Book) {
        if (this.bookList) {
            this.bookList.push(book)
        } else {
            this.bookList = [book]
        }
        await this.writeJsonFile(this.bookList, this.jsonDataFileName)
    }

    public static findABook(ISBN: string) {
        if (this.bookList.length > 0) {
            for (const book of this.bookList) {
                if (book.getISBN() === ISBN) {
                    return book;
                }
            }
        }
    }

    public static async updateBook(updatedBook: Book, newTitle: string, newAuthor: string, newPublishingYear: number) {
        let titleLength = newTitle.length
        let authorLength = newAuthor.length

        if (titleLength > 0) {
            updatedBook.setTitle(newTitle)
        }

        if (authorLength > 0) {
            updatedBook.setAuthor(newAuthor)
        }

        if (newPublishingYear !== 0) {
            updatedBook.setPublishingYear(newPublishingYear)
        }

        //write book list into the json file
        if (titleLength > 0 || authorLength > 0 || newPublishingYear !== 0) {
            await this.writeJsonFile(this.bookList, this.jsonDataFileName)
            return true
        } else {
            console.log("===> Nothing need to update");
            return;
        }
    }

    public static async deleteBook(deletedISBN: string) {
        let deletedIndex = this.bookList.findIndex(book => book.getISBN() === deletedISBN)
        if (deletedIndex !== -1) {
            this.bookList.splice(deletedIndex, 1);
            await this.writeJsonFile(this.bookList, this.jsonDataFileName)
            return true
        }
        return false
    }

    public static async loadBookList(): Promise<void> {
        if (!this.bookList || this.bookList.length === 0) {
            let jsonString = await this.readJsonFile(this.jsonDataFileName)
            try {
                this.bookList = this.parseJsonStringToObject(jsonString, Book)
            } catch (error) {
                console.error("No book in the storage to load");
            }
        }
    }

    private static readJsonFile(jsonDataFile: string): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(jsonDataFile, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        });
    }

    private static async writeJsonFile(data: any, jsonDataFileName: string) {
        const jsonData = JSON.stringify(data, null, 2); // Indent with 2 spaces for readability
        try {
            await fs.promises.writeFile(jsonDataFileName, jsonData, 'utf8');
            console.log(`Data has been written to ${jsonDataFileName}`);
        } catch (err) {
            console.error('[Error] writing JSON file:', err);
        }
    }

    private static parseJsonStringToObject(jsonString: string, ConstructorFunction: any) {
        let object;
        try {
            object = JSON.parse(jsonString);
        } catch (error) {
            throw new Error('[ERROR] Json string syntax')
        }

        if (Array.isArray(object)) {
            return object.map(obj => ConstructorFunction.parseObject(obj));
        } else {
            return ConstructorFunction.parseObject(object);
        }
    }
}