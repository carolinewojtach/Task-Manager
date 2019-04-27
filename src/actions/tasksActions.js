import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  EDIT_TASK,
  CHECK_TASK_DONE
} from "./actionTypes";

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: id
  };
}

export function fetchTasks() {
  return {
    type: FETCH_TASKS
  };
}

export function editTask(task) {
  return {
    type: EDIT_TASK,
    payload: task
  };
}

export function checkTaskDone(id) {
  return {
    type: CHECK_TASK_DONE,
    payload: id
  };
}
