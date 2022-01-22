import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 2,
  },
  dataContainer: {
    marginLeft: 5,
  },
  title: {
    fontStyle: "italic",
    color: "gray",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
  },
});
