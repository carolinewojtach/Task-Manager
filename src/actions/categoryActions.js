export function addCategory(category) {
  return {
    type: "ADD_CATEGORY",
    payload: category
  };
}

export function deleteCategory(id) {
  return {
    type: "DELETE_CATEGORY",
    payload: id
  };
}
