import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { Check } from "assets/svgs/check";
import * as React from "react";

const Checkbox = React.forwardRef<
  CheckboxPrimitive.RootRef,
  CheckboxPrimitive.RootProps
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "h-6 w-6 items-center justify-center rounded-md border-[3px] border-primary",
        props.checked && "bg-primary",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
