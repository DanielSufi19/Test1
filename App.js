import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Post from './Components/Post';
import { useEffect, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Pages/Homescreen';
import ContentScreen from './Pages/ContentScreen'
import { NavigationContainer } from '@react-navigation/native';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Notifications" component={ContentScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 200,
    width: 366,
    borderwidth: 2,
    borderColor: "#AAAAAA",
    borderRadius: 24,
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  }
});
