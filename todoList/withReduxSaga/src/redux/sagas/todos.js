import { Types } from 'redux/ducks/todos';
import { put } from 'redux-saga/effects';

export function* asyncAddTodo(action) {
  yield put({ type: Types.ADD, payload: { text: action.payload.text } });
}

export function* asyncRemoveTodo(action) {
  yield put({ type: Types.REMOVE, payload: { id: action.payload.id } });
}
