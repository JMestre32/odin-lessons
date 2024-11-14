const body = document.body;

const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

let currentItem;

button.addEventListener("click", () => {
    currentItem = document.querySelector("input").value
    input.value = '';
    body.append(input);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn2 = document.createElement("button");
    li.appendChild(span);
    li.appendChild(btn2);
    span.textContent = currentItem;
    btn2.textContent = "Delete";
    ul.appendChild(li);

    btn2.addEventListener("click", () =>{
        li.remove();
    });
    
    input.focus();
});