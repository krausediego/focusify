import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { Input } from "@/components/ui/input";
import { Lock } from "assets/svgs";
import * as React from "react";
import { View, Text } from "react-native";

export function CreateNewPasswordScreen() {
  return (
    <View className="flex-1 gap-8 bg-white px-6 pb-8">
      <View className="gap-2">
        <Text className="font-700 text-heading3 text-grey-900">
          Secure Your Account 🔒
        </Text>
        <Text className="font-400 text-xl text-grey-700">
          Almost there! Create a new password for your Focusify account to keep
          it secure. Remember to choose a strong and unique password.
        </Text>
      </View>

      <View className="gap-4">
        <Input
          label="New Password"
          placeholder="New Password"
          IconLeft={Lock}
        />

        <Input
          label="Confirm New Password"
          placeholder="Confirm New Password"
          IconLeft={Lock}
        />
      </View>

      <Button rounded className="mt-auto">
        <ButtonText>Save New Password</ButtonText>
      </Button>
    </View>
  );
}
