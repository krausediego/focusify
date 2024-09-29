import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { TextClassContext } from '@/components/button/text';
import * as PopoverPrimitive from '@/components/primitives/popover';
import { cn } from '@/lib/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    portalHost?: string;
  }
>(
  (
    { className, align = 'center', sideOffset = 12, portalHost, ...props },
    ref,
  ) => {
    return (
      <PopoverPrimitive.Portal hostName={portalHost}>
        <PopoverPrimitive.Overlay
          style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined}>
          <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut}>
            <TextClassContext.Provider value="text-popover-foreground">
              <PopoverPrimitive.Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                className={cn(
                  'z-50 bg-black rounded-lg bg-popover p-6 shadow-sm shadow-black/30',
                  className,
                )}
                {...props}
              />
            </TextClassContext.Provider>
          </Animated.View>
        </PopoverPrimitive.Overlay>
      </PopoverPrimitive.Portal>
    );
  },
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
