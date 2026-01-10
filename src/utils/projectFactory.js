function createProject(name, tasksList = []) {
  return {
    id: crypto.randomUUID(),
    name,
    tasksList,
    getProjectId() {
      return this.id;
    },
  };
}

export default createProject;
