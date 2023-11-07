let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.querySelector("#read");
let form = document.querySelector("#add-book");

let submitBtn = document.querySelector("#submit-btn");

const library = [];

class Book{
    constructor(
    title = "title", 
    author = "author", 
    pages = 0, 
    read = false
    ) {
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

function addBookToLibrary() {
    if(title.value && author.value) {
        const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value)
        library.push(newBook);
        form.reset();
    }
    else {
        alert("Please enter a title and author.");
    }
}

library[0] = new Book("Lord Of The Rings","J.R.R. Tolkien", 666, true);
library[1] = new Book("Philosopher's Stone","J. K. Rowling",223,true);
library[2] = new Book("Chamber of Secrets","J. K. Rowling",251,true);
library[3] = new Book("Prisoner of Azkaban","J. K. Rowling",317,true);
library[4] = new Book("Goblet of Fire","J. K. Rowling",636,true);
library[5] = new Book("Order of the Phoenix","J. K. Rowling",766,false);
library[6] = new Book("Half-Blood Prince","J. K. Rowling",607,true);
library[7] = new Book("Deathly Hallows","J. K. Rowling",607,true);

submitBtn.addEventListener('click', (e) => { 
    addBookToLibrary();
    console.log(library);
});

console.log(library);
