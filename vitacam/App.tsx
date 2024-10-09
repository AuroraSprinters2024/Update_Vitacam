
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpPage from "./screens/SignUp";
import SignInPage from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile.js";
import LandingPage from './screens/Landing';
import HomeTreatmentScreen from './screens/Hometreatments';
import PhotoUploadPage from './screens/PhotoUpload';
import PreQuestionsPage from './screens/Prequestions';
import HelpdeskScreen from './screens/Helpdesk'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Register" component={SignUpPage} />
        <Stack.Screen name="Login" component={SignInPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="landing" component={LandingPage}/>
        <Stack.Screen name= "hometreatment" component={HomeTreatmentScreen}/>
        <Stack.Screen name="prequestions" component={PreQuestionsPage}/>
        <Stack.Screen name='photoUpload' component={PhotoUploadPage}/>
        <Stack.Screen name='Helpdesk' component={HelpdeskScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
