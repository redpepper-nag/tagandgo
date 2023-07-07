import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import TagDetailScreen from './Screens/TagDetailScreen';
import WriteNdefScreen from './Screens/WriteNdefScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tag" component={TagDetailScreen} />
        <Stack.Screen name="Write" component={WriteNdefScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;