import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

class Home extends Component {
  state = {
    name: ""
  };
  static navigationOptions = () => ({
    title: "Svearch",
    headerStyle: { backgroundColor: "#236072" },
    headerTitleStyle: { color: "white", alignSelf: "center" }
  });

  onClick = () => {
    this.props.navigation.navigate("Search", {
      name: this.state.name
    });
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#236072" barStyle="light-content" hidden={false} />
        <View style={{ margin: 20 }}>
          <Text>Enter your Name:</Text>
          <TextInput placeholder={"Your Name"} onChangeText={(text) => this.setState({ name: text })}/>
        </View>
        <TouchableOpacity style={styles.buttonConatiner} onPress={() => this.onClick()}>
          <View style={{ alignContent: "center" }}>
            <Text style={{ textAlign: "center" }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonConatiner: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 40,
    elevation: 10
  }
});

export default Home;
