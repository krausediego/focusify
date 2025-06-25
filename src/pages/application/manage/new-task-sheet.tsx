import { Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";

export function NewTaskSheet() {
  return (
    <View className="absolute">
      <ActionSheet>
        <View className="min-h-96 p-6">
          <Text>New Task Sheet</Text>
        </View>
      </ActionSheet>
    </View>
  );
}
