import { Text, View } from 'react-native';

import { SocialButton } from '@/components';

const LetsGetStarted: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl text-textLight font-bold">Vamos começar</Text>
      <Text className="text-lg text-gray-700 font-regular">
        Entre ou crie uma conta
      </Text>
      <SocialButton>Continue com o Google</SocialButton>
    </View>
  );
};

export { LetsGetStarted };
