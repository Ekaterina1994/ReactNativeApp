import {StyleSheet} from "react-native";

export const CameraScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#DCCEBE",
    paddingHorizontal: 16,
  },
  headerWrapper: {
    paddingTop: 42,
    paddingHorizontal: 10,
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // height: 46,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "DosisBold",
    fontSize: 18,
    paddingBottom: 0,
  },
  text: {
    fontFamily: "DosisBold",
    fontSize: 14,
  },
});