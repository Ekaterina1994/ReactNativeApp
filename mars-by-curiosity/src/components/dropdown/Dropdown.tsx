import {Text, View, TouchableOpacity} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {DropdownStyles} from "./DropdownStyles";
import {useRoverCamera} from "src/context/Context";

const data = [
  {label: "Front Hazard Avoidance Camera", value: "Front Hazard Avoidance Camera"},
  {label: "Rear Hazard Avoidance Camera", value: "Rear Hazard Avoidance Camera"},
  {label: "Mast Camera", value: "Mast Camera"},
  {label: "Chemistry and Camera Complex", value: "Chemistry and Camera Complex"},
  {label: "Mars Hand Lens Imager", value: "Mars Hand Lens Imager"},
  {label: "Mars Descent Imager", value: "Mars Descent Imager"},
  {label: "Navigation Camera", value: "Navigation Camera"},
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
      </TouchableOpacity>
    </View>
  );
};