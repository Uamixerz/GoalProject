import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import React from "react";
import Icon from "../../Components/icon/Icon.tsx";
import HomeScreen from "../Home/HomeScreen.tsx";
import RegisterScreen from "../Auth/Register/RegisterScreen.tsx";
import UserScreen from "../User/UserScreen.tsx";
import { theme } from "../../Core/theme.ts";

const MainTab = createBottomTabNavigator();

export const MainNavigator = () => {


  return (
    <View style={{backgroundColor:"#ffffff", flex: 1 }}>
      <MainTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#26A17F",
          tabBarShowLabel: true,
          tabBarStyle: {
            shadowOffset: {
              width: 0,
              height: 12
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
            position: "absolute",
            bottom: 0,
            padding: 15,
            width: "100%",
            height: 60,
            zIndex: 0,
            borderTopWidth: 0.3,
            borderTopColor: theme.colors.primary
          },

          headerShown: false
        }}
      >

        <MainTab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {backgroundColor: "#ffffff",borderBottomWidth: 0, borderWidth: 0 },
            headerTitleStyle: { color: "#000000" },
            tabBarIcon: ({ focused }) => (
              <Icon
                type={"home"}
                size={50}
                focused={focused}
                isDark={true}
              />
            ),
            tabBarLabel: "",
          }}
        />
        <MainTab.Screen
          name={"Register"}
          component={RegisterScreen}
          options={{
            title: "Register",
            headerStyle: {backgroundColor: "#ffffff",borderBottomWidth: 0, borderWidth: 0 },
            headerTitleStyle: { color: "#000000" },
            tabBarIcon: ({ focused }) => (
              <Icon
                type={"add"}
                size={50}
                focused={focused}
                isDark={true}
              />
            ),
            tabBarLabel: "",
          }}
        />

        <MainTab.Screen
          name={"User"}
          component={UserScreen}
          options={{
            title: "User",
            headerStyle: {backgroundColor: "#ffffff",borderBottomWidth: 0, borderWidth: 0 },
            headerTitleStyle: { color: "#000000" },
            tabBarIcon: ({ focused }) => (
              <Icon
                type={"user"}
                size={50}
                focused={focused}
                isDark={true}
              />
            ),
            tabBarLabel: "",
          }}
        />

      </MainTab.Navigator>
    </View>

  );
};
