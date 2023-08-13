import {StyleSheet} from "react-native";

export const SelectionScreenStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 20,
    // height: "100%",
  },
  title: {
    fontFamily: "DosisBold",
    fontSize: 18,
    textAlign: "center",
    padding: 55,
  },
  container: {
    // flex: 1,
    display: "flex",
    // gap: 40,
    // position: "relative",
    // width: "100%",
    height: "100%",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    // flex: 1,
    marginTop: 140,
    gap: 16,
    display: "flex",
    // position: "relative",
    width: "100%",
    // height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTitle: {
    width: "100%",
    textAlign: "left",
    fontSize: 14,
    fontFamily: "DosisBold",

  },
  icon: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    width: 240,
    height: 240,
    backgroundColor: "grey",
    borderWidth: 20,
  },
});