import * as React from "react";
import { View, Text, Alert } from "react-native";
import { OTPInput } from "input-otp-native";
import type { OTPInputRef, SlotProps } from "input-otp-native";
import { cn } from "@/lib/utils";
import { FakeCaret } from "@/components/ui/fake-carret";
import { useNavigation } from "@/hooks/useNavigation";

export function OtpCodeScreen() {
  const ref = React.useRef<OTPInputRef>(null);
  const { navigate } = useNavigation();

  const onComplete = (code: string) => {
    navigate("CreateNewPassword");
    ref.current?.clear();
  };

  function Slot({ char, isActive, hasFakeCaret }: SlotProps) {
    return (
      <View
        className={cn(
          "h-[70px] w-[83.5px] items-center justify-center rounded-lg bg-grey-100",
          isActive && "border-2 border-primary bg-background-orange",
        )}
      >
        {char !== null && (
          <Text className="font-700 text-heading4 text-grey-900">{char}</Text>
        )}
        {hasFakeCaret && <FakeCaret />}
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white px-6 pb-8">
      <View className="mb-8 gap-2">
        <Text className="font-700 text-heading3 text-grey-900">
          Enter OTP Code 🔐
        </Text>
        <Text className="font-400 text-xl text-grey-700">
          We've sent you an OTP code to your registered email address. Please
          check your inbox and enter the code here.
        </Text>
      </View>

      <OTPInput
        ref={ref}
        onComplete={onComplete}
        maxLength={4}
        render={({ slots }) => {
          return (
            <View className="flex-row justify-between">
              {slots.map((slot, index) => {
                return <Slot key={index} {...slot} />;
              })}
            </View>
          );
        }}
      />
    </View>
  );
}
