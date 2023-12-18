import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import IndexScreen from './screens';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import OnboardingScreen from './screens/onboarding';
import ReportAsEmergencyScreen from './screens/report-as-emergency';
import ReportAsVictimScreen from './screens/report-as-victim';
import RoomVisitedScreen from './screens/room-visited';
import SeleectUserTypeScreen from './screens/select-user-type';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="index" component={IndexScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="report-as-emergency" component={ReportAsEmergencyScreen} />
        <Stack.Screen name="report-as-victim" component={ReportAsVictimScreen} />
        <Stack.Screen name="room-visited" component={RoomVisitedScreen} />
        <Stack.Screen name="select-user-type" component={SeleectUserTypeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;