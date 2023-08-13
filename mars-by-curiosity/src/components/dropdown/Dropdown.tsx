import {useState} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {DropdownStyles} from "./DropdownStyles";

const data = [
  {label: "Item 1", value: "1"},
  {label: "Item 2", value: "2"},
  {label: "Item 3", value: "3"},
  {label: "Item 4", value: "4"},
  {label: "Item 5", value: "5"},
  {label: "Item 6", value: "6"},
  {label: "Item 7", value: "7"},
  {label: "Item 8", value: "8"},
];

export const DropdownComponent = () => {
  const [value, setValue] = useState("Front Hazard Avoidance Camera");

  return (
    <View style={DropdownStyles.container}>
      <Text style={DropdownStyles.label}>
        Rover Camera
      </Text>
      <Dropdown
        style={DropdownStyles.dropdown}
        placeholderStyle={DropdownStyles.placeholderStyles}
        selectedTextStyle={DropdownStyles.selectedTextStyle}
        inputSearchStyle={DropdownStyles.inputSearchStyle}
        iconStyle={DropdownStyles.iconStyle}
        iconColor="black"
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={value}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   <Image source={require("assets/icons/dropdown.svg")} />
        // )}
      />
    </View>
  );
};