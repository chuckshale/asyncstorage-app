import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

const OtherScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Other Screen</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={OtherStyles.label}>Press Back</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherScreen;

const OtherStyles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontSize: 20,
  },
});
