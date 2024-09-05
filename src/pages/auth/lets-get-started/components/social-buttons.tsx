import { View } from 'react-native';

import { Button, TextButton } from '@/components';
import {
  AppleLogoSvg,
  FacebookLogoSvg,
  GoogleLogoSVG,
  TwitterLogoSvg,
} from 'assets/svg';

const SocialButtons: React.FC = () => {
  return (
    <View className="w-full gap-5">
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
      <Button type="social">
        <View className="absolute left-4">
          <TwitterLogoSvg />
        </View>
        <TextButton>Continue com o Twitter</TextButton>
      </Button>
    </View>
  );
};

export { SocialButtons };
