import {Dimensions, StyleSheet} from "react-native";

export const CameraScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCCEBE",
    paddingHorizontal: 16,
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 42,
    paddingBottom: 16,
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
    fontFamily: "DosisBold",
    fontSize: 18,
    lineHeight: 22,
  },
  text: {
    fontFamily: "DosisRegular",
    fontSize: 13,
    lineHeight: 22,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    margin: 4,
    width: (Dimensions.get("window").width / 3) - 18,
    height: (Dimensions.get("window").height / 6) - 9,
  },
  image: {
    width: (Dimensions.get("window").width / 3) - 18,
    height: (Dimensions.get("window").height / 6) - 9,
  },
});