function createTask(name, description = '', dueDate, prioity) {
  return {
    id: crypto.randomUUID(),
    name,
    description,
    dueDate,
    prioity,
    completed: false,
  };
}

export default createTask