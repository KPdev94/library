let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.querySelector("#read");
let form = document.querySelector("#add-book");
let tableBody = document.querySelector("#table-body");

let submitBtn = document.querySelector("#submit-btn");

let library = [];
let count = 0;

class Book{
    constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readYet;
        if (this.read == true) readYet = "has been read";
        else readYet = "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readYet}`;
    }
    }
}

let DEFAULT_LIBRARY = [
    new Book("Lord Of The Rings", "J.R.R. Tolkien", 666, true ),
    new Book("Philosopher's Stone", "J. K. Rowling", 223, true ),
    new Book("Chamber of Secrets", "J. K. Rowling", 251, true ),
    new Book("Prisoner of Azkaban", "J. K. Rowling", 317, true ),
    new Book("Goblet of Fire", "J. K. Rowling", 636, true ),
    new Book("Order of the Phoenix", "J. K. Rowling", 766, false ),
    new Book("Half-Blood Prince", "J. K. Rowling", 607, true ),
    new Book("Deathly Hallows", "J. K. Rowling", 607, true)
];

library = DEFAULT_LIBRARY;

function addBookToLibrary() {
    if(title.value && author.value) {
        newRead.value = newRead.checked ? true : false;
        const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value);
        library.push(newBook);
        console.log("BOOK SHOULD BE PUSHED");
    }
    else {
        alert("Please enter a title and author.");
    }
    updateLibrary();
    console.log(library.length);
}

function clearForm() {
newTitle.value = "";
newAuthor.value = ""; 
newPages.value = ""; 
}

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    addBookToLibrary();
    clearForm();
    console.log(library);
});

function deleteBook(e) {
    let toBeDeleted = e.target.getAttribute("data-num");
    library.splice(toBeDeleted, 1);
    renderLibrary();
}

const renderLibrary = () => {
    tableBody.innerHTML = "";
    library.forEach((book) => {
    const bookRow = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.read}</td>
            <td><button class="deleteBook" data-num="${count}">Delete</button></td>
        </tr> 
        `;
    tableBody.insertAdjacentHTML("beforeend", bookRow);
    count++;
    }); 
    count = 0;
    console.log(library);
    
    let deleteBtn = document.querySelectorAll(".deleteBook");
    deleteBtn.forEach((button) => {
        button.addEventListener('click', deleteBook);
    })
}
renderLibrary();


