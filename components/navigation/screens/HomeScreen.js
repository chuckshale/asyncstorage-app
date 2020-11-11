import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Home Screen</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={HomeStyles.label}>Press next to proceed</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Other")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const HomeStyles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontSize: 20,
  },
});
