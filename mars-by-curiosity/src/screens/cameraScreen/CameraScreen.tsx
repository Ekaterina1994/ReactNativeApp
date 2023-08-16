import {Text, View, ImageBackground} from "react-native";
import {CameraScreenStyles} from "src/screens/cameraScreen/CameraScreenStyles";
import {NavigationProp} from "@react-navigation/native";
import {BackIcon} from "src/assets/icons/back";
import {ImageGallery} from "src/components/imageGallery/ImageGallery";
import {useRoverCamera} from "src/context/Context";
import {useDateCamera} from "src/context/Context";
import {getDate} from "src/utils/getDate";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CameraScreen = ({navigation}: any) => {
  const {camera} = useRoverCamera();
  const {date} = useDateCamera();

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
              {camera}
            </Text>
            <Text style={CameraScreenStyles.text}>
              {`${getDate(date)}`}
            </Text>
          </View>
        </View>
      </View>
      <ImageGallery />
    </View>
  );
};