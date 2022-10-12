import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  logo: {
    width: 110.34,
    height: 32,
    marginTop: 70,
    marginBottom: 43,
  },
  newTask: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#262626",
    color: "#FFF",
    padding: 12,
    marginLeft: 24,
    marginRight: 2,
    fontSize: 16,
  },
  addNewTask: {
    backgroundColor: "#1E6F9F",
    height: 56,
    width: 56,
    borderRadius: 5,
    color: "#FFF",
    marginRight: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    height: 18,
    width: 18,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 42,
  },
});
