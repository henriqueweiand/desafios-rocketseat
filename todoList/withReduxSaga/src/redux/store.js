import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import reducers from 'reducers';
import rootSaga from 'redux/sagas/todos';

const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
}, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
