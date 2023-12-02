import {
  View,
  Text,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      {name: 'Hummus', price: '$5.00'},
      {name: 'Moutabal', price: '$5.00'},
      {name: 'Falafel', price: '$7.50'},
      {name: 'Marinated Olives', price: '$5.00'},
      {name: 'Kofta', price: '$5.00'},
      {name: 'Eggplant Salad', price: '$8.50'},
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      {name: 'Lentil Burger', price: '$10.00'},
      {name: 'Smoked Salmon', price: '$14.00'},
      {name: 'Kofta Burger', price: '$11.00'},
      {name: 'Turkish Kebab', price: '$15.50'},
    ],
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries', price: '$3.00', id: '11K'},
      {name: 'Buttered Rice', price: '$3.00'},
      {name: 'Bread Sticks', price: '$3.00'},
      {name: 'Pita Pocket', price: '$3.00'},
      {name: 'Lentil Soup', price: '$3.75'},
      {name: 'Greek Salad', price: '$6.00'},
      {name: 'Rice Pilaf', price: '$4.00'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava', price: '$3.00'},
      {name: 'Tartufo', price: '$3.00'},
      {name: 'Tiramisu', price: '$5.00'},
      {name: 'Panna Cotta', price: '$5.00'},
    ],
  },
];

const MenuItem = () => {
  const renderItem = ({item}) => (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 40,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 24,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
        }}
      >
        {item.price}
      </Text>
    </View>
  );

  const renderSectionHeader = ({
    section: {title},
  }) => (
    <Text
      style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        backgroundColor: '#F4CE14',
        paddingHorizontal: 40,
        paddingVertical: 20,
      }}
    >
      {title}
    </Text>
  );

  const Header = () => {
    return (
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Menu Items
      </Text>
    );
  };

  const Separator = () => (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#EDEFEE',
      }}
    />
  );
  const Footer = () => {
    return (
      <View
        style={{
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
          All rights reserved by Little Lemon,
          2022
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 0.8}}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) =>
          item + index
        }
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

export default MenuItem;
