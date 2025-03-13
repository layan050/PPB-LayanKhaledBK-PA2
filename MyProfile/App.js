import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import MyProfile from './Components/MyProfile';

export default function App() {
  return (
    <View>
      <Text>My Profile</Text>
      <MyProfile />
      <StatusBar style="auto" />
    </View>
  );
}
