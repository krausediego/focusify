import { useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Input } from '@/components';
import { useTasks } from '@/contexts';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { Flag, PlayRounded, Search, Sun, Timer, Work } from 'assets/icons';

import { SelectTaskBottomSheetHeader } from '.';

const SelectTaskBottomSheet: React.FC = () => {
  const { tasksBottomSheetRef } = useTasks();

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={tasksBottomSheetRef}
      snapPoints={[580]}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ backgroundColor: '#EEEEEE' }}
      enablePanDownToClose
      index={-1}>
      <BottomSheetView className="flex-1">
        <View className="flex-1 bg-white gap-5 my-2 mb-12 px-6">
          <SelectTaskBottomSheetHeader />
          <View className="h-px w-full bg-gray-200" />
          <Input icon={<Search />} placeholder="Buscar tarefa" />
          <View className="w-full flex-row items-center gap-4">
            <Text className="font-semibold text-gray-500">Tarefas de hoje</Text>
            <View className="h-px w-full bg-gray-200" />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}>
            <View className="w-full h-32 flex-row rounded-lg border border-gray-200 overflow-hidden">
              <View className="w-1 h-full bg-green-500 rounded-tl-lg rounded-bl-lg" />
              <View className="w-full flex-row justify-between items-center pl-4 pr-5">
                <View className="w-6 h-6 rounded-full border-2 border-primary-900" />
                <View className="gap-3">
                  <Text className="font-semibold text-lg text-gray-900">
                    Design User Experience (UX)
                  </Text>
                  <View className="flex-row gap-2">
                    <Text className="font-regular text-green-500">#Design</Text>
                    <Text className="font-regular text-blue-500">#Work</Text>
                    <Text className="font-regular text-purple-500">
                      #Productive
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-5">
                    <View className="flex-row items-center gap-2">
                      <Timer />
                      <Text className="font-regular text-sm text-gray-700">
                        4
                      </Text>
                    </View>
                    <Sun />
                    <Flag />
                    <View className="flex-row items-center gap-2">
                      <Work />
                      <Text className="font-regular text-sm text-gray-700">
                        Pomodoro App
                      </Text>
                    </View>
                  </View>
                </View>
                <PlayRounded />
              </View>
            </View>

            <View className="w-full h-32 flex-row rounded-lg border border-gray-200 overflow-hidden">
              <View className="w-1 h-full bg-green-500 rounded-tl-lg rounded-bl-lg" />
              <View className="w-full flex-row justify-between items-center pl-4 pr-5">
                <View className="w-6 h-6 rounded-full border-2 border-primary-900" />
                <View className="gap-3">
                  <Text className="font-semibold text-lg text-gray-900">
                    Design User Experience (UX)
                  </Text>
                  <View className="flex-row gap-2">
                    <Text className="font-regular text-green-500">#Design</Text>
                    <Text className="font-regular text-blue-500">#Work</Text>
                    <Text className="font-regular text-purple-500">
                      #Productive
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-5">
                    <View className="flex-row items-center gap-2">
                      <Timer />
                      <Text className="font-regular text-sm text-gray-700">
                        4
                      </Text>
                    </View>
                    <Sun />
                    <Flag />
                    <View className="flex-row items-center gap-2">
                      <Work />
                      <Text className="font-regular text-sm text-gray-700">
                        Pomodoro App
                      </Text>
                    </View>
                  </View>
                </View>
                <PlayRounded />
              </View>
            </View>

            <View className="w-full h-32 flex-row rounded-lg border border-gray-200 overflow-hidden">
              <View className="w-1 h-full bg-green-500 rounded-tl-lg rounded-bl-lg" />
              <View className="w-full flex-row justify-between items-center pl-4 pr-5">
                <View className="w-6 h-6 rounded-full border-2 border-primary-900" />
                <View className="gap-3">
                  <Text className="font-semibold text-lg text-gray-900">
                    Design User Experience (UX)
                  </Text>
                  <View className="flex-row gap-2">
                    <Text className="font-regular text-green-500">#Design</Text>
                    <Text className="font-regular text-blue-500">#Work</Text>
                    <Text className="font-regular text-purple-500">
                      #Productive
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-5">
                    <View className="flex-row items-center gap-2">
                      <Timer />
                      <Text className="font-regular text-sm text-gray-700">
                        4
                      </Text>
                    </View>
                    <Sun />
                    <Flag />
                    <View className="flex-row items-center gap-2">
                      <Work />
                      <Text className="font-regular text-sm text-gray-700">
                        Pomodoro App
                      </Text>
                    </View>
                  </View>
                </View>
                <PlayRounded />
              </View>
            </View>
          </ScrollView>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export { SelectTaskBottomSheet };
