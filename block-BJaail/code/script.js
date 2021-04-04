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

let titleElement = form.elements.title;
let authorElement = form.elements.author;
let isbnElement = form.elements.ISBN;

function handleSubmit(event) {
  event.preventDefault();
  let titleValue = titleElement.value;
  let authorValue = authorElement.value;
  let isbnValue = isbnElement.value;
  console.log(titleValue, authorValue, isbnValue);
  titleElement.value = "";
  authorElement.value = "";
  isbnElement.value = "";
}

form.addEventListener("submit", handleSubmit);