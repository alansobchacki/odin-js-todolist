import "./style.css";
import {
  changeTaskTitle,
  changeTaskDescription,
  changeTaskNotes,
} from "./task";
import { defaultProject } from "./project";

// index.js will handle DOM manipulation
// DOM manipulation of tasks:

function updateTaskContents(task) {
  const updatedTask = document.getElementById(`task-${task.id}`);

  // eslint-disable-next-line no-use-before-define
  showTaskContents(updatedTask, task);
}

function customizeTitle(task) {
  const titleContent = document.getElementById(`title-${task.id}`);

  titleContent.addEventListener("click", () => {
    changeTaskTitle(task);
    updateTaskContents(task);
    customizeTitle(task);
  });
}

function customizeDescription(task) {
  const titleContent = document.getElementById(`description-${task.id}`);

  titleContent.addEventListener("click", () => {
    changeTaskDescription(task);
    updateTaskContents(task);
    customizeDescription(task);
  });
}

function customizeNotes(task) {
  const titleContent = document.getElementById(`notes-${task.id}`);

  titleContent.addEventListener("click", () => {
    changeTaskNotes(task);
    updateTaskContents(task);
    customizeDescription(task);
  });
}

// Final step - it allows all text fields in a task to be rewritten
function allowTaskCustomization(task) {
  customizeTitle(task);
  customizeDescription(task);
  customizeNotes(task);
}

// Second step - it displays the contents of our newly built task-div
function showTaskContents(taskContainer, task) {
  const dateInput = document.createElement("input");
  dateInput.type = "date";

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";

  const currentTask = taskContainer;
  currentTask.innerHTML = `
  <h1 id="${`title-${task.id}`}">${task.title}</h1>
  ${checkboxInput.outerHTML};
  <p id="${`description-${task.id}`}" class="task-description">${task.description}</p>
  <p id="${`notes-${task.id}`}">${task.notes}</p>
  <label>Due Date:</label>
  ${dateInput.outerHTML};
  <p>Priority:${task.priority}<p>
`;
}

// First step - it builds and appends a div with our task
function buildTaskContainer(task) {
  const taskContainer = document.getElementById("task-container");
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.setAttribute("id", `task-${task.id}`);
  taskContainer.appendChild(newTask);

  const updatedTask = document.getElementById(`task-${task.id}`);

  showTaskContents(updatedTask, task);
}

// Our task creation process is triggered here
function addNewTask(task) {
  buildTaskContainer(task);
  allowTaskCustomization(task);
}

// DOM manipulation of projects:

function displayProject(project) {
  const projectContainer = document.getElementById("project-container");
  const newProject = document.createElement("div");
  newProject.classList.add("project");

  newProject.innerHTML = `
    <p>${project.title}</p>
  `;

  projectContainer.appendChild(newProject);
}

addNewTask(defaultProject.task[0]);
displayProject(defaultProject);
