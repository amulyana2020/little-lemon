import {
  View,
  Text,
  ScrollView,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <ScrollView style={{flex: 0.6}}>
      <Text
        style={{
          fontSize: 48,
          color: 'white',
          padding: 20,
        }}
      >
        Little Lemon is a charming neighborhood
        bistro that serves simple food and classic
        cocktails in a lively but casual
        environment. We would love to hear more
        about your experience with us!
      </Text>
    </ScrollView>
  );
};

export default WelcomeScreen;
