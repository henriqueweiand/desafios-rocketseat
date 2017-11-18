import React, { Component } from 'react';
import { Text, View } from 'react-native';

// import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount = () => {
    // teste
  }

  render() {
    return (
      <View>
        <Text> Issues </Text>
      </View>
    );
  }
}
