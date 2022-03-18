import { StyleSheet } from "react-native";
import Util from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 5,
    borderWidth: Util.pixel,
    marginVertical: 5,
  },
  error: {
    color: "red",
    marginBottom: 9,
  },
  button: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 100,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
