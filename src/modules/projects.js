let projectsList = [];
function getProject(projectTitle) {
  return projectsList.find((project) => project.name === projectTitle);
}
function addProject(project) {
  projectsList.push(project);
}
function editProject(project, name) {
  project.name = name;
}
function deleteProject(projectId) {
  projectsList = projectsList.filter((project) => project.id !== projectId);
}
export { getProject, addProject, editProject, deleteProject,projectsList };
