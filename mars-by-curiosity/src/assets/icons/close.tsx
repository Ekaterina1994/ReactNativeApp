import Svg, {Path} from "react-native-svg";

export const CloseIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M18 6L6 18"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M18 18L6 6"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};