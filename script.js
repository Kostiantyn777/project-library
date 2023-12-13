const cardContainer = document.querySelector(".card-container");
const dialog = document.getElementById("dialog");
const buttonAddNewBook = document.querySelector(".add-new-book");
const buttonCancel = document.querySelector("#cancelBtn");
const buttonSubmit = document.querySelector("#submitBtn");
const form = document.getElementById("form");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

// OPEN DIALOG
buttonAddNewBook.addEventListener("click", () => {
  dialog.showModal();
});

//CLOSE DIALOG
buttonCancel.addEventListener("click", () => {
  clearAllInputs();
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );

  clearAllInputs();
  displayCard();

  dialog.close();
});
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

function displayCard() {
  cardContainer.innerHTML = "";
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
    book.read
      ? (bookState.innerText = "Read")
      : (bookState.innerText = "Not read");

    newCard.appendChild(bookState);

    const buttonRemove = document.createElement("button");
    buttonRemove.className = "remove-button";
    buttonRemove.innerText = "Remove";
    newCard.appendChild(buttonRemove);
  });
}

function clearAllInputs() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}
