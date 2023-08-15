import {Text, View, ImageBackground} from "react-native";
import {CameraScreenStyles} from "src/screens/cameraScreen/CameraScreenStyles";
import {NavigationProp} from "@react-navigation/native";
import {BackIcon} from "src/assets/icons/back";
import {ImageGallery} from "src/components/imageGallery/ImageGallery";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CameraScreen = ({navigation}: any) => {
  const loadScene = () => {
    navigation.navigate("ImageScreen");
  };

  return (
    <View style={CameraScreenStyles.container}>
      <View style={CameraScreenStyles.headerWrapper}>
        <View style={CameraScreenStyles.header}>
          <BackIcon />
          <View style={CameraScreenStyles.titleWrapper}>
            <Text style={CameraScreenStyles.title}>
              Front Hazard Avoidance Camera
            </Text>
            <Text style={CameraScreenStyles.text}>
              12 Oct, 2022
            </Text>
          </View>
        </View>
      </View>
      <ImageGallery />
    </View>
  );
};