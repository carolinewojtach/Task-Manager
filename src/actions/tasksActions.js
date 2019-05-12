import * as types from "./actionTypes";

export function addTask(task) {
  return {
    type: types.ADD_TASK,
    payload: task
  };
}

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    payload: id
  };
}

export function fetchTasks() {
  return {
    type: types.FETCH_TASKS
  };
}

export function editTask(task) {
  return {
    type: types.EDIT_TASK,
    payload: task
  };
}

export function checkTaskDone(id) {
  return {
    type: types.CHECK_TASK_DONE,
    payload: id
  };
}
