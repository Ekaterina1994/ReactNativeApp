import {StyleSheet} from "react-native";

export const DropdownStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
  },
  dropdown: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    // opacity: 0.5,
    padding: 18,
  },
  iconStyle: {
    width: 24,
    height: 24,
    // stroke: "#000000",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  // container: {flex: 1},
  label: {
    marginBottom: 7,
    fontSize: 14,
    fontFamily: "DosisBold",
  },
  placeholderStyles: {
    fontFamily: "DosisBold",
    fontSize: 18,
  },
  selectedTextStyle: {
    fontFamily: "DosisBold",
    fontSize: 18,
  },
  // dropdownGender: {
  //   marginHorizontal: 10,
  //   width: "50%",
  //   marginBottom: 15,
  // },
});