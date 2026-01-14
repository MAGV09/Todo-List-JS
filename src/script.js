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
import './modules/dom/projectController.js';
import './modules/dom/taskController.js';
import { getStoredLists, storeLists } from './modules/storage.js';
const project1 = createProject('Project1');

function init() {
  if (!localStorage.getItem('lists')) {
    addProject(project1);
    const task1 = createTask(
      'Finish the Assignment',
      'Math Assignment',
      '2026/01/14',
      'Medium'
    );
    const task2 = createTask('Project', undefined, '2026/01/14', 'High');
    addTask(task1, project1.tasksList);
    addTask(task2, project1.tasksList);

    renderProjects(projectsList);
    renderTasks(project1.tasksList);
    storeLists();
  } else {
    getStoredLists();
    renderProjects(projectsList);
  }
}

init();
