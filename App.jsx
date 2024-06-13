import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer';



const Stack = createNativeStackNavigator();
const App = () => {
  const onLoad = () => {
    console.log("Track player setup..")
  }

  //track player set up
  useSetupPlayer({ onLoad });


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
