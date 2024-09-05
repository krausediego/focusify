import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { cn } from '@/lib';
import { tv, type VariantProps } from 'tailwind-variants';

import { TextClassContext } from './text';

const buttonVariants = tv({
  base: 'h-14 w-full flex-row items-center justify-center relative rounded-full disabled:bg-primaryDisabled',
  variants: {
    type: {
      primary: 'bg-primary-900',
      primaryLight: 'bg-primaryLight',
      social: 'border border-gray-200',
      text: 'bg-transparent',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

const buttonTextVariants = tv({
  base: 'font-bold text-base',
  variants: {
    type: {
      primary: 'text-white',
      primaryLight: 'text-primary-900',
      social: '',
      text: 'font-semibold text-lg text-primary-900',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof TouchableOpacity> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    { type, activeOpacity = 0.7, disabled = false, className, ...props },
    ref,
  ) => {
    return (
      <TextClassContext.Provider
        value={cn(
          buttonTextVariants({ type }),
          type === 'text' && disabled && 'text-gray-500',
        )}>
        <TouchableOpacity
          {...props}
          ref={ref}
          activeOpacity={activeOpacity}
          disabled={disabled}
          className={cn(buttonVariants({ type }), className)}
        />
      </TextClassContext.Provider>
    );
  },
);

export { Button };
