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

export function editTask() {
  return {
    type: "EDIT_TASK"
  };
}

export function checkTaskDone() {
  return {
    type: "CHECK_TASK_DONE"
  };
}
