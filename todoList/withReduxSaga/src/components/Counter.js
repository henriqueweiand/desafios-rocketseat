/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

/* Redux */
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>Você tem { this.props.todos.length } todos.</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Counter);