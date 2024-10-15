import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



const DoctorDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#2d2d2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
        
        </TouchableOpacity>
      </View>


      <View style={styles.card}>
        <Image source={require('../assets/doctor.webp')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>David</Text>
          <Text style={styles.location}>
          <Ionicons name="location" size={20} color="white" />Colombo
          </Text>
        </View>
      </View>

      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
        <Ionicons name='man' size={28} color="white" style={styles.icons}/>
        <p>2,000+ patients</p>
        </div>
        <div style={styles.statItem}>
        <Ionicons name="medal-outline" size={28} color="white" style={styles.icons}/>        
        <p>10+ years </p>
        </div>
        <div style={styles.statItem}>
        <Ionicons name="star" size={28} color="white" style={styles.icons}/>
        <p>5 rating</p>
        </div>
        <div style={styles.statItem}>
        <MaterialIcons  name="reviews" size={28} color="white" style={styles.icons}/>
        <p>1,872 reviews</p>
        </div>
      </div>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About me</Text>
        <Text style={styles.aboutText}>
          David, brings a wealth of experience to Golden Gate Cardiology Center in Golden Gate, CA.{' '}
          <Text style={styles.link}>view more</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.callButton}>
        <Text style={styles.callButtonText}>Book an appointment</Text>
      </TouchableOpacity>
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
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    marginTop:'30px',
  },
  statItem: {
    textAlign: 'center',
    fontSize: '16px',
  },
  icons:{
    backgroundColor:'#0E4385',
    borderRadius:'50%',
    padding:'5px',
  },
  card: {
    backgroundColor: '#0E4385',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  location: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
  },
  aboutContainer: {
    marginTop: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 22,
  },
  link: {
    color: '#0a74da',
    textDecorationLine: 'underline',
  },
  callButton: {
    backgroundColor: '#0E4385',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  callButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DoctorDetailsScreen;
