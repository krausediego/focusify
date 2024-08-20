import { Text, View } from 'react-native';

import { Input, Label } from '@/components';
import { Mail, Lock } from '@/components/icons';

const SignInPage: React.FC = () => {
  return (
    <View className="flex-1 p-10 justify-center">
      <Text className="font-bold text-4xl text-title">Welcome Back!</Text>
      <Text className="font-regular text-lg text-subTitle">
        Unlock Your Productivity Potential!
      </Text>
      <View className="w-full">
        <Label>Email</Label>
        <Input
          icon={<Mail className="text-title/70 size-5" />}
          placeholder="Email"
        />
      </View>
      <View className="w-full">
        <Label>Password</Label>
        <Input
          icon={<Lock className="text-title/70 size-5" />}
          placeholder="Password"
        />
      </View>
    </View>
  );
};

export { SignInPage };
