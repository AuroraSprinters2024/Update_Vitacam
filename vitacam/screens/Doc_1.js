import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Make sure to install vector-icons

const doctors = [
  {
    id: '1',
    name: 'Dr. David Patel',
    location: 'Golden Center',
    image: require('../assets/doctor.webp'), // Replace with your image path
  },
  {
    id: '2',
    name: 'Dr. David Patel',
    location: 'Golden Center',
    image: require('../assets/doctor.webp'), // Replace with your image path
  },
  {
    id: '3',
    name: 'Dr. David Patel',
    location: 'Golden Center',
    image: require('../assets/doctor.webp'), // Replace with your image path
  },
  {
    id: '4',
    name: 'Dr. David Patel',
    location: 'Golden Center',
    image: require('../assets/doctor.webp'), // Replace with your image path
  },
  {
    id: '5',
    name: 'Dr. David Patel',
    location: 'Golden Center',
    image: require('../assets/doctor.webp'), // Replace with your image path
  },
  // Add more doctors as needed
];

const DoctorsListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderDoctor = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Doc_2')}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>
          <Icon name="location-outline" size={16} color="white" /> {item.location}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#2d2d2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
        
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search doctor..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Text style={styles.resultsText}>{filteredDoctors.length} founds</Text>
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={renderDoctor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
    marginBottom: 16,
  },
  resultsText: {
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#0E4385',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  location: {
    color: 'white',
    marginTop: 5,
  },
});

export default DoctorsListScreen;
