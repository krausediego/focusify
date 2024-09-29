import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib';

import { Projects } from './components';

const ProjectAndTagsPage: React.FC = () => {
  const [type, setType] = useState<'project' | 'tag'>('project');

  return (
    <View className="flex-1 bg-white py-3 px-6 gap-6">
      <View className="bg-gray-100 flex-row rounded-md">
        <TouchableOpacity
          onPress={() => setType('project')}
          activeOpacity={0.7}
          className={cn(
            'h-11 flex-1 justify-center items-center rounded-md',
            type === 'project' && 'bg-primary-900',
          )}>
          <Text
            className={cn(
              'font-bold text-base',
              type === 'project' ? 'text-white' : 'text-gray-900',
            )}>
            Projetos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('tag')}
          activeOpacity={0.7}
          className={cn(
            'h-11 flex-1 justify-center items-center rounded-md',
            type === 'tag' && 'bg-primary-900',
          )}>
          <Text
            className={cn(
              'font-bold text-base',
              type === 'tag' ? 'text-white' : 'text-gray-900',
            )}>
            Tags
          </Text>
        </TouchableOpacity>
      </View>

      {type === 'project' && <Projects />}
    </View>
  );
};

export { ProjectAndTagsPage };
