import * as types from "../actions/actionTypes";

const initialState = [
  // {
  //   id: "id-1",
  //   text: "make presentation",
  //   category: "School",
  //   completed: true
  // },
  // {
  //   id: "id-2",
  //   text: "buy milk, eggs",
  //   category: "Shopping",
  //   completed: false
  // },
  {
    id: "id-3",
    text: "make presentation",
    category: "School",
    completed: true
  },
  {
    id: "id-4",
    text: "buy milk, eggs",
    category: "Shopping",
    completed: false
  },
  {
    id: "id-5",
    text: "make presentation",
    category: "School",
    completed: true
  },
  {
    id: "id-6",
    text: "buy milk, eggs",
    category: "Shopping",
    completed: false
  },
  {
    id: "id-7",
    text: "make presentation",
    category: "School",
    completed: true
  },
  {
    id: "id-8",
    text: "buy milk, eggs",
    category: "Shopping",
    completed: false
  },
  {
    id: "id-9",
    text: "make presentation",
    category: "Work",
    completed: true
  },
  {
    id: "id-10",
    text: "buy milk, eggs",
    category: "Cooking",
    completed: false
  }
];

const randomId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS: {
      return state;
    }

    case types.DELETE_TASK:
      return state.filter(task => task.id !== action.payload);

    case types.ADD_TASK: {
      let task = { ...action.payload };
      task.id = randomId();
      task.completed = false;
      return [...state, task];
    }

    case types.EDIT_TASK: {
      let task = { ...action.payload };
      return state.map(t =>
        t.id === task.id
          ? {
              ...t,
              text: task.text,
              category: task.category
            }
          : t
      );
    }
    case types.CHECK_TASK_DONE:
      return state.map(task =>
        task.id === action.payload
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
