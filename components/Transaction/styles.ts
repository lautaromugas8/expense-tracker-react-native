import { StyleSheet } from "react-native";
import Util from "../../utils";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    borderBottomWidth: Util.pixel,
    paddingVertical: 2,
  },
  text: {
    fontSize: 18,
  },
  description: {
    color: "gray",
    maxWidth: 200,
  },
  amount: {
    fontSize: 18,
  },
});
