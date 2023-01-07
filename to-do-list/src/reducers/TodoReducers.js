const ToDoReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: action.payload };
    case "REMOVE_TODO":
      return { todos: action.payload };
    default:
      return state;
  }
};

