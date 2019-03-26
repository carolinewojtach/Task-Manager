import { combineReducers } from "redux";

import tasks from "./tasksReducer";
import categories from "./categoriesReducer";

const reducer = combineReducers({
  tasks,
  categories
});
export default reducer;
