function createTask(name, description = '', dueDate, priority) {
  return {
    id: crypto.randomUUID(),
    name,
    description,
    dueDate,
    priority,
    completed: false,
  };
}

export default createTask