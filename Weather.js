import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#D3E3FF", "rgba(255, 255, 255, .13)"]}
        style={styles.container}
      >
        <View style={styles.upper}>
          <Text style={styles.temp}>25도</Text>
          <Text style={styles.icon}>Icon here!</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>비가내려요</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 44,
    backgroundColor: "transparent",
    marginBottom: 24,
    fontFamily: "bmjua"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    marginBottom: 150,
    fontFamily: "bmjua"
  }
});
