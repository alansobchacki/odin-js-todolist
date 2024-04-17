// Brainstorm what kind of properties your todo-items are going to have.
// At a minimum they should have a title, description, dueDate and priority.
// You might also want to include notes or even a checklist.

class Task {
  constructor(
    title,
    description,
    dueDate,
    priorityCounter,
    priority,
    notes,
    checklist,
    id,
    deleted,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityCounter = priorityCounter;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.id = id;
    this.deleted = deleted;
  }
}

function changeTaskTitle(task) {
  const currentTask = task;
  const newTitle = prompt("Write your task title (1-16 characters).");

  if (newTitle.length > 1 && newTitle.length < 16) {
    currentTask.title = newTitle;
  } else {
    alert("Invalid title. Please try again.");
  }
}

function changeTaskDescription(task) {
  const currentTask = task;
  const newDescription = prompt("Write your description (1-100 characters).");

  if (newDescription.length > 1 && newDescription.length < 100) {
    currentTask.description = newDescription;
  } else {
    alert("Invalid description. Please try again.");
  }
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

function deleteTask(task) {
  const currentTask = task;
  currentTask.deleted = true;
}

function updateTaskPriority(task) {
  const currentTask = task;

  switch (task.priorityCounter) {
    case 1:
      currentTask.priority = "Low";
      break;
    case 2:
      currentTask.priority = "Medium";
      break;
    case 3:
      currentTask.priority = "High";
      break;
    default:
      currentTask.priority = "Low";
      break;
  }
}

function changeTaskPriority(task, modifier) {
  const currentTask = task;
  currentTask.priorityCounter += modifier;

  if (currentTask.priorityCounter > 3) {
    currentTask.priorityCounter = 3;
  } else if (currentTask.priorityCounter < 1) {
    currentTask.priorityCounter = 1;
  }

  updateTaskPriority(task);
}

export {
  Task,
  changeTaskTitle,
  changeTaskDescription,
  changeTaskNotes,
  changeTaskPriority,
  deleteTask,
};
