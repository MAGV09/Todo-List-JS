import createProject from '../../utils/projectFactory.js';
import createTask from '../../utils/taskFactory.js';
import {
  getTask,
  addTask,
  completeTask,
  deleteTask,
  editTask,
} from '../tasks.js';
import {
  getProject,
  addProject,
  deleteProject,
  editProject,
  projectsList,
} from '../projects.js';

import { renderTasks, renderProjects } from './render.js';
const addTaskEl = document.querySelector('#add-task-el');
const taskDialog = document.querySelector('#task-dialog');
const taskForm = document.querySelector('#task-form');
const taskTitleInput = document.querySelector('#task-title-in');
const taskDescriptionInput = document.querySelector('#task-description-in');
const taskDateInput = document.querySelector('#task-date-in');
const taskPriorityInput = document.querySelector('#task-priority-in');
const taskListSelector = document.querySelector('#list-select-in');
const taskCancelBtn = document.querySelector('#tasks-cancel-btn');

const addProjectEl = document.querySelector('#add-project-el');
const projectDialog = document.querySelector('#list-dialog');
const projectForm = document.querySelector('#list-form');
const projectTitleInput = document.querySelector('#list-title-input');
const projectCancelBtn = document.querySelector('#lists-cancel-btn');

addProjectEl.addEventListener('click', () => openDialog(projectDialog));
projectForm.addEventListener('submit', handleAddProject);
projectCancelBtn.addEventListener('click', () => {
  closeDialog(projectDialog);
  projectForm.reset();
});
function handleAddProject() {
  const project = createProject(projectTitleInput.value);
  addProject(project);
  renderProjects(projectsList);
  projectForm.reset();
  console.log(projectsList);
}

function createProjectOption(){
  // console.log(taskListSelector);
  taskListSelector.textContent=''
  projectsList.forEach(project=>{
    const option = document.createElement('option')
    console.log(option);
    taskListSelector.appendChild(option)
    option.textContent=project.name
  })
}

addTaskEl.addEventListener('click', ()=>openTaskDialog(taskDialog));
taskForm.addEventListener('submit',handleAddTask)

function handleAddTask() {
  const task = createTask(taskTitleInput.value,taskDescriptionInput.value,taskDateInput.value,taskPriorityInput.value);
  const currentProject = projectsList.find(project=>project.name=taskListSelector.value)
  console.log(currentProject);
  currentProject.tasksList.push(task)
  taskForm.reset()
  renderTasks(currentProject.tasksList)
}
taskCancelBtn.addEventListener('click',()=>{
  closeDialog(taskDialog)
  taskForm.reset()
})

function openDialog(dialog) {
  dialog.showModal();
}
function openTaskDialog(dialog) {
  dialog.showModal();
  createProjectOption()
}
function closeDialog(dialog) {
  dialog.close();
}
// function handleAddElement(dialog,form,handleSubmit){
// openDialog(dialog)
// form.addEventListener(click,handleSubmit)
// }
