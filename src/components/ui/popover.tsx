import * as React from "react";
import * as PopoverPrimitive from "@rn-primitives/popover";
import { Platform, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { cn } from "@/lib/utils";
import { ButtonTextClassContext } from "./button-text";
import { BlurView } from "expo-blur";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

type PopoverTriggerRef = PopoverPrimitive.TriggerRef;

const PopoverContent = React.forwardRef<
  PopoverPrimitive.ContentRef,
  PopoverPrimitive.ContentProps & { portalHost?: string }
>(
  (
    {
      className,
      align = "end",
      side = "top",
      sideOffset = 4,
      portalHost,
      ...props
    },
    ref,
  ) => {
    return (
      <PopoverPrimitive.Portal hostName={portalHost}>
        <PopoverPrimitive.Overlay style={StyleSheet.absoluteFill}>
          <BlurView
            tint="systemUltraThinMaterialDark"
            style={{
              flex: 1,
              backgroundColor: "#09101D99",
            }}
            className="bg-black/20"
            intensity={Platform.OS === "ios" ? 20 : 14}
            experimentalBlurMethod="dimezisBlurView"
          >
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <ButtonTextClassContext.Provider value="text-grey-900">
                <PopoverPrimitive.Content
                  ref={ref}
                  side={side}
                  align={align}
                  sideOffset={sideOffset}
                  className={cn(
                    "z-50 mr-10 w-[185px] rounded-[8px] bg-white p-4",
                    className,
                  )}
                  {...props}
                />
              </ButtonTextClassContext.Provider>
            </Animated.View>
          </BlurView>
        </PopoverPrimitive.Overlay>
      </PopoverPrimitive.Portal>
    );
  },
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger, PopoverTriggerRef };
