import { AsyncStorage } from 'react-native';

export const getDataRepository = async () => {
  const repository = await AsyncStorage.getItem('@githuber:repository');
  return repository;
};

export default getDataRepository;
