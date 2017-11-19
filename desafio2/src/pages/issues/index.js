import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

// import styles from './styles';
import Reactotron from 'reactotron-react-native';

export default class Issues extends Component {
  state = {
    repository: false,
  };

  componentWillMount = () => {
    this.getDataRepository();
  }

  getDataRepository = async () => {
    const storageRepositorie = await JSON.parse(AsyncStorage.getItem('@githuber:repository'));
    this.setState({ repository: storageRepositorie });

    Reactotron.log(this.state.repository);
  }

  render() {
    return (
      <View>
        <Text> Issues </Text>
      </View>
    );
  }
}
