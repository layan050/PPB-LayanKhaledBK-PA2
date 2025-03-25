import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageBox = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://papers.co/wallpaper/papers.co-so15-purple-pastel-blur-gradation-40-wallpaper.jpg?download=true' }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageBox;
