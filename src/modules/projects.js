const projectsList = []
function getProject(projectId){
   return projectsList.find(project=>project.id===projectId)
}
function addProject(project){
projectsList.push(project)
}
function editProject(project,name){
project.name = name
}
function deleteProject(projectId){
    projectsList.filter(project=>project.id!==projectId)
}
export {getProject,addProject,editProject,deleteProject}