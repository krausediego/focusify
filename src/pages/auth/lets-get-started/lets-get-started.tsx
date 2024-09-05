import { View } from 'react-native';

import { Header, SocialButtons, SignUpOrSignIn, Terms } from './components';

const LetsGetStartedPage: React.FC = () => {
  return (
    <View className="flex-1 bg-white p-6 justify-center items-center gap-12">
      <Header />
      <SocialButtons />
      <SignUpOrSignIn />
      <Terms />
    </View>
  );
};

export { LetsGetStartedPage };
