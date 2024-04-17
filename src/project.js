import { Task } from "./task";

class Project {
  constructor(title, task, id, deleted) {
    this.title = title;
    this.task = task;
    this.id = id;
    this.deleted = deleted;
  }
}

const projects = [];
let projectCounter = 0;
let taskCounter = 0;

function buildNewTask(project) {
  const task = new Task(
    "Insert a title.",
    "Insert a description...",
    "",
    1,
    "Low",
    "Insert notes...",
    false,
    taskCounter,
    false,
  );

  taskCounter += 1;

  project.task.push(task);
}

function buildNewProject() {
  const project = new Project("Your project.", [], projectCounter, false);

  projectCounter += 1;

  buildNewTask(project);
  projects.push(project);
}

function changeProjectTitle(project) {
  const currentProject = project;
  const newTitle = prompt("Write your project title (1-16 characters).");

  if (newTitle.length > 1 && newTitle.length < 16) {
    currentProject.title = newTitle;
  } else {
    alert("Invalid title. Please try again.");
  }
}

function removeProject(project) {
  const currentProject = project;
  currentProject.deleted = true;
}

buildNewProject();

// eslint-disable-next-line import/prefer-default-export
export {
  buildNewTask,
  buildNewProject,
  changeProjectTitle,
  removeProject,
  projects,
};
