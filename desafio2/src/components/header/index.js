import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

export default class Header extends Component {
  componentWillMount = () => {
    // teste
  }

  render() {
    return (
      <View style={styles.header}>
        {this.props.children}
      </View>
    );
  }
}
