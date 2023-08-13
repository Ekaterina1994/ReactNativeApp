import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {globalStyles} from "src/globalStyles";
// import {MainScreen} from "src/screens/selectionScreen/SelectionScreen";
import {Navigate} from "src/navigate/Navigate";

export default function App() {
  const [fontsLoaded] = useFonts({
    DosisLight: require("assets/fonts/Dosis-ExtraLight.ttf"),
    DosisBold: require("assets/fonts/Dosis-SemiBold.ttf"),
  });

  if (fontsLoaded) {
    return (
      // <SafeAreaView style={globalStyles.container}>
      <Navigate />
    // {/* <MainScreen /> */}
    // <StatusBar style="auto" />
      // </SafeAreaView>
    );
  } else {
    return (
      <AppLoading />
    );
  }
}
