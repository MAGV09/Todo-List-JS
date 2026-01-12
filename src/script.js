//import { mdiChevronDown, mdiPlus, mdiPlusCircle } from '@mdi/js';
import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/style.css';
import createProject from './utils/projectFactory';
import createTask from './utils/taskFactory';
import {
  getTask,
  addTask,
  completeTask,
  deleteTask,
  editTask,
} from './modules/tasks';
import {
  getProject,
  addProject,
  deleteProject,
  editProject,
  projectsList,
} from './modules/projects';

import { renderTasks, renderProjects } from './modules/dom/render';
import './modules/dom/projectController.js'
import './modules/dom/taskController.js'
const addProjectEl = document.querySelector('#add-project-el');
const addTaskEl = document.querySelector('#add-task-el');
const project1 = createProject('project1');

// addProjectEl.addEventListener('click');
addProject(project1);
const task1 = createTask(
  'finish the project',
  'gotta do this clean',
  '09/01/2026',
  'medium'
);
const task2 = createTask('project', undefined, '010/29/2026', 'high');
addTask(task1, project1.tasksList);
addTask(task2, project1.tasksList);

// console.log(project1);

// function displayProjects(projectsArray) {
//   projectsArray.forEach((project) => {
//     console.log({ projectName: project.name, tasksList: project.tasksList });
//   });
// }
// displayProjects(projectsList)
renderProjects(projectsList);
renderTasks(project1.tasksList);
// createTaskCard()
