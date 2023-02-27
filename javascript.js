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

function printBooksToView () {
    const mainGrid = document.getElementById("card-container")
    let id = 0;
    for (const key of library) {
        
        const card = document.createElement("div");
        card.classList.add("card")

        const title = document.createElement("p");
        title.textContent = key.name;

        const author = document.createElement("p");
        author.textContent = key.author;

        const pages = document.createElement("p");
        pages.textContent = key.pages;

        const label = document.createElement("label");
        label.classList.add("switch")
        const check = document.createElement("input");
        check.type = "checkbox";
        check.name = "book-read";
        check.classList.add("read-selector")
        check.checked = key.read;
        check.setAttribute("lib_id", id)
        const slider = document.createElement("span");
        slider.classList.add("slider")
        
        label.append(check, slider);
        card.append(title, author, pages, label)
        mainGrid.appendChild(card)
        id++;
    }
}

const newBook = new Book("name", "author", 182, true);
addBookToLibrary(newBook);
printBooksToView()

const allBookSliders = document.querySelectorAll(".read-selector")

allBookSliders.forEach(slider => slider.addEventListener('click', () => {
    let bookId = slider.getAttribute("lib_id")
    let book = library[bookId]
    book.read = slider.checked
}))
