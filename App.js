import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./src/Screens/Home";
import Login from "./src/components/Login";
import Listview from "./src/Screens/ListView";

//Route Dependencies
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider >
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ListView" component={Listview} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
