import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, FlatList, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import Reactotron from 'reactotron-react-native';

import Header from 'components/header';
import Repository from 'components/repository';
import api from 'services/api';
import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Lista extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    refreshing: false,
    repositories: [],
    loading: false,
    newRepository: '',
    error: false,
  };

  componentWillMount = () => {
    this.setState({ loading: true });

    this.loadRepositories().then(() => {
      this.setState({ loading: false });
    });
  }

  checkAndSaveUser = async () => {
    const response = await api.get(`/repos/${this.state.newRepository}`);
    const { id, name, description, owner: { avatar_url } } = response.data;

    let storageRepositories = await AsyncStorage.getItem('@githuber:repository');
    storageRepositories = JSON.parse(storageRepositories);

    if (storageRepositories == null || storageRepositories.length === 0) {
      storageRepositories = [];
    }

    storageRepositories.push({
      key: Math.random(),
      id,
      name,
      description,
      avatar_url,
    });

    if (!response.ok) throw Error();

    await AsyncStorage.setItem('@githuber:repository', JSON.stringify(storageRepositories));
  };

  submitUser = () => {
    if (this.state.newRepository.length === 0) return;

    this.setState({ error: false, loading: true });

    this.checkAndSaveUser()
      .then(() => {
        Reactotron.log('then');

        this.loadRepositories().then(() => {
          this.setState({ loading: false });
          this.renderList();
        });
      })
      .catch(() => {
        Reactotron.log('catch');
        this.setState({ error: true, loading: false });
      });
  };

  paginate = (item) => {
    AsyncStorage.setItem('@githuber:selected', JSON.stringify(item));

    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Issues' }),
      ],
    });

    dispatch(resetAction);
  };

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const response = await AsyncStorage.getItem('@githuber:repository');

    this.setState({
      repositories: (response == null ? [] : JSON.parse(response)),
      refreshing: false,
    });
  };

  renderRepositories = () => (
    <FlatList
      onRefresh={() => this.loadRepositories()}
      refreshing={this.state.refreshing}
      data={this.state.repositories}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => this.paginate(item)}>
              <View>
                <Repository repository={item} />
              </View>
            </TouchableOpacity>
          );
        }
      }
    />
  );

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : <Text style={styles.empty}>Nenhum repositório adicionado</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <TextInput
            style={styles.inputRepositorio}
            onChangeText={text => this.setState({ newRepository: text })}
            placeholder="Adicionar repositório"
          />
          <TouchableOpacity
            onPress={this.submitUser}
            style={styles.buttonAddRepositorio}
          >
            <Icon name="plus" style={styles.icon} />
          </TouchableOpacity>
        </Header>
        <View style={styles.container}>
          { this.state.error && <Text style={styles.error}>Repositorio não localizado</Text> }

          { this.state.loading
            ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
            : this.renderList()
          }
        </View>
      </View>
    );
  }
}
