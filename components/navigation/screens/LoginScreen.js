import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./Styles";
import AuthContext from "../../../context/Authcontext";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2018/03/21/06/30/people-3245739_960_720.png",
          }}
        />
      </View>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.label}>Username : </Text>
          <TextInput
            style={styles.input}
            placeholder="e.g Chuck"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View>
          <Text style={styles.label}>Password : </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              login(username, password);
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const loginStyles = StyleSheet.create({
  loginContainer: {},
});
