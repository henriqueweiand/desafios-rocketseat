import { Types as TodoTypes } from 'redux/ducks/todos';
import { takeLatest } from 'redux-saga/effects';

import { asyncAddTodo, asyncRemoveTodo } from './todos';

export default function* root() {
  yield [
    takeLatest(TodoTypes.ASYNC_ADD, asyncAddTodo),
    takeLatest(TodoTypes.ASYNC_REMOVE, asyncRemoveTodo),
  ];
}
