export default class Book {
    private static id: number = 0
    private ISBN: string
    private title: string
    private author: string
    private publishingYear: number
    private static index: number = 0

    constructor(title: string, author: string, publishingYear: number) {
        this.ISBN = this.generateISBN()
        this.title = title
        this.author = author
        this.publishingYear = publishingYear
    }

    private generateISBN() {
        ++Book.id
        return "ISBN_" + Book.id.toString().padStart(3, '0');
    }

    public static parseObject(bookObj: any) {
        return new Book(bookObj.title, bookObj.author, bookObj.publishingYear);
    }

    public getISBN(): string {
        return this.ISBN
    }

    public getTitle(): string {
        return this.title
    }

    public setTitle(title: string): void {
        this.title = title
    }

    public getAuthor(): string {
        return this.author
    }

    public setAuthor(author: string): void {
        this.author = author
    }

    public getPublishingYear(): number {
        return this.publishingYear
    }

    public setPublishingYear(publishingYear: number): void {
        this.publishingYear = publishingYear
    }

    public toString(): string {
        return `
        Book ${++Book.index}: ${this.title}
            ISBN: ${this.ISBN}
            Author: ${this.author}
            Publishing year: ${this.publishingYear}
        `
    }
}