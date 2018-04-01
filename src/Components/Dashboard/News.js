import { Text, View, Image, StyleSheet } from "react-native";
import React, { Component } from "react";

class News extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image source={require("../../Assets/home.png")} style={[styles.icon]} />
    )
  };
  render() {
    return (
      <View>
        <Text>News</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20
  }
});


export default News;
