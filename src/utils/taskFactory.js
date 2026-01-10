function createTask(name, description = '', dueDate, priority, subTasks = []) {
  return {
    id: crypto.randomUUID(),
    name,
    description,
    dueDate,
    priority,
    subTasks,
    completed: false,
     getTaskId() {
      return this.id;
    }
  };
}

export default createTask