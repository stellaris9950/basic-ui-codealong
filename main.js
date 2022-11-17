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
  displayAll()
}

function toggleTask() {
  console.log('Toggle Task');
}

function removeTask() {
  console.log('Remove Task');
}

function clearAll() {
  console.log('Clear All');
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
    <div>
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
  return JSON.parse(taskStr);
}