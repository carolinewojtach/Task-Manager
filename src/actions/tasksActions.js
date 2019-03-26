export function addTask(task) {
  return {
    type: "ADD_TASK",
    payload: task
  };
}

export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: id
  };
}

export function fetchTasks() {
  return {
    type: "FETCH_TASKS"
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

export function increment() {
  return {
    type: "INCREMENT"
  };
}
