import createIcon from '../../components/ui';
const tasksPage = document.querySelector('#task-hero-el');
const projectsContainer = document.querySelector('#lists-container-el');

function createTaskCard() {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  tasksPage.appendChild(taskContainer);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  taskContainer.appendChild(checkBox);
  checkBox.classList.add('task-checkbox')

  const taskTitleContainer = document.createElement('div');
  taskTitleContainer.classList.add('task-title-container');
  taskContainer.appendChild(taskTitleContainer);

  const taskTitle = document.createElement('p');
  taskTitleContainer.appendChild(taskTitle);

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('task-icon-container');
  taskTitleContainer.appendChild(iconContainer);

  const editTask = createIcon(
    'http://www.w3.org/2000/svg',
    'edit task icon',
    'M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z'
  );
  editTask.classList.add('edit-task');
  iconContainer.appendChild(editTask);

  const deleteTask = createIcon(
    'http://www.w3.org/2000/svg',
    'delete task icon',
    'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z'
  );
  deleteTask.classList.add('delete-task');
  iconContainer.appendChild(deleteTask);

  const taskDescriptionContainer = document.createElement('div');
  taskDescriptionContainer.classList.add('task-description-container');
  taskContainer.appendChild(taskDescriptionContainer);

  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescriptionContainer.appendChild(taskDescription);

  const taskDateContainer = document.createElement('div');
  taskDateContainer.classList.add('date-container');
  taskDescriptionContainer.appendChild(taskDateContainer);

  const taskDate = document.createElement('p');
  taskDateContainer.appendChild(taskDate);

  const taskPriority = document.createElement('p');
  taskDateContainer.appendChild(taskPriority);

  return {taskContainer, taskTitle, taskDescription, taskDate, taskPriority };
}

function createProjectCard() {
  const projectCard = document.createElement('div');
  projectsContainer.appendChild(projectCard);
  projectCard.classList.add('project-card');

  const project = document.createElement('p');
  project.classList.add('project');
  projectCard.appendChild(project);

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('task-icon-container');
  projectCard.appendChild(iconContainer);

  const editProject = createIcon(
    'http://www.w3.org/2000/svg',
    'edit project icon',
    'M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z'
  );
  editProject.classList.add('edit-project');
  iconContainer.appendChild(editProject);

  const deleteProject = createIcon(
    'http://www.w3.org/2000/svg',
    'delete project icon',
    'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z'
  );
  deleteProject.classList.add('delete-project');
  iconContainer.appendChild(deleteProject);

  return project;
}

function renderTasks(tasks) {
  tasksPage.textContent = '';
  tasks.tasksList?.forEach((task) => {
    const taskCard = createTaskCard();
    taskCard.taskTitle.textContent = task.name;
    taskCard.taskDate.textContent = task.dueDate;
    taskCard.taskPriority.textContent = task.priority;
    taskCard.taskContainer.dataset.taskId = task.id
    taskCard.taskContainer.dataset.projectId = tasks.id
    task.description
      ? (taskCard.taskDescription.textContent = task.description)
      : taskCard.taskDescription.remove();
      
  });
}

function renderProjects(projectArr) {
  projectsContainer.textContent = '';

  projectArr.forEach((project) => {
    const projectTitle = createProjectCard();
    projectTitle.textContent = project.name;
    projectTitle.dataset.projectId = project.id;
  });
}

export { renderTasks, renderProjects };
