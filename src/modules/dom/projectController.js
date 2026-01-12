import createProject from '../../utils/projectFactory.js';
import {
  getProject,
  addProject,
  deleteProject,
  editProject,
  projectsList,
} from '../projects.js';
import { renderProjects, renderTasks } from './render.js';

const addProjectEl = document.querySelector('#add-project-el');
const projectDialog = document.querySelector('#list-dialog');
const projectForm = document.querySelector('#list-form');
const projectTitleInput = document.querySelector('#list-title-input');
const projectCancelBtn = document.querySelector('#lists-cancel-btn');
const projectsContainer = document.querySelector('#lists-container-el');
const projectTitleEl = document.querySelector('#project-title-el');
addProjectEl.addEventListener('click', () => projectDialog.showModal());

projectForm.addEventListener('submit', handleAddProject);

projectCancelBtn.addEventListener('click', () => {
  projectDialog.close();
  projectForm.reset();
});

projectsContainer.addEventListener('click', (e) =>
  handleProjectSelect(e.target)
);

function handleAddProject() {
  const currentProject = getProject(projectTitleInput.dataset.projectId);
  if (!currentProject) {
    const project = createProject(projectTitleInput.value);
    addProject(project);
    console.log(projectsList);
  } else {
    editProject(currentProject, projectTitleInput.value);
    updateCurrentProjectTitle(projectTitleInput.value);
    projectTitleInput.dataset.projectId = '';
  }

  renderProjects(projectsList);
  projectForm.reset();
}

function handleProjectSelect(element) {
  if (element?.matches('.project')) {
    const currentProject = getProject(element?.dataset.projectId);
    console.log(currentProject);
    updateCurrentProjectTitle(element?.textContent);
    renderTasks(currentProject.tasksList);
  }

  if (element?.matches('.edit-project')) {
    const parent = element.closest('.project-card');
    const project = parent.querySelector('.project');
    const currentProject = getProject(project?.dataset.projectId);
    projectDialog.showModal();
    projectTitleInput.value = currentProject.name;
    projectTitleInput.dataset.projectId = currentProject.id;
  }

  if (element?.matches('.delete-project')) {
    const parent = element.closest('.project-card');
    const project = parent.querySelector('.project');
    const currentProject = getProject(project?.dataset.projectId);
    currentProject.tasksList.length = 0;
    renderTasks(currentProject.tasksList);
    deleteProject(currentProject.id);
    renderProjects(projectsList);
    updateCurrentProjectTitle('')
  }
}
function updateCurrentProjectTitle(title) {
  projectTitleEl.textContent = title;
}
