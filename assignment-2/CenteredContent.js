import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CenteredContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>History of Bicycles</Text>
        <Text style={styles.description}>A bicycle, also called a pedal cycle...</Text>
        <Image 
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} 
          style={styles.image} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 250,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default CenteredContent;
