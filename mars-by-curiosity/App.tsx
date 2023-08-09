import {StatusBar} from "expo-status-bar";
import {Text, SafeAreaView} from "react-native";
import {styles} from "./src/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
