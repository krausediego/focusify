import { View, Text } from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="gap-2">
      <Text className="font-bold text-3xl text-gray-900">
        Entre para o Focusify agora!
      </Text>
      <Text className="font-regular text-lg text-gray-700">
        Desbloqueie seu potencial de produtividade
      </Text>
    </View>
  );
};

export { Header };
