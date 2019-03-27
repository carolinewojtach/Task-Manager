const initialState = [
  {
    id: 1,
    text: "make presentation",
    category: "School",
    status: "Active"
  },
  {
    id: 2,
    text: "buy milk, eggs",
    category: "Shopping",
    status: "Done"
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

    case "EDIT_TASK": {
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              text: action.text,
              category: action.category,
              status: action.status
            }
          : task
      );
    }

    case "CHECK_TASK_DONE": {
      console.log(action.payload);
      const task2 = state.filter(task =>
        task.id === action.payload
          ? {
              ...task,
              status: "Done"
            }
          : task
      );
      return [...state, task2];
    }
    default:
      return state;
  }
};

export default tasksReducer;
