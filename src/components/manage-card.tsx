import * as React from "react";
import { Text, View } from "react-native";

interface ManageCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}

export function ManageCard({ title, value, color, icon }: ManageCardProps) {
  return (
    <View
      style={{ borderColor: color }}
      className="h-[98px] w-[48%] justify-between rounded-lg border-[1.5px] p-4"
    >
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className="font-500 text-lg text-grey-900">{title}</Text>
      </View>
      <Text className="font-700 text-xl text-grey-900">{value}</Text>
    </View>
  );
}
