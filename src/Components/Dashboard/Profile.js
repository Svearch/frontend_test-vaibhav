import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

class Profile extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => <Image source={require("../../Assets/profile.png")} style={[styles.icon]} />
  };
  render() {
    return (
      <View>
        <Text>Here</Text>
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

export default Profile;
