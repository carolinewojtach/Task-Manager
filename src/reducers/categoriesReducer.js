import { CATEGORY_ACTION_TYPES as types } from "../actions/actionTypes";

const categories = ["School", "Work", "Cooking", "Shopping", "Holidays"];

export const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case types.DELETE_CATEGORY:
      return [
        ...state,
        state.filter(category => category.id !== action.payload)
      ];

    case types.ADD_CATEGORY: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
