import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PhotoUploadPage = () => {
  const [image, setImage] = useState(null);
  const [isDoneClicked, setIsDoneClicked] = useState(false);

  // Function to handle image picking
  const pickImage = async () => {
    // Request permission to access the camera roll
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  // Function to handle the "Done" button click
  const handleDoneClick = () => {
    setIsDoneClicked(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Photo</Text>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Button title="Choose Image" onPress={pickImage} />

      <View style={styles.buttonSection}>
        <Button title="Cancel" onPress={() => setImage(null)} />
        <Button title="Done" onPress={handleDoneClick} />
      </View>

      {/* Vitamin Status Section */}
      {isDoneClicked && (
        <View style={styles.vitaminStatus}>
          <Text style={styles.vitaminTitle}>Vitamin Status</Text>
          <Text>
            Based on your symptoms, it appears that you are suffering from a Vitamin C deficiency.
          </Text>
        </View>
      )}

      {/* Recommendations and Exit buttons */}
      <View style={styles.actionButtons}>
        <Button 
          title="Recommendations" 
          color={isDoneClicked ? '#4A90E2' : 'gray'} 
        />
        {isDoneClicked && (
          <Button title="Exit" onPress={() => {}} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  vitaminStatus: {
    marginTop: 20,
  },
  vitaminTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButtons: {
    marginTop: 20,
  },
});

export default PhotoUploadPage;
