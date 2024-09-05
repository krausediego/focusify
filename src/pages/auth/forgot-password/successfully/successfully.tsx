import { Image, Text, View } from 'react-native';

import { Button, TextButton } from '@/components';

const SuccessfullyPage: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="items-center mt-auto gap-8">
        <Image
          className="w-32 h-32"
          source={require('assets/successfully.png')}
        />
        <View className="gap-3 items-center">
          <Text className="font-bold text-3xl text-gray-900">
            Está tudo pronto!
          </Text>
          <Text className="font-regular text-lg text-gray-700">
            Parabéns! Sua senha foi alterada com sucesso.
          </Text>
        </View>
      </View>
      <View className="h-[118px] mt-auto px-6 pt-6">
        <Button>
          <TextButton>Ir para o APP</TextButton>
        </Button>
      </View>
    </View>
  );
};

export { SuccessfullyPage };
