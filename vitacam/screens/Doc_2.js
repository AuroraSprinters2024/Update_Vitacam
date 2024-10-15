import React from 'react';
import { FaStar, FaUserAlt, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';


const DoctorDetails = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <img
          src={require('../assets/nav_2.png')} // Replace with the actual profile image URL
          alt="Doctor"
          style={styles.profileImage}
        />
        <div style={styles.detailsContainer}>
          <h2>Dr. David Patel</h2>
          <p>@ Golden Gate Center</p>
        </div>
      </div>
      
      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <FaUserAlt />
          <p>2,000+ patients</p>
        </div>
        <div style={styles.statItem}>
          <FaCalendarAlt />
          <p>10+ years experience</p>
        </div>
        <div style={styles.statItem}>
          <FaStar style={{ color: 'gold' }} />
          <p>5 rating</p>
        </div>
        <div style={styles.statItem}>
          <FaStar />
          <p>1,872 reviews</p>
        </div>
      </div>

      <div style={styles.aboutSection}>
        <h3>About me</h3>
        <p>
          Dr. David Patel, brings a wealth of experience to Golden Gate Cardiology Center in Golden Gate, CA.
        </p>
      </div>

      <div style={styles.workingTimeSection}>
        <h3>Working Time</h3>
        <p>Monday - Friday, 08:00 AM - 18:00 PM</p>
      </div>

      <button style={styles.callButton}>
        <FaPhoneAlt /> Call Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#F5F5F5',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
  detailsContainer: {
    marginLeft: '20px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  statItem: {
    textAlign: 'center',
    fontSize: '12px',
  },
  aboutSection: {
    marginBottom: '20px',
  },
  workingTimeSection: {
    marginBottom: '20px',
  },
  callButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000FF', // Changed from green to blue
    color: '#FFFFFF',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default DoctorDetails;
