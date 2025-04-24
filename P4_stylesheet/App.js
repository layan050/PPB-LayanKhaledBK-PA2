import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemTyphograph from './ItemTyphograph';
import ItemImage from './ItemImage';

export default function App() {
  return (
    <SafeAreaView style = {{flex : 1}}>
      <StatusBar hidden = {true}/>
      <View style = {styles.container}>
        <ItemTyphograph/>
        <ItemImage/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding : 10,
    flex : 1 ,
    alignItems: 'center'
  },
});
