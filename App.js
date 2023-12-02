import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
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
      <LittleLemonFooter />
      <StatusBar style='auto' />
    </View>
  );
}
