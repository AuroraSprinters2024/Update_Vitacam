import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Agreement Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agree}
          onValueChange={setAgree}
        />
        <Text style={styles.checkboxText}>
          I agree to the <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Sign Up')}
        disabled={!agree}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#3D5170',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#14274e',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  input: {
    fontSize: 16,
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#2C3E61',
    marginLeft: 10,
  },
  link: {
    color: '#3366BB',
  },
  button: {
    backgroundColor: '#1d4e89',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  loginLink: {
    color: '#3366BB',
    fontWeight: 'bold',
  },
});
