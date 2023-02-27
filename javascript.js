let library = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}

const newBook = new Book("name", "author", 182, true);
addBookToLibrary(newBook);

console.log(library);
