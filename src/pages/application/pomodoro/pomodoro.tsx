import { Text, TouchableOpacity, View } from "react-native";
import { ArrowDown, BackgroundHome, Play } from "assets/svgs";
import { CustomCircularProgress } from "@/components/ui/circular-progress";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";

export function PomodoroScreen() {
  const { startCountdown, progress, timeFormatted } = useCountdownTimer();

  return (
    <View className="relative flex-1 items-center justify-evenly bg-white px-6">
      <View className="absolute top-0">
        <BackgroundHome />
      </View>

      <TouchableOpacity className="h-[65px] w-full flex-row items-center justify-between rounded-[10px] bg-white px-5">
        <Text className="font-400 text-xl text-grey-500">Select Task</Text>
        <ArrowDown />
      </TouchableOpacity>

      <View className="w-full items-center gap-14">
        <View
          style={{
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 8,
          }}
          className="relative h-[348px] w-[348px] items-center justify-center rounded-full bg-white"
        >
          <CustomCircularProgress progress={progress} />
          <View className="absolute items-center">
            <Text className="font-700 text-[64px] text-grey-900">
              {timeFormatted}
            </Text>
            <Text className="font-400 text-xl text-grey-700">No sessions</Text>
          </View>
        </View>

        <Button
          className="w-[200px] gap-4"
          rounded
          onPress={() => startCountdown(2)}
        >
          <Play />
          <ButtonText>Start to Focus</ButtonText>
        </Button>
      </View>
    </View>
  );
}
