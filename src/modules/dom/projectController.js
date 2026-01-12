import createProject from '../../utils/projectFactory.js';
import {
  getProject,
  addProject,
  deleteProject,
  editProject,
  projectsList,
} from '../projects.js';
import { renderProjects,renderTasks } from './render.js';

const addProjectEl = document.querySelector('#add-project-el');
const projectDialog = document.querySelector('#list-dialog');
const projectForm = document.querySelector('#list-form');
const projectTitleInput = document.querySelector('#list-title-input');
const projectCancelBtn = document.querySelector('#lists-cancel-btn');
const projectsContainer = document.querySelector('#lists-container-el');
const projectTitleEl = document.querySelector('#project-title-el')
addProjectEl.addEventListener('click', () => projectDialog.showModal());

projectForm.addEventListener('submit', handleAddProject);

projectCancelBtn.addEventListener('click', () => {
  projectDialog.close()
  projectForm.reset();
});

projectsContainer.addEventListener('click',(e)=>handleProjectSelect(e.target))

function handleAddProject() {
  const project = createProject(projectTitleInput.value);
  addProject(project);
  renderProjects(projectsList);
  projectForm.reset();
  console.log(projectsList);
}

function handleProjectSelect(element){
if(element?.matches('.project')){
    const currentProject = getProject(element?.textContent)
    projectTitleEl.textContent= element?.textContent
    renderTasks(currentProject.tasksList)
}
}
