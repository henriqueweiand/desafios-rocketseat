
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const bgPost = '#FFFFFF';
const colorTitle = '#333333';
const colorAutor = '#999999';
const colorDescription = '#666666';
const borderColor = '#EEEEEE';

const styles = StyleSheet.create({
  post: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: bgPost,
    marginBottom: 20,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colorTitle,
  },
  autor: {
    color: colorAutor,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: borderColor,
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  description: {
    color: colorDescription,
  },
});

const Post = ({ post }) => (
  <View style={styles.post}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.autor}>{post.autor}</Text>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    autor: PropTypes.string,
    description: PropTypes.string,
  }),
};

Post.defaultProps = {
  post: {
    id: 0,
    title: '',
    autor: '',
    description: '',
  },
};

export default Post;
