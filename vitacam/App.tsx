import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './screens/SignUp';  
import SignInPage from './screens/SignIn';
import LandingPage from './screens/Landing';
import HomeTreatmentScreen from './screens/Hometreatments';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={SignUpPage} />
        <Stack.Screen name="Login" component={SignInPage} />
        <Stack.Screen name="landing" component={LandingPage}/>
        <Stack.Screen name= "hometreatment" component={HomeTreatmentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
