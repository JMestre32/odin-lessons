// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const newDiv = document.createElement("div");
p.classList.add('newDiv');
newDiv.setAttribute("style", "background: pink; border-style: solid; border-color: black;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"

const newP = document.createElement("newP");
newP.textContent = "ME TOO!";

newDiv.appendChild(h1);
newDiv.appendChild(newP);

container.appendChild(newDiv);

//NOT PREFERRED
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });
  

  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  
  