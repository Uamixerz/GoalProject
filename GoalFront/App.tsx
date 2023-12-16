/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import { Provider as ProviderPaper } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/Auth/Login/LoginScreen.tsx";
import { theme } from "./src/Core/theme.ts";
import RegisterScreen from "./src/screens/Auth/Register/RegisterScreen.tsx";
import { MainNavigator } from "./src/screens/Navigate/MainNavigator.tsx";
import { Provider , useDispatch, useSelector } from "react-redux";
import { store } from "./src/Redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  jwtDecode  from "jwt-decode";
import { AuthActionType, IUser } from "./src/Redux/login/types.ts";
import { SetUserAction } from "./src/Redux/login/AuthAction.ts";


const Stack = createStackNavigator();


const App = () => {
  const isAuth = false;
  // const isAuth = false;

  useEffect(() => {
    loadToken();
  }, []);

  const loadToken = async () => {
    try {
      // Load the JWT token from AsyncStorage
      const storedToken = await AsyncStorage.getItem('jwtToken');
      if (storedToken !== null) {
        console.log('Token loaded successfully:', storedToken);
        SetUserAction(store.dispatch, storedToken);
      }
    } catch (error) {
      console.error('Error loading token:', error);
    }
  };


  return (
    <Provider store={store}>
      <ProviderPaper theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName= {(!isAuth?"LoginScreen":"Menu")}
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Menu" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProviderPaper>
    </Provider>
  );
}


export default App;
