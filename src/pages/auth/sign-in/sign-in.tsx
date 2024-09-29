import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  FormSignIn,
  Header,
  signInSchema,
  RememberMeAndForgotPassword,
  SocialButtonsAndSignIn,
} from './components';

const SignInPage: React.FC = () => {
  const form = useForm({ resolver: zodResolver(signInSchema) });

  return (
    <FormProvider {...form}>
      <View className="flex-1 bg-white px-6 py-2 gap-8">
        <Header />
        <FormSignIn />
        <RememberMeAndForgotPassword />
        <SocialButtonsAndSignIn />
      </View>
    </FormProvider>
  );
};

export { SignInPage };
