import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    marginBottom: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    padding: 10,
    width: 200,
    maxWidth: 200,
  },
  inputTitle: {
    textAlign: "left",
    width: 200,
  },
  buttons: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
