import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from './Footer';


const ProfileScreen = () => {
  const handleLogout = () => {
    Alert.alert('Logged out');
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile Clicked');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#2d2d2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
        
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <View style={styles.imgbg}></View>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>S.M.A.perera</Text>
        <Text style={styles.profileEmail}>Perera23@gmail.com</Text>
        <Text style={styles.passwordPlaceholder}>••••••••••</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
          <Icon name="create-outline" size={20} color="#0E4385" />
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

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
  
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#d0daf3',
    marginTop:-50,
    backgroundColor:'#fff'
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 5,
  },
  imgbg:{
    backgroundColor:'#0E4385',
    width:'100%',
    height:90,
  },
  passwordPlaceholder: {
    fontSize: 20,
    marginTop: 5,
    color: '#6b7280',
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d0daf3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 45,
  },
  editProfileText: {
    fontSize: 16,
    color: '#0E4385',
    marginLeft: 5,
    fontWeight:'600'
  },
  logoutButton: {
    backgroundColor: '#0E4385',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 85,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight:'bold'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#d0daf3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default ProfileScreen;
