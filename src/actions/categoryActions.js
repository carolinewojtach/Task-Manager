import * as types from "../actions/actionTypes";

export function addCategory(category) {
  return {
    type: types.ADD_CATEGORY,
    payload: category
  };
}

export function deleteCategory(id) {
  return {
    type: types.DELETE_CATEGORY,
    payload: id
  };
}
