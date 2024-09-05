import { View } from 'react-native';

import { Input } from '@/components';
import { Mail, Lock } from 'assets/icons';

const FormSignIn: React.FC = () => {
  return (
    <View className="gap-4">
      <Input label="Email" placeholder="Email" icon={<Mail />} />
      <Input label="Senha" placeholder="Senha" icon={<Lock />} isPassword />
    </View>
  );
};

export { FormSignIn };
