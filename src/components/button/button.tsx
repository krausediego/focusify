import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { cn } from '@/lib';
import { tv, type VariantProps } from 'tailwind-variants';

import { Spinner } from '../spinner';
import { TextClassContext } from './text';

const buttonVariants = tv({
  base: 'flex-1 h-14 max-h-14 flex-row items-center justify-center relative rounded-full',
  variants: {
    type: {
      primary: 'bg-primary-900 disabled:bg-primaryDisabled',
      primaryLight: 'bg-primaryLight disabled:bg-gray-200',
      social: 'border border-gray-200',
      text: 'bg-transparent',
      rounded: 'w-14 h-14 bg-primary-900 rounded-full',
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
      rounded: '',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof TouchableOpacity> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    {
      type,
      activeOpacity = 0.7,
      disabled = false,
      isLoading = false,
      children,
      className,
      ...props
    },
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
          disabled={disabled || isLoading}
          className={cn(buttonVariants({ type }), className)}>
          {isLoading ? <Spinner /> : children}
        </TouchableOpacity>
      </TextClassContext.Provider>
    );
  },
);

export { Button };
