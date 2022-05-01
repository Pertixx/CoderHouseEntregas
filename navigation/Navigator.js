import { StyleSheet, Text, View } from "react-native";

import AuthStackNavigator from "./AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./StackNavigator";

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
