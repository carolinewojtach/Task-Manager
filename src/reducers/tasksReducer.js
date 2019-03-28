const initialState = [
  {
    id: "id-1",
    text: "make presentation",
    category: "School",
    completed: true
  },
  {
    id: "id-2",
    text: "buy milk, eggs",
    category: "Shopping",
    completed: false
  }
];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS": {
      return state;
    }

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "ADD_TASK": {
      return [...state, action.payload];
    }

    case "EDIT_TASK":
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              text: action.text,
              category: action.category,
              completed: action.completed
            }
          : task
      );

    case "CHECK_TASK_DONE":
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      );

    default:
      return state;
  }
};

export default tasksReducer;
