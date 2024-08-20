import { Text, TouchableOpacity, View } from 'react-native';

interface SocialButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, icon }) => {
  return (
    <TouchableOpacity className="h-14 border border-gray-200 rounded-full">
      <View>{icon}</View>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export { SocialButton };
