let btn = document.querySelector("button");
let text = document.querySelector("#item");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("I pressed it");
    console.log(text.value);
    myItem = text.value;
    text.value = "";
    });
