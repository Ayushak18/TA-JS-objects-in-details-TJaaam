let allInput = document.querySelectorAll("input");
let button = document.querySelector("button");
button.addEventListener("click", function () {
  let book = document.createElement("tr");
  allInput.forEach((element) => {
    let field = document.createElement("td");
    field.innerText = element.value;
    book.append(field);
    console.log(book);
  });
});

// let book = document.createElement("tr");
//   let field = document.createElement("td");
//   let close = document.createElement("a");
//   let icon = document.createElement("i");
//   icon.className = "fas fa-window-close fa-2x";
//   close.href = "#";
//   close.append(icon);

//   book.append(field);
//   console.log(book);
