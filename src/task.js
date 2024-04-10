// Brainstorm what kind of properties your todo-items are going to have.
// At a minimum they should have a title, description, dueDate and priority.
// You might also want to include notes or even a checklist.

class Task {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

const defaultTask = new Task(
  "Your task title.",
  "Your task description.",
  "01/01/2024",
  1,
  "Your task notes.",
  false,
);

function changeTaskTitle(task) {
  const currentTask = task;
  const newTitle = prompt("Write your task title (1-24 characters).");

  if (newTitle.length > 1 && newTitle.length < 24) {
    currentTask.title = newTitle;
  } else {
    alert("Invalid title. Please try again.");
  }
}

function changeTaskDescription(task) {
  const currentTask = task;
  const newDescription = prompt("Write your description (1-200 characters).");

  if (newDescription.length > 1 && newDescription.length < 200) {
    currentTask.description = newDescription;
  } else {
    alert("Invalid description. Please try again.");
  }
}

function changeTaskPriority(task) {
  // to be written
}

function changeTaskDueDate(task) {
  // to be written
}

function changeTaskNotes(task) {
  const currentTask = task;
  const newNotes = prompt("Write your notes (1-40 characters).");

  if (newNotes.length > 1 && newNotes.length < 40) {
    currentTask.notes = newNotes;
  } else {
    alert("Invalid notes. Please try again.");
  }
}

function changeTaskChecklist(task) {
  const currentTask = task;
  currentTask.checklist = !currentTask.checklist;
}

export { Task, defaultTask };