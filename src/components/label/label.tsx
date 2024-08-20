import { Text } from 'react-native';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <Text className="font-bold text-lg text-title leading-none">
      {children}
    </Text>
  );
};

export { Label };
