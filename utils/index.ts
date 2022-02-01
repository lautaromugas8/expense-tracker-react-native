import { PixelRatio, Dimensions } from "react-native";
import uuid from "react-native-uuid";

function generateID() {
  return uuid.v4().toString();
}

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  colors: {
    yellow: "#ffee00",
  },
  generateID,
};

export default Util;
