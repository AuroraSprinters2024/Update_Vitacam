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
import Footer from './Footer';


const Home = () => {
  const [index, setIndex] = useState(0); // State to keep track of the current image index
  const images = [
    require('../assets/home6.jpeg'), // First image
    require('../assets/home7.jpg'), // Second image
    require('../assets/home8.webp'), // Third image
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
          <Image source={require('../assets/profile.png')} style={styles.profileImage}/>
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
          <Footer/>
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
    backgroundColor: '#0E4385',
    borderRadius:40,
    flexDirection: 'row',
    paddingRight:20,
    marginLeft:10

  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff',
    paddingLeft:10,
  },
  logoSection: {
    marginTop: 45,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E4385',
    borderRadius: 30,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    marginTop: 30, // Adds spacing between buttons and the logo
  },
  buttonIcon: {
    width: 40,
    height: 40,
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
    height: 195, 
    overflow: 'hidden', // Ensure that images do not overflow
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'center', // Center the image vertically
    marginTop: 50, // Adds space between the buttons and the slideshow
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 195, // Adjust the height as needed
    resizeMode: 'cover', // Cover the image in the given dimensions
    borderRadius:10,
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
    height: 60, // Set the height for the navbar, adjust as needed
    marginTop: 50, // Adds space between the slideshow and the navbar
  },
  profileImage:{
    width:30,
    height:30,
    borderRadius:50,
  },
 
});

export default Home;
