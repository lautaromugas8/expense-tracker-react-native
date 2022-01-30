import { StyleSheet } from "react-native";
import Util from "../../utils";

export const styles = StyleSheet.create({
  container: {
    borderWidth: Util.pixel,
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
