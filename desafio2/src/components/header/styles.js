import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  header: {
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
    paddingBottom: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

