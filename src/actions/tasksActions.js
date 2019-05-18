import { TASK_ACTION_TYPES as types } from "./actionTypes";

export const addTask = task => ({
  type: types.ADD_TASK,
  payload: task
});

export const deleteTask = id => ({
  type: types.DELETE_TASK,
  payload: id
});

export const fetchTasks = () => ({
  type: types.FETCH_TASKS
});

export const editTask = task => ({
  type: types.EDIT_TASK,
  payload: task
});

export const checkTaskDone = id => ({
  type: types.CHECK_TASK_DONE,
  payload: id
});
