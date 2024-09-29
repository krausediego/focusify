import { useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { getAllActiveTasks } from '@/api/get-all-active-tasks';
import { Input, TaskCard } from '@/components';
import { useTasks } from '@/contexts';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'assets/icons';

import { SelectTaskBottomSheetHeader } from './header';

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

  const { data } = useQuery({
    queryFn: getAllActiveTasks,
    queryKey: ['tasks[]'],
  });

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
            {data?.map(response => {
              return (
                <TaskCard
                  key={response.task.id}
                  task={response.task}
                  project={response.project}
                  tags={response.tags}
                />
              );
            })}
          </ScrollView>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export { SelectTaskBottomSheet };
