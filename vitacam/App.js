import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './screens/SignUp';  // Example: make sure the path to your LoginPage is correct.

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={SignUpPage} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
