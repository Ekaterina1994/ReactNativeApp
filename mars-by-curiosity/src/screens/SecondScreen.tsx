import {Text, View, ImageBackground, TouchableOpacity} from "react-native";
import {globalStyles} from "src/globalStyles";
import {NavigationProp} from "@react-navigation/native";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

export const SecondScreen = ({navigation}: RouterProps) => {
  const loadScene = () => {
    navigation.navigate("Profile");
  };

  return (

    <ImageBackground
      source={require("assets/images/backgroundMars.jpg")}
      style={globalStyles.backgroundImage}
    >
      <TouchableOpacity onPress={loadScene}>
        <View style={globalStyles.textWrapper}>
          <Text style={globalStyles.title}>
            Hello!!!
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>

  );
};