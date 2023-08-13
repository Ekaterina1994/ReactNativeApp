import {Text, View, ImageBackground, TouchableOpacity} from "react-native";
import {globalStyles} from "src/globalStyles";
import {styles} from "src/screens/styles";
import {NavigationProp} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MainScreen = ({navigation}: any) => {
  const loadScene = () => {
    navigation.navigate("Second Screen");
  };

  return (
    <TouchableOpacity
      style={globalStyles.touch}
      onPress={loadScene}
    >
      <ImageBackground
        source={require("assets/images/backgroundMars.jpg")}
        style={globalStyles.backgroundImage}
      >
        <View>
          <View style={globalStyles.textWrapper}>
            <Text style={styles.titleLight}>
              MARS
            </Text>
            {/* <LinearGradient
              // Button Linear Gradient
              colors={["yellow", "red"]}
              style={styles.gradient}
            > */}
            <Text style={styles.titleBold}>
              by Curiosity

            </Text>
            {/* </LinearGradient> */}
            <LinearGradient
              // start={{x: 0.0, y: 0.0}}
              // end={{x: 0.0, y: 1.0}}
              // locations={[0.0, 1.0]}
              colors={["transparent", "#3A1707"]} //<-- last 2 chars from color control the opacity
              style={styles.gradient}
            />
          </View>

        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
};