import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: true,
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      bmjua: require("./assets/fonts/BMJUA.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded && this.state.fontLoaded ? (
          <Weather style={{ fontFamily: "bmjua", fontSize: 56 }} />
        ) : (
          <View style={styles.loading}>
            <LinearGradient
              style={styles.loadingLinear}
              colors={["rgba(251, 200, 243, 1)", "rgba(255, 243, 243, .13)"]}
            />
            <Text style={styles.loadingText}>날씨 로딩중</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loadingLinear: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1
  },
  loadingText: {
    fontSize: 28,
    marginBottom: 100
  }
});
