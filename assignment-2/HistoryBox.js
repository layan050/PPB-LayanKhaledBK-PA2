import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryBox = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>History of Bicycles</Text>
      <Text style={styles.description}>A bicycle, also called a pedal cycle...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 250,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HistoryBox;
