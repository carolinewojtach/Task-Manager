import { combineReducers } from "redux";

import { tasksReducer } from "./tasksReducer";
import { categoriesReducer } from "./categoriesReducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  categories: categoriesReducer
});
export default reducer;
