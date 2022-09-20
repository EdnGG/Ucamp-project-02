// Global variables
const d = document;
let arrayOfTasks = [];
let tasksList = ''

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
d.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    createInput();
    createTitleTable();
    addTask();
  if (!localStorage.getItem("tasks")) {
    console.log("No tasks");
  } else {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log('array: ', arrayOfTasks);
    showTasks();
  }
});

const createInput = () => {
  input.placeholder = "Enter your name";
  buttonInput.innerHTML = "Add task";
  container.appendChild(input);
  container.appendChild(buttonInput);
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

const saveToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
};

const deleteFromLocalStorage = (task) => {
  let index = arrayOfTasks.indexOf(task);
  arrayOfTasks.splice(index, 1);
  saveToLocalStorage();
};

const updateFromLocalStorage = (task) => {
  let index = arrayOfTasks.indexOf(task);
  arrayOfTasks[index] = task;
  saveToLocalStorage();
};

const showTasks = () => {

  
  arrayOfTasks.forEach((task) => {

    // tasksList.innerHTML += `
    //   <div class="task">
    //     <div class="task__title">
    //       <h2>${task}</h2>
    //     </div>
    //     <div class="task__buttons">
    //       <button class="task__buttons--edit">Edit</button>
    //       <button class="task__buttons--delete">Delete</button>
    //     </div>
    //   </div>
    // `;

    // let secondDiv = d.getElementById("secondaryDiv")
    // secondaryDiv.appendChild(tasksList);
    // divTasks.innerHTML = tasksList;

    // divTasks.appendChild(tasksList);
    // secondaryDiv.appendChild(divTasks);


      
      // let divContent = d.createElement("div");
      // let buttonEdit = d.createElement("button");
      // let buttonDelete = d.createElement("button");
  
      // buttonEdit.setAttribute("id", "buttonEdit");
      // buttonDelete.setAttribute("id", "buttonDelete");
      // divContent.setAttribute("id", "divContent");
  
      // divTasks.innerHTML = task;
      divTasks.innerHTML += `
        <div class="task">
          <div class="task__title">
            <h2>${task}</h2>
          </div>
          <div class="task__buttons">
            <button class="task__buttons--edit">Edit</button>
            <button class="task__buttons--delete">Delete</button>
          </div>
        </div>
      `;
      // buttonEdit.innerHTML = "Edit";
      // buttonDelete.innerHTML = "Delete";
  
      // divTasks.appendChild(buttonEdit);
      // divTasks.appendChild(buttonDelete);
  
      // divTasks.appendChild(tasksList);
      secondaryDiv.appendChild(divTasks);
      // d.getElementById("secondaryDiv").appendChild(divContent);
  });  
  
};

const createTitleTable = () => {
  let divTitle = d.createElement("h1");
  let secondaryDiv = d.getElementById("secondaryDiv");
  divTitle.innerHTML = "CRUD";
  secondaryDiv.appendChild(divTitle);
  mainSection.appendChild(secondaryDiv);
};

