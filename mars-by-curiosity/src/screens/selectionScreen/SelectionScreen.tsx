import {Text, View, ImageBackground} from "react-native";
import {SelectionScreenStyles} from "src/screens/selectionScreen/SelectionScreenStyles";
import {NavigationProp} from "@react-navigation/native";
import {ButtonExplore} from "src/components/button/Button";
import {DropdownComponent} from "src/components/dropdown/Dropdown";
import {DatePickerComponent} from "src/components/datePicker/DatePicker";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectionScreen = ({navigation}: any) => {
  const loadScene = () => {
    navigation.navigate("CameraScreen");
  };

  return (
    <ImageBackground
      source={require("assets/images/backgroundRover.jpg")}
      style={SelectionScreenStyles.backgroundImage}
    >
      <View style={SelectionScreenStyles.container}>
        <Text style={SelectionScreenStyles.title}>
          Select Camera and Date
        </Text>
        <View style={SelectionScreenStyles.wrapper}>
          <DropdownComponent />
          <DatePickerComponent />
          <ButtonExplore
            title="Explore"
            onPress={loadScene}
          />
        </View>
      </View>
    </ImageBackground>
  );
};