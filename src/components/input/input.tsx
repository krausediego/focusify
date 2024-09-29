import * as React from 'react';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';

import { cn } from '@/lib';
import { Hide, Show } from 'assets/icons';
import { tv, VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: 'h-14 bg-gray-50 rounded-xl placeholder:font-regular text-lg font-semibold leading-tight text-gray-900 pl-14',
});

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    icon: React.ReactNode;
    isPassword?: boolean;
    onChange?: (text: string) => void;
  };

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ label, icon, isPassword = false, onChange, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const handleChangeVisibility = React.useCallback((): void => {
      setIsVisible((prev: boolean) => !prev);
    }, [setIsVisible]);

    return (
      <View className="gap-2">
        {!!label && (
          <Text className="font-semibold text-lg text-gray-900">{label}</Text>
        )}
        <View className="relative justify-center">
          <View className="absolute left-5 z-10">{icon}</View>
          <TextInput
            ref={ref}
            className={cn(inputVariants(), className)}
            secureTextEntry={isPassword && !isVisible}
            autoCapitalize="none"
            onChangeText={onChange}
            {...props}
          />
          {isPassword && (
            <TouchableOpacity
              className="absolute right-5"
              onPress={handleChangeVisibility}
              activeOpacity={0.7}>
              {isVisible ? <Show /> : <Hide />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  },
);

export { Input };
