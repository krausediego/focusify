import { useCallback } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@/hooks';

const HaveAccount: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToSignIn = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <>
      <View className="w-full justify-center flex-row gap-2">
        <Text className="font-regular text-lg text-gray-900">
          Já possui uma conta ?
        </Text>

        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToSignIn}>
          <Text className="font-semibold text-lg text-primary-900">Entrar</Text>
        </TouchableOpacity>
      </View>

      <View className="w-full h-px bg-gray-200 relative items-center justify-center">
        <Text className="font-medium text-lg text-gray-700 absolute bg-white px-4">
          ou
        </Text>
      </View>
    </>
  );
};

export { HaveAccount };
