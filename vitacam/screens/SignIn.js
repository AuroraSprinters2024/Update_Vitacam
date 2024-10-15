import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);


  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        Alert.alert('Success', 'Login successful');
        navigation.navigate('Home'); // Navigate to Home on successful login
      } else {
        Alert.alert('Error', data.message || 'Login failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server');
    }
  };


  // Access the navigation object from React Navigation
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
      color: '#335F94',

    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#14274e',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 20,
      width: '100%',
    },
    input: {
      flex: 1,
      color: '#fff',
      fontSize: 16,
    },
    toggleButton: {
      marginLeft: 10,
    },
    toggleButtonText: {
      fontSize: 20,
      color: '#fff',
    },
    forgotPasswordText: {
      alignSelf: 'flex-end',
      color: '#3c91e6',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#0E4385',
      paddingVertical: 15,
      borderRadius: 25,
      width: '100%',
      alignItems: 'center',
      marginBottom: 30,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    orContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    signupText: {
      fontSize: 16,
      color: '#6c757d',
    },
    signupLink: {
      color: '#1d4e89',
      fontWeight: 'bold',
    },
    orDivider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#1d4e89',
    },
    orText: {
      marginHorizontal: 10,
      fontSize: 16,
      color: '#1d4e89',
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    socialIcon: {
      width: 50,
      height: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>{hidePassword ? '🙈' : '🙉'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
        </Text>
        <View style={styles.orDivider}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/google.webp')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
