const initialState = {
  categories: ["Active", "In Progress", "Done", "New category"]
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== action.payload
        )
      };

    case "ADD_CATEGORY": {
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