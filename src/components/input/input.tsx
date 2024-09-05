import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Hide, Show } from 'assets/icons';
import { tv, VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: 'h-14 bg-gray-50 rounded-xl placeholder:font-regular text-lg font-semibold leading-tight text-gray-900 pl-14',
});

type InputProps = React.ComponentPropsWithoutRef<typeof BottomSheetTextInput> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    icon: React.ReactNode;
    isPassword?: boolean;
  };

const Input = React.forwardRef<
  React.ElementRef<typeof BottomSheetTextInput>,
  InputProps
>(({ label, icon, isPassword = false, className, ...props }, ref) => {
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
        <BottomSheetTextInput
          ref={ref}
          className={cn(inputVariants(), className)}
          secureTextEntry={isPassword && !isVisible}
          autoCapitalize="none"
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
});

export { Input };
