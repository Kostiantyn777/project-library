const cardContainer = document.querySelector(".card-container");

//To store Book objects
const myLibrary = [];

//Constructor to create BOOK Objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const createNewBook = new Book(title, author, pages, read);

  myLibrary.push(createNewBook);

  console.log(myLibrary);
}
addBookToLibrary("Harry Poter", "Hello", 799, "yes");
addBookToLibrary("Harry Poter", "Hello", 799, "yes");
addBookToLibrary("Harry Poter", "Hola", 599, "no");

function displayCard() {
  myLibrary.forEach((book) => {
    //Create New Card for each book
    const newCard = document.createElement("div");
    newCard.className = "card";
    cardContainer.appendChild(newCard);

    //Create new div for each object property and add it to the card
    const bookTitle = document.createElement("div");
    bookTitle.className = "title";
    bookTitle.innerText = book.title;
    newCard.appendChild(bookTitle);

    const bookAuthor = document.createElement("div");
    bookAuthor.className = "author";
    bookAuthor.innerText = book.author;
    newCard.appendChild(bookAuthor);

    const bookPages = document.createElement("div");
    bookPages.className = "pages";
    bookPages.innerText = book.pages;
    newCard.appendChild(bookPages);

    const bookState = document.createElement("div");
    bookState.className = "read-or-no";
    bookState.innerText = book.read;
    newCard.appendChild(bookState);
  });
}
displayCard();
