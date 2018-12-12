import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from 'components/post/styles';

class Post extends Component {
  state = {};

  render() {
    const { post } = this.props;

    return (
      <View style={styles.containerWrap}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.author}>{post.author}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    );
  }
}

export default Post;
