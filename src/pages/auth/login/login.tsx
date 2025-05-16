import * as React from "react";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { Checkbox } from "@/components/ui/checkbox";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { Apple, Facebook, Google, Lock, Mail } from "assets/svgs";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@/hooks/useNavigation";

export function LoginScreen() {
  const { navigate } = useNavigation();
  const [checked, setChecked] = React.useState(false);

  return (
    <View className="flex-1 justify-between bg-white px-6 pb-8">
      <View className="gap-2">
        <Text className="font-700 text-heading3 text-grey-900">
          Welcome Back! 👋
        </Text>
        <Text className="font-400 text-xl text-grey-700">
          Let's Get Back to Productivity
        </Text>
      </View>

      <View className="gap-4">
        <Input label="Email" IconLeft={Mail} placeholder="Email" />

        <Input label="Password" IconLeft={Lock} placeholder="Password" />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <Checkbox checked={checked} onCheckedChange={setChecked} />
          <Text className="font-600 text-xl text-grey-900">Remember me</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate("ForgotPassword")}
        >
          <Text className="font-600 text-xl text-primary">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <Divider>or</Divider>

      <View className="gap-5">
        <Button variant="social" rounded LeftIcon={Google}>
          <ButtonText>Continue with Google</ButtonText>
        </Button>

        <Button variant="social" rounded LeftIcon={Apple}>
          <ButtonText>Continue with Apple</ButtonText>
        </Button>

        <Button variant="social" rounded LeftIcon={Facebook}>
          <ButtonText>Continue with Facebook</ButtonText>
        </Button>
      </View>

      <Button rounded onPress={() => navigate("Pomodoro")}>
        <ButtonText>Log in</ButtonText>
      </Button>
    </View>
  );
}
