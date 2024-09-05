import { View } from 'react-native';

import {
  FormSignIn,
  Header,
  RememberMeAndForgotPassword,
  SocialButtonsAndSignIn,
} from './components';

const SignInPage: React.FC = () => {
  return (
    <View className="flex-1 bg-white px-6 py-2 gap-8">
      <Header />
      <FormSignIn />
      <RememberMeAndForgotPassword />
      <SocialButtonsAndSignIn />
    </View>
  );
};

export { SignInPage };
