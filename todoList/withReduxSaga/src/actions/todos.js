import { ASYNC_ADD, ASYNC_REMOVE } from 'redux/types/todos';

export function addTodo(text) {
  return {
    type: ASYNC_ADD,
    payload: {
      text,
    },
  };
}

export function removeTodo(id) {
  return {
    type: ASYNC_REMOVE,
    payload: {
      id,
    },
  };
}
