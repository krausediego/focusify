import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { useNavigation } from "@/hooks/useNavigation";
import { Apple, Facebook, Google, Lock, Mail } from "assets/svgs";
import { Text, TouchableOpacity, View } from "react-native";

export function SignUpScreen() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 justify-between bg-white px-6 pb-8">
      <View className="gap-2">
        <Text className="font-700 text-heading3 text-grey-900">
          Join Focusify Today 👤
        </Text>
        <Text className="font-400 text-xl text-grey-700">
          Unlock Your Productivity Potential!
        </Text>
      </View>

      <View className="gap-4">
        <Input label="Email" IconLeft={Mail} placeholder="Email" />

        <Input label="Password" IconLeft={Lock} placeholder="Password" />
      </View>

      <View className="flex-row items-center justify-center gap-2">
        <Text className="font-400 text-xl text-grey-900">
          Already have an account?
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigate("Login")}>
          <Text className="font-600 text-xl text-primary">Log in</Text>
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

      <Button disabled rounded>
        <ButtonText>Sign up</ButtonText>
      </Button>
    </View>
  );
}
