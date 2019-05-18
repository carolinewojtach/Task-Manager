import { CATEGORY_ACTION_TYPES as types } from "../actions/actionTypes";

export const addCategory = category => ({
  type: types.ADD_CATEGORY,
  payload: category
});

export const deleteCategory = id => ({
  type: types.DELETE_CATEGORY,
  payload: id
});
