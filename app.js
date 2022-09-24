// Global variables
const d = document;
let arrayOfTasks = [];
let tasksList = "";

// Getting elements from the DOM
let container = d.getElementById("container");
let mainSection = d.getElementById("mainSection");
let secondaryDiv = d.getElementById("secondaryDiv");
let divTasks = d.getElementById("div__tasks");

// Creating elements
let thirdDiv = d.createElement("div");
thirdDiv.setAttribute("id", "thirdDiv");
let buttonInput = d.createElement("button");
let input = d.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");


// Executing functions when DOM is loaded
const createTitle = () => {
  let divTitle = d.createElement("h1");
  divTitle.innerHTML = "To Do List";
  secondaryDiv.appendChild(divTitle);
  mainSection.appendChild(secondaryDiv);
};

d.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  createInput();
  createTitle();
  addTask();
  inputClicked();
  if (!localStorage.getItem("tasks")) {
    console.log("No tasks");
  } else {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("array: ", arrayOfTasks);
    showTasks();
  }
});

const createInput = () => {
  input.placeholder = "Enter your name";
  buttonInput.innerHTML = "Add task";
  container.appendChild(input);
  container.appendChild(buttonInput);
};

const inputClicked = () => {
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      let task = input.value;
      if (task === "") {
        return alert("You must write something!");
      }

      arrayOfTasks.push(task);
      console.log("arrayOfTasks: ", arrayOfTasks);
      input.value = "";

      saveToLocalStorage();
      showTasks();
    }
  });
};

const addTask = () => {
  buttonInput.addEventListener("click", () => {
    let task = input.value;
    if (task === "") {
      return alert("You must write something!");
    }

    arrayOfTasks.push(task);
    console.log("arrayOfTasks: ", arrayOfTasks);
    input.value = "";

    saveToLocalStorage();
    showTasks();
  });
};

const showTasks = () => {
  divTasks.innerHTML = `
        <div id="div__tasks">
        ${arrayOfTasks
          .map((task, i) => {
            return `
          <div class="task__title">
          <h2>${task}</h2>
          <div class="task__buttons">
          <button class="task__buttons--edit" onclick = "updateFromLocalStorage(${task})">Edit</button>
          <button class="task__buttons--delete" onclick = "deleteFromLocalStorage(${task , i})">Delete</button>
          </div>
        </div>
        `;
          })
          .join("")
        }
      </div>
       `;
  secondaryDiv.appendChild(divTasks);
};

const clicked = () => {
  console.log("clicked");
};

const saveToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
};

const deleteFromLocalStorage = (task ,i) => {
  console.log("task deleted : ", task);
  console.log("index deleted : ", i);

  // let index = arrayOfTasks.indexOf(task);

  // console.log("index: ", index);
  // arrayOfTasks.splice(index, 1);
  // saveToLocalStorage();
  // showTasks();
};

const updateFromLocalStorage = (task) => {
  console.log("task updated: ", task);
  let newTask = prompt("Enter new task");
  console.log('newTask: ', newTask)
  let index = arrayOfTasks.indexOf(task);
  console.log("index: ", index);
  arrayOfTasks[index] = newTask;
  saveToLocalStorage();
  showTasks();
};


