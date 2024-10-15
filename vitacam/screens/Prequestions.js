import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const QuickQuestionsScreen = () => {
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckboxPress = (index) => {
    const updatedChecked = { ...checked, [index]: !checked[index] };
    setChecked(updatedChecked);

    // If the 2nd and 4th questions are checked, show the popup
    if (updatedChecked[2] && updatedChecked[4]) {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give quick answers</Text>
      <View style={styles.questions}>
        {[
          'Do you feel fever more than one day?',
          'Do you have any symptoms of an infection, such as coughing, sore?',
          'How long do you have these symptoms on your body?',
          'Have you recently changed your skincare or haircare products?',
          'Did you eat anything odd that caused allergy?',
          'Do you have fever even after intake medicine?',
        ].map((question, index) => (
          <TouchableOpacity
            key={index}
            style={styles.questionContainer}
            onPress={() => handleCheckboxPress(index + 1)}
          >
            <View style={styles.checkbox}>
              {checked[index + 1] && <Ionicons name="checkmark" size={18} color="white" />}
            </View>
            <Text style={styles.questionText}>{question}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.checkButton} onPress={() => navigation.navigate('photoUpload')}>
        <Text style={styles.checkText}>Check</Text>
      </TouchableOpacity>

      {/* Modal for the popup */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              you have severe symptoms. please consult the doctor for proper treatments.
            </Text>
            <Ionicons
              name="close-circle"
              size={40}
              color="red"
              style={styles.modalCloseIcon}
              onPress={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  questions: {
    marginBottom: 20,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#0E4D92',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
  },
  checkButton: {
    backgroundColor: '#0E4D92',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  checkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalCloseIcon: {
    alignSelf: 'center',
  },
});

export default QuickQuestionsScreen;
