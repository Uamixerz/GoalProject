import { View } from "react-native";
import React from "react";
import { MainStackNavigator } from "./MainStackNavigator";
import { useTheme } from "../contexts/ThemeContext";
import CategoryEditScreen from "../components/category/edit/CategoryEditScreen";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

type RootStackParamList = {
  CategoryEditScreen: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();




const Router = () => {
  const { colors, isDark } = useTheme();
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={MainStackNavigator}
        />
        <Stack.Screen
          name="CategoryEditScreen"
          component={CategoryEditScreen as React.ComponentType}
          options={{ title: 'Edit Category' }}
        />
        {/* Інші екрани вашого додатку */}
      </Stack.Navigator>
    </View>
  );
};
export default Router;
