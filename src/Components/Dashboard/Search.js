import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const data = {};

class Search extends Component {
  state = {
    card: 0
  };
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image source={require("../../Assets/search.png")} style={[styles.icon, { tintColor: tintColor }]} />
    )
  };
  render() {
    return (
      <View>
        <View style={styles.progressBar} />
        <View style={{ marginTop: 150, marginLeft: 20, marginRight: 20 }}>
          <TouchableOpacity style={styles.logoContainer} disabled={true}>
            <Image source={require("../../Assets/logo.png")} style={styles.logo} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Hello, {this.props.navigation.state.params.name}</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            I'm Svearch. I can help you discover web content to learn from based on your curiosity.
          </Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>For this I would like to know you a bit ...</Text>
          <View style={{ alignSelf: "center", marginTop: 30 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ textAlign: "center" }}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20
  },
  logoContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 5,
    marginBottom: 10
  },
  logo: {
    alignSelf: "center",
    height: 45,
    width: 45
  },
  button: {
    width: 60,
    height: 40,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#DBE3E5",
    justifyContent: "center"
  },
  progressBar: {
    marginTop: 10,
    alignSelf: "center",
    height: 2,
    width: "85%",
    backgroundColor: "grey"
  }
});

export default Search;
