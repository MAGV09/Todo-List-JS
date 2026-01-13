import createTask from '../../utils/taskFactory.js';
import {
  getTask,
  addTask,
  completeTask,
  deleteTask,
  editTask,
} from '../tasks.js';
import { projectsList, getProject } from '../projects.js';
import { renderTasks } from './render.js';

const addTaskEl = document.querySelector('#add-task-el');
const taskDialog = document.querySelector('#task-dialog');
const taskForm = document.querySelector('#task-form');
const taskTitleInput = document.querySelector('#task-title-in');
const taskDescriptionInput = document.querySelector('#task-description-in');
const taskDateInput = document.querySelector('#task-date-in');
const taskPriorityInput = document.querySelector('#task-priority-in');
const taskListSelector = document.querySelector('#list-select-in');
const taskCancelBtn = document.querySelector('#tasks-cancel-btn');
const projectTitleEl = document.querySelector('#project-title-el');
const taskHeroEl = document.querySelector('#task-hero-el');
let editMode = false;

addTaskEl.addEventListener('click', () => openTaskDialog(taskDialog));
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  taskDialog.close()
  if (editMode) {
    handleEditTask()
  } else {
    handleAddTask();
  }
});
function handleEditTask() {
  const currentProject = getProject(taskTitleInput.dataset.projectId);
  const currentTask = getTask(
    taskTitleInput.dataset.taskId,
    currentProject.tasksList
  );
  currentTask.name = taskTitleInput.value;
  currentTask.description = taskDescriptionInput.value;
  currentTask.dueDate = taskDateInput.value;
  currentTask.priority = taskPriorityInput.value;
  renderTasks(currentProject);
  taskListSelector.disabled=false
  taskForm.reset();
  editMode=false
}
function handleAddTask() {
  const task = createTask(
    taskTitleInput.value,
    taskDescriptionInput.value,
    taskDateInput.value,
    taskPriorityInput.value
  );
  const currentProject = getProject(taskListSelector.value);
  console.log(currentProject);
  addTask(task, currentProject.tasksList);
  projectTitleEl.textContent = currentProject.name;
  renderTasks(currentProject);
  taskForm.reset();
}

taskCancelBtn.addEventListener('click', () => {
  taskDialog.close();
  taskListSelector.disabled=false
  editMode=false
  taskForm.reset();
});

function openTaskDialog(dialog) {
  dialog.showModal();
  createProjectsOption();
}

function createProjectsOption() {
  taskListSelector.textContent = '';
  projectsList.forEach((project) => {
    const option = document.createElement('option');
    taskListSelector.appendChild(option);
    option.textContent = project.name;
    option.setAttribute('value', project.id);
  });
}
taskHeroEl.addEventListener('click', (e) => handleHeroClick(e.target));
function handleHeroClick(element) {
  const taskContainer = element?.closest('.task-container');
  const currentProject = getProject(taskContainer.dataset.projectId);
  const currentTask = getTask(
    taskContainer.dataset.taskId,
    currentProject.tasksList
  );
  if (element?.matches('.edit-task')) {
    editMode = true;
    taskDialog.showModal();
    taskListSelector.disabled = true
    taskTitleInput.value = currentTask.name;
    taskTitleInput.dataset.taskId = currentTask.id;
    taskTitleInput.dataset.projectId = currentProject.id;
    taskDescriptionInput.value = currentTask.description;
    taskDateInput.value = currentTask.dueDate;
    taskPriorityInput.value = currentTask.priority;
  }
  if(element?.matches('.delete-task')){
    console.log(currentProject);
    console.log(currentTask);
    deleteTask(currentTask.id,currentProject.tasksList)
    renderTasks(currentProject)
  }
  if(element?.matches('.task-checkbox')){
    currentTask.completed= currentTask.completed===false?true:false
    const title = taskContainer.querySelector('.task-title-container')
    title.classList.toggle('completed')
  }
}

//   if (element?.matches('.delete-project')) {
//     currentProject.tasksList.length = 0;
//     renderTasks(currentProject.tasksList);
//     deleteProject(currentProject.id);
//     renderProjects(projectsList);
//     updateCurrentProjectTitle('');
//   }
