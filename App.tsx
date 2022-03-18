import React from "react";
import { useColorScheme, Platform, Pressable, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AddTransactionScreen from "./screens/AddTransactionScreen";

// import { GlobalProvider } from "./context/GlobalState";
import { store } from "./app/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#121212",
    text: "#FFFFFF",
    primary: "#E75480",
    card: "#373D3F",
  },
};

export default function App() {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={scheme === "dark" ? MyDarkTheme : DefaultTheme}
        >
          <Tab.Navigator
            screenOptions={{ tabBarShowLabel: false, headerShown: false }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName: "home" | "home-outline" = focused
                    ? "home"
                    : "home-outline";

                  return (
                    <Ionicons
                      name={
                        Platform.OS === "ios" ? `ios-${iconName}` : iconName
                      }
                      color={color}
                      size={size}
                    />
                  );
                },
                tabBarButton: (props) => (
                  <Pressable
                    {...props}
                    android_ripple={{
                      radius: 80,
                      color: scheme === "dark" ? "#E75480" : undefined,
                    }}
                  ></Pressable>
                ),
              }}
            />
            <Tab.Screen
              name="AddTransaction"
              component={AddTransactionScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      height: 70,
                      width: 70,
                      borderRadius: 70,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="pluscircle" size={55} color={color} />
                  </View>
                ),
                tabBarButton: (props) => (
                  <Pressable
                    {...props}
                    android_ripple={{
                      radius: 55,
                      color: scheme === "dark" ? "#E75480" : undefined,
                    }}
                  ></Pressable>
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName: "settings" | "settings-outline" = focused
                    ? "settings"
                    : "settings-outline";

                  return (
                    <Ionicons
                      name={
                        Platform.OS === "ios" ? `ios-${iconName}` : iconName
                      }
                      color={color}
                      size={size}
                    />
                  );
                },
                tabBarButton: (props) => (
                  <Pressable
                    {...props}
                    android_ripple={{
                      radius: 80,
                      color: scheme === "dark" ? "#E75480" : undefined,
                    }}
                  ></Pressable>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
