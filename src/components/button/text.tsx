import * as React from 'react';
import { Text as RNText } from 'react-native';

import * as Slot from '@/components/primitives/slot';
import { SlottableTextProps, TextRef } from '@/components/primitives/types';
import { cn } from '@/lib';

const TextClassContext = React.createContext<string | undefined>(undefined);

const TextButton = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn('text-base text-foreground', textClass, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
TextButton.displayName = 'Text';

export { TextButton, TextClassContext };
