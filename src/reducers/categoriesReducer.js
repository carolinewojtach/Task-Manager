import * as types from "../actions/actionTypes";

const initialState = {
  categories: ["School", "Work", "Cooking", "Shopping", "Holidays"]
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== action.payload
        )
      };

    case types.ADD_CATEGORY: {
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    }
    default:
      return state;
  }
};
export default categoriesReducer;
