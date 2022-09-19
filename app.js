const d = document

let container = document.getElementById('container');
let mainSection = document.getElementById('mainSection');


d.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  createInput()
  createContent()
  addTask()

});

const createInput = () => {
  let input = document.createElement('input');
  let buttonInput = document.createElement('button')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'input')
  input.type = 'text';
  input.placeholder = 'Enter your name';
  buttonInput.innerHTML = 'Add task';
  container.appendChild(input);
  container.appendChild(buttonInput)
}

const addTask = () => { 
  let input = document.getElementById('input');
  let task = input.value;
  let divTask = document.createElement('div');
  let divTaskText = document.createElement('p');
  let divTaskButton = document.createElement('button');
  divTaskText.innerHTML = task;
  divTaskButton.innerHTML = 'Delete';
  divTask.appendChild(divTaskText);
  divTask.appendChild(divTaskButton);
  mainSection.appendChild(divTask);
  input.value = '';
}

const createContent = () => { 
  let divTitle = document.createElement('h1')
  let secondaryDiv = document.getElementById('secondaryDiv');
  divTitle.innerHTML = 'CRUD' 
  secondaryDiv.appendChild(divTitle)
  mainSection.appendChild(secondaryDiv)
}











  // wTV*N2Llf98bqI)eD8YNKl2w
  // 8528gress!!