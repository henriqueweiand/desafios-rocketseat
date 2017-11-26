import { ADD, REMOVE, ASYNC_ADD, ASYNC_REMOVE } from 'redux/types/todos';
import { takeLatest, put } from 'redux-saga/effects';

function* asyncAddTodo(action) {
  yield put({ type: ADD, payload: { text: action.payload.text } });
}

function* asyncRemoveTodo(action) {
  yield put({ type: REMOVE, payload: { id: action.payload.id } });
}

export default function* root() {
  yield [
    takeLatest(ASYNC_ADD, asyncAddTodo),
    takeLatest(ASYNC_REMOVE, asyncRemoveTodo),
  ];
}
