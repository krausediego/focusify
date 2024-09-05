import { useCallback } from 'react';
import { Text, View } from 'react-native';

import { Button, OTP, TextButton } from '@/components';
import { useNavigation } from '@/hooks';

const EnterOTPPage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateNewPassword = useCallback(() => {
    navigate('NewPassword');
  }, [navigate]);

  return (
    <View className="flex-1 bg-white px-6 py-2 gap-8">
      <View className="gap-2">
        <Text className="font-bold text-3xl text-gray-900">
          Informe o código recebido
        </Text>
        <Text className="font-regular text-lg text-gray-700">
          Enviamos um código OTP para seu endereço de e-mail registrado.
          Verifique sua caixa de entrada e insira o código aqui.
        </Text>
      </View>
      <OTP length={4} onOTPComplete={handleNavigateNewPassword} />
      <View>
        <Text className="font-regular text-lg text-gray-700 text-center">
          Você pode reenviar o código em{' '}
          <Text className="text-primary-900">56</Text> segundos
        </Text>
        <Button type="text" disabled>
          <TextButton>Reenviar código</TextButton>
        </Button>
      </View>
    </View>
  );
};

export { EnterOTPPage };
