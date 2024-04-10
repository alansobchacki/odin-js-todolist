// Your todo list should have projects or separate lists of todos.
// When a user first opens the app, there should be some sort of ‘default’ project to which
// all of their todos are put.
// Users should be able to create new projects and choose which project their todos go into.

import { Task, defaultTask } from "./task";

class Project {
  constructor(title, task) {
    this.title = title;
    this.task = task;
  }
}

const defaultProject = new Project("Your project title", [defaultTask]);

export { Project, defaultProject };
