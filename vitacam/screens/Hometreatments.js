import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure you have this library installed

const HomeTreatmentScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  const data = [
    { id: 1, title: 'Vitamin D' },
    { id: 2, title: 'Vitamin C' },
    { id: 3, title: 'Zinc' },
    { id: 4, title: 'Iron' },
  ];

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#2d2d2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home Treatments</Text>
        <TouchableOpacity>
          <Icon name="camera" size={30} color="#2d2d2d" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={require('../assets/hometreat.jpg')} // Add your image here
        style={styles.headerImage}
      />

      {/* Dropdowns */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => toggleDropdown(index)}
            >
              <Text style={styles.dropdownText}>{item.title}</Text>
              <Icon
                name={selectedIndex === index ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>

            {selectedIndex === index && (
              <View style={styles.dropdownOptions}>
                {options.map((option, i) => (
                  <Text key={i} style={styles.optionText}>{option}</Text>
                ))}
              </View>
            )}
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="storefront-outline" size={30} color="#2d2d2d" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera-outline" size={30} color="#0051ba" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="#2d2d2d" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  headerImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
  dropdownContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  dropdown: {
    backgroundColor: '#0051ba',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdownOptions: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  optionText: {
    color: '#2d2d2d',
    paddingVertical: 5,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#d0daf3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default HomeTreatmentScreen;
