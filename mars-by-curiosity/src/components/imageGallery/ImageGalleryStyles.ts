import {Dimensions, StyleSheet} from "react-native";

export const ImageGalleryStyles = StyleSheet.create({
  container: {paddingTop: 12},
  contentContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageWrapper: {
    padding: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: (Dimensions.get("window").width / 3) - 16,
    height: (Dimensions.get("window").height / 6) - 40,
    // width: 110,
    // height: 110,
  },
});