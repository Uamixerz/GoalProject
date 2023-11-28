/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import ThemeContextProvider, {useTheme} from "./src/context/ThemeContext";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Router from "./src/navigators/Router";

function App(): JSX.Element {
  const { colors, isDark } = useTheme();
  return (

    <>
      <ThemeContextProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
