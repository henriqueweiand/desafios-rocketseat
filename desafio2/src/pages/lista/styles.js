import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  inputRepositorio: {
    backgroundColor: colors.background,
    borderRadius: 5,
    padding: 10,
    marginRight: 15,
    flex: 2,
    color: colors.dark,
    fontSize: fonts.small,
  },
  buttonAddRepositorio: {

  },
  icon: {
    fontSize: fonts.large,
    color: colors.lightdark,
  },
  loading: {
    marginTop: 20,
  },
  empty: {
    fontSize: fonts.regular,
    paddingTop: 20,
    textAlign: 'center',
  },
});

export default styles;
