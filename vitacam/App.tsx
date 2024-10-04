import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './screens/SignUp';  
import SignInPage from './screens/SignIn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={SignUpPage} />
        <Stack.Screen name="Login" component={SignInPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
