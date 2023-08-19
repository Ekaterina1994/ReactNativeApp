import {Text, View, ImageBackground} from "react-native";
import {SelectionScreenStyles} from "src/screens/selectionScreen/SelectionScreenStyles";
import {ButtonExplore} from "src/components/button/Button";
import {DropdownComponent} from "src/components/dropdown/Dropdown";
import {DatePickerComponent} from "src/components/datePicker/DatePicker";
import type {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "src/navigate/Navigate";

type Props = NativeStackScreenProps<RootStackParamList, "SelectionScreen">;

export const SelectionScreen = ({navigation}: Props) => {
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