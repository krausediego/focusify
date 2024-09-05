import { View, Text } from 'react-native';

import { Plus } from 'assets/icons';

const SelectTaskBottomSheetHeader: React.FC = () => {
  return (
    <View className="w-full flex-row justify-center items-center">
      <Text className="font-bold ml-auto text-2xl text-gray-900">
        Selecione a tarefa
      </Text>
      <View className="ml-auto">
        <Plus />
      </View>
    </View>
  );
};

export { SelectTaskBottomSheetHeader };
