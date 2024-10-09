import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Helpdesk = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Desk</Text>
        <TouchableOpacity>
        <Image source={require('../assets/nav_2.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/help.png')}
          style={styles.image}
        />
      </View>

      {/* Help Buttons Section */}
      <View style={styles.helpButtonsBox}>
      <Text style={styles.contactusfor}>Contact US for Help </Text>
        <View style={styles.helpButtonsContainer}>
          
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="play-circle" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="envelope" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="file" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Call Us Button */}
      <View style={styles.callUsButtonContainer}>
        <TouchableOpacity style={styles.callUsButton}>
          <Icon name="phone" size={20} color="#fff" />
          <Text style={styles.callUsButtonText}>Call us</Text>
        </TouchableOpacity>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  helpButtonsBox: {
    backgroundColor: '#004AAD', // Blue box background
    padding: 20, // Add padding around the buttons
    borderRadius: 10,
    marginTop: 30,
    width:'90%',
    alignSelf:'center',
    marginBottom:'350px'
  },
  helpButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    backgroundColor: '#004AAD',
    padding: 16,
    borderRadius: 10,
  },
  callUsButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  callUsButton: {
    flexDirection: 'row',
    backgroundColor: '#004AAD',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  callUsButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E6F0FA', // Light blu
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#D1D1D1',
    width: '100%', 
    height: 80,
    marginTop: 100,
    position: 'absolute', 
    bottom: 0,
    left: 0,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  contactusfor:{
    color: '#fff',
    alignSelf:'center'
  }
});

export default Helpdesk;
