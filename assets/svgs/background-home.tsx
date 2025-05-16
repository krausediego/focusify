import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path, SvgProps } from "react-native-svg";

export function BackgroundHome({ ...props }: SvgProps) {
  const { height, width } = Dimensions.get("window");

  const insets = useSafeAreaInsets();

  // header + status bar
  const topOffset = insets.top + 56;
  const svgHeight = (height - topOffset) / 2;

  return (
    <Svg
      width={width}
      height={svgHeight}
      viewBox="0 0 430 480"
      preserveAspectRatio="none"
      fill="none"
    >
      <Path
        d="M0 460V0H430V460C364.872 428.25 291.967 410.477 215 410.477C138.033 410.477 65.1282 428.25 0 460Z"
        fill="#FF6347"
      />
    </Svg>
  );
}
