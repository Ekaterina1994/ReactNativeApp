import {useState} from "react";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {Navigate} from "src/navigate/Navigate";
import {RoverCameraContext, DateCameraContext} from "src/context/Context";

export default function App() {
  const [fontsLoaded] = useFonts({
    DosisLight: require("assets/fonts/Dosis-ExtraLight.ttf"),
    DosisRegular: require("assets/fonts/Dosis-Regular.ttf"),
    DosisBold: require("assets/fonts/Dosis-SemiBold.ttf"),
  });

  const [camera, setCamera] = useState("Front Hazard Avoidance Camera");
  const [date, setDate] = useState(new Date());

  if (fontsLoaded) {
    return (
      <RoverCameraContext.Provider value={{camera, setCamera}}>
        <DateCameraContext.Provider value={{date, setDate}}>
          <Navigate />
        </DateCameraContext.Provider>
      </RoverCameraContext.Provider>
    );
  } else {
    return (
      <AppLoading />
    );
  }
}
