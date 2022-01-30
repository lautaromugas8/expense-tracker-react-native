import { StyleSheet } from "react-native";
import Util from "../../utils";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Util.colors.yellow,
    paddingTop: 50,
    paddingBottom: 20,
  },
  summaryCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    flexWrap: "wrap",
  },
});
