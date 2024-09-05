import { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Checkbox } from '@/components';
import { useNavigation } from '@/hooks';

const RememberMeAndForgotPassword: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const { navigate } = useNavigation();

  const handleNavigateForgotPassword = useCallback(() => {
    navigate('ForgotPassword');
  }, [navigate]);

  return (
    <>
      <View className="w-full justify-between items-center flex-row">
        <View className="flex-row gap-4 items-center">
          <Checkbox checked={checked} onCheckedChange={setChecked} />
          <Text className="font-semibold text-lg text-gray-900">
            Lembrar-me
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleNavigateForgotPassword}>
          <Text className="font-semibold text-lg text-primary-900">
            Esqueceu a senha?
          </Text>
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

export { RememberMeAndForgotPassword };
