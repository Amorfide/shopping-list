let btn = document.querySelector("button");
let text = document.querySelector("#item");
let ul = document.querySelector("ul");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("I pressed it");
    console.log(text.value);
    myItem = text.value;
    text.value = "";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    ul.appendChild(span);
    ul.appendChild(button);
    span.textContent = myItem;
    button.textContent = "Delete";
    });


