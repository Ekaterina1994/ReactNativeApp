import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SelectionScreen} from "src/screens/selectionScreen/SelectionScreen";
import {CameraScreen} from "src/screens/cameraScreen/CameraScreen";
import {ImageScreen} from "src/screens/imageScreen/ImageScreen";

export type RootStackParamList = {
  SelectionScreen: undefined;
  CameraScreen: undefined;
  ImageScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SelectionScreen"
          component={SelectionScreen}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};