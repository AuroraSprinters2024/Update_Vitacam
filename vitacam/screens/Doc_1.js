import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';

const Doctor = () => {
  const location = "Colombo, WP";
  const doctors = [
    {
      id: 1,
      name: 'UdhayaSri',
      location: 'Colombo 05',
      rating: 5.0,
      reviews: 58,
      distance: '2.5 km / 40 min',
      hospital: 'Hospital',
      image: require('../assets/doc.png'),
    },
    {
      id: 2,
      name: 'UdhayaSri',
      location: 'Colombo 06',
      rating: 3.7,
      reviews: 34,
      distance: '2.5 km / 40 min',
      hospital: 'Hospital',
      image: require('../assets/doc.png'),
    }
  ];

  return (
    <View style={styles.app}>
      {/* Location and Search Bar */}
      <View style={styles.locationSearch}>
        <Text style={styles.locationText}>Location</Text>
        <TextInput
          value={location}
          style={styles.input}
        />
        <TextInput placeholder="Search doctor..." style={styles.input} />
      </View>

      {/* Specialist Doctors Section with Overlay Text */}
      <ImageBackground
        source={require('../assets/doc.png')} // Ensure this path is correct
        style={styles.specialistSection}
        resizeMode="cover"
      >
        <Text style={styles.specialistTitle}>Looking for Specialist Doctors?</Text>
        <Text style={styles.specialistSubtitle}>Schedule an appointment with our top doctors.</Text>
      </ImageBackground>

      {/* Popular Doctors Section */}
      <View style={styles.popularSection}>
        <Text style={styles.popularTitle}>Popular Doctors</Text>
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.doctorCard}>
            <Image source={doctor.image} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text>{doctor.name}</Text>
              <Text>{doctor.location}</Text>
              <Text>⭐ {doctor.rating} ({doctor.reviews} Reviews)</Text>
              <Text>{doctor.distance}</Text>
              <Text>{doctor.hospital}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image source={require('../assets/nav_3.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/nav_2.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/nav_3.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // For Android
  },
  locationText:{
    marginTop:10,
    

  },
  locationSearch: {
    marginBottom: 15,
  },
  input: {
    display: 'block',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  specialistSection: {
    height: 200, // Adjust height as needed
    width:400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  specialistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text for visibility
    textAlign: 'center',
  },
  specialistSubtitle: {
    color: '#fff',
    textAlign: 'center',
  },
  popularSection: {
    marginBottom: 20,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  doctorInfo: {
    textAlign: 'left',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E6F0FA',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#D1D1D1',
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Doctor;
