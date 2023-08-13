import {Text, TouchableOpacity} from "react-native";
import {ButtonStyles} from "src/components/button/ButtonStyles";

export interface ButtonProps {
  title: string,
  onPress: () => void,
}

const ACTIVE_OPACITY_VALUE = 0.8;

export const ButtonExplore = (props: ButtonProps) => {

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY_VALUE}
      style={ButtonStyles.button}
      onPress={props.onPress}
    >
      <Text style={ButtonStyles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};