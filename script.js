const textArea = document.querySelector("textarea");
const button = document.querySelector("#addNote");
const div = document.querySelector(".displayNote");
let counter = 0;

button.addEventListener("click", createNote);

// view eventlistener fucntion
// delete eventlistener function
function deleteButton() {
  const deleteBtn = document.querySelectorAll(".deletes");
  deleteBtn.forEach(button => {
    button.addEventListener("click", function(e) {
      e.target.parentElement.remove();
      e.stopPropagation();
    })
  })
}

function viewButton() {
  const viewBtn = document.querySelectorAll(".view");
  viewBtn.forEach(button => {
    button.addEventListener("click", function() {
      alert("test")
    })
  })
}

function createNote() {
  if (textArea.value === "") return;
  const newDiv = createCard();

  div.appendChild(newDiv);
  textArea.value = "";
  viewButton();
  deleteButton();
}

function createCard() {
  counter++;
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.setAttribute("id", counter);
  const header = document.createElement("h3");
  header.innerHTML = `Note ${counter}`;
  const p = document.createElement("p");
  p.innerHTML = textArea.value;

  // const newButtons = createButtons(cardDiv);

  cardDiv.appendChild(header);
  cardDiv.appendChild(p);
  createButtons(cardDiv);
  // cardDiv.appendChild(newButtons);
  return cardDiv;
}

function createButtons(cardDiv) {
  const view = document.createElement("button");
  view.classList.add("view");
  view.innerHTML = "View";

  const deletes = document.createElement("button");
  deletes.classList.add("deletes");
  deletes.innerHTML = "Delete";

  cardDiv.appendChild(view);
  cardDiv.appendChild(deletes);

  return cardDiv;
}
