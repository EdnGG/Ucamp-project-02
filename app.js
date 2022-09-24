// Global variables
const d = document;
let arrayOfTasks = [];
let tasksList = "";

// Getting elements from the DOM
let container = d.getElementById("container");
let mainSection = d.getElementById("mainSection");
let secondaryDiv = d.getElementById("secondaryDiv");
let divTasks = d.getElementById("div_tasks");

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
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
  let row = ''
  arrayOfTasks.forEach((task, i) => {
                row += `
            <div class="task__title">
            <h2>${task}</h2>
            <div class="task__buttons">
            <button class="task__buttons--edit" onclick = "updateFromLocalStorage(${i})">Edit</button>
            <button class="task__buttons--delete" onclick = "deleteFromLocalStorage( ${i})">Delete</button>
            </div>
          </div>
          
         `
  })
            document.getElementById("secondaryDiv").innerHTML = row; 
            // document.getElementById("div_tasks").innerHTML = row; 
}


const saveToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
};

const deleteFromLocalStorage = (i) => {
  // traer lo que hay en LocaltS
  const newArray = JSON.parse(localStorage.getItem("tasks"));
  // Buscar el in dice y eliminarlo y crear un nuevo array
  newArray.splice(i, 1);
  // inserter el nuevo array en LS
  localStorage.setItem("tasks", JSON.stringify(newArray));
  // invocar la listade tareas 
  showTasks();

};

const updateFromLocalStorage = (i) => {
   // traer lo que hay en LocaltS
   const newArray = JSON.parse(localStorage.getItem("tasks"));
   // Buscar el in dice y actualizarlo y crear un nuevo array
    newArray[i] = prompt("Enter new task");
   // inserter el nuevo array en LS
   localStorage.setItem("tasks", JSON.stringify(newArray));
   // invocar la listade tareas 
   showTasks();
};


