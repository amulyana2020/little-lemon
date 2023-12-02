import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './WelcomeScreen';
import MenuItem from './components/MenuItem';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}
    >
      <LittleLemonHeader />
      <MenuItem />
      <StatusBar style='auto' />
    </View>
  );
}
