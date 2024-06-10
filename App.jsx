import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';



const Stack = createNativeStackNavigator();
const App = () => {

  useEffect(() => {
    setupPlayer();
  }, [])

  const setupPlayer = async() => {
    await TrackPlayer.setupPlayer();
  }
  console.log("Track set up Successfully!")


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
