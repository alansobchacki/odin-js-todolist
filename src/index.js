import "./style.css";
import {
  changeTaskTitle,
  changeTaskDescription,
  changeTaskNotes,
  changeTaskPriority,
  deleteTask,
} from "./task";
import {
  buildNewTask,
  buildNewProject,
  changeProjectTitle,
  removeProject,
  projects,
} from "./project";

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
    <div id="title-${task.id}" class="task-title">
      <h1>${task.title}</h1>
    </div>
    <div class="task-checkbox">
      <id="checkbox-${task.id}"${checkboxInput.outerHTML}>
    </div>
    <div id="description-${task.id}" class="task-description"> 
      <p>${task.description}</p>
    </div>
    <div id="notes-${task.id}" class="task-notes">
      <p><i>${task.notes}</i></p>
    </div>
    <div class="task-label">
      <p>Due Date:</p>
    </div>
    <div class="task-due-date">
      ${dateInput.outerHTML}
    </div>
    <div class="task-priority"> 
      <p>Priority: ${task.priority}</p>
    </div>
    <div class="task-priority-buttons">
      <button id="task-add-button-${task.id}">+</button>
      <button id="task-subtract-button-${task.id}">-</button>
    </div>
    <div id="delete-task-${task.id}" class="task-button">
      <button class="remove-button"></button>
    </div>
  `;
}

// Helper functions for allowTaskCustomization
function modifiableTaskField(field, task, changeFunction) {
  const updatedTask = document.getElementById(`task-${task.id}`);

  field.addEventListener("click", () => {
    changeFunction(task);
    showTaskContents(updatedTask, task);
    allowTaskCustomization(task);
  });
}

function deletableTask(button, task) {
  const updatedTask = document.getElementById(`task-${task.id}`);

  button.addEventListener("click", () => {
    deleteTask(task);
    updatedTask.remove();
  });
}

function modifiablePriority(button, task, modifier) {
  const updatedTask = document.getElementById(`task-${task.id}`);

  button.addEventListener("click", () => {
    changeTaskPriority(task, modifier);
    showTaskContents(updatedTask, task);
    allowTaskCustomization(task);
  });
}

// Allows tasks to be customized by users
function allowTaskCustomization(task) {
  // text fields
  const titleContent = document.getElementById(`title-${task.id}`);
  const descriptionContent = document.getElementById(`description-${task.id}`);
  const notesContent = document.getElementById(`notes-${task.id}`);

  // task buttons
  const increaseTaskPriorityButton = document.getElementById(
    `task-add-button-${task.id}`,
  );
  const decreaseTaskPriorityButton = document.getElementById(
    `task-subtract-button-${task.id}`,
  );
  const deleteTaskButton = document.getElementById(`delete-task-${task.id}`);

  modifiableTaskField(titleContent, task, changeTaskTitle);
  modifiableTaskField(descriptionContent, task, changeTaskDescription);
  modifiableTaskField(notesContent, task, changeTaskNotes);
  modifiablePriority(increaseTaskPriorityButton, task, 1);
  modifiablePriority(decreaseTaskPriorityButton, task, -1);
  deletableTask(deleteTaskButton, task);
}

// Builds and appends a div with our task
function buildTaskContainer(task) {
  const taskContainer = document.getElementById("task-container");
  const addTaskButton = document.getElementById("add-new-task");

  if (task.deleted === false) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.setAttribute("id", `task-${task.id}`);

    taskContainer.insertBefore(newTask, addTaskButton);

    const updatedTask = document.getElementById(`task-${task.id}`);

    showTaskContents(updatedTask, task);
    allowTaskCustomization(task);
  }
}

// The '+' button that adds new tasks inside the current project
function newTaskButton() {
  const addTaskButton = document.getElementById("add-new-task");
  addTaskButton.addEventListener("click", () => {
    if (currentProject.deleted === false) {
      buildNewTask(currentProject);
      buildTaskContainer(currentProject.task[currentProject.task.length - 1]);
    }
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
    buildTaskContainer(currentProject.task[i]);
  }
}

newTaskButton();
buildTaskContainer(currentProject.task[0]);

//
// DOM manipulation of projects:
//

// Helper function for highlightProject
function removeHighlights() {
  const highlights = document.querySelectorAll("div.project-chosen");

  highlights.forEach((element) => {
    element.classList.remove("project-chosen");
  });
}

// Gives visual indicators to which project is currently selected
function highlightProject(project) {
  removeHighlights();
  const projectContainer = document.getElementById(`project-${project.id}`);

  projectContainer.classList.add("project-chosen");
}

// Hides tasks from previous project, sets the clicked project as current project,
// and shows tasks from the new current project
function showProjectContents(project, projectId) {
  const projectTitle = document.getElementById(`project-title-${projectId}`);

  projectTitle.addEventListener("click", () => {
    hideTasks();
    currentProject = projects[projectId];
    highlightProject(project);
    showTasks();
  });
}

// Shows a project's title and customizing buttons
function showProjectContainer(projectContainer, project) {
  const container = projectContainer;

  container.innerHTML = `
  <p id="project-title-${project.id}">${project.title}</p>
  <button class="edit-button" id="edit-${project.id}"></button>
  <button class="remove-button" id="remove-${project.id}"></button>
`;
}

// Adds buttons that allow users to customize projects
function allowProjectCustomization(project) {
  const projectContainer = document.getElementById(`project-${project.id}`);
  const editProjectNameButton = document.getElementById(`edit-${project.id}`);
  const deleteProjectButton = document.getElementById(`remove-${project.id}`);

  editProjectNameButton.addEventListener("click", () => {
    changeProjectTitle(project);
    showProjectContainer(projectContainer, project);
    showProjectContents(project, project.id);
    allowProjectCustomization(project);
  });

  deleteProjectButton.addEventListener("click", () => {
    removeProject(project);
    projectContainer.remove();
    hideTasks();
  });
}

// Builds and appends a div with our new project
function buildProjectContainer(project) {
  const projectContainer = document.getElementById("project-container");
  const addProjectButton = document.getElementById("add-new-project");

  const newProject = document.createElement("div");
  newProject.classList.add("project");
  newProject.setAttribute("id", `project-${project.id}`);

  projectContainer.insertBefore(newProject, addProjectButton);
  showProjectContainer(newProject, project);
  showProjectContents(project, project.id);
  allowProjectCustomization(project);
}

// The '+' button that adds new projects
function newProjectButton() {
  const addProjectButton = document.getElementById("add-new-project");

  addProjectButton.addEventListener("click", () => {
    buildNewProject(); // project.js function
    buildProjectContainer(projects[projects.length - 1]);
  });
}

newProjectButton();
buildProjectContainer(currentProject);
