import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Post from 'components/post';
import styles from 'pages/main/styles';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Bruno Flegler DalCOl',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Luana Effgen Waiandt',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Cecilia Flegler DalCOl',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <ScrollView style={styles.container}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    );
  }
}
