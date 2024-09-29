import { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components';
import { useNavigation } from '@/hooks';
import { PaperPlus, Plus, Tag, Work } from 'assets/icons';

const FloatingActionButton: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateNewProject = useCallback(() => {
    navigate('NewProject');
  }, [navigate]);

  return (
    <Popover className="absolute right-4 bottom-4">
      <PopoverTrigger asChild>
        <Button type="rounded">
          <Plus color="white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-white gap-4" side="top" align="end">
        <TouchableOpacity
          className="flex-row items-center gap-4"
          activeOpacity={0.7}>
          <PaperPlus color="#212121" />
          <Text className="font-semibold text-lg text-zinc-900">Tarefa</Text>
        </TouchableOpacity>
        <View className="h-px w-full bg-gray-200" />
        <TouchableOpacity
          onPress={handleNavigateNewProject}
          className="flex-row items-center gap-4"
          activeOpacity={0.7}>
          <Work color="#212121" />
          <Text className="font-semibold text-lg text-zinc-900">Projeto</Text>
        </TouchableOpacity>
        <View className="h-px w-full bg-gray-200" />
        <TouchableOpacity
          className="flex-row items-center gap-4"
          activeOpacity={0.7}>
          <Tag color="#212121" />
          <Text className="font-semibold text-lg text-zinc-900">Tag</Text>
        </TouchableOpacity>
      </PopoverContent>
    </Popover>
  );
};

export { FloatingActionButton };
