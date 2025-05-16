import { Pressable, View } from "react-native";
import { tv, VariantProps } from "tailwind-variants";
import * as React from "react";
import { ButtonTextClassContext } from "./button-text";
import { cn } from "@/lib/utils";

const buttonVariants = tv({
  base: "w-full relative flex-row justify-center items-center rounded-[14px]",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-background-orange",
      outline: "bg-white",
      social: "bg-white border border-grey-200",
    },
    size: {
      xl: "h-[65px]",
      lg: "h-[58px]",
      sm: "h-[50px]",
      xs: "h-[43px]",
      icon: "w-[65px] h-[65px] rounded-full",
    },
    rounded: {
      true: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "xl",
    rounded: false,
  },
});

const buttonTextVariants = tv({
  base: "font-700",
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-primary",
      outline: "text-primary",
      social: "text-grey-900",
    },
    size: {
      xl: "text-xl",
      lg: "text-lg",
      sm: "text-md",
      xs: "text-sm",
      icon: "",
    },
    rounded: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "xl",
    rounded: true,
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    LeftIcon?: React.ElementType;
  };

const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(
  (
    { className, variant, size, rounded, LeftIcon, children, ...props },
    ref,
  ) => {
    return (
      <ButtonTextClassContext.Provider
        value={buttonTextVariants({ variant, size, rounded })}
      >
        <Pressable
          className={cn(
            buttonVariants({ variant, size, rounded }),
            props.disabled && "bg-buttonDisabled",
            className,
          )}
          ref={ref}
          role="button"
          {...props}
        >
          {LeftIcon && (
            <View className="absolute left-4">
              <LeftIcon />
            </View>
          )}
          {typeof children !== "function" && children}
        </Pressable>
      </ButtonTextClassContext.Provider>
    );
  },
);
Button.displayName = "Button";

export { Button };
