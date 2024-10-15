import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


const PhotoUploadPage = () => {
  const [image, setImage] = useState(null);
  const [isDoneClicked, setIsDoneClicked] = useState(false);
   const navigation = useNavigation();


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

      <View style={styles.imagebtn}><Button title="Choose Image" onPress={pickImage}  /></View>

      <View style={styles.buttonSection}>
      <View style={styles.imagebn}> <Button title="Cancel" onPress={() => setImage(null)} /></View>
      <View style={styles.imagebn}><Button title="Done" onPress={handleDoneClick} /></View>
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
        {isDoneClicked && (
          <Button title="Connect doctor" onPress={() => navigation.navigate('Doc_1')}/>
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
    gap:20,
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
  imagebtn:{
    backgroundColor: 'rgb(33, 150, 243);',
    paddingVertical: 15,
    borderRadius: 25,
    width: '70%',
    alignItems: 'center',
    marginBottom: 20,
  marginTop:20,  },

  imagebn:{
    backgroundColor: 'rgb(33, 150, 243);',
    paddingVertical: 15,
    borderRadius: 25,
    width: '70%',
    alignItems: 'center',
    marginLeft:-25,
    marginRight:10,
 },
});

export default PhotoUploadPage;
