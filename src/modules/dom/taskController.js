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
const projectTitleEl = document.querySelector('#project-title-el')

addTaskEl.addEventListener('click', () => openTaskDialog(taskDialog));
taskForm.addEventListener('submit', handleAddTask);

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
  projectTitleEl.textContent=currentProject.name
  renderTasks(currentProject.tasksList);
  taskForm.reset();
}

taskCancelBtn.addEventListener('click', () => {
  taskDialog.close();
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
    option.setAttribute('value',project.id)
  });
}
