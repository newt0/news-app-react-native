import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ArticleScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen;
