const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");
  const taskLabel = document.createElement("span");
  taskLabel.className = "task-text";
  taskLabel.textContent = taskText;

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "complete-button";
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(removeButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskInput.focus();
}