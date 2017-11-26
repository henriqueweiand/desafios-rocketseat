/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { addTodo } from 'actions/todos';

import Todo from './Todo';

class TodoList extends Component {
  state = {
    newTodoText: '',
  };

  addNewTodo = () => {
    if (this.state.newTodoText === '') {
      return false;
    }
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' });
    return true;
  };

  render() {
    return (
      <View style={{ padding: 40 }}>
        <TextInput
          style={{ borderWidth: 1 }}
          value={this.state.newTodoText}
          onChangeText={(text) => this.setState({ newTodoText: text })}
        />

        <TouchableOpacity style={{ backgroundColor: '#069' }} onPress={this.addNewTodo}>
          <Text>Novo todo</Text>
        </TouchableOpacity>

        { this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        )) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo })(TodoList);
