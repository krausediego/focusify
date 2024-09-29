import { useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { getAllProjects, Project } from '@/api';
import { Popover, PopoverContent, PopoverTrigger, Spinner } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { ThreeDotsVertical, Work } from 'assets/icons';

import { LoadingSkeletonProjectAndTags } from './loading-skeleton';

const ProjectContent: React.FC = () => {
  const {
    data: projects,
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: getAllProjects,
    queryKey: ['projects[]'],
  });

  const projectItem = useCallback((item: Project) => {
    return (
      <>
        <View className="flex-row items-center justify-between py-6">
          <View className="flex-row items-center gap-6">
            <Work fillColor color={item.color} />
            <Text className="font-medium text-xl text-gray-900">
              {item.name}
            </Text>
          </View>
          <Popover>
            <PopoverTrigger asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <ThreeDotsVertical />
              </TouchableOpacity>
            </PopoverTrigger>
            <PopoverContent className="bg-white" align="end" />
          </Popover>
        </View>
        <View className="h-px w-full bg-gray-200" />
      </>
    );
  }, []);

  if (isLoading) {
    return <LoadingSkeletonProjectAndTags />;
  }

  return (
    <>
      <FlatList
        className="flex-1"
        data={projects}
        renderItem={({ item }) => projectItem(item)}
      />

      <View className="w-full items-center">
        {isFetching && <Spinner className="w-10 h-10" color="#BDBDBD" />}
      </View>
    </>
  );
};

export { ProjectContent };
