// let allInput = document.querySelectorAll("input");
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let book = document.createElement("tr");
//   allInput.forEach((element) => {
//     let field = document.createElement("td");
//     field.innerText = element.value;
//     book.append(field);
//     console.log(book);
//   });
// });

// let book = document.createElement("tr");
//   let field = document.createElement("td");
//   let close = document.createElement("a");
//   let icon = document.createElement("i");
//   icon.className = "fas fa-window-close fa-2x";
//   close.href = "#";
//   close.append(icon);

//   book.append(field);
//   console.log(book);

let form = document.querySelector("form");
let rootElement = document.querySelector("tbody");

let titleElement = form.elements.title;
let authorElement = form.elements.author;
let isbnElement = form.elements.ISBN;

class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}

class BookList {
  constructor(books = []) {
    this.books = books;
  }

  addBook(title, author, isbn) {
    let book = new Book(title, author, isbn);
    this.books.push(book);
    this.creatUI();
  }

  creatUI() {
    rootElement.innerHTML = "";
    this.books.forEach((book) => {
      let row = document.createElement("tr");
      let titleData = document.createElement("td");
      let authorData = document.createElement("td");
      let isbnData = document.createElement("td");
      let deleteButton = document.createElement("td");
      let readButton = document.createElement("td");
      let deleteAnchor = document.createElement("a");
      let readAnchor = document.createElement("a");

      readAnchor.className = "fas fa-check-square fa-2x";
      deleteAnchor.className = "fas fa-window-close fa-2x";

      titleData.innerText = book.title;
      authorData.innerText = book.author;
      isbnData.innerText = book.isbn;
      deleteButton.append(deleteAnchor);
      readButton.append(readAnchor);

      row.append(titleData, authorData, isbnData, deleteButton, readButton);
      rootElement.append(row);
    });
  }
}

let library = new BookList();

function handleSubmit(event) {
  event.preventDefault();
  let titleValue = titleElement.value;
  let authorValue = authorElement.value;
  let isbnValue = isbnElement.value;
  titleElement.value = "";
  authorElement.value = "";
  isbnElement.value = "";
  library.addBook(titleValue, authorValue, isbnValue);
}

form.addEventListener("submit", handleSubmit);
