import { cn } from "@/lib/utils";
import { View, Text } from "react-native";

type DividerProps = {
  className?: string;
  children?: string;
};

export function Divider({ className, children }: DividerProps) {
  return (
    <View className={cn("flex-row items-center", className)}>
      <View className="h-px flex-1 bg-grey-200" />
      {children && (
        <>
          <Text className="px-4 font-500 text-xl text-grey-700">
            {children}
          </Text>
          <View className="h-px flex-1 bg-grey-200" />
        </>
      )}
    </View>
  );
}
