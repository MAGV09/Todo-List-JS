function getTask(taskId, tasksArray) {
  return tasksArray.find((task) => task.id === taskId);
}
function addTask(task, tasksArray) {
  tasksArray.push(task);
}
function completeTask(task) {
  task.completed = task.completed === false ? true : false;
}

function deleteTask(taskId, tasksArray) {
 const index = tasksArray.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasksArray.splice(index, 1);
  }
}

function editTask(task, name, description, dueDate, priority) {
  task.name = name||task.name;
  task.description = description||task.description;
  task.dueDate = dueDate||task.dueDate;
  task.priority = priority||task.priority;
}
export { getTask, addTask, completeTask, deleteTask, editTask };
