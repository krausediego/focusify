import * as React from "react";
import { ManageCard } from "@/components/manage-card";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTriggerRef,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigation } from "@/hooks/useNavigation";
import {
  CalendarCheck,
  CalendarDay,
  CheckCircle,
  PaperPlus,
  Plus,
  Search,
  Sun,
  SunHorizon,
  Tag,
  Trash,
  Work,
} from "assets/svgs";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

const ListManageItems = [
  {
    id: "1",
    title: "Today",
    value: "6h 25m (4)",
    color: "#4AAF57",
    icon: <Sun />,
  },
  {
    id: "2",
    title: "Tomorrow",
    value: "6h 40m (4)",
    color: "#1A96F0",
    icon: <SunHorizon />,
  },
  {
    id: "3",
    title: "This Week",
    value: "13h 20m (10)",
    color: "#FF981F",
    icon: <CalendarDay />,
  },
  {
    id: "4",
    title: "Planned",
    value: "20h 50m (18)",
    color: "#9D28AC",
    icon: <CalendarCheck />,
  },
];

const StatusManageItems = [
  {
    id: "1",
    title: "Completed",
    value: "",
    color: "#8BC255",
    icon: <CheckCircle />,
  },
  {
    id: "2",
    title: "Trash",
    value: "",
    color: "#F54336",
    icon: <Trash />,
  },
];

const ListProjectsItems = [
  {
    id: "1",
    title: "Pomodoro App",
    value: "9h 35m (7)",
    color: "#FF5726",
    icon: <Work fill="#FF5726" />,
  },
  {
    id: "2",
    title: "Fashion App",
    value: "8h 20m (6)",
    color: "#8BC255",
    icon: <Work fill="#8BC255" />,
  },
  {
    id: "3",
    title: "AI Chatbot App",
    value: "10h 50m (9)",
    color: "#00BCD3",
    icon: <Work fill="#00BCD3" />,
  },
  {
    id: "4",
    title: "Dating App",
    value: "9h 10m (8)",
    color: "#EA1E61",
    icon: <Work fill="#EA1E61" />,
  },
  {
    id: "5",
    title: "Quiz App",
    value: "12h 5m (11)",
    color: "#3F51B2",
    icon: <Work fill="#3F51B2" />,
  },
  {
    id: "6",
    title: "News App",
    value: "8h 45m (7)",
    color: "#009689",
    icon: <Work fill="#009689" />,
  },
  {
    id: "7",
    title: "Work Project",
    value: "0m (0)",
    color: "#FF981F",
    icon: <Work fill="#FF981F" />,
  },
];

const sections = [
  { type: "manage", data: ListManageItems },
  { type: "status", data: StatusManageItems },
  { type: "projects", data: ListProjectsItems },
];

export function ManageScreen() {
  const { navigate } = useNavigation();

  const popoverRef = React.useRef<PopoverTriggerRef>(null);

  return (
    <View className="relative flex-1 items-center gap-6 bg-white px-6">
      <Input placeholder="Search" IconLeft={Search} />
      <Divider className="w-[80%]" />
      <FlatList
        data={sections}
        contentContainerClassName="gap-4 pb-4"
        keyExtractor={(item, index) => `${item.type}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (item.type === "manage") {
            return (
              <FlatList
                columnWrapperClassName="flex-row gap-4"
                className="gap-4"
                data={item.data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => {
                  return (
                    <ManageCard
                      color={item.color}
                      title={item.title}
                      value={item.value}
                      icon={item.icon}
                    />
                  );
                }}
              />
            );
          }
          if (item.type === "status") {
            return (
              <View className="gap-4">
                <FlatList
                  data={item.data}
                  columnWrapperClassName="gap-4"
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{ borderColor: item.color }}
                        className="h-[58px] w-[48%] flex-row items-center gap-2 rounded-lg border-[1.5px] px-4"
                      >
                        {item.icon}
                        <Text className="font-500 text-lg text-grey-900">
                          {item.title}
                        </Text>
                      </View>
                    );
                  }}
                />
                <View className="w-full flex-row items-center gap-4">
                  <Text className="font-600 text-md text-grey-500">
                    Projects
                  </Text>
                  <Divider className="flex-1" />
                </View>
              </View>
            );
          }

          return (
            <FlatList
              columnWrapperClassName="flex-row gap-4"
              className="gap-4"
              data={item.data}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <ManageCard
                    color={item.color}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                  />
                );
              }}
            />
          );
        }}
      />

      <Popover className="absolute bottom-4 right-6">
        <PopoverTrigger ref={popoverRef} asChild>
          <Button size="floating" rounded>
            <Plus />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="gap-4">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              SheetManager.show("new-task-sheet");
              popoverRef?.current?.close();
            }}
            className="flex-row items-center gap-4"
          >
            <PaperPlus />
            <Text className="font-600 text-xl text-grey-900">Task</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigate("NewProject");
              popoverRef?.current?.close();
            }}
            className="flex-row items-center gap-4"
          >
            <Work width="24" height="25" fill="#212121" />
            <Text className="font-600 text-xl text-grey-900">Project</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigate("NewTag");
              popoverRef?.current?.close();
            }}
            className="flex-row items-center gap-4"
          >
            <Tag />
            <Text className="font-600 text-xl text-grey-900">Tags</Text>
          </TouchableOpacity>
        </PopoverContent>
      </Popover>
    </View>
  );
}
