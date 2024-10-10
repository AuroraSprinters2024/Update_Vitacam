import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions,checkbox} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const { width } = Dimensions.get('window');

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const screens = [
    {
     
      isGrid: true, // Flag for grid layout
      images: [
        require('../assets/landing1.jpg'), 
        require('../assets/landing2.webp'), 
        require('../assets/landing3.webp'), 
        require('../assets/landing4.jpg')  
      ],
      title: "AI: Shield Against Vitamin Deficiency!",
      description: "Empower Your Health: Detect Dengue with AI, Your Smart Solution for Early Detection!"
    },
    {
      title: "Swift Solutions, Brighter Futures!",
      description: "Detects vitamin deficiency With AI",
      isGrid: true, // Flag for grid layout
      images: [
        require('../assets/landing6.jpg'), 
        require('../assets/landing8.jpg'), 
        require('../assets/landing3.webp'), 
        require('../assets/landing7.jpg')  
      ]
    },
    {
      title: "Stay Ahead of the Threat!",
      description: "Stay one step ahead of vitamin deficiency with cutting-edge AI detection technology.",
      isGrid: true, // Flag for grid layout
      images: [
        require('../assets/landing5.png'), 
        require('../assets/landing9.png'), 
        require('../assets/landing10.webp'), 
        require('../assets/landing4.jpg')  
      ]
    }
  ];

  const handleScroll = (event) => {
    const pageNumber = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(pageNumber);
  };

  const navigateToScreen = (index) => {
    scrollViewRef.current.scrollTo({ x: width * index, animated: true });
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <View style={styles.logoSection}>
          <Image
            source={require('../assets/home1.png')} // Replace with actual logo path
            style={styles.logo}
          />
        </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {screens.map((screen, index) => (
          <View key={index} style={styles.screen}>
           
            {/* Grid View for Images */}
            {screen.isGrid && (
              <View style={styles.gridContainer}>
                {screen.images.map((image, imgIndex) => (
                  <View key={imgIndex} style={
                    styles.gridItem}>
                    <Image source={image} style={styles.gridImage} />
                  </View>
                ))}
              </View>
            )}
             <Text style={styles.title}>{screen.title}</Text>
             <Text style={styles.description}>{screen.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {screens.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              currentPage === index ? styles.activeDot : styles.inactiveDot
            ]}
            onPress={() => navigateToScreen(index)}
          />
        ))}
      </View>

      {/* Button Section */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}  // Add navigation here
      >
        <Text style={styles.buttonText}>Get Started Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridItem: {
    width: '50%', // 48% width to leave space for margin
    aspectRatio: 1, // Ensure the image remains square
    marginBottom: 3,
  },
  gridImage: {
    width: '90%',
    height: '85%',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E4385',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3A659A',
    marginBottom: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#0E4385',
  },
  inactiveDot: {
    backgroundColor: '#4285F4',
  },
  button: {
    backgroundColor: '#0E4385',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoSection: {
    marginTop: 50,
    alignItems: 'center',
  },
});

export default LandingPage;