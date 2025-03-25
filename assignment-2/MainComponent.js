import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryBox from './HistoryBox';
import ImageBox from './ImageBox';

class MainComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryBox />
        <ImageBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainComponent;
