import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from './store';

import TodoList from './components/TodoList';
import Counter from './components/Counter';

const App = () => (
  <Provider store={store}>
    <View>
      <TodoList />
      <Counter />
    </View>
  </Provider>
);

export default App;