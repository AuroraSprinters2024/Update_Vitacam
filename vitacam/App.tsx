import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './screens/SignUp';  
import SignInPage from './screens/SignIn';
import Home from './screens/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={SignUpPage} />
        <Stack.Screen name="Login" component={SignInPage} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
