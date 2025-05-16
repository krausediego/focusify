import { View, Text } from "react-native";

type DividerProps = {
  children?: string;
};

export function Divider({ children }: DividerProps) {
  return (
    <View className="flex-row items-center">
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
