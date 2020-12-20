import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const ClipScreen = () => {
  const user = useSelector((state) => state.user);
  const { clips } = user;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            author={item.author}
            imageUrl={item.urlToImage}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ClipScreen;
