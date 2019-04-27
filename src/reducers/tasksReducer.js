import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  EDIT_TASK,
  CHECK_TASK_DONE
} from "../actions/actionTypes";

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
    case FETCH_TASKS: {
      return state;
    }

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);

    case ADD_TASK: {
      let task = { ...action.payload };
      task.id = randomId();
      task.completed = false;
      return [...state, task];
    }

    case EDIT_TASK:
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

    case CHECK_TASK_DONE:
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
