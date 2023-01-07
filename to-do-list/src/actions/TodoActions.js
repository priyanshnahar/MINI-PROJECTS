export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hadTodo = todos.find((i) => i.todo === todo);

  if(!hasTodo && todo!== ''){
    
  }
};
