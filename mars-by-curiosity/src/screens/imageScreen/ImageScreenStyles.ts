import {Dimensions, StyleSheet} from "react-native";

export const ImageScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 16,
  },
  headerWrapper: {
    paddingTop: 42,
    paddingHorizontal: 26,
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 88,
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
    width: (Dimensions.get("window").width) - 32,
    height: (Dimensions.get("window").height),
    borderRadius: 8,
  },
});