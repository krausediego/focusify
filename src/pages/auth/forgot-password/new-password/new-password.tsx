import { useCallback } from 'react';
import { Text, View } from 'react-native';

import { Button, Input, TextButton } from '@/components';
import { useNavigation } from '@/hooks';
import { Mail } from 'assets/icons';

const NewPasswordPage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateSuccessfully = useCallback(() => {
    navigate('Successfully');
  }, [navigate]);

  return (
    <View className="flex-1 bg-white px-6 py-2 gap-8">
      <View className="gap-2">
        <Text className="font-bold text-3xl text-gray-900">
          Proteja sua conta
        </Text>
        <Text className="font-regular text-lg text-gray-700">
          Quase lá! Crie uma nova senha para sua conta Focusify para mantê-la
          segura. Lembre-se de escolher uma senha forte e única.
        </Text>
      </View>
      <View className="gap-4">
        <Input
          label="Nova senha"
          placeholder="Digite sua senha"
          icon={<Mail />}
          isPassword
        />
        <Input
          label="Confirme sua nova senha"
          placeholder="Confirme sua nova senha"
          icon={<Mail />}
          isPassword
        />
      </View>
      <View className="h-[118px] mt-auto px-6 pt-6">
        <Button onPress={handleNavigateSuccessfully}>
          <TextButton>Salvar nova senha</TextButton>
        </Button>
      </View>
    </View>
  );
};

export { NewPasswordPage };
