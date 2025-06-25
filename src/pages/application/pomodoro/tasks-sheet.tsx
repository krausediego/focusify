import { TaskCard } from "@/components/task-card";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { Search } from "assets/svgs";
import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";

export function TasksSheet() {
  return (
    <View className="absolute">
      <ActionSheet>
        <View className="max-h-[690px] items-center gap-5 px-6 py-4 pb-9">
          <Text className="font-700 text-heading4 text-grey-900">
            Select Task
          </Text>

          <Divider />

          <Input placeholder="Search task..." IconLeft={Search} />

          <View className="w-full flex-row items-center gap-4">
            <Text className="font-600 text-md text-grey-500">Today Tasks</Text>
            <Divider className="flex-1" />
          </View>

          <ScrollView
            contentContainerClassName="gap-5"
            showsVerticalScrollIndicator={false}
          >
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </ScrollView>
        </View>
      </ActionSheet>
    </View>
  );
}
