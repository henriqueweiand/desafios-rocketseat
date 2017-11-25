export default function todos(state = [], action) {
  console.log(action);

  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, { id: Math.random(), text: action.payload.text } ];

    case 'REMOVE_TODO':
      return [ state.filter(todo => todo.id != action.payload.id) ];
      
    default:
      return state;
  }
}