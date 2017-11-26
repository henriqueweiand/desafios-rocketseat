// Action types

export const Types = {
  ADD: 'todos/ADD',
  REMOVE: 'todos/REMOVE',
  ASYNC_ADD: 'todos/ASYNC_ADD',
  ASYNC_REMOVE: 'todos/ASYNC_REMOVE',
};

// Reducer

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, { id: Math.random(), text: action.payload.text }];
    case Types.REMOVE:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

// Action creators

export function addTodo(text) {
  return {
    type: Types.ASYNC_ADD,
    payload: {
      text,
    },
  };
}

export function removeTodo(id) {
  return {
    type: Types.ASYNC_REMOVE,
    payload: {
      id,
    },
  };
}
