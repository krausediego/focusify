import { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Popover, PopoverContent, PopoverTrigger } from '@/components';
import { useNavigation } from '@/hooks';
import { createStackNavigator } from '@react-navigation/stack';
import { ThreeDotsVertical, Work } from 'assets/icons';

import { ListTasksPage } from './list';
import { NewProjectPage } from './new-project';
import { ProjectAndTagsPage } from './project-and-tags';

const ManageStack = createStackNavigator();

const ManagePage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateManageProjectsAndTags = useCallback(() => {
    navigate('ManageProjectsAndTags');
  }, [navigate]);

  const handleManageProjectsAndTags = (): JSX.Element => {
    return (
      <Popover className="mr-4">
        <PopoverTrigger asChild>
          <TouchableOpacity activeOpacity={0.7}>
            <ThreeDotsVertical />
          </TouchableOpacity>
        </PopoverTrigger>
        <PopoverContent className="bg-white" align="end">
          <TouchableOpacity
            onPress={handleNavigateManageProjectsAndTags}
            className="flex-row items-center gap-3"
            activeOpacity={0.7}>
            <Work color="#212121" />
            <Text className="font-semibold text-lg text-gray-900">
              Gerenciar Projetos e Tags
            </Text>
          </TouchableOpacity>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <ManageStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: 'black',
          fontFamily: 'Urbanist_700Bold',
          fontSize: 24,
        },
        headerBackTitleVisible: false,
      }}
      initialRouteName="ListTasks">
      <ManageStack.Screen
        name="ListTasks"
        component={ListTasksPage}
        options={{
          title: 'Gerenciar',
          headerRight: handleManageProjectsAndTags,
        }}
      />
      <ManageStack.Screen
        name="NewProject"
        component={NewProjectPage}
        options={{ title: 'Adicionar Novo Projeto' }}
      />
      <ManageStack.Screen
        name="ManageProjectsAndTags"
        component={ProjectAndTagsPage}
        options={{ title: 'Gerenciar Projetos e Tags' }}
      />
    </ManageStack.Navigator>
  );
};

export { ManagePage };
