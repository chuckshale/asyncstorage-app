import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 2,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 3,
    alignSelf: "stretch",
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#d9534f",
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginTop: 10,
    color: "#000000",
    fontSize: 20,
  },
});

export { styles };
