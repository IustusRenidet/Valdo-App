import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Placeholder posts with remote images so no binary assets are needed
const SAMPLE_POSTS = [
  {
    id: '1',
    user: 'Hero',
    image: { uri: 'https://via.placeholder.com/300x200.png?text=Post+1' },
    caption: 'Mi primera aventura'
  },
  {
    id: '2',
    user: 'Mage',
    image: { uri: 'https://via.placeholder.com/300x200.png?text=Post+2' },
    caption: 'Magia epica'
  }
];

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // In a real app this would fetch posts from the cloud database
    setPosts(SAMPLE_POSTS);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.caption}>{item.user}: {item.caption}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a3938', // color1
    alignItems: 'center',
    justifyContent: 'center'
  },
  post: {
    backgroundColor: '#847b6d', // color2
    padding: 10,
    marginVertical: 8,
    borderRadius: 8
  },
  postImage: {
    width: 300,
    height: 200,
    marginBottom: 8,
    resizeMode: 'cover'
  },
  caption: {
    color: '#d2d5af', // color4
    fontSize: 16
  }
});
