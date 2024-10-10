// Footer.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={25} color="#4285F4" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <View style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={30} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Store')}>
        <Ionicons name="storefront-outline" size={25} color="#4285F4" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C4D2ED',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  cameraButton: {
    backgroundColor: '#0E4385',
    borderRadius: 50,
    padding: 10,
  },
});

export default Footer;
