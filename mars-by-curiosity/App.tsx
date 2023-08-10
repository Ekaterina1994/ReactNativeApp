import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, SafeAreaView} from "react-native";
import {globalStyles} from "src/globalStyles";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fonts = () => Font.loadAsync({
  "dosis-light": require("assets/fonts/Dosis-ExtraLight.ttf"),
  "dosis-bold": require("assets/fonts/Dosis-SemiBold.ttf"),
});

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (isFontLoaded) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.title}>
          Hello111222!!!!
        </Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
