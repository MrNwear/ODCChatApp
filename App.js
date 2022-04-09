import React from "react";
import { SignUpScreenComponent } from "./screens/signup";
import { LoginScreenComponent } from "./screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { ChatScreen } from './screens/chat'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreenComponent} />
        <Stack.Screen name='SignUp' component={SignUpScreenComponent} />
        <Stack.Screen name='Chat' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )



}