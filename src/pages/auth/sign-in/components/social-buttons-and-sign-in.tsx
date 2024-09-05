import { View } from 'react-native';

import { Button, TextButton } from '@/components';
import { AppleLogoSvg, FacebookLogoSvg, GoogleLogoSVG } from 'assets/svg';

const SocialButtonsAndSignIn: React.FC = () => {
  return (
    <View className="gap-5">
      <Button type="social">
        <View className="absolute left-4">
          <GoogleLogoSVG />
        </View>
        <TextButton>Continue com o Google</TextButton>
      </Button>
      <Button type="social">
        <View className="absolute left-4">
          <AppleLogoSvg />
        </View>
        <TextButton>Continue com a Apple</TextButton>
      </Button>
      <Button type="social">
        <View className="absolute left-4">
          <FacebookLogoSvg />
        </View>
        <TextButton>Continue com o Facebook</TextButton>
      </Button>
      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
    </View>
  );
};

export { SocialButtonsAndSignIn };
