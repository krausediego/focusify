import { TextInput, View, type TextInputProps } from 'react-native';

import { cn } from '@/lib';
import { tv } from 'tailwind-variants';

type InputProps = TextInputProps & {
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ className, icon, ...props }) => {
  const inputVariants = tv({
    base: 'h-16 w-full text-xl font-regular rounded-lg',
    variants: {},
    defaultVariants: {},
  });

  return (
    <View className="relative flex justify-center">
      <View className="absolute">{icon}</View>
      <TextInput
        placeholderTextColor="#999999"
        {...props}
        className={cn(inputVariants(), { 'pl-8': !!icon }, className)}
      />
    </View>
  );
};

export { Input };
