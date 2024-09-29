import { View } from 'react-native';

import { Skeleton } from '@/components';

const LoadingSkeletonProjectAndTags: React.FC = () => {
  return (
    <View className="gap-2">
      <View className="h-px w-full bg-gray-200" />
      <Skeleton className="w-full h-12" />
      <View className="h-px w-full bg-gray-200" />
      <Skeleton className="w-full h-12" />
      <View className="h-px w-full bg-gray-200" />
      <Skeleton className="w-full h-12" />
      <View className="h-px w-full bg-gray-200" />
    </View>
  );
};

export { LoadingSkeletonProjectAndTags };
