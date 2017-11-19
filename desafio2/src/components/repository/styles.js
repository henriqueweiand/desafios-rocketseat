import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  repository: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    padding: 15,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  infos: {
    flex: 2,
    marginLeft: 5,
  },
  infoTitle: {
    fontSize: fonts.large,
    color: colors.lightdark,
    paddingBottom: 5,
  },
  infoDescription: {
    fontSize: fonts.small,
    color: colors.title,
  },
  icon: {
    fontSize: 16,
    color: colors.background,
    alignItems: 'center',
  },
});

export default styles;

