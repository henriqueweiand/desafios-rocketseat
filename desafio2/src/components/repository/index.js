import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    // teste
  }

  render() {
    const { repository } = this.props;

    return (
      <View style={styles.repository}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.avatar_url }}
        />
        <View style={styles.infos}>
          <Text style={styles.infoTitle}>{repository.name}</Text>
          <Text style={styles.infoDescription}>{repository.description}</Text>
        </View>
        <Icon name="chevron-right" style={styles.icon} />
      </View>
    );
  }
}
