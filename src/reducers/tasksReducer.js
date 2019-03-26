const initialState = {
  tasksList: [
    {
      id: 1,
      text: "make presentation",
      category: "School"
    },
    {
      id: 2,
      text: "buy milk, eggs",
      category: "Shopping"
    }
  ],
  taskCounter: 2
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS": {
      return state.tasksList;
    }
    case "DELETE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.filter(task => task.id !== action.payload),
        taskCounter: state.taskCounter - 1
      };

    case "ADD_TASK": {
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload],
        taskCounter: state.taskCounter + 1
      };
    }
    case "EDIT_TASK": {
      return {
        ...state
        // ...........
      };
    }

    case "CHECK_TASK_DONE": {
      return {
        ...state
        // ...........
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
