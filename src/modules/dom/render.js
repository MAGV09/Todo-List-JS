import createTaskCard from '../../components/tasksCard';
import createProjectCard from '../../components/projectsCard';

const tasksPage = document.querySelector('#task-hero-el');
const projectsContainer = document.querySelector('#lists-container-el');

function renderTasks(tasks) {
  tasksPage.textContent = '';
  tasks.tasksList?.forEach((task) => {
    const taskCard = createTaskCard();
    taskCard.taskTitle.textContent = task.name;
    taskCard.taskDate.textContent = task.dueDate;
    taskCard.taskPriority.textContent = task.priority;
    taskCard.taskContainer.dataset.taskId = task.id;
    taskCard.taskContainer.dataset.projectId = tasks.id;
    task.description
      ? (taskCard.taskDescription.textContent = task.description)
      : taskCard.taskDescription.remove();
    if (task.completed) {
      const title = taskCard.taskContainer.querySelector(
        '.task-title-container'
      );
      title.classList.add('completed');
      taskCard.checkBox.checked = true;
    }
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
