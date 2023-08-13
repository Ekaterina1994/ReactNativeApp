import {Text, View, ImageBackground, SafeAreaView} from "react-native";
import {SelectionScreenStyles} from "src/screens/selectionScreen/SelectionScreenStyles";
import {NavigationProp} from "@react-navigation/native";
import {ButtonExplore} from "src/components/button/Button";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CameraScreen = ({navigation}: any) => {
  const loadScene = () => {
    navigation.navigate("Second Screen");
  };

  return (
    <View style={SelectionScreenStyles.container}>
      <Text style={SelectionScreenStyles.title}>
        Select Camera and Date
      </Text>
      <View style={SelectionScreenStyles.container}>
        <Text>
          Hiiiii Camera Screen
        </Text>
      </View>
    </View>
  );
};