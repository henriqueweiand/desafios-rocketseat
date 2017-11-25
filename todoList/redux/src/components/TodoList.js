/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todos';

// import styles from './styles';

class TodoList extends Component {
  state = {
    newTodoText: '',
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
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
          <Text key={todo.id}>{todo.text}</Text>
        )) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);