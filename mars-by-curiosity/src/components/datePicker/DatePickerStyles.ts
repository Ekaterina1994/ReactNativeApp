import {StyleSheet} from "react-native";

export const DatePickerStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 18,
    color: "#000000",
  },
  iconStyle: {
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
    fontFamily: "DosisRegular",
    letterSpacing: 0.28,
  },
  placeholderStyles: {
    fontFamily: "DosisRegular",
    fontSize: 18,
    letterSpacing: 0.36,

  },
  selectedTextStyle: {
    fontFamily: "DosisRegular",
    fontSize: 18,
    letterSpacing: 0.36,
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