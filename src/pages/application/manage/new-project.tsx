import * as React from "react";
import { Input } from "@/components/ui/input";
import { Check, Work } from "assets/svgs";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@/hooks/useNavigation";

const colors = [
  { id: "1", color: "#000000" },
  { id: "2", color: "#F54336" },
  { id: "3", color: "#EA1E61" },
  { id: "4", color: "#9D28AC" },
  { id: "5", color: "#673AB3" },
  { id: "6", color: "#B33A58" },
  { id: "7", color: "#3F51B2" },
  { id: "8", color: "#1A96F0" },
  { id: "9", color: "#00A9F1" },
  { id: "10", color: "#00BCD3" },
  { id: "11", color: "#009689" },
  { id: "12", color: "#4AAF57" },
  { id: "13", color: "#8BC255" },
  { id: "14", color: "#CDDC4C" },
  { id: "15", color: "#FFEB4F" },
  { id: "16", color: "#FFC02D" },
  { id: "17", color: "#FF981F" },
  { id: "18", color: "#FF5726" },
  { id: "19", color: "#7A5548" },
  { id: "20", color: "#607D8A" },
];

export function NewProjectScreen() {
  const [selectedColor, setSelectedColor] = React.useState("");

  const { goBack } = useNavigation();

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 gap-6 bg-white px-6">
      <Input label="Project Name" IconLeft={Work} placeholder="Project Name" />
      <View className="gap-4">
        <Text className="font-600 text-xl text-grey-900">
          Project Color Mark
        </Text>
        <FlatList
          data={colors}
          keyExtractor={(item) => item.id}
          columnWrapperClassName="justify-between"
          contentContainerClassName="gap-6"
          numColumns={5}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{ backgroundColor: item.color }}
                className="h-[52px] w-[52px] items-center justify-center rounded-full"
                onPress={() => setSelectedColor(item.id)}
              >
                {selectedColor === item.id && <Check width={29} height={29} />}
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View className="mt-auto w-full flex-row gap-4">
        <Button className="flex-1" rounded variant="secondary" onPress={goBack}>
          <ButtonText>Cancel</ButtonText>
        </Button>

        <Button className="flex-1" rounded>
          <ButtonText>Add</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
