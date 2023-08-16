import {Text, View, TouchableOpacity} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {DropdownStyles} from "./DropdownStyles";
import {useRoverCamera} from "src/context/Context";

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
  const {camera, setCamera} = useRoverCamera();

  return (
    <View style={DropdownStyles.container}>
      <Text style={DropdownStyles.label}>
        Rover Camera
      </Text>
      <TouchableOpacity
        style={DropdownStyles.inputWrapper}
      >
        <Dropdown
          style={DropdownStyles.dropdown}
          placeholderStyle={DropdownStyles.placeholderStyles}
          selectedTextStyle={DropdownStyles.selectedTextStyle}
          inputSearchStyle={DropdownStyles.inputSearchStyle}
          iconStyle={DropdownStyles.defaultIcon}
          iconColor="black"
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={camera}
          searchPlaceholder="Search..."
          value={camera}
          onChange={item => {
            setCamera(item.value);
          }}
        />
        {/* <DropdownIcon /> */}
      </TouchableOpacity>
    </View>
  );
};