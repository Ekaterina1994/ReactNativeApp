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
    padding: 18,
  },
  defaultIcon: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
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
  inputWrapper: {
    position: "relative",
    display: "flex",
  },
  icon: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 18,
    right: 18,
  },
});