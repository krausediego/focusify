import * as React from 'react';

import * as CheckboxPrimitive from '@/components/primitives/checkbox';
import { cn } from '@/lib';
import { Check } from 'assets/icons';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'h-6 w-6 shrink-0 rounded border-2 border-primary-900 disabled:opacity-50',
        props.checked && 'bg-primary-900',
        className,
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        className={cn('items-center justify-center h-full w-full')}>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
