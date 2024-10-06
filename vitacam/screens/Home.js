import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const Home = () => {
  const [index, setIndex] = useState(0); // State to keep track of the current image index
  const images = [
    require('../assets/home6.png'), // First image
    require('../assets/home7.png'), // Second image
    require('../assets/home8.png'), // Third image
  ];

  // Effect to change the image index every 3 seconds (3000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Profile Greeting */}
        <View style={styles.profileSection}>
          <Text style={styles.greeting}>Hello Perera!</Text>
        </View>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Image
            source={require('../assets/home1.png')} // Replace with actual logo path
            style={styles.logo}
          />
        </View>

        {/* Scan & Identify Button */}
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/home2.png')} // Replace with actual icon path
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Scan & Identify</Text>
        </TouchableOpacity>

        {/* Get Suggestions Button */}
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/home3.png')} // Replace with actual icon path
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Get Suggestions</Text>
        </TouchableOpacity>

        {/* Automatic Slideshow */}
        <View style={styles.slideshowContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false} // Disable manual scrolling
            showsHorizontalScrollIndicator={false} // Hide scroll indicator
          >
            <Image source={images[index]} style={styles.image} />
          </ScrollView>
        </View>

        {/* Navigation Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Image source={require('../assets/nav_3.png')} style={styles.icon} /> {/* Replace with actual icon path */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/nav_2.png')} style={styles.icon} /> {/* Replace with actual icon path */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/nav_3.png')} style={styles.icon} /> {/* Replace with actual icon path */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    marginTop: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoSection: {
    marginTop: 50,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002E5B',
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    marginTop: 50, // Adds spacing between buttons and the logo
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  slideshowContainer: {
    width: '100%', // Adjust as needed
    height: 200, // Adjust as needed
    overflow: 'hidden', // Ensure that images do not overflow
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'center', // Center the image vertically
    marginTop: 70, // Adds space between the buttons and the slideshow
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover', // Cover the image in the given dimensions
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E6F0FA', // Light blue background color
    paddingVertical: 20, // Increase the vertical padding for more height
    borderTopWidth: 1,
    borderTopColor: '#D1D1D1', // Border color for the top
    width: '100%', // Make the navbar take the full width of the screen
    height: 80, // Set the height for the navbar, adjust as needed
    marginTop: 100, // Adds space between the slideshow and the navbar
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Home;
