let btn = document.querySelector("button");
let text = document.querySelector("#item");
let ul = document.querySelector("ul");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    const myItem = text.value;

    text.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = myItem;
    button.textContent = "Delete";

    button.addEventListener("click", (event) => {
        listItem.remove();
    });

    listItem.appendChild(span);
    listItem.appendChild(button);
    ul.appendChild(listItem);
});


