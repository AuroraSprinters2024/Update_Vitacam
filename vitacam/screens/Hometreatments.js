import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure you have this library installed
import Footer from './Footer';

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
    { id: 1, title: 'Vitamin A', options: ['Carrot', 'Spinach', 'Sweet Potato'] },
    { id: 2, title: 'Vitamin B', options: ['Eggs', 'Milk', 'Meat'] },
    { id: 3, title: 'Vitamin C', options: ['Orange', 'Lemon', 'Broccoli'] },
    { id: 4, title: 'Vitamin D', options: ['Sunlight', 'Fish', 'Eggs'] },
    { id: 5, title: 'Vitamin E', options: ['Almonds', 'Sunflower Seeds', 'Spinach'] },
    { id: 6, title: 'Zinc', options: ['Meat', 'Shellfish', 'Legumes'] },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#2d2d2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home Treatments</Text>
        <TouchableOpacity>
          <Icon name="camera-outline" size={30} color="#fff" style={styles.cameraButton} />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/hometreat.jpg')}
        style={styles.headerImage}
      />

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
                {item.options.map((option, i) => (
                  <Text key={i} style={styles.optionText}>{option}</Text>
                ))}
              </View>
            )}
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Footer/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop:35,
    paddingBottom:15,    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
  },
  headerImage: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  cameraButton: {
    backgroundColor: '#0E4385',
    borderRadius: 50,
    padding: 10,
  },
  dropdownContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  dropdown: {
    backgroundColor: '#0E4385',
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