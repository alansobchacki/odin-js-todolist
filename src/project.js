// Your todo list should have projects or separate lists of todos.
// When a user first opens the app, there should be some sort of ‘default’ project to which
// all of their todos are put.
// Users should be able to create new projects and choose which project their todos go into.

import { Task } from "./task";

class Project {
  constructor(title, task, id) {
    this.title = title;
    this.task = task;
    this.id = id;
  }
}

const projects = [];
let projectCounter = 0;
let taskCounter = 0;

function addTaskToProject(project) {
  const task = new Task(
    "Your task.",
    "Description...",
    "",
    1,
    "Notes...",
    false,
    taskCounter,
  );

  taskCounter += 1;

  project.task.push(task);
}

function buildNewProject() {
  const project = new Project("Your project.", [], projectCounter);

  projectCounter += 1;

  addTaskToProject(project);
  projects.push(project);
}

buildNewProject();

// eslint-disable-next-line import/prefer-default-export
export { addTaskToProject, buildNewProject, projects };
