import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { useNavigation } from "@/hooks/useNavigation";
import { Apple, Facebook, Google, LogoSvg, Twitter } from "assets/svgs";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function GetStartedScreen() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-white px-6 py-8">
      <LogoSvg />
      <View className="gap-3">
        <Text className="font-700 text-heading3 text-grey-900">
          Let's Get Started!
        </Text>
        <Text className="text-center font-400 text-xl text-grey-700">
          Let's dive in into your account
        </Text>
      </View>

      <View className="w-full gap-5">
        <Button variant="social" rounded LeftIcon={Google}>
          <ButtonText>Continue with Google</ButtonText>
        </Button>

        <Button variant="social" rounded LeftIcon={Apple}>
          <ButtonText>Continue with Apple</ButtonText>
        </Button>

        <Button variant="social" rounded LeftIcon={Facebook}>
          <ButtonText>Continue with Facebook</ButtonText>
        </Button>

        <Button variant="social" rounded LeftIcon={Twitter}>
          <ButtonText>Continue with Twitter</ButtonText>
        </Button>
      </View>

      <View className="w-full gap-5">
        <Button rounded onPress={() => navigate("SignUp")}>
          <ButtonText>Sign up</ButtonText>
        </Button>

        <Button variant="secondary" rounded onPress={() => navigate("Login")}>
          <ButtonText>Log in</ButtonText>
        </Button>
      </View>

      <Text className="font-500 text-md text-grey-700">
        Privacy Policy • Terms of Service
      </Text>
    </SafeAreaView>
  );
}
