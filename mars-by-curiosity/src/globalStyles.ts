import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "DosisBold",
    fontSize: 32,
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // alignSelf: "stretch",
    // alignItems: "center",
    // justifyContent: "center",
    // width: "100%",
    // height: "100%",
  },
  touch: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },
});