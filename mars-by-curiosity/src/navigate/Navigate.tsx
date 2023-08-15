import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SelectionScreen} from "src/screens/selectionScreen/SelectionScreen";
import {CameraScreen} from "src/screens/cameraScreen/CameraScreen";
import {ImageScreen} from "src/screens/imageScreen/ImageScreen";
// import {M} from "src/screens/M";

const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Select Camera and Date"
          component={SelectionScreen}
          // options={{headerShown: false}}
          // options={{
          //   title: "Select Camera and Date",
          //   headerStyle: {backgroundColor: "#DCCEBE"},
          //   headerTintColor: "#000",
          //   headerTitleStyle: {fontFamily: "DosisBold", fontSize: 18},
          //   headerTitleAlign: "center",
          //   headerShadowVisible: false,
          // }}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{title: "Camera Screen!!!!"}}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{title: "Image Screen!!!!"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};