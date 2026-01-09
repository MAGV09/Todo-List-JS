
//add tasks to projects
//complete tasks
//delete tasks
//edit tasks
const tasksList = [];
function getTask(taskId,tasksArray) {
  return tasksArray.find((task) => (task.id = taskId));
}
function addTask(task,tasksArray) {
  tasksArray.push(task);
}
function completeTask(task) {
  task.completed = true;
}

function deleteTask(taskId,tasksArray) {
    tasksArray.filter(task=>task.id!==taskId)
}

function editTask(task,name, description  , dueDate, priority){
    task.name = name
    task.description=description
    task.dueDate=dueDate
    task.priority=priority
}
export {getTask,addTask,completeTask,deleteTask,editTask}