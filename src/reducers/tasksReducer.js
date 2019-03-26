const initialState = {
  // tasksList: ["make presentation", "buy milk, eggs"],
  tasksList: [
    {
      id: 1,
      title: "make presentation",
      text: "add photos",
      category: "Active"
    },
    {
      id: 2,
      title: "buy milk, eggs",
      text: "to make cake",
      category: "Active"
    }
  ],
  taskCounter: 44
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS": {
      console.log("object");
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
    case "INCREMENT": {
      return {
        ...state,
        taskCounter: state.taskCounter + 1
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        taskCounter: state.taskCounter - 1
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
