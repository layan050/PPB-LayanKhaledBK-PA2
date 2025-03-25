import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dFRwpqGNBE31GtsCnPXVVEdNY7IOAAZ5pQ&s' }}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  loading: {
    marginTop: 20,
    color: 'white',
    fontSize: 18,
  },
});

export default SplashScreen;
