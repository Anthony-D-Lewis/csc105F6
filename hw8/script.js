const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const taskList = document.getElementById("task-list");

const tasks = [
  { text: "Finish homework", completed: false, element: null },
  { text: "Review class notes", completed: false, element: null },
  { text: "Read a book", completed: false, element: null },
  { text: "Go for a walk", completed: false, element: null }
];

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterTasks();
});

function renderTask(task) {
  const taskItem = document.createElement("li");
  taskItem.classList.toggle("completed", task.completed);

  const taskLabel = document.createElement("span");
  taskLabel.className = "task-text";
  taskLabel.textContent = task.text;

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "complete-button";
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function () {
    task.completed = !task.completed;
    taskItem.classList.toggle("completed", task.completed);
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }
    taskItem.remove();
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(removeButton);
  task.element = taskItem;
  taskList.appendChild(taskItem);
}

function filterTasks() {
  const searchedText = searchInput.value.toLowerCase();

  tasks.forEach(function (task) {
    const matchesSearch = task.text.toLowerCase().includes(searchedText);
    task.element.classList.toggle("hidden", !matchesSearch);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const task = { text: taskText, completed: false, element: null };
  tasks.push(task);
  renderTask(task);
  filterTasks();

  taskInput.value = "";
  taskInput.focus();
}

tasks.forEach(renderTask);