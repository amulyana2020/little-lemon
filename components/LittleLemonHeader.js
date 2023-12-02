import {View, Text} from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View
      style={{
        flex: 0.1,
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: 'black',
        }}
        numberOfLines={3}
      >
        Welcome to
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 4,
          }}
        >
          Little Lemon
        </Text>
      </Text>
    </View>
  );
};

export default LittleLemonHeader;
