import { View, Text } from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="gap-2">
      <Text className="font-bold text-3xl text-gray-900">
        Bem vindo de volta!
      </Text>
      <Text className="font-regular text-lg text-gray-700">
        Vamos voltar à produtividade
      </Text>
    </View>
  );
};

export { Header };
