import {View, Text} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={{flex: 0.7}}>
      <Text
        style={{
          fontSize: 24,
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
    </View>
  );
};

export default WelcomeScreen;
