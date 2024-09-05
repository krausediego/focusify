import { View, Text } from 'react-native';

import { LogoSvg } from 'assets/svg';

const Header: React.FC = () => {
  return (
    <>
      <View className="mt-auto">
        <LogoSvg />
      </View>
      <View className="w-full items-center gap-3">
        <Text className="text-3xl text-textLight font-bold">
          Vamos começar!
        </Text>
        <Text className="text-lg text-gray-700 font-regular">
          Entre ou crie uma conta
        </Text>
      </View>
    </>
  );
};

export { Header };
