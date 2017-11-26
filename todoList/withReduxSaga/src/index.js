import 'config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { View } from 'react-native';

import { store, persistor } from './redux/store';

import TodoList from './components/TodoList';
import Counter from './components/Counter';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View>
        <TodoList />
        <Counter />
      </View>
    </PersistGate>
  </Provider>
);

export default App;
