import {useState} from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [message, setMessage] = useState();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      keyboardDismissMode='on-drag'
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : 'height'
      }
    >
      <ScrollView>
        <Text
          style={{
            fontSize: 28,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
            backgroundColor: '#495E57',
          }}
        >
          How was your visit to Little Lemon
        </Text>
        <Text
          style={{
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
            backgroundColor: '#495E57',
          }}
        >
          Little Lemon is a charming neighborhood
          bistro that serves simple food and
          classic cocktails in a lively but casual
          environment. We would love to hear your
          experience with us!
        </Text>
        <TextInput
          value={firstName}
          style={styles.input}
          placeholder='First Name'
        />
        <TextInput
          value={lastName}
          style={styles.input}
          placeholder='Last Name'
        />
        <TextInput
          value={message}
          style={styles.input}
          placeholder='Message'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
});

export default FeedbackForm;
