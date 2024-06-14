import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer';
import useLikeSongs from './src/store/likeStore';
import { darkTheme } from './src/theme/darkTheme';
import { lightTheme } from './src/theme/lightTheme';
import { useThemeStore } from './src/store/themeStore';
import { useColorScheme } from 'react-native';



const Stack = createNativeStackNavigator();

const App = () => {
  //applying default theme from the device
  const scheme = useColorScheme();


  const { isDarkMode, toggleTheme } = useThemeStore();

  const { loadLikedSongs } = useLikeSongs();

  useEffect(() => {
    loadLikedSongs();
    scheme === "light" ? toggleTheme(false) : toggleTheme(true);
  }, [scheme]);

  
  const onLoad = () => {
    console.log("Track player setup..")    
  }

  //track player set up
  useSetupPlayer({ onLoad });


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={ isDarkMode ? darkTheme : lightTheme }>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
