import { View, Text } from 'react-native';

const Terms: React.FC = () => {
  return (
    <View className="flex-row gap-3 mt-auto">
      <Text className="text-gay-700 font-regular text-sm">
        Política de privacidade
      </Text>
      <Text className="text-gay-700 font-regular text-sm">.</Text>
      <Text className="text-gay-700 font-regular text-sm">
        Termos de serviço
      </Text>
    </View>
  );
};

export { Terms };
