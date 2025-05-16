import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { Input } from "@/components/ui/input";
import { useNavigation } from "@/hooks/useNavigation";
import { Mail } from "assets/svgs";
import * as React from "react";
import { View, Text } from "react-native";

export function ForgotPasswordScreen() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-white px-6 pb-8">
      <View className="mb-8 gap-2">
        <Text className="font-700 text-heading3 text-grey-900">
          Forgot Your Password?🔑
        </Text>
        <Text className="font-400 text-xl text-grey-700">
          No worries, we'll help you reset it. Please enter the email associated
          with your Focusify account.
        </Text>
      </View>

      <Input
        label="Your Registered Email"
        placeholder="Your Registered Email"
        IconLeft={Mail}
      />

      <Button rounded className="mt-auto" onPress={() => navigate("OtpCode")}>
        <ButtonText>Send OTP Code</ButtonText>
      </Button>
    </View>
  );
}
