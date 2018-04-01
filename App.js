/**
 * Svearch App
 * @author Vaibhav Padalia
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import Home from "./src/Components/Home/Home";
import Search from "./src/Components/Dashboard/Search";
import News from "./src/Components/Dashboard/News";
import Profile from "./src/Components/Dashboard/Profile";

const Dashboard = TabNavigator(
  {
    Search: { screen: Search },
    News: { screen: News },
    Profile: { screen: Profile }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: "#236072"
      },
      activeTintColor: "white",
      showIcon: true,
      showLabel: false
    }
  }
);

export default (App = StackNavigator({
  Home: { screen: Home },
  DashboardTab: { screen: Dashboard }
}));
