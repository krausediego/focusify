import { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@/hooks';
import { Plus } from 'assets/icons';

import { ProjectContent } from './content';

const Projects: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateCreateProject = useCallback(() => {
    navigate('NewProject');
  }, [navigate]);

  return (
    <View>
      <TouchableOpacity
        onPress={handleNavigateCreateProject}
        activeOpacity={0.7}
        className="flex-row items-center gap-6">
        <Plus />
        <Text className="font-medium text-xl text-primary-900">
          Adicionar Projeto
        </Text>
      </TouchableOpacity>
      <View className="h-px w-full bg-gray-200 mt-6" />

      <ProjectContent />
    </View>
  );
};

export { Projects };
