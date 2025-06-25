import * as React from "react";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button-text";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { useNavigation } from "@/hooks/useNavigation";
import { Apple, Facebook, Google, Lock, Mail } from "assets/svgs";
import { Text, TouchableOpacity, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpService } from "@/services/auth/sign-up-service";

const lignUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignUpFormProps = z.infer<typeof lignUpSchema>;

export function SignUpScreen() {
  const { navigate } = useNavigation();

  const form = useForm<SignUpFormProps>({
    resolver: zodResolver(lignUpSchema),
  });

  const submitForm: SubmitHandler<SignUpFormProps> = async (values) => {
    try {
      await signUpService({ ...values });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1 justify-between bg-white px-6 pb-8">
      <Form {...form}>
        <View className="gap-2">
          <Text className="font-700 text-heading3 text-grey-900">
            Join Focusify Today 👤
          </Text>
          <Text className="font-400 text-xl text-grey-700">
            Unlock Your Productivity Potential!
          </Text>
        </View>

        <View className="gap-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field: { onChange, ...rest } }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    IconLeft={Mail}
                    placeholder="Email"
                    onChangeText={onChange}
                    {...rest}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field: { onChange, ...rest } }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    IconLeft={Lock}
                    placeholder="Password"
                    onChangeText={onChange}
                    {...rest}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </View>

        <View className="flex-row items-center justify-center gap-2">
          <Text className="font-400 text-xl text-grey-900">
            Already have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate("Login")}
          >
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

        <Button onPress={form.handleSubmit(submitForm)} rounded>
          <ButtonText>Sign up</ButtonText>
        </Button>
      </Form>
    </View>
  );
}
