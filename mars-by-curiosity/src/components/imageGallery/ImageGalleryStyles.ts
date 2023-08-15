import {StyleSheet} from "react-native";

export const ImageGalleryStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // display: "flex",
    // width: "100%",
    // backgroundColor: "red",
  },
  wrapper: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    // width: "100%",
    // height: "100%",
    borderColor: "black",
    borderWidth: 2,
    // padding: 8,
    // flex: 1,
  },
  imageList: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "yellow",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});