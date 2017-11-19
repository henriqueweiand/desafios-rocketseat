import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { getDataRepository } from 'services/functions';
import Reactotron from 'reactotron-react-native';

import styles from './styles';

export default class Issues extends Component {
  state = {
    repository: false,
  };

  componentWillMount = () => {
    getDataRepository().then((repository) => {
      this.setState({ repository });
    });
  };

  render() {
    return (
      <View>
        <Text> { this.state.repository } </Text>
      </View>
    );
  }
}
