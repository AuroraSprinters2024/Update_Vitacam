import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You need to install react-native-vector-icons

const HydrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Eating Carrot</Text>
        <Icon name="camera-outline" size={28} color="#0a74da" style={styles.cameraIcon} />
      </View>

      {/* Image Section */}
      <Image
        source={require('../assets/carrot.jpg')} // Replace with your image path
        style={styles.image}
      />

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.paragraph}>
        Carrots are a well-known source of beta-carotene, a pigment that your body converts into vitamin A. This nutrient plays a crucial role in various bodily functions
        </Text>
        <Text style={styles.listItem}>•Vitamin A helps support a strong immune system, protecting your body from infections and diseases. </Text>
        <Text style={styles.listItem}>• Skin Health: This nutrient is vital for healthy skin cells, promoting skin growth and repair.</Text>
        <Text style={styles.paragraph}>
          It's essential to drink fluids regularly, even if you don't feel like it, to prevent dehydration and support your body's recovery from dengue fever.
        </Text>
      </ScrollView>

      
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
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cameraIcon: {
    position: 'absolute',
    right: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#e5efff',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
    paddingLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e5efff',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default HydrationScreen;
