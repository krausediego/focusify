import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput, View, Text, type TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  IconLeft: React.ElementType;
  label?: string;
};

const Input = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  InputProps
>(({ className, label, IconLeft, onChange, ...props }, ref) => {
  const [hasValue, setHasValue] = React.useState<string | undefined>(undefined);

  return (
    <View className="w-full gap-2">
      {label && <Text className="font-600 text-xl text-grey-900">{label}</Text>}
      <View className="relative justify-center">
        <View className="absolute left-5 z-10">
          <IconLeft width="20" height="21" fill="#212121" />
        </View>
        <TextInput
          ref={ref}
          className={cn(
            "h-[65px] w-full rounded-[10px] bg-grey-100 pl-[52px] font-400 text-xl text-grey-900 placeholder:text-grey-500",
            hasValue && "font-600",
            className,
          )}
          onChangeText={(e) => {
            setHasValue(e);
            onChange;
          }}
          {...props}
        />
      </View>
    </View>
  );
});
Input.displayName = "Input";

export { Input };
