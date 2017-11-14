/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Post from './Components/Post';
import Header from './Components/Header';

const posts = [
  {
    id: 1,
    title: 'Post titulo',
    autor: 'henrique weiand',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
  },
  {
    id: 3,
    title: 'Post titulo 2',
    autor: 'henrique weiand',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
  },
  {
    id: 3,
    title: 'Post titulo 3',
    autor: 'henrique weiand',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
  },
];

const bgContainer = '#EE7777';

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgContainer,
    flex: 1,
    padding: 20,
  },
  viewPage: {
    flex: 1,
  },
});

const App = () => (
  <View style={styles.viewPage}>
    <Header options={{ title: 'GoNative App' }} />
    <ScrollView style={styles.container}>
      { posts.map(post => (<Post key={post.id} post={post} />)) }
    </ScrollView>
  </View>
);

export default App;
