import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="light" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E94B5B",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#E94B5B",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
  },
});
