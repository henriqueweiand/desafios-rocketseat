
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const bgHeader = '#FFFFFF';

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: bgHeader,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Header = ({ options }) => (
  <View style={styles.header}>
    <Text>{options.title}</Text>
  </View>
);

Header.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Header.defaultProps = {
  options: {
    title: '',
  },
};

export default Header;
