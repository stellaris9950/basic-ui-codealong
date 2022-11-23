// My Tasks Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let tasksEl = document.getElementById('tasks');


//Global Variables
let task = loadTasks();
displayAll();

// Go Btn - Menu Li stener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'add') {
    addTask();
  } else if (selection === 'toggle') {
    toggleTask();
  } else if (selection === 'remove') {
    removeTask();
  } else if (selection === 'clear') {
    clearAll();
  }
}

// MENU FUNCTIONS
function addTask() {
  let description = prompt("Enter task description");
  task.push(newTask(description));
  saveTasks();
  displayAll();
}

function toggleTask() {
  let index = +prompt('Enter # of task:');
  let taskIndex = task[index];
  if (taskIndex.completed === '') {
    taskIndex.completed = 'completed';
  }
  else {
    taskIndex.completed = '';
  }
  saveTasks()
  displayAll()
}

function removeTask() {
  let index = +prompt('Enter # of task:');
  if (index >= 0 && index < task.length) {
    task.splice(index, 1)
    saveTasks();
    displayAll();
  }
  else {
    alert('invalid task #')
  }
}

function clearAll() {
  task = [];
  saveTasks();
  displayAll();
}



// HELPER FUNCTION
// return a new task with completion property
function newTask(taskDescription){
  return {
    description: taskDescription, 
    completed: ``
  };
}

// display all tasks
function displayAll() {
  let outputStr = '';
  for (let i = 0; i < task.length; i++){
    outputStr += getTaskHTMLStr(task[i], i);
  }
  tasksEl.innerHTML = outputStr;
}

// get html for givin task
function getTaskHTMLStr(task, i) {
  return `
    <div class="${task.completed}">
      ${i}: ${task.description}
    </div>
  `
}

// save global tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(task))
}


// load tasks from local storage

function loadTasks() {
  let taskStr = localStorage.getItem('tasks');
  return JSON.parse(taskStr) ?? [];
}