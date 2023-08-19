import {Dimensions, StyleSheet} from "react-native";

export const ImageScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    paddingHorizontal: 16,
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 26,
    paddingTop: 42,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    height: 104,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "DosisRegular",
    color: "#FFFFFF",
    fontSize: 13,
    lineHeight: 22,
    paddingBottom: 0,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "DosisBold",
    lineHeight: 22,
    fontSize: 18,
  },
  image: {
    width: (Dimensions.get("window").width) - 16,
    height: (Dimensions.get("window").height) - 104,
    borderRadius: 8,
  },
});