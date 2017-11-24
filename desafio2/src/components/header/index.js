import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import { getDataRepository } from 'services/functions';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }),
  };

  static defaultProps = {
    navigation: {
      goBack: this.backButton,
    },
  };

  state = {
    backButton: false,
    repository: '',
  }

  componentWillMount = () => {
    getDataRepository().then((repository) => {
      if (repository !== false && repository !== null) {
        //let repositoryStore = repository.JSON.parse(repository);
        console.log(repository);
        this.setState({ backButton: true, repository: repositoryStore });
      }
    });
  }

  backButton = async () => {
    await AsyncStorage.removeItem('@githuber:selected');
    this.setState({ backButton: false });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.header}>
        {
          this.state.backButton
            ?
            (
              <View style={styles.rowView}>
                <TouchableOpacity
                  onPress={this.backButton}
                >
                  <Icon name="angle-left" style={styles.backButton} />
                </TouchableOpacity>
                <Text
                  style={styles.title}
                >
                  Voltar
                </Text>
              </View>
            )
            : this.props.children
        }
      </View>
    );
  }
}
