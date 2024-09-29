import { View, Text } from 'react-native';

import { TaskResponse } from '@/contexts';
import { cn } from '@/lib';
import { Flag, PlayRounded, Sun, Timer, Work } from 'assets/icons';

const TaskCard: React.FC<TaskResponse> = ({ task, tags, project }) => {
  return (
    <View className="w-full h-32 flex-row rounded-lg border border-gray-200 overflow-hidden">
      <View
        style={{ backgroundColor: project.color }}
        className="w-1 h-full rounded-tl-lg rounded-bl-lg"
      />
      <View className="w-full flex-row justify-between items-center pl-4 pr-5">
        <View className="w-6 h-6 rounded-full border-2 border-primary-900" />
        <View className="gap-3">
          <Text className="font-semibold text-lg text-gray-900">
            {task.name}
          </Text>
          <View className="flex-row gap-2">
            {tags.map(tag => {
              return (
                <Text
                  key={tag.id}
                  style={{ color: tag.color }}
                  className={cn('font-regular')}>
                  #{tag.name}
                </Text>
              );
            })}
          </View>
          <View className="flex-row items-center gap-5">
            <View className="flex-row items-center gap-2">
              <Timer />
              <Text className="font-regular text-sm text-gray-700">
                {task.estimatedPomodoros}
              </Text>
            </View>
            <Sun />
            <Flag />
            <View className="flex-row items-center gap-2">
              <Work color={project.color} />
              <Text className="font-regular text-sm text-gray-700">
                {project.name}
              </Text>
            </View>
          </View>
        </View>
        <PlayRounded />
      </View>
    </View>
  );
};

export { TaskCard };
