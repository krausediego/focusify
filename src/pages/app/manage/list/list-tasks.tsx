import { View, Text } from 'react-native';

import { FloatingActionButton } from '../components';

const ListTasksPage: React.FC = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Manage</Text>
      <FloatingActionButton />
    </View>
  );
};

export { ListTasksPage };
