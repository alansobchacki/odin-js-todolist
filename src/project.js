// Your todo list should have projects or separate lists of todos.
// When a user first opens the app, there should be some sort of ‘default’ project to which
// all of their todos are put.
// Users should be able to create new projects and choose which project their todos go into.

import { Task } from "./task";

class Project {
  constructor(title, task) {
    this.title = title;
    this.task = task;
  }
}

let taskCounter = 0;

function addTaskToProject(project) {
  const defaultTask = new Task(
    "Your task.",
    "Description...",
    "",
    1,
    "Notes...",
    false,
    taskCounter,
  );

  taskCounter += 1;

  project.task.push(defaultTask);
}

const defaultProject = new Project("Your project title", []);

addTaskToProject(defaultProject);
// addTaskToProject(defaultProject);

// eslint-disable-next-line import/prefer-default-export
export { defaultProject };
