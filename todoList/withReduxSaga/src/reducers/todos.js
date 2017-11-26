import { ADD, REMOVE } from 'redux/types/todos';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, { id: Math.random(), text: action.payload.text }];
    case REMOVE:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
