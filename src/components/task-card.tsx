import { Flag, Play, Sun, Timer, Work } from "assets/svgs";
import { Text, View } from "react-native";

export function TaskCard() {
  return (
    <View className="relative h-32 w-full flex-row justify-between overflow-hidden rounded-lg border border-grey-200 p-5">
      <Text className="size-6 rounded-full border-2 border-primary" />

      <View className="justify-between">
        <Text className="font-600 text-xl text-grey-900">
          Design User Experience (UX)
        </Text>
        <View className="flex-row items-center gap-2">
          <Text className="font-400 text-md text-green-500">#Design</Text>
          <Text className="font-400 text-md text-blue-500">#Work</Text>
          <Text className="font-400 text-md text-purple-500">#Productive</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-[10px]">
            <Timer />
            <Text className="font-400 text-sm text-grey-700/60">4</Text>
          </View>

          <Sun />

          <Flag />

          <View className="flex-row items-center gap-[10px]">
            <Work />
            <Text className="font-400 text-sm text-grey-700/60">
              Pomodoro App
            </Text>
          </View>
        </View>
      </View>

      <View className="size-6 items-center justify-center rounded-full bg-primary">
        <Play width={14} height={14} />
      </View>

      <View className="absolute left-0 top-0 h-32 w-2 bg-blue-500" />
    </View>
  );
}
