import "./style.css";
import { Task, defaultTask } from "./task";
import { Project, defaultProject } from "./project";

function newTask(task) {
  const taskContainer = document.getElementById("tasks");
  const showTask = document.createElement("div");

  showTask.innerHTML = `<h1>${task.title}</h1>`;

  taskContainer.appendChild(showTask);
}

newTask(defaultTask);
