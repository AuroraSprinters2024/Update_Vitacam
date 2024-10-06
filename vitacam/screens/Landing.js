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
      title: "AI: Your Shield Against Dengue!",
      description: "Empower Your Health: Detect Dengue with AI, Your Smart Solution for Early Detection!",
      isGrid: true, // Flag for grid layout
      images: [
        require('../assets/landing1.jpg'), 
        require('../assets/landing2.webp'), 
        require('../assets/landing3.webp'), 
        require('../assets/landing4.jpg')  
      ]
    },
    {
      title: "Swift Solutions, Brighter Futures!",
      description: "Detects Dengue With AI: Swift Solutions, Brighter Futures!",
      isGrid: true, // Flag for grid layout
      images: [
        require('../assets/landing6.jpg'), 
        require('../assets/landing2.webp'), 
        require('../assets/landing3.webp'), 
        require('../assets/landing4.jpg')  
      ]
    },
    {
      title: "Stay Ahead of the Threat!",
      description: "Stay one step ahead of Dengue with cutting-edge AI detection technology.",
      isGrid: true, // Flag for grid layout
      images: [
        require('../assets/landing5.png'), 
        require('../assets/landing2.webp'), 
        require('../assets/landing3.webp'), 
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
            <Text style={styles.title}>{screen.title}</Text>
            <Text style={styles.description}>{screen.description}</Text>

            {/* Grid View for Images */}
            {screen.isGrid && (
              <View style={styles.gridContainer}>
                {screen.images.map((image, imgIndex) => (
                  <View key={imgIndex} style={styles.gridItem}>
                    <Image source={image} style={styles.gridImage} />
                  </View>
                ))}
              </View>
            )}
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
    marginBottom: 5,
  },
  gridImage: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#005A9C',
  },
  inactiveDot: {
    backgroundColor: '#d3d3d3',
  },
  button: {
    backgroundColor: '#005A9C',
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
});

export default LandingPage;