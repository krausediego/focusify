import React, { useEffect } from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CustomCircularProgressProps = {
  progress: number;
  progressColor?: string;
};

export function CustomCircularProgress({
  progress,
  progressColor = "#FF6347",
}: CustomCircularProgressProps) {
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, {
      duration: 1000,
      easing: Easing.linear,
    });
  }, [progress]);

  const size = 300;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumference * (1 - animatedProgress.value),
    };
  });

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size}>
        {/* Fundo (cinza) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F5F5F5" // ThemeApp.gray100
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progresso (primário) */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor} // ThemeApp.primary900
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          animatedProps={animatedProps}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
    </View>
  );
}
