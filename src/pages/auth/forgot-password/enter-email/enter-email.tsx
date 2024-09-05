import { useCallback } from 'react';
import { Text, View } from 'react-native';

import { Button, Input, TextButton } from '@/components';
import { useNavigation } from '@/hooks';
import { Mail } from 'assets/icons';

const EnterEmailPage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigationEnterOTP = useCallback(() => {
    navigate('EnterOTP');
  }, [navigate]);

  return (
    <View className="flex-1 px-6 py-2 bg-white gap-8">
      <View className="gap-2">
        <Text className="font-bold text-3xl text-gray-900">
          Esqueceu sua senha?
        </Text>
        <Text className="font-regular text-lg text-gray-700">
          Não se preocupe, nós ajudaremos você a redefini-lo. Insira o e-mail
          associado à sua conta Focusify.
        </Text>
      </View>
      <Input
        label="Seu email de registro"
        placeholder="Seu email aqui"
        icon={<Mail />}
      />
      <View className="h-[118px] mt-auto px-6 pt-6">
        <Button onPress={handleNavigationEnterOTP}>
          <TextButton>Enviar código</TextButton>
        </Button>
      </View>
    </View>
  );
};

export { EnterEmailPage };
