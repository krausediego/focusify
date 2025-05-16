import * as Slot from "@rn-primitives/slot";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import * as React from "react";
import { Text as RNText } from "react-native";
import { cn } from "@/lib/utils";

const ButtonTextClassContext = React.createContext<string | undefined>(
  undefined,
);

const ButtonText = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(ButtonTextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className, "text-heading3", textClass)}
        ref={ref}
        {...props}
      />
    );
  },
);
ButtonText.displayName = "ButtonText";

export { ButtonText, ButtonTextClassContext };
