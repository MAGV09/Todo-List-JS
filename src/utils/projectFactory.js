function createProject(name) {
  return {
    id: crypto.randomUUID(),
    name,
    tasksList:[],
  };
}

export default createProject;
