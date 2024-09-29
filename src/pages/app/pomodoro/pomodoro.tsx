import { Pressable, Text, View } from 'react-native';

import { Button, TextButton } from '@/components';
import { useTasks } from '@/contexts';
import {
  ArrowDown,
  DangerCircle,
  HourGlass,
  MusicNote,
  Play,
} from 'assets/icons';

const PomodoroPage: React.FC = () => {
  const { tasksBottomSheetRef } = useTasks();

  return (
    <View className="flex-1 relative bg-primary-900 items-center justify-between pt-5 pb-6 px-6">
      <Pressable onPress={() => tasksBottomSheetRef.current?.expand()}>
        <View className="w-full flex-row h-16 bg-white rounded-xl items-center justify-between px-5">
          <Text className="font-regular text-gray-500 text-lg">
            Selecionar uma tarefa
          </Text>
          <View>
            <ArrowDown />
          </View>
        </View>
      </Pressable>
      <View className="w-[348px] h-[348px] bg-white rounded-full shadow-pomotime items-center justify-center">
        <View className="w-[300px] h-[300px] bg-white rounded-full border-[20px] border-primary-900 items-center justify-center">
          <Text className="font-bold text-[64px] text-gray-900">00:00</Text>
          <Text className="font-regular text-lg text-gray-700">
            Nenhuma tarefa selecionada
          </Text>
        </View>
      </View>
      <Button disabled className="w-auto px-8 gap-4">
        <Play />
        <TextButton>Iniciar o foco</TextButton>
      </Button>
      <View className="w-full flex-row justify-between items-center">
        <View className="items-center gap-2">
          <DangerCircle />
          <Text className="font-medium text-sm text-gray-700">restrições</Text>
        </View>
        <View className="items-center gap-2">
          <HourGlass />
          <Text className="font-medium text-sm text-gray-700">tempos</Text>
        </View>
        <View className="items-center gap-2">
          <MusicNote />
          <Text className="font-medium text-sm text-gray-700">sons</Text>
        </View>
      </View>
      <View className="h-3/5 w-[800px] rounded-tl-[800px] rounded-tr-[800px] absolute bottom-0 -z-10 bg-white mt-auto" />
    </View>
  );
};

export { PomodoroPage };
