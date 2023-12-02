import {View, Text} from 'react-native';

const LittleLemonFooter = () => {
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
          padding: 10,
          fontSize: 16,
          color: 'black',
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
};

export default LittleLemonFooter;
