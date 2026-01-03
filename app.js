function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item";

  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">✔</button>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">✖</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  button.closest("li").remove();
}

function completeTask(button) {
  const task = button.closest("li").querySelector("span");
  task.classList.toggle("completed");
}
