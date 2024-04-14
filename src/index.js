import "./style.css";
import {
  changeTaskTitle,
  changeTaskDescription,
  changeTaskNotes,
} from "./task";
import { addTaskToProject, buildNewProject, projects } from "./project";

let currentProject = projects[0];

// index.js will handle DOM manipulation
// DOM manipulation of tasks:

// Displays the contents of our newly built task-div
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

// Allows task text-fields to be customized by users
function allowTaskCustomization(task) {
  const titleContent = document.getElementById(`title-${task.id}`);
  const descriptionContent = document.getElementById(`description-${task.id}`);
  const notesContent = document.getElementById(`notes-${task.id}`);
  const updatedTask = document.getElementById(`task-${task.id}`);

  titleContent.addEventListener("click", () => {
    changeTaskTitle(task);
    showTaskContents(updatedTask, task);
    allowTaskCustomization(task);
  });

  descriptionContent.addEventListener("click", () => {
    changeTaskDescription(task);
    showTaskContents(updatedTask, task);
    allowTaskCustomization(task);
  });

  notesContent.addEventListener("click", () => {
    changeTaskNotes(task);
    showTaskContents(updatedTask, task);
    allowTaskCustomization(task);
  });
}

// Builds and appends a div with our task
function buildTaskContainer(task) {
  const taskContainer = document.getElementById("task-container");
  const addTaskButton = document.getElementById("add-new-task");

  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.setAttribute("id", `task-${task.id}`);

  taskContainer.insertBefore(newTask, addTaskButton);

  const updatedTask = document.getElementById(`task-${task.id}`);

  showTaskContents(updatedTask, task);
}

function displayTask(task) {
  buildTaskContainer(task);
  allowTaskCustomization(task);
}

// The '+' button that adds new tasks inside the current project
// Only needs to be called once
function newTaskButton() {
  const addTaskButton = document.getElementById("add-new-task");
  addTaskButton.addEventListener("click", () => {
    addTaskToProject(currentProject);
    displayTask(currentProject.task[currentProject.task.length - 1]);
  });
}

// Hides the tasks from the previous project
function hideTasks() {
  const taskContainer = document.getElementById("task-container");
  const tasksToClear = taskContainer.getElementsByClassName("task");

  for (let i = tasksToClear.length - 1; i >= 0; i -= 1) {
    const div = tasksToClear[i];
    div.parentNode.removeChild(div);
  }
}

// Shows the tasks from the current project
function showTasks() {
  for (let i = 0; currentProject.task.length > i; i += 1) {
    displayTask(currentProject.task[i]);
  }
}

newTaskButton();
displayTask(currentProject.task[0]);

//
// DOM manipulation of projects:
//

// When a project is clicked, it hides the tasks from the previous project,
// and displays the tasks from the current project
function showProjectTasks(project, projectId) {
  project.addEventListener("click", () => {
    hideTasks();
    currentProject = projects[projectId];
    showTasks();
  });
}

// Builds and appends a div with our new project
function buildProjectContainer(project) {
  const projectContainer = document.getElementById("project-container");
  const addProjectButton = document.getElementById("add-new-project");
  const newProject = document.createElement("div");
  newProject.classList.add("project");
  newProject.setAttribute("id", `project-${project.id}`);

  newProject.innerHTML = `
    <p>${project.title}</p>
  `;

  projectContainer.insertBefore(newProject, addProjectButton);
  showProjectTasks(newProject, project.id);
}

// The '+' button that adds new projects
// Only needs to be called once
function addNewProjectButton() {
  const addProjectButton = document.getElementById("add-new-project");

  addProjectButton.addEventListener("click", () => {
    buildNewProject(); // project.js function
    buildProjectContainer(projects[projects.length - 1]);
  });
}

addNewProjectButton();
buildProjectContainer(currentProject);
