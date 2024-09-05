import { View } from 'react-native';

import {
  FormSignUp,
  HaveAccount,
  Header,
  SocialButtonsAndSignUp,
} from './components';

const SignUpPage: React.FC = () => {
  return (
    <View className="flex-1 bg-white px-6 py-2 gap-8">
      <Header />
      <FormSignUp />
      <HaveAccount />
      <SocialButtonsAndSignUp />
    </View>
  );
};

export { SignUpPage };
