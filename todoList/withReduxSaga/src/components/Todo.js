import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { Text, View, TouchableOpacity } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { removeTodo } from 'redux/ducks/todos';

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }).isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  removeTodoClass = (id) => {
    this.props.removeTodo(id);
  };

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginVertical: 15  }}>
        <Text style={{fontWeight: 'bold'}}>
          {this.props.todo.text}
        </Text>
        <TouchableOpacity onPress={() => this.removeTodoClass(this.props.todo.id)}>
          <Text>
            Remover
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { removeTodo })(Todo);
